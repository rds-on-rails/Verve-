import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';
import axios from 'axios';

function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/subscribe', { email });
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setMessage('Error subscribing. Please try again.');
    }
  };

  return (
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Our Service
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Subscribe to our newsletter to stay updated!
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          fullWidth
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          sx={{ maxWidth: 400 }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
        >
          Subscribe
        </Button>
      </Box>
      {message && (
        <Alert severity="success" sx={{ mt: 2, maxWidth: 400, mx: 'auto' }}>
          {message}
        </Alert>
      )}
    </Box>
  );
}

export default Home;
