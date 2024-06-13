import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface CenterLineProps {
  link: string,
  auth: string
}

const CenterLine = ({ link, auth }: CenterLineProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <AuthSwitch>
    판다마켓이 처음이신가요? <SignUp to={link}>{auth}</SignUp>
    </AuthSwitch>
  )
};

export default CenterLine;

const AuthSwitch = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  font-size: 15px;
  font-weight: 500;
  line-height: 17.9px;
  text-align: left;
`;

const SignUp = styled(Link)`
  color: #3182f6;
`;