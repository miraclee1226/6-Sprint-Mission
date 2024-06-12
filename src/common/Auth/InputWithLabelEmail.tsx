import styled from "styled-components";

const AuthWrapper = ({ label, ...rest }) => (
  <InputItem>
    <Label htmlFor="email">{label}</Label>
    <Input {...rest} />
  </InputItem>
);

export default AuthWrapper;

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
