import { useNews } from "../hooks/useNews";
import { Newsitem } from "./Newsitem";
import "./NewsBoard.css";

export const NewsBoard = ({ category }) => {
    const { articles, currentDate } = useNews(category);

    return (
        <div className="news-board-container">
            <h2 className="text-center">News summary </h2>
            <p className="text-center">{currentDate}</p>
            <div className="news-grid">
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