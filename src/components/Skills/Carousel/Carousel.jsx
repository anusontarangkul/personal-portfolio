import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

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
    return (
      <div>
        <h1>title</h1>
        <p>paragraph</p>
      </div>
    );
  };
  return (
    <Carousel
      className='main-slide'
      infiniteLoop
      //   renderItem={renderCustomItems}
      showArrows={false}
      //   onChange={onChange}
      //   onClickItem={onClickItem}
      //   onClickThumb={onClickThumb}
    >
      <div>
        <img src='assets/javascript.png' onClick={() => console.log('d')} />
        <p className='legend'>Legend 1</p>
        <p>test</p>
      </div>
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
