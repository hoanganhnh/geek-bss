import React from 'react'
import { Theme } from '@emotion/react'
import { SxProps, Typography, Link as LinkMUI } from '@mui/material'

function Copyright({ sx, ...props }: { sx?: SxProps<Theme> }) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={sx}
      {...props}
    >
      {'Copyright © '}
      <LinkMUI color="inherit">hoanganh</LinkMUI> {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default React.memo(Copyright)
