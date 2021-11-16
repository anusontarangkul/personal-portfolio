import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const About = () => {
  return (
    <Container id='about' sx={{ paddingTop: '10vh' }}>
      <Typography
        variant='h2'
        sx={{
          minHeight: '100vh',
          textAlign: 'center',
          fontSize: '60px',
          fontWeight: '600',
          fontFamily: 'Signika Negative',
        }}
      >
        About
      </Typography>
    </Container>
  );
};

export default About;
