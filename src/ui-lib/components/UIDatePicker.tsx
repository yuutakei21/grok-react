// @ts-ignore

import React from 'react';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

interface UIDatePickerProps<TDate> extends Omit<DatePickerProps<TDate>, 'onChange' | 'value'> {
  name: string;
  value: TDate | null;
  onChange: (date: TDate | null) => void;
  error?: boolean;
  helperText?: string | boolean | undefined;
}

const UIDatePicker = <TDate,>({
  name,
  value,
  onChange,
  error,
  helperText,
  ...props
}: UIDatePickerProps<TDate>) => {
  return (
    <DatePicker
      value={value}
      onChange={onChange}
      slots={{
        textField: (params) => (
          <TextField
            {...params}
            name={name}
            error={error}
            helperText={helperText}
            fullWidth
            margin="normal"
          />
        ),
      }}
      {...props}
    />
  );
};

export default UIDatePicker;