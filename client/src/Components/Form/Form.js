const Form = () => {
    return (
        <form>
            <label>Nombre</label>
            <input type="text" name="Nombre"/>
           
            <label>Descripción</label>
            <input type="text" name="Descripcion"/>
           
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

export default Form