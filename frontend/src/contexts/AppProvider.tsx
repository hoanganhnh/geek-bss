import React from 'react'
import dynamic from 'next/dynamic'
import { SWRConfig } from 'swr'

import { AlertProvider } from '@/components/common/Alert'

const AuthenticateProvider = dynamic(
  () =>
    import('./AuthenticateProvider').then(
      (module) => module.AuthenticateProvider
    ),
  {
    ssr: false,
  }
)

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        shouldRetryOnError: false,
        dedupingInterval: 0,
      }}
    >
      <AuthenticateProvider>
        <AlertProvider>{children}</AlertProvider>
      </AuthenticateProvider>
    </SWRConfig>
  )
}
