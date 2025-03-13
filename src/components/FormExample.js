// src/components/FormExample.js
import React from 'react';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NumericInput } from '../ui-lib'; // Import từ ui-lib

const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Tên phải ít nhất 2 ký tự').required('Tên là bắt buộc'),
  age: Yup.number().min(18, 'Tuổi phải từ 18 trở lên').required('Tuổi là bắt buộc'),
});

function FormExample() {
  const formik = useFormik({
    initialValues: { name: '', age: '' },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('Form submitted:', values);
      resetForm();
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
      <NumericInput
        label="Age"
        name="age"
        value={formik.values.age}
        onChange={(value) => formik.setFieldValue('age', value)}
        onBlur={() => formik.setFieldTouched('age', true)}
        error={formik.touched.age && Boolean(formik.errors.age)}
        helperText={formik.touched.age && formik.errors.age}
        min={0}
        max={150}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit
      </Button>
      <Button component={Link} to="/" variant="outlined" color="secondary" sx={{ mt: 2, ml: 2 }}>
        Back to Home
      </Button>
    </Box>
  );
}

export default FormExample;