import styled from "styled-components";
import { ReactNode } from 'react';

interface RoundButtonProps {
  type: "button" | "submit" | "reset" | undefined,
  children: ReactNode
}

const RoundButton = ({ type, children }: RoundButtonProps) => (
  <>
    <ButtonWrapper type={type}>
      {children}
    </ButtonWrapper>
  </>
);

export default RoundButton;

const ButtonWrapper = styled.button`
  width: 640px;
  height: 56px;
  border-radius: 40px;
  background: #9ca3af;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  margin-bottom: 24px;
`;
