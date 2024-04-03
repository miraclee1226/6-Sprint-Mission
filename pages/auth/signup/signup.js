"use strict";

import { validateEmail, validatePassword, validateUsername, validateConfirmPassword } from "../../../modules/form-validation.js";

const email = document.getElementById('email');
const password = document.getElementById('password');
const username = document.getElementById('username');
const confirmPassword = document.getElementById('confirm_password');
const signupButton = document.querySelector('.signin_button');

function checkForm() {
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  const isUsernameValid = validateUsername(username);
  const isConfirmPasswordValid = validateConfirmPassword(confirmPassword);

  const isFormValid = isEmailValid && isPasswordValid && isUsernameValid && isConfirmPasswordValid;

  signupButton.disabled = !isFormValid;
};

email.addEventListener('input', checkForm);
password.addEventListener('input', checkForm);
username.addEventListener('input', checkForm);
confirmPassword.addEventListener('input', checkForm);
