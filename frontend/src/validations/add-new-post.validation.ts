import * as yup from 'yup'

export const validationSchema = yup.object({
  title: yup.string().required('This field is required'),
  content: yup.string().required('This field is required'),
  image: yup.mixed().required('Image is required'),
})
