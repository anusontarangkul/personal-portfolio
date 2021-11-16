import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ReactPlayer from 'react-player';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const Intro = () => {
  return (
    <Container sx={{ height: '100vh', paddingTop: '10vh' }}>
      <Typography
        variant='h1'
        sx={{
          textAlign: 'center',
          marginTop: '20px',
          fontWeight: 'bold',
          fontFamily: 'Signika Negative',
          fontSize: '70px',
          marginBottom: '20px',
          lineHeight: 0.9,
        }}
      >
        Full Stack Developer
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
          backgroundColor: '#DF4C73',
          width: '250px',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: '10px',
          boxShadow: '0 7px 10px rgb(0 0 0 / 0.2)',
          cursor: 'pointer',
        }}
      >
        <Link
          href='https://calendly.com/anusontarangkul/15min'
          target='to_blank'
          underline='none'
        >
          <Typography
            sx={{
              fontSize: '25px',
              color: 'white',
              fontWeight: '550',
              padding: '5px',
            }}
          >
            📞 Book a Call
          </Typography>
        </Link>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <img src='https://via.placeholder.com/350'></img>
        {/* <Box
          sx={{
            width: '100%',
            height: '0',
            paddingBottom: '56.25%',
            position: 'relative',
          }}
        >
          <iframe
            src='https://www.youtube.com/embed/E7wJTI-1dvQ'
            frameborder='0'
            allowfullscreen
            title='video'
            width='100%'
            height='auto'
            sx={{
              position: 'absolute',
              minWidth: '100%',
              height: '100%',
            }}
          />
        </Box> */}
      </Box>
    </Container>
  );
};

export default Intro;
