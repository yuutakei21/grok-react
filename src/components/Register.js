import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().min(3, 'Tên người dùng phải ít nhất 3 ký tự').required('Tên người dùng là bắt buộc'),
  email: Yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
  password: Yup.string().min(6, 'Mật khẩu phải ít nhất 6 ký tự').required('Mật khẩu là bắt buộc'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Mật khẩu xác nhận không khớp')
    .required('Xác nhận mật khẩu là bắt buộc'),
});

function Register() {
  const formik = useFormik({
    initialValues: { username: '', email: '', password: '', confirmPassword: '' },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('Register submitted:', values);
      resetForm();
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 2, maxWidth: '400px', mx: 'auto' }}>
      <TextField
        label="Username"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
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
      <TextField
        label="Password"
        name="password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Register
      </Button>
      <Button component={Link} to="/" variant="outlined" color="secondary" sx={{ mt: 2, ml: 2 }}>
        Back to Home
      </Button>
    </Box>
  );
}

export default Register;