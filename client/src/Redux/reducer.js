const initialState = {
    games: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case "ALFA_ORDER":
            const alfaSort = [...state.games];
            if (action.payload === "A") {
              alfaSort.sort((a, b) => a.name.localeCompare(b.name));
            } else if (action.payload === "D") {
              alfaSort.sort((a, b) => b.name.localeCompare(a.name));
            }
            return { ...state, games: alfaSort };

        case "RATING_ORDER":
           const ratingSort = [...state.games]
           if(action.payload === "A"){
            ratingSort.sort((a, b) => a.rating - b.rating)
            } else if (action.payload === "D"){
            ratingSort.sort((a, b) => b.rating - a.rating)
            }
            return {...state, games: ratingSort}

        case "GENRE": 
            const genreFilter = state.games.filter(item => item.genre === action.payload)
            return {...state , games : genreFilter }

        case "ORIGIN":
            const byOrigin = state.games.filter((item) => {
                if (action.payload === "API") {
                  return typeof item.id === "number";
                } else if (action.payload === "DB") {
                  return typeof item.id === "string";
                }
                return true;
              });
            return { ...state, games: byOrigin };
        case "GET_GAMES":
          return {...state, games: action.payload}
        default:
              return state;
    }
};
        
export default reducer;
    
        
        
        
        
        