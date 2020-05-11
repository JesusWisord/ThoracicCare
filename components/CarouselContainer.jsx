import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import styles from './styles/Carousel.module.css';

export default function CarouselContainer() {
  return (
    <div id="carousel" className="container-fluid pr-0 pl-0">
      <Carousel>
        <Carousel.Item>
          <img
            style={{ filter: 'opacity(0.7)' }}
            alt="carousel-item"
            className={`${styles.carouselImg} d-block w-100`}
            src="carrousel/carrousel-item-1.jpg"
          />
          <Carousel.Caption style={{ color: 'black' }}>
            <h2>Estamos para servirte</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ filter: 'opacity(0.7)' }}
            alt="carousel-item"
            className={`${styles.carouselImg} d-block w-100`}
            src="carrousel/carrousel-item-2.jpg"
          />
          <Carousel.Caption style={{ color: 'black' }}>
            <h2>Estamos para servirte</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
