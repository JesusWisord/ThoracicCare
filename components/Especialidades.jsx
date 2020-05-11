import React from 'react';
import EspecialidadItem from './EspecialidadItem';
import styles from './styles/Especialidades.module.css';

export default function Especialidades() {
  return (
    <div className={`${styles.container} container-fluid bg-first-color`}>
      <EspecialidadItem
        title="Neumología"
        description="Lorem ipsum dolor
        sit amet, consectetur
         adipiscing elit."
        buttonText="Click Me"
      />
      <EspecialidadItem
        title="Cirugía de Tórax"
        description="Lorem ipsum dolor
        sit amet, consectetur
         adipiscing elit."
        buttonText="Click Me"
      />
      <EspecialidadItem
        title="Traumatología"
        description="Lorem ipsum dolor
        sit amet, consectetur
         adipiscing elit."
        buttonText="Click Me"
      />
      <EspecialidadItem
        title="Cardiología"
        description="Lorem ipsum dolor
        sit amet, consectetur
         adipiscing elit."
        buttonText="Click Me"
      />
    </div>
  )
}
