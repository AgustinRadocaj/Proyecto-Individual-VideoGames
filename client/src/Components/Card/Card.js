const Card = ({id, image, name, genres}) =>{

    return (
        <div className="container">
        <div>
            <button onClick={ordenarAlfabeticamenteAscendente}>Ordenar por Nombre (Ascendente)</button>
            <button onClick={ordenarAlfabeticamenteDescendente}>Ordenar por Nombre (Descendente)</button>
            <button onClick={ordenarPorRatingAscendente}>Ordenar por Rating (Ascendente)</button>
            <button onClick={ordenarPorRatingDescendente}>Ordenar por Rating (Descendente)</button>
        </div>
        <div className="selectores">
            <select>
                <option value="Todos">Todos</option>
                <option value="API">API</option>
                <option value="Base de datos">Base de datos</option>
            </select>
            <select>
                <option value="adventure">Adventure</option>
                <option value="indie">Indie</option>
                <option value="action">Action</option>
                <option value="shooter">Shooter</option>
                <option value="strategy">Strategy</option>
                <option value="RPG">RPG</option>
                <option value="puzzle">Puzzle</option>
                <option value="simulation">Simulation</option>
                <option value="massively multiplayer">MMO</option>
                <option value="casual">Casual</option>
                <option value="plataformer">Plataformer</option>
                <option value="arcade">Arcade</option>
                <option value="fighting">Fighting</option>
                <option value="sports">Sports</option>
                <option value="racing">Racing</option>
                <option value="educational">Educational</option>
                <option value="board games">Board</option>
                <option value="family">Family</option>
                <option value="card">Card</option>
            </select>
        </div>
        <Link to={`/detail${id}`}><div className="cards">
            <h2>{image}</h2>
            <h2>{name}</h2>
            <h2>{genres}</h2>
        </div></Link>
        </div>
    )
}

export default Card;
