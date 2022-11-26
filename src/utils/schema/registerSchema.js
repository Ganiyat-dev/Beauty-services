import * as Yup from "yup";

const clientBody = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  password2: "",
  phoneNumber: "",
  streetAddress: "",
  city: "",
  state: "",
  gender: "",
};

const clientValidate = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[a-z]+$/)
    .required("First name is required"),
  lastName: Yup.string()
    .matches(/^[a-z]+$/)
    .required("Last name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
  password2: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Password do not match"),
  phoneNumber: Yup.string().required("Phone number is required"),
  streetAddress: Yup.string().required("Street address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  gender: Yup.string().required("Gender is required"),
});

export { clientBody, clientValidate };
