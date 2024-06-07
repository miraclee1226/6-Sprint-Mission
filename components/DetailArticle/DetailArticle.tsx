import UserInfo from "components/UserInfo";
import HeartContainer from "components/Heart";
import HorizonLine from "components/HorizonLine";
import { ArticleProps } from "types/type";
import * as S from "./DetailArticleStyles";

export default function DetailArticle({ article }: ArticleProps) {
  return (
    <>
      <S.DetailArticleLayout>
        <S.Header>
          <S.Content>
            {article.title}
          </S.Content>
          <S.KebabIcon width={24} height={24} />
        </S.Header>
        <S.Footer>
          <S.UserInfoContainer>
            <UserInfo article={article} />
          </S.UserInfoContainer>
          <S.VerticalLine />
          <HeartContainer article={article} />
        </S.Footer>
        <HorizonLine />
        <S.Paragraph>
          {article.content}
        </S.Paragraph>
      </S.DetailArticleLayout>
    </>
  );
}
