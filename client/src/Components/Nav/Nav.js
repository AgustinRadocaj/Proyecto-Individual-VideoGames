import { Link, useLocation} from "react-router-dom";
import styles from "./Nav.module.css"

const Nav = () => {
    const location = useLocation();

    const miLocation = location.pathname === "/";

    if(miLocation){
      return null;
    }
    return(
        <div className={styles.nav}>
            <button className={styles.button}>
                <Link to="/home">HOME</Link>
            </button>
            <button className={styles.button}>
                <Link to="/about">ABOUT</Link>
            </button>
            <button className={styles.button}>
                <Link to="/form">AGREGAR</Link>
            </button>
        </div>
    )
}

export default Nav
    
    
