import React from 'react';
import { IconContext } from 'react-icons';
import { GrTwitter, GrInstagram, GrFacebook } from 'react-icons/gr';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="logo-container">
          <img src="/static/logoCirculo.png" alt="" />
        </div>
        <div className="sitios-interes">
          <h2>Sitios de Interés</h2>
          <ul>
            <li><a href="/">Términos y condiciones</a></li>
            <li><a href="/">Acerca de</a></li>
            <li><a href="/">Servicios</a></li>
            <li><a href="/">Sucursales</a></li>
            <li><a href="/">Aviso de Privacidad</a></li>
          </ul>
        </div>
        <div className="follow-us">
          <h2>Síguenos en redes</h2>
          <div className="social-media-container">
            <IconContext.Provider
              value={{ className: styles.reactIcon }}
            >
              <a href="https://www.facebook.com">
                <GrFacebook />
              </a>
              <a href="https://www.facebook.com">
                <GrTwitter />
              </a>
              <a href="https://www.facebook.com">
                <GrInstagram />
              </a>
            </IconContext.Provider>
          </div>
        </div>
        <div className="direccion">
          <h2>Dirección</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            harum sit repellendus alias debitis provident nesciunt, quos
            ipsum nulla fugit magnam tempora eum corporis, soluta esse!
            Aperiam, illum ipsum. Corrupti!
          </p>
        </div>
      </footer>
      <style jsx>
        {`
          footer{
            height: 300px;
            background-color: var(--second-brand-color);
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            align-items: top;
            padding-top: 30px;
            color: white;
          }
          .logo-container{
            height: 250px;
          }
          .logo-container img{
            height: 100%
          }
          .social-media-container{
            width: 80%;
            display: flex;
            justify-content: space-around;
          }
          ul{
            list-style: none;
          }
          li{
            padding-bottom: 10px;
          }
          h2{
            border-bottom: 1px solid white;
            width: 80%;
          }
          a{
            text-decoration: none;
            color:white;
          }
        `}
      </style>
    </>
  );
}
