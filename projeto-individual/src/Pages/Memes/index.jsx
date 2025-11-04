import styles from './style.module.css';
import meme1 from '../../assets/Vasco_Perfeito.jpg';
import meme2 from '../../assets/Felipe_Vascão.jpg';
import meme3 from '../../assets/Flamengo_no_lixo.jpeg';
import meme4 from '../../assets/Romario.jpg';
import { Navegacao } from '../../Components/Navegacao';
import { MemeCard } from '../../Components/Memecard';


export function Memes() {
  return (
    <>
      <Navegacao />
      
      <div className={styles.pageContainer}>
        <h2 className={styles.subtitle}>
          Galeria de Memes do Gigante
        </h2>

        <div className={styles.imageGrid}>
          <MemeCard
            imgSrc={meme1}
            description="O escudo perfeito do Vasco, sem erros!"
          />
          <MemeCard
            imgSrc={meme2}
            description="Felipe, O VIRA CASACA!"
          />
          <MemeCard
            imgSrc={meme3}
            description="Coisas erradas no lugar certo!"
          />
          <MemeCard
            imgSrc={meme4}
            description="Eita!! Que massacre..."
          />
        </div>
      </div>
    </>
  );
}

export default Memes;