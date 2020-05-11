import React from 'react';

import styles from './styles/Galeria.module.css';

export default function Galeria() {
  return (
    <div className={styles.galeriaContainer}>
      <img src="evidence/evidence-1.jpg" alt=""/>
      <img src="evidence/evidence-2.jpg" alt=""/>
      <img src="evidence/evidence-3.jpg" alt=""/>
    </div>
  );
}
