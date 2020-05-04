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
          width: 100%;
          padding-bottom: 20px;
          display: grid;
          grid-template-rows: minmax(100px, 120px) minmax(20px, 100px) 1fr;
          align-content: center;
          justify-items: center;
          background-color:${active ? 'var(--first-brand-color);' : 'rgba(0,140,157,.6);'}
        }
        .card-container img{
          max-height: 100%;
          max-width: 100%;
          margin-top: 10px;
        }
        .card-container p{
          text-align: justify;
          margin: 0 10px;
        }
        @media screen and (max-width: 1000px) {
          .card-container p{
            font-size: 16px;
          }
        }
        `}
      </style>
    </>
  );
}
