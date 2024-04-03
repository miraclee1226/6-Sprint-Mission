"use strict"

export function validateEmail(email) {
  const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}/;
  return emailRegex.test(email.value);
}

export function validateUsername(username) {
  return username.value.lenght > 0;
}

export function validatePassword(password) {
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;
  return passwordRegEx.test(password.value);
}

export function validateConfirmPassword(password, confirmPassword) {
  return confirmPassword.value === password.value;
}