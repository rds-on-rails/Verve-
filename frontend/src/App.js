import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Typography } from '@mui/material';
import Home from './components/Home';
import Subscription from './components/Subscription';
import AboutUs from './components/AboutUs';
import SignIn from './components/SignIn';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/subscription">Subscription</Button>
            <Button color="inherit" component={Link} to="/about">About Us</Button>
          </Typography>
          <Button color="inherit" component={Link} to="/signin">Sign In</Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
