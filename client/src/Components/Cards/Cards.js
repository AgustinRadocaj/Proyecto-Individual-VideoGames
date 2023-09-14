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
          title={game.name}
          image={game.background_image}
          genres={game.genres}
        />
      ))}

      <div className={styles.pagination}>
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>Página {currentPage}</span>
        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={endIndex >= games.length}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
export default Cards;