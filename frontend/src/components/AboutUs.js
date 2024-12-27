import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function AboutUs() {
  return (
    <Box sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our platform! We are dedicated to providing the best service to our customers
          through innovative solutions and cutting-edge technology.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to empower businesses and individuals with tools and services that help
          them achieve their goals efficiently and effectively.
        </Typography>
        <Typography variant="body1" paragraph>
          Founded in 2024, we have been continuously growing and improving our services to meet
          the evolving needs of our customers. Our team of experts works tirelessly to ensure
          that we deliver the highest quality service possible.
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Our Values
        </Typography>
        <Typography variant="body1" component="ul">
          <li>Innovation and Excellence</li>
          <li>Customer Satisfaction</li>
          <li>Integrity and Transparency</li>
          <li>Continuous Improvement</li>
        </Typography>
      </Paper>
    </Box>
  );
}

export default AboutUs;
