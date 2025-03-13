import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormExample from './components/FormExample';
import Register from './components/Register';
import Login from './components/Login';
import { CssBaseline, Container, Typography, Button, Box } from '@mui/material';

const VERSION = process.env.REACT_APP_VERSION || 'unknown';
const BUILD_TIME = process.env.REACT_APP_BUILD_TIME || 'unknown';

function Home() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to Home Page
      </Typography>
      <Button component={Link} to="/form" variant="contained" color="primary" sx={{ mr: 2 }}>
        Go to Form
      </Button>
      <Button component={Link} to="/register" variant="contained" color="secondary" sx={{ mr: 2 }}>
        Go to Register
      </Button>
      <Button component={Link} to="/login" variant="contained" color="success">
        Go to Login
      </Button>
    </Container>
  );
}

function App() {
  return (
    <Router>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormExample />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Box component="footer" sx={{ py: 2, textAlign: 'center', mt: 'auto' }}>
          <Typography variant="body2" color="textSecondary">
            Version: {VERSION} | Build Time: {BUILD_TIME}
          </Typography>
        </Box>
      </Box>
    </Router>
  );
}

export default App;