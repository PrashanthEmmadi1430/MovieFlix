export const validateEmail = (email) => {
  const isEmailValid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
  return isEmailValid ? null : 'Invalid email format';
}

export const validatePassword = (password) => {
  // Minimum eight characters, at least one uppercase letter, one lowercase letter, and one number
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
  return isPasswordValid ? null : 'Password must be at least 8 characters with upper, lower, and number';
}

export const validateUserName = (userName) => {
  // Username must be 3-20 characters long and may include letters, numbers, periods, underscores, and hyphens
  const isUserNameValid = /^[a-zA-Z0-9._-]{3,20}$/.test(userName);
  return isUserNameValid ? null : 'Username must be 3-20 characters, can include letters, numbers, periods, underscores, and hyphens';
}
