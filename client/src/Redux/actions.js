export const alfaOrder = (orden) => ({
    type: "ALFA_ORDER",
    payload: orden
})

export const ratingOrder = (orden) => ({
    type:"RATING_ORDER",
    payload : orden,
})
// orden alfabetico por nombre y rating

export const genre = (filter) => ({
    type: "GENRE",
    payload: filter
})

export const origin = (filter) => ({
    type :"ORIGIN",
    payload:  filter
})
// filtro genero y origen
