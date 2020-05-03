import React from 'react';
import ListItem from './ListItem';

export default function Servicios() {
  return (
    <>
      <section className="" id="Servicios">
        <div className="especialidades">
          <h1>| Especialidades</h1>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <div className="servicios">
          <h1>| Servicios</h1>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      </section>
      <style jsx>
        {`
          section{
            width: 90vw;
            margin: 100px auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
          }
        `}
      </style>
    </>
  );
}
