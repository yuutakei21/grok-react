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
  firstName: Yup.string().min(2, 'Họ phải ít nhất 2 ký tự').required('Họ là bắt buộc'),
  lastName: Yup.string().min(2, 'Tên phải ít nhất 2 ký tự').required('Tên là bắt buộc'),
  birthday: Yup.date().nullable().max(new Date(), 'Ngày sinh không được trong tương lai').required('Ngày sinh là bắt buộc'),
  email: Yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
  password: Yup.string().min(6, 'Mật khẩu phải ít nhất 6 ký tự').required('Mật khẩu là bắt buộc'),
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
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        className="mt-8 max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg" // Tailwind classes
      >
        <Typography variant="h5" align="center" gutterBottom className="text-gray-800">
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
          className="mb-4" // Tailwind margin
        />

        <UITextField
          label="Tên"
          name="lastName"
          value={formik.values.lastName}
          onChange={(value) => formik.setFieldValue('lastName', value)}
          onBlur={() => formik.setFieldTouched('lastName', true)}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          className="mb-4"
        />

        <UIDatePicker
          label="Ngày sinh"
          name="birthday"
          value={formik.values.birthday}
          onChange={(date) => formik.setFieldValue('birthday', date)}
          maxDate={new Date()}
          error={formik.touched.birthday && Boolean(formik.errors.birthday)}
          helperText={formik.touched.birthday && formik.errors.birthday}
          className="mb-4"
        />

        <UITextField
          label="Email"
          name="email"
          value={formik.values.email}
          onChange={(value) => formik.setFieldValue('email', value)}
          onBlur={() => formik.setFieldTouched('email', true)}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          className="mb-4"
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
          className="mb-4"
        />

        <div className="flex justify-between">
          <Button type="submit" variant="contained" color="primary" className="bg-blue-600 hover:bg-blue-700">
            Đăng Ký
          </Button>
          <Button
            component={Link}
            to="/"
            variant="outlined"
            color="secondary"
            className="border-gray-500 text-gray-700 hover:border-gray-700"
          >
            Quay lại Trang chủ
          </Button>
        </div>
      </Box>
    </LocalizationProvider>
  );
};

export default Register;