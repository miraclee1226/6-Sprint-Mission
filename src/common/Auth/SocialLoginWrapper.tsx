import { ReactNode } from "react";
import styled from "styled-components";

type SocialLoginWrapperProps = {
  children: ReactNode
}

const SocialLoginWrapper = ({ children }: SocialLoginWrapperProps) => (
  <SocialLogin>
    <SimpleLogin>간편 로그인하기</SimpleLogin>
      {children}
  </SocialLogin>
);

export default SocialLoginWrapper;

const SocialLogin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 640px;
  padding: 16px 23px;
  border-radius: 8px;
  background: #e6f2ff;
  margin-bottom: 24px;
`;

const SimpleLogin = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

