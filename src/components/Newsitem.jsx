import image from "../assets/news.jpg";

export const Newsitem = ({ title, description, src, url }) => {
    return (
        <div className="news-item">
            <img className="news-image" src={src ? src : image}  alt="..." />
            <div className="news-body">
                <h5 className="news-title">{title.slice(0, 50)}</h5>
                <p>{description ? description.slice(0, 90) : "Texto..."}</p>
                <a href={url} className="news-btn">Read More</a>
            </div>
        </div>
    )
}

