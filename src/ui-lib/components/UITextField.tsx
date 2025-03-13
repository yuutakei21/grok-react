import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

interface UITextFieldProps extends Omit<TextFieldProps, 'onChange' | 'value'> {
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  helperText?: string | boolean | undefined;
}

const UITextField: React.FC<UITextFieldProps> = ({
  name,
  value,
  onChange,
  error,
  helperText,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      name={name}
      value={value}
      onChange={handleChange}
      error={error}
      helperText={helperText}
      fullWidth
      margin="normal"
      {...props}
    />
  );
};

export default UITextField;