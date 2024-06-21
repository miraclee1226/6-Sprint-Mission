import * as S from "./Styles/TagStyles";

interface TagsProps {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

function Tag ({ tags, setTags }: TagsProps) {

  const handleDelete = (indexToRemove: number) => {
    const filter = tags.filter((_, index) => index !== indexToRemove);
    setTags(filter)
  }
  return(
    <S.Wrapper>
      <S.Ul>
        {tags.map((tag, i) => (
          <S.Li key={i}>
            <S.TagSpan>{tag}</S.TagSpan>
            <S.CloseIconSpanContainer>
              <S.CloseIconSpan onClick={() => handleDelete(i)} />
            </S.CloseIconSpanContainer>
          </S.Li>
        ))}
      </S.Ul>
    </S.Wrapper>
  );
}

export default Tag;