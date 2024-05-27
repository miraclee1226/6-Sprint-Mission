import { useState, useRef, useEffect } from "react";
import uploadIcon from "../../assets/plusIcon.svg";
import * as S from "./Styles/FileInputStyles";

function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState();
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    const nextPreview = URL.createObjectURL(nextValue);
    setPreview(nextPreview);
    onChange(name, nextPreview);
  };

  const handleDelete = (e) => {
    const inputNode = inputRef.current;
    inputNode.value = "";
    setPreview();
    onChange(name, null);
  };

  return (
    <S.Wrapper>
      <S.FileContainer htmlFor="input-file">
        <S.IconContainer>
          <img src={uploadIcon} alt="업로드 아이콘" />
          <S.Text>이미지 등록</S.Text>
        </S.IconContainer>
        <S.Input
          type="file"
          id="input-file"
          onChange={handleChange}
          ref={inputRef}
        />
      </S.FileContainer>
      {preview && (
        <S.ImagePreviewContainer>
          <S.ImagePreview src={preview} alt="이미지 미리보기" />
          <S.DeleteIcon
            onClick={handleDelete}
          />
        </S.ImagePreviewContainer>
      )}
    </S.Wrapper>
  );
}

export default FileInput;
