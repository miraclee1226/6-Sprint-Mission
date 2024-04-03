"use strict";

import { validateEmail, validatePassword } from "../../../modules/form-validation.js";

const email = document.getElementById('email');
const password = document.getElementById('password');
const signinButton = document.querySelector('.signin_button');

function checkForm () {
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  
  const isFormValid = isEmailValid && isPasswordValid;

  signinButton.disabled = !isFormValid;
};

email.addEventListener('input', checkForm);
password.addEventListener('input', checkForm);