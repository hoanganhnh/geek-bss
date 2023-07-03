import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'

import { AppProvider } from '@/contexts/AppProvider'
import AppContainer from '@/containers/AppContainer'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <AppProvider>
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
      </AppProvider>
    </>
  )
}
