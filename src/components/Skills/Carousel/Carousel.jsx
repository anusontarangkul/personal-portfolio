import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CarouselComponent = () => {
  return (
    <Carousel
      className='main-slide'
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
            marginTop: '35px',
            alignItems: { md: 'center' },
          }}
        >
          <img src='assets/javascript.svg' height='250vh' />

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
      <Box>
        <Typography
          variant='h4'
          sx={{ marginTop: '20px', marginBottom: '15px' }}
        >
          React
        </Typography>
        <Box
          sx={{
            display: { md: 'flex' },
            marginTop: '35px',
            alignItems: { md: 'center' },
          }}
        >
          <img src='assets/react.svg' height='250vh' width='60xp' />

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
      <Box>
        <Typography
          variant='h4'
          sx={{ marginTop: '20px', marginBottom: '15px' }}
        >
          Node.JS
        </Typography>
        <Box
          sx={{
            display: { md: 'flex' },
            marginTop: '35px',
            alignItems: { md: 'center' },
          }}
        >
          <img src='assets/node.svg' height='250vh' />

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
      <Box>
        <Typography
          variant='h4'
          sx={{ marginTop: '20px', marginBottom: '15px' }}
        >
          GraphQL
        </Typography>
        <Box
          sx={{
            display: { md: 'flex' },
            marginTop: '35px',
            alignItems: { md: 'center' },
          }}
        >
          <img src='assets/graphql.svg' height='250vh' />

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
      <Box>
        <Typography
          variant='h4'
          sx={{ marginTop: '20px', marginBottom: '15px' }}
        >
          MySQL
        </Typography>
        <Box
          sx={{
            display: { md: 'flex' },
            marginTop: '35px',
            alignItems: { md: 'center' },
          }}
        >
          <img src='assets/mysql.svg' height='250vh' />

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
      <Box>
        <Typography
          variant='h4'
          sx={{ marginTop: '20px', marginBottom: '15px' }}
        >
          MongoDB
        </Typography>
        <Box
          sx={{
            display: { md: 'flex' },
            marginTop: '35px',
            alignItems: { md: 'center' },
          }}
        >
          <img src='assets/mongodb.svg' height='250vh' />

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
      <Box>
        <Typography
          variant='h4'
          sx={{ marginTop: '20px', marginBottom: '15px' }}
        >
          HTML
        </Typography>
        <Box
          sx={{
            display: { md: 'flex' },
            marginTop: '35px',
            alignItems: { md: 'center' },
          }}
        >
          <img src='assets/html.svg' height='250vh' />

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
      <Box>
        <Typography
          variant='h4'
          sx={{ marginTop: '20px', marginBottom: '15px' }}
        >
          CSS
        </Typography>
        <Box
          sx={{
            display: { md: 'flex' },
            marginTop: '35px',
            alignItems: { md: 'center' },
          }}
        >
          <img src='assets/css.svg' height='250vh' />

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
        <img src='assets/javascript.svg' height='45vh' />
        <p className='legend'>Legend 3</p>
      </div>
      <div>
        <img src='assets/react.png' height='45vh' />
        <p className='legend'>Legend 6</p>
      </div>
      <div>
        <img src='assets/node.svg' height='45vh' />
        <p className='legend'>Legend 6</p>
      </div>
      <div>
        <img src='assets/graphql.svg' height='45vh' />
        <p className='legend'>Legend 7</p>
      </div>
      <div>
        <img
          src='assets/mysql.svg'
          height='45vh'
          width='100%'
          objectFit='cover'
        />
        <p className='legend'>Legend 6</p>
      </div>
      <div>
        <img src='assets/mongodb.svg' height='45vh' />
        <p className='legend'>Legend 7</p>
      </div>
      <div>
        <img src='assets/html.svg' height='45vh' />
        <p className='legend'>Legend 4</p>
      </div>
      <div>
        <img src='assets/css.svg' height='45vh' />
        <p className='legend'>Legend 5</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
