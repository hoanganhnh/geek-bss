import { setCookie, destroyCookie } from 'nookies'

import { axiosClient } from '@/libs/axios-client'
import { ACCESS_TOKEN } from '@/constants'
import { signout } from '@/services/auth.service'

export const setAuthToken = (token: string) => {
  axiosClient.defaults.headers.common['Authorization'] = ''
  delete axiosClient.defaults.headers.common['Authorization']

  if (token) {
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
}

export const deleteAuthToken = () => {
  axiosClient.defaults.headers.common['Authorization'] = ''
  delete axiosClient.defaults.headers.common['Authorization']
}

export const autoLogin = (token: string) => {
  setCookie({}, ACCESS_TOKEN, token, {})
  setAuthToken(token)
}

export const autoLogout = async () => {
  destroyCookie({}, ACCESS_TOKEN)
  deleteAuthToken()
  await signout()
}
