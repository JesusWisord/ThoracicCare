import React from 'react';

import styles from './styles/Servicios.module.css';

export default function Servicios() {
  return (
    <section className={styles.serviciosContainer}>
      <h3>Servicios</h3>
      <h4>¿Qué es lo que hacemos?</h4>
      <div className={styles.cardContainer}>
        <div className={styles.cardItem}>
          <img src="/icons/icons8-medical-symbol-100.png" alt="icon" />
          <h4>Servicio</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
            mollis dictum facilisis placerat congue ut.
          </p>
        </div>
        <div className={styles.cardItem}>
          <img src="/icons/icons8-medical-symbol-100.png" alt="icon" />
          <h4>Servicio</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
            mollis dictum facilisis placerat congue ut.
          </p>
        </div>
        <div className={styles.cardItem}>
          <img src="/icons/icons8-medical-symbol-100.png" alt="icon" />
          <h4>Servicio</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
            mollis dictum facilisis placerat congue ut.
          </p>
        </div>
        <div className={styles.cardItem}>
          <img src="/icons/icons8-medical-symbol-100.png" alt="icon" />
          <h4>Servicio</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
            mollis dictum facilisis placerat congue ut.
          </p>
        </div>
        <div className={styles.cardItem}>
          <img src="/icons/icons8-medical-symbol-100.png" alt="icon" />
          <h4>Servicio</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
            mollis dictum facilisis placerat congue ut.
          </p>
        </div>
        <div className={styles.cardItem}>
          <img src="/icons/icons8-medical-symbol-100.png" alt="icon" />
          <h4>Servicio</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
            mollis dictum facilisis placerat congue ut.
          </p>
        </div>

      </div>
    </section>
  );
}
