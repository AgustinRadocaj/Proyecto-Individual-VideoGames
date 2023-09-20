import { Link } from "react-router-dom";
import styles from "./Card.module.css"

const Card = ({id, imagen, nombre, generos, rating}) =>{

    return (
        <div className={styles.card}>
            <Link to={`/detail/${id}`} className={styles.link}>
            <h2 className={styles.nombre}>{nombre}</h2>
            <h2 className={styles.genero}>{generos.join("/")}</h2>
            <h2 className={styles.rating}>Rating:{rating}</h2>
            <img className={styles.imagen} src={imagen} alt={nombre} /></Link>
        </div>
    )
}
    
export default Card;