import { Helmet } from "react-helmet";
import {
  AuthWrapper,
  AuthContent,
  InputWithLabelEmail,
  InputWithLabelPassWord,
  InputWithLabelNickName,
  SocialLoginWrapper,
  SocialLoginLinksWrapper,
  CenterLine,
} from "../../common/Auth";
import { RoundButton } from "../../common/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignInFormValues } from "../../types/auth";
import { signUp } from "../../api/api";
import useAsync from "../../hooks/useAsync";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<SignInFormValues>();
  const [signUpForm, setSignUpForm] = useAsync(signUp);
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<SignInFormValues> = async (data) => {
    const { accessToken, refreshToken } = await setSignUpForm(data);
    localStorage.setItem("accessToken",  accessToken);
    localStorage.setItem("refreshToken",  refreshToken);
    if(accessToken && refreshToken) {
      navigate('/signin');
    }
  }

  const password = watch("password");

  return (
    <>
      <Helmet>
        <title>회원가입 페이지</title>
      </Helmet>
      <AuthWrapper>
        <AuthContent onSubmit={handleSubmit(onSubmit)}>
          <InputWithLabelEmail
            label="이메일"
            id="email"
            placeholder="이메일을 입력해 주세요"
            register={register}
            errors={errors}
          />
          <InputWithLabelNickName
            label="닉네임"
            id="nickname"
            placeholder="닉네임을 입력해 주세요"
            register={register}
          />
          <InputWithLabelPassWord
            label="비밀번호"
            id="password"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            register={register}
            errors={errors}
          />
          <InputWithLabelPassWord
            label="비밀번호 확인"
            id="passwordConfirmation"
            type="password"
            placeholder="비밀번호를 다시 한 번 입력해주세요"
            register={register}
            password={password}
            errors={errors}
          />
          <RoundButton type="submit">회원가입</RoundButton>
        </AuthContent>
        <SocialLoginWrapper>
          <SocialLoginLinksWrapper />
        </SocialLoginWrapper>
        <CenterLine link="/signin" auth="로그인" />
      </AuthWrapper>
    </>
  );
}

export default SignUpPage;
