import "./Navbar.css";

export const Navbar = ({setCategory}) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand">T1 News</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=> setCategory("technology")}>Technology</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=> setCategory("business")}>Business</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=> setCategory("health")}>Health</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=> setCategory("sport")}>Sports</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=> setCategory("entertainment")}>Entertainment</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}