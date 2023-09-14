import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import Filtros from "../Filtros/Filtros"
import Cards from "../Cards/Cards"
import SearchBar from "../SearchBar/SearchBar"
import { getGames, getGenres} from "../../Redux/actions"
import styles from "./Display.module.css"



const Display = () => {

    const dispatch = useDispatch()
    const games = useSelector((state) => state.originalGames);
    const genres = useSelector((state) => state.genres)

   
    useEffect(()=> {
        dispatch(getGenres())
      }, [])

    
    useEffect(()=>{
        dispatch(getGames());
    }, [])
    
    
    return(
        <div>
            <SearchBar/>
            <Filtros genres={genres}/>
            <div className={styles.gamesContainer}>
                <Cards games={games}/>    
            </div>
        </div>
    )
}

export default Display;


