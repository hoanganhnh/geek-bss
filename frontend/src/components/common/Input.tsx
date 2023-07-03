import React from 'react'
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'

export function InputPassword(props: TextFieldProps) {
  const [showPassword, setShowPassword] = React.useState<boolean>(false)
  const toggleShowPassword = React.useCallback(() => {
    setShowPassword((preState) => !preState)
  }, [])
  return (
    <TextField
      {...props}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={toggleShowPassword}
              onMouseDown={toggleShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}
