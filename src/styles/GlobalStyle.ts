import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #3692ff;
    --nav-text-color: #4B5563;
    --main-text-color: #1F2937;
    --placeholder-color: #9CA3AF;
    --input-background-color: #F3F4F6;
    --bottom-line: #E5E7EB;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Pretendard-Regular';
  }

  body {
    font-family: 'Pretendard-Regular';
  }

  button {
    border: none;
    cursor: pointer;
    outline: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  input, textarea {
    border: none;
  }

  textarea:focus,
  input:focus {
    outline: none;
  }

  textarea {
    resize: none;
  }

  h1 {
    font-size: 25.63px;
    font-weight: 700;
    line-height: 34.6px;
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
    line-height: 28.64px;
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
    line-height: 22.4px;
  }

  h4 {
    font-size: 14px;
    font-weight: 500;
    line-height: 16.71px;
  }

  h5 {
    font-size: 12px;
    font-weight: 400;
    line-height: 14.32px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 22.4px;
  }

  span {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  }
  
`;

export default GlobalStyle;
