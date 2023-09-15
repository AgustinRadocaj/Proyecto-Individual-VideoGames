import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Detail.module.css"

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
    <div className={styles.container}>
        <div className={styles.info}>
            {/* <h2>{game?.id}</h2> */}
            <h2>{game?.nombre}</h2>
            <h2>{game?.plataformas?.map(plat => plat).join("/")}</h2>
            <h2>{game?.fechaLanzamiento}</h2>
            <h2>{game?.rating}</h2>
            <h2>{game?.generos?.map(gen => gen).join("/")}</h2>
            <div dangerouslySetInnerHTML={{ __html: game?.descripcion }} />
        </div>
         <div className={styles.imagenContainer}><img src={game?.imagen} alt="Imagen" className={styles.imagen}></img></div>
    </div>
)
}

export default Detail

