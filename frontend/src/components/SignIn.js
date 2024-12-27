import React from 'react';
import { Box, Button, Typography, Paper, Divider } from '@mui/material';

function SignIn() {
  const handleGoogleSignIn = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  return (
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{ p: 4, maxWidth: 400, width: '100%' }}>
        <Typography variant="h5" component="h1" gutterBottom textAlign="center">
          Sign In
        </Typography>
        
        <Box sx={{ mt: 3, mb: 2 }}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleGoogleSignIn}
            sx={{
              backgroundColor: '#fff',
              color: '#757575',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
              border: '1px solid #ddd',
            }}
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google logo"
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
            Sign in with Google
          </Button>
        </Box>

        <Divider sx={{ my: 2 }}>OR</Divider>

        <Typography variant="body2" color="text.secondary" textAlign="center">
          More sign-in options coming soon...
        </Typography>
      </Paper>
    </Box>
  );
}

export default SignIn;
