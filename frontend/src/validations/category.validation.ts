import * as yup from 'yup'

export const categoryValidation = yup.object({
  category: yup.string().required('This field is required'),
})
