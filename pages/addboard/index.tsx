import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import TitleContainer from "components/TitleContainer";
import { RectangleButton } from "components/Button";
import styled from "styled-components";
import PlusIcon from "public/icon/ic_plus.svg";
import useAxiosFetch from 'hooks/useAxiosFetch';
import { ACCESS_TOKEN } from 'utils/accessToken';

export default function AddBoard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const router = useRouter();
  const { isLoading, error, axiosFetch } = useAxiosFetch();

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("content", content);
    formData.append("title", title);
    if (image) {
      formData.append("image", image);
    }

    const res = await axiosFetch({
      method: 'POST',
      url: "/articles",
      data: formData,
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
        },
      // withCredentials: true,
    });

    const { id } = res?.data;
    router.push(`/addboard/${id}`);
  };

  const isButtonDisabled = !(title && content);

  return (
    <>
      <TitleContainer>
        <Title>게시글 등록하기</Title>
        <RectangleButton type="submit" disabled={isButtonDisabled} onClick={handleSubmit}>등록</RectangleButton>
      </TitleContainer>
      <form id="form" onSubmit={handleSubmit}>
        <Label htmlFor="title">*제목</Label>
        <Input
          id="title"
          type="text"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Label htmlFor="content">*내용</Label>
        <TextArea
          id="content"
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Label htmlFor="imageUpload">이미지</Label>
        <ImageUploadContainer>
          <ImageUpload as="label" htmlFor="imageUpload">
            <AddImageIcon width={48} height={48} alt="이미지 추가" />
            <span>이미지 등록</span>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </ImageUpload>
          {imagePreview && (
            <ImagePreview
              src={imagePreview}
              width={168}
              height={168}
              alt="Preview"
            />
          )}
        </ImageUploadContainer>
      </form>
    </>
  );
}

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 700;
  line-height: 2.3rem;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 700;
  line-height: 1.7rem;
  margin-bottom: 12px;
`;

const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 16px 24px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colorPalette.inputBackgroundColor};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colorPalette.inputPlaceholderColor};
  margin: 12px 0;

  &::placeholder{
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.colorPalette.inputPlaceholderColor};
	}
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 16px 24px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colorPalette.inputBackgroundColor};
  margin: 12px 0;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colorPalette.inputPlaceholderColor};

  &::placeholder{
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.colorPalette.inputPlaceholderColor};
	}
`;

const ImageUploadContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImageUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 168px;
  height: 168px;
  border-radius: 12px;
  margin: 12px 0;
  background: ${({ theme }) => theme.colorPalette.inputBackgroundColor};
  cursor: pointer;
`;

const AddImageIcon = styled(PlusIcon)``;

const ImagePreview = styled(Image)`
  margin-left: 16px;
  border-radius: 12px;
`;
