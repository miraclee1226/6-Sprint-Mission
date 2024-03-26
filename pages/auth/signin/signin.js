"use strict";

const email = document.getElementById('email');
const password = document.getElementById('password');
const signinButton = document.querySelector('.signin_button');

function checkForm () {
  const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}/;
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;
  
  const isEmailValid = emailRegex.test(email.value);
  const isPasswordValid = passwordRegEx.test(password.value);

  const isFormValid = isEmailValid && isPasswordValid;

  signinButton.disabled = !isFormValid;
  signinButton.classList.toggle('btn_abled', isFormValid);
};

email.addEventListener('input', checkForm);
password.addEventListener('input', checkForm);