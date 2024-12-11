export const Validation = (values) => {
  let errors = {};
  // Kiểm tra email với miền @parent.com
  const email__require =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const password__require =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

  if (!values.email) {
    errors.email = "Email không chính xác";
  } else if (!email__require.test(values.email)) {
    errors.email = "Email bạn nhập không hợp lệ !";
  }
  if (!values.password) {
    errors.password = "Mật khẩu không chính xác ";
  } else if (!password__require.test(values.password)) {
    errors.password = "Mật khẩu không hợp lệ !";
  }
  if (values.name === "") {
    errors.name = "Name is not empty !!";
  }
  if (values.email === "") {
    errors.email = "Email is not empty !!";
  }
  if (values.subject === "") {
    errors.subject = "Subject is not empty !!";
  }
  return errors;
};
