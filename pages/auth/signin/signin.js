"use strict";

import {
  emailInput,
  emailErrorMsg,
  passwordInput,
  passwordErrorMsg,
  signinButton,
  togglePassword,
} from "../../../modules/form-validation.js";
import { ERROR_MSG, checkRegex, togglePwd } from "../../../modules/form-validation.js";

// 에러 메세지 초기화
emailErrorMsg.innerText = '';
passwordErrorMsg.innerText = '';

// 에러 메세지 반환 검사
const checkValidation = (target, msgTarget) => {
  const isValid = checkRegex(target);
  const targetId = target.id;
  const capitalizedTargetId = targetId.charAt(0).toUpperCase() + targetId.slice(1);

  if (isValid ==='required') {
    // 아무것도 입력되지 않은 경우
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

  if (
    isEmailValid === true && 
    isPasswordValid === true
  ) {
    signinButton.disabled = false;
  } else {
    signinButton.disabled = true;
  }
};

const itemsPage = () => {
  window.location.href = 'items.html';
};

emailInput.addEventListener('focusout', checkFormValidation);
passwordInput.addEventListener('focusout', checkFormValidation);
signinButton.addEventListener('click', itemsPage);
togglePassword.addEventListener('click', () => togglePwd(passwordInput, togglePassword));