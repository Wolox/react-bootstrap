const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

const numericalFourDigitsRegex = /^[0-9]{4}$/;

const numericalTenDigitsRegex = /^[0-9]{10}$/;

const numericalDigitsRegex = /^([0-9]*)$/;

export const required = errorMessage => val => (val ? undefined : errorMessage);

export const minLength = (length, errorMessage) => val =>
  val && val.length >= length ? undefined : errorMessage;

export const maxLength = (length, errorMessage) => val =>
  val && val.length <= length ? undefined : errorMessage;

export const pattern = (patternVal, errorMessage) => val => (patternVal.test(val) ? undefined : errorMessage);

export const email = errorMessage => pattern(emailRegex, errorMessage);

export const numericalFourDigits = errorMessage => pattern(numericalFourDigitsRegex, errorMessage);

export const numericalTenDigits = errorMessage => pattern(numericalTenDigitsRegex, errorMessage);

export const numericalDigits = errorMessage => pattern(numericalDigitsRegex, errorMessage);
