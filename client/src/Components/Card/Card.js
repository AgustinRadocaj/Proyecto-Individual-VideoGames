const Card = ({id, image, name, genres}) =>{

    return (
        <div className="container">
        <Link to={`/detail${id}`}><div className="cards">
            <h2>{image}</h2>
            <h2>{name}</h2>
            <h2>{genres}</h2>
        </div></Link>
        </div>
        )
    }
    
    export default Card;
        
         
