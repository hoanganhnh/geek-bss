import React from 'react'
import { Box, Typography } from '@mui/material'

interface ErrorMessageProps {
  message: string
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
      <Typography variant="body1">{message}</Typography>
    </Box>
  )
}

export default ErrorMessage
