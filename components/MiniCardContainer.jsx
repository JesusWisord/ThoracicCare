import React from 'react';
import MiniCard from './MiniCard';

export default function MiniCardContainer() {
  return (
    <>
      <div className="mini-card-container">
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </div>
      <style jsx>
        {`
        .mini-card-container{
          width: 80vw;
          margin: 50px auto 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px;
          justify-items: center;
        }
        `}
      </style>
    </>
  );
}
