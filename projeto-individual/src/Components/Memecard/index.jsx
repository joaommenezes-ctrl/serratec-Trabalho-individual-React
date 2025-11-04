import cardStyles from './style.module.css'; 

export const MemeCard = (props) => {
  const { imgSrc, description } = props;

  return (
    <div className={cardStyles.memeItem}>
      <img
        src={imgSrc ? imgSrc : ""}
        alt={description || "Meme"}
        className={cardStyles.memeImage}
      />
      <p className={cardStyles.memeDescription}>
        {description ? description : 'Descrição do meme'}
      </p>
    </div>
  );
};