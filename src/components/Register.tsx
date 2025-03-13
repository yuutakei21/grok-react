import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UITextField, UIDatePicker } from '../ui-lib';

interface RegisterValues {
  firstName: string;
  lastName: string;
  birthday: Date | null;
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, 'Họ phải ít nhất 2 ký tự')
    .required('Họ là bắt buộc'),
  lastName: Yup.string()
    .min(2, 'Tên phải ít nhất 2 ký tự')
    .required('Tên là bắt buộc'),
  birthday: Yup.date()
    .nullable()
    .max(new Date(), 'Ngày sinh không được trong tương lai')
    .required('Ngày sinh là bắt buộc'),
  email: Yup.string()
    .email('Email không hợp lệ')
    .required('Email là bắt buộc'),
  password: Yup.string()
    .min(6, 'Mật khẩu phải ít nhất 6 ký tự')
    .required('Mật khẩu là bắt buộc'),
});

const Register: React.FC = () => {
  const formik = useFormik<RegisterValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      birthday: null,
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('Register submitted:', values);
      resetForm();
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 2, maxWidth: '400px', mx: 'auto' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Đăng Ký
        </Typography>

        <UITextField
          label="Họ"
          name="firstName"
          value={formik.values.firstName}
          onChange={(value) => formik.setFieldValue('firstName', value)}
          onBlur={() => formik.setFieldTouched('firstName', true)}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />

        <UITextField
          label="Tên"
          name="lastName"
          value={formik.values.lastName}
          onChange={(value) => formik.setFieldValue('lastName', value)}
          onBlur={() => formik.setFieldTouched('lastName', true)}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />

        <UIDatePicker
          label="Ngày sinh"
          name="birthday"
          value={formik.values.birthday}
          onChange={(date) => formik.setFieldValue('birthday', date)}
          maxDate={new Date()}
          error={formik.touched.birthday && Boolean(formik.errors.birthday)}
          helperText={formik.touched.birthday && formik.errors.birthday}
        />

        <UITextField
          label="Email"
          name="email"
          value={formik.values.email}
          onChange={(value) => formik.setFieldValue('email', value)}
          onBlur={() => formik.setFieldTouched('email', true)}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <UITextField
          label="Mật khẩu"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={(value) => formik.setFieldValue('password', value)}
          onBlur={() => formik.setFieldTouched('password', true)}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Đăng Ký
        </Button>
        <Button component={Link} to="/" variant="outlined" color="secondary" sx={{ mt: 2, ml: 2 }}>
          Quay lại Trang chủ
        </Button>
      </Box>
    </LocalizationProvider>
  );
};

export default Register;