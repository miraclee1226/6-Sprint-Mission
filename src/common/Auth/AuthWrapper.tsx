import { Link } from "react-router-dom";
import MainLogo from "../../assets/pandaLogo.svg";
import styled from "styled-components";

const AuthWrapper = ({ children }) => (
  <Positioner>
    <ImageWrapper to="/">
      <img src={MainLogo} alt="메인 로고" width="396" height="132" />
    </ImageWrapper>
    {children}
  </Positioner>
);

export default AuthWrapper;

const Positioner = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ImageWrapper = styled(Link)`
  display: flex;
  justify-content: center;
`;
