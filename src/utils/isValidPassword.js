export const isValidPassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  return regex.test(password);
};
