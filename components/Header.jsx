import React from 'react';
import { GrFacebook, GrTwitter, GrInstagram } from 'react-icons/gr';

import MiniCardContainer from './MiniCardContainer';

import styles from './styles/Header.module.css';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className="container d-flex justify-content-end align-items-center">
          <div className="icons-container mr-4">
            <GrFacebook className={styles.icon} />
            <GrTwitter className={styles.icon} />
            <GrInstagram className={styles.icon} />
          </div>
          <button className="btn btn-info pl-4 pr-4" type="button">Click Me</button>
        </div>
      </header>
      <div className="bottomHeader mt-2 mb-2">
        <div className="container-fluid">
          <div className="row">
            <div className="d-in-line col-lg-4 mt-auto mb-auto">
              <img src="/static/logoHorizontal.jpg" alt="Logo" className="img-fluid" />
            </div>
            <MiniCardContainer />
          </div>
        </div>
      </div>
    </>
  );
}
