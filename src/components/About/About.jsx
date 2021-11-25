import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const About = () => {
  return (
    <Container id='about' sx={{ paddingTop: '10vh', marginBottom: '100px' }}>
      <Typography
        variant='h2'
        sx={{
          textAlign: 'center',
          fontSize: '60px',
          fontWeight: '600',
          fontFamily: 'Signika Negative',
        }}
      >
        About
      </Typography>
      <Box sx={{ display: { md: 'flex' }, margin: '30px' }}>
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <img
            src='https://via.placeholder.com/350'
            alt='Coding David'
            style={{ borderRadius: '50%', width: 'auto', height: 'auto' }}
          />
        </Box>
        <Container
          sx={{
            width: { xs: '100%', md: '50%' },
            paddingLeft: '5px',
            paddingRight: '5px',
          }}
        >
          <Typography
            variant='h3'
            sx={{
              textAlign: 'center',
              fontSize: '45px',
              fontWeight: '500',
              fontFamily: 'Signika Negative',
              marginBottom: '15px',
              marginTop: { xs: '20px', md: '0' },
            }}
          >
            My Story
          </Typography>
          <Typography sx={{ marginBottom: '20px', fontSize: '20px' }}>
            My name is <i>David Anusontarangkul</i> and I am a full stack
            developer specializing in{' '}
            <strong>
              JavaScript (React), Node (Express), MySQL, and MongoDB.
            </strong>
          </Typography>
          <Typography sx={{ marginBottom: '20px', fontSize: '20px' }}>
            I am passionate about coding because it inspires my creativity. I
            love coming up with different ideas that would solve complex
            problems.
          </Typography>
          <Typography sx={{ marginBottom: '20px', fontSize: '20px' }}>
            I completed an intensive web development bootcamp at{' '}
            <strong>The University of California, Berkeley</strong>. I currently
            work as a <i>Learner Assistant</i> for the bootcamp where I tutor
            the fundamentals of web development.
          </Typography>
        </Container>
      </Box>
    </Container>
  );
};

export default About;
