import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CssBaseline, Container, Typography, Button, Box } from '@mui/material';

const FormExample = React.lazy(() => import('./components/FormExample'));
const Register = React.lazy(() => import('./components/Register'));
const Login = React.lazy(() => import('./components/Login'));

const VERSION = import.meta.env.REACT_APP_VERSION || 'unknown';
const BUILD_TIME = import.meta.env.REACT_APP_BUILD_TIME || 'unknown';

const Home: React.FC = () => {
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
};

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<React.Suspense fallback={<div>Loading...</div>}><FormExample /></React.Suspense>} />
          <Route path="/register" element={<React.Suspense fallback={<div>Loading...</div>}><Register /></React.Suspense>} />
          <Route path="/login" element={<React.Suspense fallback={<div>Loading...</div>}><Login /></React.Suspense>} />
        </Routes>
        <Box component="footer" sx={{ py: 2, textAlign: 'center', mt: 'auto' }}>
          <Typography variant="body2" color="textSecondary">
            Version: {VERSION} | Build Time: {BUILD_TIME}
          </Typography>
        </Box>
      </Box>
    </Router>
  );
};

export default App;