import { useState, useEffect } from "react";

export const useNews = (category) => {
    const [articles, setArticles] = useState([]);
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
                let response = await fetch(url);
                if (!response.ok) throw new Error("Network response was not ok");
                let data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error("Fetching error: ", error);
            }
        };
        
        fetchArticles();
        const date = new Date();
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        setCurrentDate(date.toLocaleDateString("en-US", options));
    }, [category]);

    return { articles, currentDate };
};