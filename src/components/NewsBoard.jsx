import { useState, useEffect } from "react";
import { Newsitem } from "./Newsitem";
import "./NewsBoard.css";

export const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles));

        const date = new Date();
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        setCurrentDate(date.toLocaleDateString("en-US", options));//es-ES
    }, [category]);

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
    )
}