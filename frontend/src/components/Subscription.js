import React from 'react';
import { Box, Card, CardContent, CardActions, Button, Typography, Grid } from '@mui/material';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_publishable_key');

const plans = [
  {
    title: 'Basic',
    price: '$9.99/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    priceId: 'price_basic'
  },
  {
    title: 'Pro',
    price: '$19.99/month',
    features: ['All Basic Features', 'Feature 4', 'Feature 5'],
    priceId: 'price_pro'
  },
  {
    title: 'Enterprise',
    price: '$29.99/month',
    features: ['All Pro Features', 'Feature 6', 'Feature 7'],
    priceId: 'price_enterprise'
  }
];

function Subscription() {
  const handleSubscribe = async (priceId) => {
    const stripe = await stripePromise;
    const response = await fetch('http://localhost:5000/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId }),
    });
    const session = await response.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.sessionId,
    });
    if (result.error) {
      console.error(result.error);
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom textAlign="center">
        Choose Your Plan
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {plans.map((plan) => (
          <Grid item xs={12} md={4} key={plan.title}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {plan.title}
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  {plan.price}
                </Typography>
                {plan.features.map((feature, index) => (
                  <Typography key={index} variant="body1" sx={{ mt: 1 }}>
                    • {feature}
                  </Typography>
                ))}
              </CardContent>
              <CardActions>
                <Button 
                  fullWidth 
                  variant="contained" 
                  onClick={() => handleSubscribe(plan.priceId)}
                >
                  Subscribe
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Subscription;
