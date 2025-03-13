// src/ui-lib/components/NumericInput.js
import React from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const NumericInput = ({ value, onChange, label, min, max, step, ...props }) => {
  const handleChange = (event) => {
    const inputValue = event.target.value;
    // Chỉ cho phép số và kiểm tra giới hạn
    if (inputValue === '' || /^\d*$/.test(inputValue)) {
      const numValue = inputValue === '' ? '' : Number(inputValue);
      if (
        (min === undefined || numValue >= min) &&
        (max === undefined || numValue <= max)
      ) {
        onChange(numValue === '' ? '' : numValue);
      }
    }
  };

  return (
    <TextField
      label={label}
      type="text" // Dùng text để dễ kiểm soát input
      value={value}
      onChange={handleChange}
      inputProps={{
        step: step || 1,
        min,
        max,
      }}
      fullWidth
      {...props}
    />
  );
};

NumericInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

NumericInput.defaultProps = {
  label: 'Numeric Input',
};

export default NumericInput;