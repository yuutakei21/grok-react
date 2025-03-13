import TextField from '@mui/material/TextField';
import React from 'react';

interface NumericInputProps {
  value: number | string;
  onChange: (value: number | string) => void;
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  [key: string]: any;
}

const NumericInput: React.FC<NumericInputProps> = ({
  value,
  onChange,
  label = 'Numeric Input',
  min,
  max,
  step = 1,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue === '' || /^\d*$/.test(inputValue)) {
      const numValue: any = inputValue === '' ? '' : Number(inputValue);
      if (
        (min === undefined || numValue >= min) &&
        (max === undefined || numValue <= max)
      ) {
        onChange(numValue);
      }
    }
  };

  return (
    <TextField
      label={label}
      type="text"
      value={value}
      onChange={handleChange}
      inputProps={{ step, min, max }}
      fullWidth
      {...props}
    />
  );
};

export default NumericInput;