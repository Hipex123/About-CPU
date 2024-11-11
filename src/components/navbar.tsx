import styles from "./navbar.module.css"

export default function Navbar() {
    return(
        <nav className = {styles.navbar}>
            <ul className = {styles.navItems}>
                <li className = {styles.navItem}>Home</li>
                <li className = {styles.navItem}>CPU</li>
                <li className = {styles.navItem}>Multimedia</li>
                <li className = {styles.navItem}>Quiz</li>
                <li className = {styles.navItem}>About authors</li>
                <li className = {styles.navItem}>Resources</li>
            </ul>
        </nav>
    )
}