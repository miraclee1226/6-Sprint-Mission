import styled from "styled-components";
import VisibleIcon from "../../assets/ic_visible.svg";

const AuthWrapper = ({ label, ...rest }) => (
  <InputItem>
    <Label htmlFor="password">{label}</Label>
    <InputWrapper>
      <Input {...rest} />
      <PasswordToggleButton type="button">
        <img src={VisibleIcon} alt="비밀번호 숨김 상태 아이콘" />
      </PasswordToggleButton>
    </InputWrapper>
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

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const PasswordToggleButton = styled.button`
  position: absolute;
  right: 16px;
`;