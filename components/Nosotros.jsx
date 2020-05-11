import React from 'react';
import styles from './styles/Nosotros.module.css';

export default function Nosotros() {
  return (
    <section className={`${styles.nosotrosSection} container-fluid d-flex bg-third-color`}>
      <div className={styles.nosotrosContainer}>
        <h3>Nosotros</h3>
        <h4>¿Por qué elegirnos?</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit porttitor donec convallis semper. Est, enim facilisis senectus lacus, felis sed nascetur tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit porttitor donec convallis semper.</p>
        <ul>
          <li>
            <img src="/icons/icons8-hospital-100.png" alt="health Icon" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              porttitor donec convallis semper. Est, enim facilisis senectus
              lacus, felis sed nascetur tellus. Lorem ipsum dolor sit
            </p>
          </li>
          <li>
            <img src="/icons/icons8-hospital-100.png" alt="health Icon" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              porttitor donec convallis semper. Est, enim facilisis senectus
              lacus, felis sed nascetur tellus. Lorem ipsum dolor sit
            </p>
          </li>
          <li>
            <img src="/icons/icons8-hospital-100.png" alt="health Icon" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              porttitor donec convallis semper. Est, enim facilisis senectus
              lacus, felis sed nascetur tellus. Lorem ipsum dolor sit
            </p>
          </li>
        </ul>
      </div>
      <div className={`${styles.horariosContainer} bg-first-color`}>
        <img src="/icons/icons8-protection-mask-100.png" alt="" />
        <h4>Horarios</h4>
        <div className={styles.textContainer}>
          <p>Lunes 08:30 am - 18 pm</p>
          <p>Lunes 08:30 am - 18 pm</p>
          <p>Lunes 08:30 am - 18 pm</p>
          <p>Lunes 08:30 am - 18 pm</p>
          <p>Lunes 08:30 am - 18 pm</p>
          <p>Lunes 08:30 am - 18 pm</p>
          <p>Lunes 08:30 am - 18 pm</p>
        </div>
      </div>

    </section>
  );
}
