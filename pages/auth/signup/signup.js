"use strict";

const email = document.getElementById('email');
const password = document.getElementById('password');
const username = document.getElementById('username');
const confirmPassword = document.getElementById('confirm_password');
const signupButton = document.querySelector('.signin_button');

function checkForm() {
  const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}/;
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;
  
  const isEmailValid = emailRegex.test(email.value);
  const isPasswordValid = passwordRegEx.test(password.value);
  const isUsernameValid = username.value.length > 0;
  const isConfirmPasswordValid = confirmPassword.value === password.value;

  const isFormValid = isEmailValid && isPasswordValid && isUsernameValid && isConfirmPasswordValid;

  signupButton.disabled = !isFormValid;
  signupButton.classList.toggle('btn_abled', isFormValid);
};

email.addEventListener('input', checkForm);
password.addEventListener('input', checkForm);
username.addEventListener('input', checkForm);
confirmPassword.addEventListener('input', checkForm);
