import React from 'react';
import { FiClock, FiPhone, FiMap } from 'react-icons/fi';

import styles from './styles/MiniCardInfo.module.css';

export default function MiniCardInfo() {
  return (
    <div className="col-4 d-flex align-items-center">
      <FiClock className={styles.icon} />
      <div className={`${styles.textContainer} ml-2`}>
        <p>Sábado y Domingo CERRADO</p>
        <p>Lunes a Viernes 09:00 - 16:00</p>
      </div>
    </div>
  );
}
