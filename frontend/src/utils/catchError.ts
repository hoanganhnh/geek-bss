import { AxiosError } from 'axios'

interface Error {
  message: string
}
interface Message {
  message?: string
  error?: Error
}

interface Response {
  data?: Message
}

export type ErrorData = {
  response?: Response
  message: string
}

export type ResponseResult<T = unknown> = {
  success: boolean
  message?: string
  data?: T | null
}

export const catchErrorData = <T = unknown>(error: AxiosError<T>) => {
  return error
}

export const catchError = (error: ErrorData): string | undefined => {
  let errorMsg: string | undefined = ''
  if (error.response) {
    errorMsg = error.response?.data?.message

    if (error.response?.data?.error) {
      errorMsg = error.response.data.error.message
    }
  } else {
    errorMsg = error.message
  }

  return errorMsg
}
