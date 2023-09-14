import { alfaOrder, ratingOrder, originFilter, genreFilter } from "../../Redux/actions"
import {useState, useEffect} from "react"
import {useDispatch} from "react-redux"
import styles from "./Filtros.module.css"



const Filtros = ({genres}) => {

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
<div className={styles.container}>
    
    <select className={styles.select} value={alfa} onChange={alfaHandle}>
        <option value="A">A-Z</option>
        <option value="D">Z-A</option>
    </select>
    <select  className={styles.select} value={rating} onChange={ratingHandle}>
        <option value="A">1-5</option>
        <option value="D">5-1</option>
    </select>
    <select className={styles.select} value={origin} onChange={originHandle}>
        <option value="Todos">Todos</option>
        <option value="API">API</option>
        <option value="DB">Base de datos</option>
    </select>
    <select className={styles.select} value={genre} onChange={genreHandle}>
    <option value="Todos">Todos</option>
        {genres.map((genreOption) => (
    <option key={genreOption.id} value={genreOption.nombre}>
      {genreOption.nombre}
    </option>
  ))}
</select>
</div>
    )
}

           

export default Filtros
    
