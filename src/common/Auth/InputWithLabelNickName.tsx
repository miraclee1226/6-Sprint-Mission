import styled from "styled-components";
import { InputWithLabelProps } from "../../types/auth";

const InputWithLabelNickName = ({ id, label, placeholder, register }: InputWithLabelProps) => (
  <InputItem>
    <Label>{label}</Label>
    <Input
      id={id}
      placeholder={placeholder}
      {...register(id, {
        required: "필수 응답 항목입니다.",
      })}
    />
  </InputItem>
);

export default InputWithLabelNickName;

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

const ErrorMessage = styled.span`
  font-size: 15px;
  font-weight: 600;
  line-height: 17.9px;
  color: #f74747;
  margin-left: 16px;
`;
