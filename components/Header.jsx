import React from 'react';
import { IconContext } from 'react-icons';
import { GrTwitter, GrInstagram, GrFacebook } from 'react-icons/gr';
import styles from './Header.module.css';

const handleClick = (e) => {
  e.target.classList.add('active');
};

export default function Header() {
  return (
    <>
      <header id="header">
        <div className="top-section">
          <div className="number">
            <span>(52) 55 054 548 064</span>
          </div>
          <div className="social-media">
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
        <div className="bottom-section">
          <img src="/static/logoHorizontal.jpg" alt="Logo Horizontal" />
          <nav className="menu">
            <ul>
              <li><a href="#header" className="active">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <style jsx>
        {`
        header{
          height: 100%;
        }
        .top-section{
          height: 40px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding-left: 50px;
          color: white;
          background-color: var(--second-brand-color);
        }
        .social-media{
          display: flex;
          align-items: center;
          height: 100%;
        }
        .bottom-section{
          display: flex;
        }
        .bottom-section img{
          height: 90px;
          display: inline;
        }
        .menu{
          width: 100%;
        }
        .menu ul{
          height: 100%;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: space-between;
          list-style: none;
        }
        li a {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: black;
          font-weight: 500;
          cursor: pointer;
        }
        li a.active {
          background-color: var(--first-brand-color);
          color: white;
        }
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
          color: black;
          width: 150px;
        }
      `}
      </style>
    </>
  );
}
