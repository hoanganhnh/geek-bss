import axios, { AxiosError } from 'axios'

export const axiosClient = axios.create({
  responseType: 'json',
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
})

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error)
}
