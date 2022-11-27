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
    .matches(/^[a-zA-Z]+$/, "Invalid firstname")
    .required("First name is required"),
  lastName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Invalid lastname")
    .required("Last name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .min(6, "Password should be at least 6 characters")
    .required("Password is required"),
  password2: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Password do not match"),
  phoneNumber: Yup.string()
    .matches(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,8}$/,
      "Enter a valid phone number"
    )
    .required("Phone number is required"),
  streetAddress: Yup.string().required("Street address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  gender: Yup.string().required("Gender is required"),
});

const trainerBody = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  password2: "",
  specialization: "",
  yearsOfExperience: "",
};

const trainerValidate = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Invalid firstname")
    .required("First name is required"),
  lastName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Invalid lastname")
    .required("Last name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .min(6, "Password should be at least 6 characters")
    .required("Password is required"),
  password2: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Password do not match"),
  phoneNumber: Yup.string()
    .matches(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,8}$/,
    "Enter a valid phone number")
    .required("Phone number is required"),
  specialization: Yup.mixed().required("Enter a specialized area"),
  yearsOfExperience: Yup.number()
    .min(1, "Year of experience must be between 1 - 10")
    .max(10, "Enter valid years of experience"),
});

export { clientBody, clientValidate, trainerBody, trainerValidate };
