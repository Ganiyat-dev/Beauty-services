import * as Yup from "yup";

const bookingBody = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  streetAddress: "",
  city: "",
  state: "",
  gender: "",
  startDate: "",
};

const bookingValidate = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Invalid firstname")
    .required("First name is required"),
  lastName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Invalid lastname")
    .required("Last name is required"),
  email: Yup.string().email().required("Email is required"),
  streetAddress: Yup.string().required("Street address is required"),
  phoneNumber: Yup.string()
    .matches(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,8}$/,
      "Enter a valid phone number"
    )
    .required("Phone number is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  gender: Yup.string().required("Gender is required"),
  startDate: Yup.date().required("Booking date is required"),
});
export { bookingBody, bookingValidate };
