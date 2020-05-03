import React from 'react';

export default function MiniCard() {
  return (
    <>
      <div className="mini-card-item">
        <div className="image-container">
          <img src="/Card/pill.png" alt="Mini-card" />
        </div>
        <div className="text-container">
          <h1>
            Calidad
          </h1>
          <p>
            Utilizamos material y medicamentos de primera calidad,
            aunados a los métodos más modernos y máxima seguridad.
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .mini-card-item{
            height: 150px;
            width: 500px;
            display: flex;
            align-items: center;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
          }
          .image-container{
            background: linear-gradient(to right, rgba(29,139,159,1) 0%, rgba(0,141,157,1) 50%, rgba(52,91,131,1) 50%);
            height: 90%;
            display: grid;
            justify-content: center;
            align-items: center;
          }
          img {
            height: 100px;
            margin: 10px;
          }
          .text-container{
            margin-left: 10px;
          }
        `}
      </style>
    </>
  );
}
