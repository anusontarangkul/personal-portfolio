import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Carousel from './Carousel/Carousel';

const Skills = () => {
  return (
    <Container id='skills' sx={{ paddingTop: '10vh', height: '100vh' }}>
      <Typography
        variant='h2'
        sx={{
          textAlign: 'center',
          fontSize: '60px',
          fontWeight: '600',
          fontFamily: 'Signika Negative',
        }}
      >
        Skills
      </Typography>
      <Carousel />
    </Container>
  );
};

export default Skills;
