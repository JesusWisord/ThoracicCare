import React from 'react';
import style from './styles/Especialidades.module.css';

export default function EspecialidadItem({title, description, buttonText}) {
  return (
    <div className={style.itemContainer}>
      <h2
        className={style.title}
      >
        {title}
      </h2>
      <p
        className={style.description}
      >
        {description}
      </p>
      <button type="button" className="btn btn-info">{buttonText}</button>
    </div>
  );
}
