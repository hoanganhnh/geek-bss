import * as yup from "yup";

export const validationSignInSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(3, "Password should be of minimum 3 characters length")
    .required("Password is required"),
});
