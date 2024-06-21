import * as S from "./Styles/CommentsStyles";
import { CommentsProps } from "../../../types";

interface Comments {
  comments: CommentsProps[];
}

function Comments({ comments }: Comments) {
  return (
    <S.CommentUl>
      {comments?.map((comment, i) => (
        <S.CommentLi key={i}>
          <S.Comment>{comment.content}</S.Comment>
          <S.CommentContent>
            <S.CommentImg src={comment.writer.image} alt="댓글 이미지" />
            <div>
              <S.CommentName>{comment.writer.nickname}</S.CommentName>
              <S.CommentDate>{comment.createdAt}</S.CommentDate>
            </div>
            <S.SettingIcon />
          </S.CommentContent>
        </S.CommentLi>
      ))}
    </S.CommentUl>
  );
}

export default Comments;
