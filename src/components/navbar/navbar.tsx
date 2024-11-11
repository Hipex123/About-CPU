import Link from "next/link"
import styles from "./navbar.module.css"

export default function Navbar() {
    return(
        <nav className = {styles.navbar}>
            <ul className = {styles.navItems}>
                <li className = {styles.navItem}><Link href="/">Home</Link></li>
                <li className = {styles.navItem}><Link href="/cpu">CPU</Link></li>
                <li className = {styles.navItem}><Link href="/multimedia">Multimedia</Link></li>
                <li className = {styles.navItem}><Link href="/quiz">Quiz</Link></li>
                <li className = {styles.navItem}><Link href="/about">About Authors</Link></li>
                <li className = {styles.navItem}><Link href="/resources">Resources</Link></li>
            </ul>
        </nav>
    )
}