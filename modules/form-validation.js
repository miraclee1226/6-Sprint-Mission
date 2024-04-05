"use strict"

const emailInput = document.getElementById('email');
const emailErrorMsg = document.getElementById('email_msg');

const passwordInput = document.getElementById('password');
const passwordErrorMsg = document.getElementById('password_msg');

const usernameInput = document.getElementById('username');
const usernameErrorMsg = document.getElementById('username_msg');

const confirmPwdInput = document.getElementById('confirm_password');
const confirmPwdErrorMsg = document.getElementById('confirm_password_msg');

const signinButton = document.querySelector('.signin_button');
const togglePassword = document.querySelector('.toggle_password');
const toggleConfirmPassword = document.querySelector('.toggle_confirm_password');

export {
  emailInput,
  emailErrorMsg,
  passwordInput,
  passwordErrorMsg,
  usernameInput,
  usernameErrorMsg,
  confirmPwdInput,
  confirmPwdErrorMsg,
  signinButton,
  togglePassword,
  toggleConfirmPassword
};

// 에러 메세지
export const ERROR_MSG = {
  // Email
  requiredEmail: '이메일을 입력해주세요.',
  invalidEmail: '잘못된 이메일 형식입니다.',

  // Password
  requiredPassword: '비밀번호를 입력해주세요.',
  invalidPassword: '비밀번호를 8자 이상 입력해주세요.',

  // Username
  requiredUsername: '닉네임을 입력해주세요.',

  // Confirm Password
  invalidConfirmpwd: '비밀번호가 일치하지 않습니다.',
};

// 유효성 검사
export const checkRegex = (target) => {
  const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}/;
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;

  const { value, id } = target; // 구조분해할당
  if (value.length === 0) {
    return 'required';
  } else {
      switch (id) {
        case 'email':
          return emailRegex.test(value) ? true  : 'invalidEmail';
        case 'password':
          return passwordRegEx.test(value) ? true : 'invalidPassword';
        case 'username':
          return value.length > 0 ? true : 'requiredUsername';
        case 'confirm_password':
          return value === password.value ? true : 'invalidConfirmpwd';
      }
  }
};

// 비밀번호 보기
export const togglePwd = (passwordInput, togglePassword) => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePassword.src = '/images/Icon_visibility_on.svg';
  } else {
    passwordInput.type = 'password';
    togglePassword.src = '/images/Icon_visibility_off.svg';
  };
};