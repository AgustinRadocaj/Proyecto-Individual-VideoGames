const form = () => {
    return (
        <form>
            <label>Nombre</label>
            <input type="text" name="Nombre"/>
            //falta Imagen
            <label>Descripción</label>
            <input type="text" name="Descripcion"/>
            //botones para elegir las Plataformas
            <label>Fecha de lanzamiento</label>
            <input type="date" name="fecha_lanzamiento"/>       
            <label>Rating</label>
            <input type="number" name="Rating"/>
            <label>Generos</label>  
            <select multiple id='genero' name='genero'>
                <option value=''>--Seleccione un genero-- </option>
            </select>
            <button className="boton">Agregar Juego</button>
        </form>
    )
}

export default form