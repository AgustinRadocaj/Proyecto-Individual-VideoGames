import React, {useEffect, useState} from "react"
import Filtros from "../Filtros/Filtros"
import Card from "../Card/Card"
import axios from "axios"
const DB_API_KEY = process.env.DB_API_KEY;

const Display = () => {

    const [juegos, setJuegos] = useState([])

    useEffect(() => {
        axios.get(URL + '?key=' + DB_API_KEY)
        .then((response) => {
            setJuegos(response.data.results);
        })
        .catch((error) => {
            console.log("Error", error);
          });
      }, []);
    
    return(
        <div>
            <Filtros/>
            <div className="juegos">
                {juegos.map((game) => (
                    <Card 
                    key={game.id}
                    Nombre={game.name}
                    Imagen={game.background_image}
                    Generos={game.genres}
                    />
                ))}   
            </div>
        </div>
    )
}

export default Display;