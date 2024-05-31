import { ChildrenProps } from "types/type";
import styled from "styled-components";

export default function Layout({ children }: ChildrenProps) {
  return (
    <BaseLayout>
      {children}
    </BaseLayout>
  );
}

const BaseLayout = styled.div`
  padding: 86px 16px 16px;
  max-width: 375px;
  margin: 0 auto;

  @media ${({ theme }) => theme.windowSize.tablet} {
    padding: 94px 24px 24px;
    max-width: 744px;
  }

  @media ${({ theme }) => theme.windowSize.desktop} {
    padding: 94px 0 24px;
    max-width: 1200px;
  }
`;