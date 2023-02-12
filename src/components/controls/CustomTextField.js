import React from 'react'
import { TextField } from '@mui/material';

export default function CustomTextField(props) {

  const { name, label, type, error = null, defaultValue, value, onChange, child, ...other } = props;

  return (
    <TextField
      variant="outlined"
      fullWidth
      color="primary"
      label={label}
      type={type || 'text'}
      name={name}
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
      {...(error && { error: true, helperText: error })}
      {...other}
    >{child}
    </TextField>
  )
}
