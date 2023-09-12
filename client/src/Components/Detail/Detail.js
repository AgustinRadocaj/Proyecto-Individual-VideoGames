import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Detail = () => {

    const [game, setGame] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/videogames/${id}`).then(({ data }) => {
           if (data) {
              setGame(data);
           } else {
              window.alert('No hay juegos con ese ID');
           }
        });
        return setGame({});
     }, [id]);

function convertHtmlToText(html) {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    return tempElement.textContent || tempElement.innerText || "";
  }
return (
    <div className="container">
       <div className="imagen"><img src={game?.Imagen} alt="Imagen"></img></div>
        <div>
            <h2>{game?.id}</h2>
            <h2>Nombre:{game?.Nombre}</h2>
            <h2>Plataformas:{game?.Plataformas?.map(plat => (plat.platform.name))}</h2>
            <h2>Descripción:</h2>
            <p>{convertHtmlToText(game?.Descripción)}</p>
            <h2>Fecha de lanzamiento:{game?.Lanzamiento}</h2>
            <h2>Rating:{game?.Rating}</h2>
           <h2>Géneros:{game?.Generos?.map(gen => gen.name)}</h2>
        </div>
    </div>
)
}

export default Detail

