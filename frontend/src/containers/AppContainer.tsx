import React from 'react'

import AlertContainer from './AlertContainer'

interface AppContainerProps {
  children: React.ReactNode | React.ReactNode[]
}

function AppContainer({ children }: AppContainerProps) {
  return (
    <>
      <AlertContainer>{children}</AlertContainer>
    </>
  )
}

export default AppContainer
