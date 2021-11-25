import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CarouselComponent = () => {
  const images = [
    { title: '1' },
    { title: '2' },
    { title: '3' },
    { title: '4' },
    { title: '5' },
    { title: '6' },
  ];
  const renderCustomItems = () => {
    return [
      [
        <h1>Test</h1>,
        <h2>2</h2>,
        <h3>3</h3>,
        <h4>4</h4>,
        <h5>5</h5>,
        <h6>6</h6>,
      ],
    ];
  };
  return (
    <Carousel
      className='main-slide'
      infiniteLoop
      showStatus={false}
      renderIndicator={false}
      style={{ width: '50%' }}
      //   onChange={onChange}
      //   onClickItem={onClickItem}
      //   onClickThumb={onClickThumb}
    >
      <Box>
        <Typography
          variant='h4'
          sx={{ marginTop: '20px', marginBottom: '15px' }}
        >
          JavaScript
        </Typography>
        <Box
          sx={{
            display: { md: 'flex' },
            // justifyContent: { md: 'center' },
            // alignContent: { md: 'center' },
            marginTop: '35px',
            alignItems: { md: 'center' },
          }}
        >
          <img src='assets/javascript.png' />
          {/* <p className='legend'>Legend 1</p> */}
          {/* <Typography variant='h4' sx={{ marginTop: '30px' }}>
            JavaScript
          </Typography> */}
          <Typography
            sx={{
              marginTop: '15px',
              marginBottom: '20px',
              padding: '0 40px',
              textAlign: { md: 'left' },
            }}
          >
            Lorem iTypographysum dolor sit amet consectetur adipisicing elit.
            Optio quas similique totam assumenda iure distinctio fuga molestias,
            eum, possimus quos, nam illum asperiores iusto? Vel omnis voluptas
            dignissimos placeat facilis!
          </Typography>
        </Box>
      </Box>
      <div>
        <img src='assets/javascript.png' /> <p className='legend'>Legend 2</p>
      </div>
      <div>
        <img src='assets/javascript.png' />
        <p className='legend'>Legend 3</p>
      </div>
      <div>
        <img src='assets/javascript.png' />
        <p className='legend'>Legend 4</p>
      </div>
      <div>
        <img src='assets/javascript.png' />
        <p className='legend'>Legend 5</p>
      </div>
      <div>
        <img src='assets/javascript.png' />
        <p className='legend'>Legend 6</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
