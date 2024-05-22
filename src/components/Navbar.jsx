import { useState } from "react";
import { getImageUrl } from "../utils";
import styles from "./Navbar.module.css";

export const Navbar = ({ setCategory }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} onClick={() => setCategory("general")} href="#">
                T1 News
            </a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen
                        ? getImageUrl("closeIcon.png")
                        : getImageUrl("menuIcon.png")
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a onClick={() => setCategory("technology")} href="#technology">Technology</a>
                    </li>
                    <li>
                        <a onClick={() => setCategory("business")} href="#business">Business</a>
                    </li>
                    <li>
                        <a onClick={() => setCategory("health")} href="#health">Health</a>
                    </li>
                    <li>
                        <a onClick={() => setCategory("sport")} href="#sport">Sport</a>
                    </li>
                    <li>
                        <a onClick={() => setCategory("entertainment")} href="#entertainment">Entertainment</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}