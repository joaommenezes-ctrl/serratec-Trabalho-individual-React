import React from 'react';
import styles from './style.module.css';

import meme1 from '../../assets/Vasco_Perfeito.jpg';
import meme2 from '../../assets/Felipe_Vascão.jpg';
import meme3 from '../../assets/Flamengo_no_lixo.jpeg';
import meme4 from '../../assets/Romario.jpg';

export function Memes() {
  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.subtitle}>Galeria de Memes do Gigante</h2>

      <div className={styles.imageGrid}>
        
        <div className={styles.memeItem}>
          <img src={meme1} alt="Meme 1" className={styles.memeImage} />
          <p className={styles.memeDescription}>O escudo perfeito do Vasco, sem erros!</p>
        </div>

        <div className={styles.memeItem}>
          <img src={meme2} alt="Meme 2" className={styles.memeImage} />
          <p className={styles.memeDescription}>Felipe, O VIRA CASACA!</p>
        </div>

        <div className={styles.memeItem}>
          <img src={meme3} alt="Meme 3" className={styles.memeImage} />
          <p className={styles.memeDescription}>Coisas erradas no lugar certo!</p>
        </div>

        <div className={styles.memeItem}>
          <img src={meme4} alt="Meme 4" className={styles.memeImage} />
          <p className={styles.memeDescription}>Eita!! Que massacre...</p>
        </div>

      </div>
    </div>
  );
}