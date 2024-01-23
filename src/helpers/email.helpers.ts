const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const isValidEmail = (email: string) => emailRegex.test(email);

export const isPasswordLenghtValid = (password: string) => {
  const length = password.length;
  if (length < 3 || length > 20) return false;
  return true;
};
