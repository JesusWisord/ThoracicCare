import React from 'react';

export default function Evidencias() {
  return (
    <>
      <section>
        <h1>
          | Evidencias
        </h1>
        <div className="image-container">
          <img src="/evidence/evidence-1.jpg" alt="" />
          <img src="/evidence/evidence-2.jpg" alt="" />
          <img src="/evidence/evidence-3.jpg" alt="" />
          <img src="/evidence/evidence-4.jpg" alt="" />
        </div>
      </section>
      <style jsx>
        {`
          section {
            margin: 50px 0;
          }
          .image-container{
            width: 90vw;
            margin-left: 100px;
            display: flex;
            overflow: scroll;
          }
          img{
            height: 350px;
            margin-right: 20px;
            border-radius: 25px;
          }
        `}
        </style>
    </>
  );
}
