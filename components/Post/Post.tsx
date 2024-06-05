import Image from "next/image";
import formatDate from "utils/formatData";
import Profile from "public/icon/ic_profile.png";
import * as S from "./PostStyles";
import { Articles } from "types/type";

export default function Post({ articles }: Articles) {
  return (
    <S.PostList>
      {articles?.map((article) => (
        <S.PostItem key={article.id}>
          <S.PostLayout>
            <S.Container>
              <S.ContentContainer>
                <S.Content>{article.title}</S.Content>
                {article.image && (
                  <S.ImageContainer>
                    <Image
                      src={article.image}
                      width={48}
                      height={44}
                      alt={article.title}
                    />
                  </S.ImageContainer>
                )}
              </S.ContentContainer>
              <S.Footer>
                <S.ProfileImage
                  src={Profile}
                  width={24}
                  height={24}
                  alt="프로필 이미지"
                />
                <S.NickName>{article.writer?.nickname}</S.NickName>
                <S.CreatedDate>{formatDate(new Date(article.createdAt))}</S.CreatedDate>
                <S.HeartContainer>
                  <S.HeartIcon width={20} height={17} />
                  <S.HeartNumber>{article.likeCount}</S.HeartNumber>
                </S.HeartContainer>
              </S.Footer>
            </S.Container>
          </S.PostLayout>
        </S.PostItem>
      ))}
    </S.PostList>
  );
}
