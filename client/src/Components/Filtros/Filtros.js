import { alfaOrder, ratingOrder, originFilter, genreFilter } from "../../Redux/actions"
import {useState} from "react"
import {useDispatch} from "react-redux"

const Filtros = () => {
    const [alfa, setAlfa] = useState("A")
    const [rating, setRating] = useState("A")
    const [origin, setOrigin] = useState("Todos")
    const [genre, setGenre] = useState("")
    const Dispatch = useDispatch()
    
    const alfaHandle = (event) =>{
        setAlfa(event.target.value)
        alfaChange(event.target.value)
    }
    const alfaChange = (value) =>{
        Dispatch(alfaOrder(value))
    }

    const ratingHandle = (event) =>{
        setRating(event.target.value)
        ratingChange(event.target.value);
    }
    const ratingChange = (value)=>{
        Dispatch(ratingOrder(value));
    }

    const originHandle = (event)=>{
        setOrigin(event.target.value)
        originChange(event.target.value)
    }
    const originChange =(value)=> {
        Dispatch(originFilter(value))
    }

    const genreHandle = (event) =>{
        setGenre(event.target.value)
        genreChange(event.target.value)
    }
    const genreChange = (value) =>{
        Dispatch(genreFilter(value))
    }


    return (
<div className="container">
    <h1>Alfa</h1>
    <select id="Alfabetico" value={alfa} onChange={alfaHandle}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
    </select>
    <h1>Rating</h1>
    <select id="Rating" value={rating} onChange={ratingHandle}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
    </select>
    <select value={origin} onChange={originHandle}>
        <option value="Todos">Todos</option>
        <option value="API">API</option>
        <option value="DB">Base de datos</option>
    </select>
    <select value={genre} onChange={genreHandle}>
        <option value="Adventure">Adventure</option>
        <option value="Indie">Indie</option>
        <option value="Action">Action</option>
        <option value="Shooter">Shooter</option>
        <option value="Strategy">Strategy</option>
        <option value="RPG">RPG</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Simulation">Simulation</option>
        <option value="massively multiplayer">MMO</option>
        <option value="Casual">Casual</option>
        <option value="Plataformer">Plataformer</option>
        <option value="Arcade">Arcade</option>
        <option value="Fighting">Fighting</option>
        <option value="Sports">Sports</option>
        <option value="Racing">Racing</option>
        <option value="Educational">Educational</option>
        <option value="Board games">Board</option>
        <option value="Family">Family</option>
        <option value="Card">Card</option>
    </select>
</div>
    )
}

export default Filtros
    
    