export const isValidateEmail = (values) => {
  if (!values) {
    return false
  } else if (!/\S+@\S+\.\S+/.test(values)) {
    return false
  }
  return true;
};
