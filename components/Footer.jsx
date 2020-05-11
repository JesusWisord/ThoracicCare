import React from 'react';
import { GrFacebook, GrTwitter, GrInstagram } from 'react-icons/gr';

import style from './styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={`container-fluid ${style.footer}`}>
      <img src="/static/logoCirculo.png" alt="logo" />
      <div className={style.iconsContainer}>
        <GrFacebook className={style.icon} />
        <GrTwitter className={style.icon} />
        <GrInstagram className={style.icon} />
      </div>
    </footer>
  );
}
