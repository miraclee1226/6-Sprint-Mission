import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/ic_google.svg";
import KakaoIcon from "../../assets/ic_kakao.svg";
import styled from "styled-components";

const SocialLoginLinksWrapper = () => (
  <SocialLoginLinks>
    <Link to="https://www.google.com/">
      <img src={GoogleIcon} alt="구글 로그인" />
    </Link>
    <Link to="https://www.kakaocorp.com/page/">
      <img src={KakaoIcon} alt="카카오톡 로그인" />
    </Link>
  </SocialLoginLinks>
);

export default SocialLoginLinksWrapper;

const SocialLoginLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const SimpleLogin = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;


