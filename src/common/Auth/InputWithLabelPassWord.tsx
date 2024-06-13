import styled from "styled-components";
import VisibleIcon from "../../assets/ic_visible.svg";

const InputWithLabelPassWord = ({ id, label, type, placeholder, register, errors, password }) => {
  const validationRules = id === "passwordConfirm"
    ? {
        validate: (value) =>
          value === password || "비밀번호가 일치하지 않습니다."
      }
    : {
        required: "필수 응답 항목입니다.",
        minLength: {
          value: 8,
          message: "비밀번호는 8글자 이상이어야 합니다.",
        },
        pattern: {
          message: "비밀번호는 8글자 이상이어야 합니다.",
        },
      };

  return (
    <InputItem>
      <Label htmlFor={id}>{label}</Label>
      <InputWrapper>
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(id, validationRules)}
        />
        <PasswordToggleButton type="button">
          <img src={VisibleIcon} alt="비밀번호 숨김 상태 아이콘" />
        </PasswordToggleButton>
      </InputWrapper>
      {errors?.[id] ? (
        <ErrorMessage>{errors[id]?.message}</ErrorMessage>
      ) : null}
    </InputItem>
  );
};

export default InputWithLabelPassWord;

const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  line-height: 21.48px;
  text-align: left;
`;

const Input = styled.input`
  width: 640px;
  height: 56px;
  border-radius: 12px;
  background: #f3f4f6;
  padding-left: 16px;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: var(--placeholder-color);
  }
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const PasswordToggleButton = styled.button`
  position: absolute;
  right: 16px;
`;

const ErrorMessage = styled.span`
  font-size: 15px;
  font-weight: 600;
  line-height: 17.9px;
  color: #f74747;
  margin-left: 16px;
`;
