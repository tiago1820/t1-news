import { useNews } from "../hooks/useNews";
import { Newsitem } from "./Newsitem";
import styles from "./NewsBoard.module.css";

export const NewsBoard = ({ category }) => {
    const { articles, currentDate } = useNews(category);

    return (
        <div className={styles.newsBoardContainer}>
            <h2 className={styles.title}>News summary </h2>
            <p className={styles.currentDate}>{currentDate}</p>
            <div className={styles.newsGrid}>
                {articles.map((news, index) => (
                    <Newsitem
                        key={index}
                        title={news.title}
                        description={news.description}
                        src={news.urlToImage}
                        url={news.url}
                    />
                ))}
            </div>
        </div>
    );
};