import * as yup from "yup";

export const deviceValidation = yup.object({
  name: yup.string().required("This field is required"),
  ip: yup
    .string()
    .required("This field is required")
    .matches(
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
      "Invalid ip"
    ),
});
