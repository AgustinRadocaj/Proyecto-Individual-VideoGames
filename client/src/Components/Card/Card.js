import { Link } from "react-router-dom";
import styles from "./Card.module.css"

const Card = ({id, image, title, genres}) =>{
console.log(genres)
    return (
        <div className={styles.container}>
            <Link to={`/detail/${id}`}><div className="cards">
            <img className={styles.image} src={image} alt={title} />
            <h2>Nombre: {title}</h2>
            <h2>Generos: {genres.map (genre => (genre.name.split(", ")))}</h2>
        </div></Link>
        </div>
        )
    }
    
export default Card;