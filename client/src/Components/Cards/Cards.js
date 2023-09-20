import Card from "../Card/Card";
import styles from "./Cards.module.css"
import { useState } from "react";

const Cards = ({games}) => {
    const [currentPage, setCurrentPage] = useState(1);
    
    const pageSize = 15;
  
    const changePage = (newPage) => {
      setCurrentPage(newPage);
    };
  
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
  
    const displayedGames = games.slice(startIndex, endIndex);
    
   console.log(games)
   return (
    <div className={styles.info}>
      {displayedGames.map((game) => (
        <Card 
          key={game.id}
          id={game.id}
          nombre={game.nombre}
          imagen={game.imagen}
          generos={game.generos}
          rating={game.rating}
        />
      ))}

      <div className={styles.pagination}>
      <button 
      className={styles.button} 
      onClick={() => changePage(1)}
      disabled={currentPage === 1}
      >
        Primera
        </button>
        <button className={styles.button} 
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        >
        Anterior
        </button>
        <span className={styles.span}>Página {currentPage}</span>
        <button className={styles.button}
        onClick={() => changePage(currentPage + 1)}
        disabled={endIndex >= games.length}
        >
        Siguiente
        </button>
        <button 
        className={styles.button}
        onClick={() => changePage(Math.ceil(games.length / pageSize))}
        disabled={currentPage === Math.ceil(games.length / pageSize)}
        >
        Última
        </button>
      </div>
    </div>
  );
};
export default Cards;