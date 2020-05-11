import React from 'react';
import { FiClock, FiPhone, FiMap } from 'react-icons/fi';

import styles from './styles/MiniCardInfo.module.css';

export default function MiniCardContainer() {
  return (
    <>
      {/* First clock item */}
      <div className={`${styles.miniCardContainer} col-lg-3 col-4 offset-lg-0 offset-1 d-flex align-items-center`}>
        <FiClock className={styles.icon} />
        <div className={`${styles.textContainer} ml-2`}>
          <p>Sábado y Domingo CERRADO</p>
          <p>Lunes a Viernes 09:00 - 16:00</p>
        </div>
      </div>

      {/* Second phone item */}
      <div className={`${styles.miniCardContainer} col-lg-2 col-3 d-flex align-items-center`}>
        <FiPhone className={styles.icon} />
        <div className={`${styles.textContainer} ml-2`}>
          <p>¡Llámanos!</p>
          <p>(55) 52 567 539</p>
        </div>
      </div>

      {/* Third map item */}
      <div className={`${styles.miniCardContainer} col-lg-2 col-3 d-flex align-items-center`}>
        <FiMap className={styles.icon} />
        <div className={`${styles.textContainer} ml-2`}>
          <p>Dirección</p>
          <p>Estado</p>
        </div>
      </div>
    </>
  );
}
