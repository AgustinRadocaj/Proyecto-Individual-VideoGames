import Card from "../Card/Card";
import styles from "./Cards.module.css"

const Cards = ({games}) => {
    
   console.log(games)
    return (
        <div className={styles.info}>
        {games.map((game) => {
            return <Card
            key={game.id} 
            id={game.id}
            title={game.name}
            image={game.background_image}
            genres={game.genres}  
            />
        })}
    </div>
    )
}

export default Cards;