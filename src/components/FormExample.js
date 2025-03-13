import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Tên phải ít nhất 2 ký tự').required('Tên là bắt buộc'),
  email: Yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
});

function FormExample() {
  const formik = useFormik({
    initialValues: { name: '', email: '' },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('Form submitted:', values);
      resetForm();
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        fullWidth
        margin="normal"
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