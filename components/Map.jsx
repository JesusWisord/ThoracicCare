import React from 'react';
import styles from './styles/Map.module.css';

export default function Map() {
  return (
    <div className="container-fluid">
      <iframe
        title="ubicacion"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15064.566514699183!2d-99.66754930211609!3d19.27620623314464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd89b1b817cc07%3A0xbf089bc2b5ec3321!2sClinica%20Integral%20Humana!5e0!3m2!1ses!2smx!4v1589138708187!5m2!1ses!2smx"
        width="800"
        height="600"
        className={styles.map}
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </div>
  );
}
