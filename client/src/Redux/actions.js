import axios from "axios"

export const alfaOrder = (orden) => ({
    type: "ALFA_ORDER",
    payload: orden
})

export const ratingOrder = (orden) => ({
    type:"RATING_ORDER",
    payload : orden,
})
// orden alfabetico por nombre y rating

export const genreFilter = (filter) => ({
    type: "GENRE",
    payload: filter
})

export const originFilter = (filter) => ({
    type :"ORIGIN",
    payload:  filter
})
// filtro genero y origen

export const getGames = () => {
    return async function (dispatch){
        const response = await axios.get("http://localhost:3001/videogames");
        const games = response.data
        dispatch({type: "GET_GAMES", payload: games})
    }
}

export const getByName = (name) => {
    return async function (dispatch){
        const response = await axios.get(`http://localhost:3001/videogames/name/${name}`)
        const data = response.data
        dispatch({type: "GET_NAME", payload: data})
    }
}

export const getGenres = () => {
    return async function (dispatch){
        const response = await axios.get("http://localhost:3001/genres")
        const data = response.data
        dispatch({type: "GET_GENRES", payload: data})
    }
}