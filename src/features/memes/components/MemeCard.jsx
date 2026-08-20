import styles from './MemeCard.module.css';

export default function MemeCard({ meme }) {
    return (
        <div className={`${styles.memeCard}`}>
            <div className={`card-body ${styles.memeImageBody}`}>
                <img 
                    src={meme.image_url} 
                    alt="Meme de Cruz Roja Juventud" 
                    className={`card-img-top ${styles.memeImage}`}
                    loading="lazy"
                />
            </div>
            <div className={`card-footer ${styles.memeFooter}`}>
                <p className={`${styles.memeDate}`}>
                    {new Date(meme.created_at).toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}