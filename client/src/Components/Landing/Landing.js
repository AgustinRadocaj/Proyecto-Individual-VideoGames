import { Link } from "react-router-dom"
import styles from "./Landing.module.css"

const Landing = () => {
    return (
        <div className="landing">
            <h1 className={styles.h1}>PRESS START</h1>
            <button className={styles.button}>
                <Link to="/home">START</Link>
            </button>
        </div>
    )
}

export default Landing