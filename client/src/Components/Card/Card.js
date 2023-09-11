import { Link } from "react-router-dom";

const Card = ({id, background_image, name, genres}) =>{

    return (
        <div className="container">
            <Link to={`/detail${id}`}><div className="cards">
            <img src={background_image} alt={name} />
            <h2>{name}</h2>
            <h2>{genres}</h2>
        </div></Link>
        </div>
        )
    }
    
export default Card;