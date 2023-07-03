import React from 'react'

import AlertView from '@/components/common/Alert'

interface AlertContainerProps {
  children: React.ReactNode | React.ReactNode[]
}

function AlertContainer({ children }: AlertContainerProps) {
  return (
    <>
      {children}
      <AlertView
        autoHideDuration={3000}
        position={{ vertical: 'top', horizontal: 'right' }}
      />
    </>
  )
}

export default AlertContainer
