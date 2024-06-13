import { Helmet } from "react-helmet";
import {
  AuthWrapper,
  AuthContent,
  InputWithLabelEmail,
  InputWithLabelPassWord,
  SocialLoginWrapper,
  SocialLoginLinksWrapper,
  CenterLine
} from "../../common/Auth";
import { RoundButton } from "../../common/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "../../api/api";
import useAsync from "../../hooks/useAsync";
import { useNavigate } from "react-router-dom";
import { SignInFormValues } from "../../types/auth";

function SignInPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormValues>();
  const [ signInForm, setSignInForm ] = useAsync(signIn);
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<SignInFormValues> = async (data) => {
    const { accessToken, refreshToken } = await setSignInForm(data);
    localStorage.setItem("accessToken",  accessToken);
    localStorage.setItem("refreshToken",  refreshToken);
    if(accessToken && refreshToken) {
      navigate('/');
    }
  }
  
  return (
    <>
      <Helmet>
        <title>로그인 페이지</title>
      </Helmet>
      <AuthWrapper >
        <AuthContent onSubmit={handleSubmit(onSubmit)}>
          <InputWithLabelEmail
            label="이메일"
            id="email"
            placeholder="이메일을 입력해 주세요"
            register={register}
            errors={errors}
          />
          <InputWithLabelPassWord
            label="비밀번호"
            id="password"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            register={register}
            errors={errors}
          />
          <RoundButton type="submit">로그인</RoundButton>
        </AuthContent>
        <SocialLoginWrapper>
          <SocialLoginLinksWrapper />
        </SocialLoginWrapper>
        <CenterLine link="/signup" auth="회원가입" />
      </AuthWrapper>
    </>
  );
}

export default SignInPage;
