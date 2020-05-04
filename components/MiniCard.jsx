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
            min-height: 150px;
            max-width: 500px;
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
          @media screen and (max-width: 1100px) {
            h1{
              font-size: 24px;
            }
            p{
              font-size: 14px;
            }
          }
          @media screen and (max-width: 700px) {
            .mini-card-item{
              display: block;
            }
          }
          @media screen and (max-width: 500px) {
            img {
              height: 50px;
            }
          }
        `}
      </style>
    </>
  );
}
