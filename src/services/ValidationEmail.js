export const validateEmail = (values) => {
  let errors = {};
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // Kiểm tra email
  if (!values) {
    errors.email = "Email không được để trống.";
  } else if (!emailPattern.test(values)) {
    errors.email = "Email bạn nhập không hợp lệ!";
  }
  return errors;
};
