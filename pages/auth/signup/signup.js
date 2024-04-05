"use strict";
import {
  emailInput,
  emailErrorMsg,
  passwordInput,
  passwordErrorMsg,
  usernameInput,
  usernameErrorMsg,
  confirmPwdInput,
  confirmPwdErrorMsg,
  togglePassword,
  toggleConfirmPassword,
} from "../../../modules/form-validation.js";
import { ERROR_MSG, checkRegex, togglePwd } from "../../../modules/form-validation.js";

const signupButton = document.querySelector('.signin_button');

// 에러 메세지 초기화
emailErrorMsg.innerText = '';
passwordErrorMsg.innerText = '';
usernameErrorMsg.innerText = '';
confirmPwdErrorMsg.innerText = '';

// 에러 메세지 반환 검사
const checkValidation = (target, msgTarget) => {
  const isValid = checkRegex(target);
  const targetId = target.id;
  const capitalizedTargetId = targetId.charAt(0).toUpperCase() + targetId.slice(1);

  if (isValid ==='required') {
    // 아무것도 입력되지 않은 경우
    target.classList.add('border_red');
    msgTarget.innerText = ERROR_MSG['required' + capitalizedTargetId];
  } else if (target === confirmPwdInput && confirmPwdInput.value !== passwordInput.value) {
    // 비밀번호 확인 유효성 검사
    target.classList.add('border_red');
    msgTarget.innerText = ERROR_MSG['invalidConfirmpwd'];
  } else if (target === usernameInput && target.value === '') {
    // 닉네임 유효성 검사
    target.classList.add('border_red');
    msgTarget.innerText = ERROR_MSG['required' + capitalizedTargetId];
  } else if (isValid === 'invalid' + capitalizedTargetId) {
    // 유효성 검사 불통과
    target.classList.add('border_red');
    msgTarget.innerText = ERROR_MSG['invalid' + capitalizedTargetId];
  } else {
    // 모든 유효성 검사 통과
    target.classList.remove('border_red');
    msgTarget.innerText = '';
  }
  return isValid;
};

// 폼 유효성 검사
const checkFormValidation = () => {
  const isEmailValid = emailInput.value !== '' && checkValidation(emailInput, emailErrorMsg);
  const isPasswordValid = passwordInput.value !== '' && checkValidation(passwordInput, passwordErrorMsg);
  const isUsernameValid = usernameInput.value !== '' && checkValidation(usernameInput, usernameErrorMsg);
  const isConfirmPwdValid = confirmPwdInput.value !== '' && checkValidation(confirmPwdInput, confirmPwdErrorMsg);
 
  if (
    isEmailValid === true && 
    isPasswordValid === true &&
    isUsernameValid === true &&
    isConfirmPwdValid === true
    ) {
    signupButton.disabled = false;
  } else {
    signupButton.disabled = true;
  }
};

const signinPage = () => {
  window.location.href = 'signin.html';
};

emailInput.addEventListener('focusout', checkFormValidation);
passwordInput.addEventListener('focusout', checkFormValidation);
usernameInput.addEventListener('focusout', checkFormValidation);
confirmPwdInput.addEventListener('focusout', checkFormValidation);
signupButton.addEventListener('click', signinPage);
togglePassword.addEventListener('click', () => togglePwd(passwordInput, togglePassword));
toggleConfirmPassword.addEventListener('click', () => togglePwd(confirmPwdInput, toggleConfirmPassword));