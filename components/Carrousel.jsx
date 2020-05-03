import React from 'react';
import Slider from 'react-slick';

const settings = {
  dots: false,
  accesibility: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};
export default function Carrousel() {
  return (
    <>
      <Slider {...settings}>
        <div>
          <div className="image-container">
            <img src="/carrousel/carrousel-item-1.jpg" alt="item-1" align="center" />
            <div className="text-block">
              <strong>
                Estamos comprometidos con la salud de nuestros pacientes
              </strong>
              <p>
                Nuestro interés es ofrecer tratamientos que satisfagan sus expectativas 
                con tratamientos de vanguardia
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="image-container">
            <img src="/carrousel/carrousel-item-2.jpg" alt="item-1" align="center" />
            <div className="text-block">
              <strong>
                Estamos comprometidos con la salud de nuestros pacientes
              </strong>
              <p>
                Nuestro interés es ofrecer tratamientos que satisfagan sus expectativas 
                con tratamientos de vanguardia
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="image-container">
            <img src="/carrousel/carrousel-item-3.jpg" alt="item-1" align="center" />
            <div className="text-block">
              <strong>
                Estamos comprometidos con la salud de nuestros pacientes
              </strong>
              <p>
                Nuestro interés es ofrecer tratamientos que satisfagan sus expectativas 
                con tratamientos de vanguardia
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="image-container">
            <img src="/carrousel/carrousel-item-4.jpg" alt="item-1" align="center" />
            <div className="text-block">
              <strong>
                Estamos comprometidos con la salud de nuestros pacientes
              </strong>
              <p>
                Nuestro interés es ofrecer tratamientos que satisfagan sus expectativas 
                con tratamientos de vanguardia
              </p>
            </div>
          </div>
        </div>
      </Slider>
      <style jsx>
        {`
        .image-container {
          max-width: 100vw;
          height: 500px;
          position: relative;
        }
        .image-container img {
          width: 100%;
          color: black;
          object-fit: cover;
          filter: brightness(0.5);
        }
        .image-container .text-block{
          width: 80%;
          position: absolute;
          font-size: 36px;
          top: 10px;
          left: 100px;
          color: white;
          padding: 20px;
        }
        .text-block :global(p){
          font-size: 28px;
          padding-top: 10px;
        }
        `}
      </style>
    </>
  );
}
