import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import axios from "axios";

// // Lấy domain từ .env
// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

// // Hàm gọi API login
// const loginApi = async (email, password) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, {
//       email,
//       password,
//     });
//     return { success: true, message: 'Đăng nhập thành công!', token: response.data.token };
//   } catch (error) {
//     return { success: false, message: error.response?.data?.error || 'Đăng nhập thất bại!' };
//   }
// };

const fakeLoginApi = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@example.com" && password === "password123") {
        resolve({ success: true, message: "Đăng nhập thành công!" });
      } else {
        reject({ success: false, message: "Email hoặc mật khẩu không đúng!" });
      }
    }, 1000);
  });
};

const validationSchema = Yup.object({
  email: Yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
  password: Yup.string()
    .min(6, "Mật khẩu phải ít nhất 6 ký tự")
    .required("Mật khẩu là bắt buộc"),
});

function Login() {
  const [loginMessage, setLoginMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      setLoginMessage("");
      try {
        const result = await fakeLoginApi(values.email, values.password);
        setLoginMessage(result.message);
        if (result.success) {
          console.log("Token:", result.token);
          // localStorage.setItem('token', result.token);
          resetForm();
        }
        setIsLoading(false);
      } catch (error) {
        setLoginMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ mt: 2, maxWidth: "400px", mx: "auto" }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Đăng Nhập
      </Typography>
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
      {loginMessage && (
        <Typography
          color={loginMessage.includes("thành công") ? "green" : "red"}
          sx={{ mt: 2 }}
        >
          {loginMessage}
        </Typography>
      )}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        disabled={isLoading}
      >
        {isLoading ? "Đang đăng nhập..." : "Login"}
      </Button>
      <Button
        component={Link}
        to="/"
        variant="outlined"
        color="secondary"
        sx={{ mt: 2, ml: 2 }}
      >
        Back to Home
      </Button>
    </Box>
  );
}

export default Login;
