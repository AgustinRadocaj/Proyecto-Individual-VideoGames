const Filtros = () => {
    return (
<div className="container">
    <select id="Alfabetico">
        <option value="ascendente">Ascendente</option>
        <option value="descendente">Descendente</option>
    </select>
    <select id="Rating">
        <option value="ascendente">Ascendente</option>
        <option value="descendente">Descendente</option>
    </select>
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
    )
}

export default Filtros
    
    