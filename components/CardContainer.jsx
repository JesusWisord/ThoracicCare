import React from 'react';
import Card from './Card';

export default function CardContainer() {
  return (
    <div className="card-container">
      <Card active />
      <Card />
      <Card />
      <Card />
      <style jsx>
        {`
      .card-container{
        width: 90vw;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-content: center;
        position: relative;
        margin-left: 50px;
        top: -150px;
      }
      @media screen and (max-width:700px){
        .card-container{
          display: none;
        }
      }
    `}
      </style>
    </div>
  );
}
