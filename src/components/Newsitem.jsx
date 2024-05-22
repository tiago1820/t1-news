import image from "../assets/news.jpg";
import styles from "./Newsitem.module.css";

export const Newsitem = ({ title, description, src, url }) => {
    return (
        <div className={styles.newsItem}>
            <img className={styles.newsImage} src={src ? src : image} alt="..." />
            <div className={styles.newsBody}>
                <h5 className={styles.newsTitle}>{title.slice(0, 50)}</h5>
                <p>{description ? description.slice(0, 90) : "Texto..."}</p>
                <a href={url} className={styles.newsBtn}>Read More</a>
            </div>
        </div>
    )
}

