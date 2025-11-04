import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';
import giganteLogo from '../../assets/logo-gigante+1.png';

export function Navegacao() {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarContent}>
        
        <div className={styles.logoArea}>
          <img
            src={giganteLogo}
            alt="GIGANTE"
            className={styles.giganteImage}
          />
        </div>

        <div className={styles.links}>
          <a href="#" className={styles.navLink}>Ingressos</a>
          <a href="#" className={styles.navLink}>Planos</a>
          <a href="#" className={styles.navLink}>Sócio Torcedor</a>
         
        </div>

        <div className={styles.authButtons}>
          <Link to="/">
            <button className={styles.registerButton}>
              CADASTRE-SE
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}