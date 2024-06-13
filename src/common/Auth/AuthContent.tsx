import { BaseSyntheticEvent, ReactNode } from "react";

type AuthContentProps = {
  onSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
  children: ReactNode
}

const AuthContent = ({ onSubmit, children }: AuthContentProps) => (
  <>
  <form onSubmit={onSubmit}>
    {children}
  </form>
  </>
);

export default AuthContent;