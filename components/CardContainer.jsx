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
        margin: 0;
        display: flex;
        justify-content: center;
        position: relative;
        margin-left: 50px;
        top: -50px;
      }
    `}
      </style>
    </div>
  );
}
