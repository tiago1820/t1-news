import image from "../assets/news.jpg";

export const Newsitem = ({ title, description, src, url }) => {
    console.log("AQUI: ", title);
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
            <img className="card-img-top" src={src ? src : image} style={{ height: "200px", width: "100%", objectFit: "cover" }} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p className="card-text">{description ? description.slice(0, 90) : "Texto..."}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

