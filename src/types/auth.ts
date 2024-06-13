import { UseFormRegister, FieldErrors } from "react-hook-form";

export interface SignInFormValues {
  email: string;
  password: string;
  nickname?: string;
  passwordConfirmation?: string;
}

export interface InputWithLabelProps {
  label: string;
  id: keyof SignInFormValues;
  type?: string;
  placeholder: string;
  register: UseFormRegister<SignInFormValues>;
  password?: string;
  errors?: FieldErrors<SignInFormValues>;
}

export interface AuthResponse {
  user: {
    id: number,
    nickname: string,
    image: string | null,
    createdAt: string,
    updatedAt: string,
    email: string
  },
  accessToken: number,
  refreshToken: number
}
