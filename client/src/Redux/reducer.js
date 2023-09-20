const initialState = {
    games: [],
    originalGames: [],
    genres: []
}

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    
    case "ALFA_ORDER":
      const alphaSort = [...state.originalGames];
      if(action.payload === "S"){
        return {...state, originalGames: alphaSort}
      }else if (action.payload === "A") {
        alphaSort.sort((a, b) => a.nombre.localeCompare(b.nombre));
      } else if (action.payload === "D") {
        alphaSort.sort((a, b) => b.nombre.localeCompare(a.nombre));
      } 
      return { ...state, originalGames: alphaSort };

    case "RATING_ORDER":
      const ratingSort = [...state.originalGames];
      if(action.payload === "S"){
        return {...state, originalGames: ratingSort}
      } else if (action.payload === "A") {
        ratingSort.sort((a, b) => a.rating - b.rating);
      } else if (action.payload === "D") {
        ratingSort.sort((a, b) => b.rating - a.rating);
      }
      return { ...state, originalGames: ratingSort };
      
      case "GENRE":
        const allVideoGames = state.games;
        if(action.payload === "Todos"){
          return{...state, originalGames:allVideoGames}
        }
        const filteredArr = 
        allVideoGames.filter((item) => item.generos.some((genre) => genre === action.payload));
        return {...state, games: state.games, originalGames:filteredArr}

      case "ORIGIN":
          let byOrigin
          if (action.payload === "API") {
            byOrigin = state.games.filter((item) => typeof item.id === "number");
            return {...state, originalGames: byOrigin}
          } else if (action.payload === "DB") {
            byOrigin = state.games.filter((item) => typeof item.id === "string");
            return {...state, originalGames: byOrigin}
          } else if (action.payload === "Todos") {
            byOrigin = state.games
            return {...state, originalGames: byOrigin}
          }
          
          case "GET_GAMES":
              return {...state, games: action.payload, originalGames: action.payload}
    
          case "GET_NAME":
              return {...state, originalGames: action.payload}
          
          case "GET_GENRES":
            if(state.genres.length <= 0){
              return {...state, genres: action.payload}
            }
            
            default:
                return state;
            }
        };
      
      export default reducer;
              
    

      
    
    
        
        
        
        