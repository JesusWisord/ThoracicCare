import React from 'react';

export default function Card({ active }) {
  return (
    <>
      <div className="card-container">
        <img src="/Card/surgeon.png" alt="" />
        <h1>Servicio</h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          exercitationem asperiores voluptatem culpa quidem. Quos aliquid
          debitis a commodi corrupti placeat repellendus eaque recusandae.
          Veritatis ex est laborum eos officiis!
        </p>
      </div>
      <style jsx>
        {`
        .card-container {
          width: 300px;
          height: 450px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color:${active ? 'var(--first-brand-color);' : 'rgba(0,140,157,.6);'}
        }
        .card-container img{
          max-height: 120px;
          max-width: 120px;
          margin-top: 10px;
        }
        .card-container p{
          text-align: justify;
          margin: 0 10px;
        }
        `}
      </style>
    </>
  );
}
