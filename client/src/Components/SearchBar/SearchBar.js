import React, {useState}  from "react";
import axios from "axios";

const URL = `https://api.rawg.io/api/games`

const searchBar = () => {
    const [searchTerm, setSearchTerm] = useState(""); //estado para guardar el input de busqueda
    const [result, setResult] = useState([]); // estado para guardar los resultados de la busqueda
  
    useEffect(() => {
      const fetchGames = async () => {
        if (searchTerm.trim() === "") { //condicional para saber si el input esta vacio
          setResult([]);
          return;
        }
  
        const response = await axios.get(`${URL}?search=${searchTerm}`);
        setResult(response.data.results);
      };
  
      fetchGames();
    }, [searchTerm]);

    return ( 
        <div>
            <input type="text" placeholder="Busca por nombre" onChange={(e) => search(e.target.value)} value={searchTerm}/>
            <ul>
                {result.map((game) => (
                <li key={game.id}>{game.name}{game.genre}{game.console}</li>))}
            </ul>
        </div>
    ) //renderizado del componente (debe mostrar nombre genero y consola)
}

export default searchBar;
