import React, { useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import { getGenres } from "../../Redux/actions"
import styles from "./Form.module.css"



const Form = () => {

  const dispatch = useDispatch()
  const generos = useSelector((state) => state.genres)
  const platforms = [
    "PC",
    "PlayStation 5",
    "Xbox One",
    "PlayStation 4",
    "Xbox Series S/X",
    "Nintendo Switch",
    "iOS",
    "Android",
    "Nintendo 3DS",
    "macOS",
    "Linux",
    "Xbox 360",
    "PlayStation 3",
    "PlayStation 2",
    "PlayStation",
    "Wii U",
    "Wii",
    "GameCube",
    "Nintendo 64",
    "Game Boy Advance",];

  useEffect(()=> {
    dispatch(getGenres())
  })
 

  const [formData, setFormData] = useState({
    nombre: '',
    imagen: '',
    descripcion: '',
    plataformas: [],
    fechaLanzamiento: '',
    rating: 0,
    generos: []
  });
  
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'generos') {
      if (checked) {
        // Si el checkbox se selecciona, agregamos el valor al array
        setFormData((prevData) => ({
          ...prevData,
          generos: [...prevData.generos, value],
        }));
      } else {
        // Si el checkbox se deselecciona, quitamos el valor del array
        setFormData((prevData) => ({
          ...prevData,
          generos: prevData.generos.filter((genre) => genre !== value),
        }));
      }
    } else if(name === "plataformas"){
      if (checked) {
        // Si se selecciona una plataforma, agrégala al array
        setFormData((prevData) => ({
          ...prevData,
          plataformas: [...prevData.plataformas, value],
        }));
      } else {
        // Si se deselecciona una plataforma, quítala del array
        setFormData((prevData) => ({
          ...prevData,
          plataformas: prevData.plataformas.filter((platform) => platform !== value),
        }));
      }
    }
     else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  function esURLValida(url) {
    var urlRegex = /^(http|https):\/\/[^\s/$.?#].[^\s]*$/;
    return urlRegex.test(url);
  }

  function tieneCaracteresEspeciales(cadena) {
    var regex = /[^a-zA-Z0-9]/;
    return regex.test(cadena);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.nombre.length <= 0){
      alert("El nombre no puede estar vacio!");}
    else if(tieneCaracteresEspeciales(formData.nombre)){
      alert("El nombre no puede contener caracteres especiales")}
    else if (!esURLValida(formData.imagen)){
      alert("La imagen no es una URL")}
    else  if(formData.descripcion.length <=0 || formData.descripcion.length > 50){
      alert("La descripcion no debe ser mayor a 50 caracteres")}
    else  if(formData.plataformas.length <= 0){
      alert("Debe tener al menos una plataforma")}
    else  if(formData.rating > 5){
      alert("El rating no puede ser mayor a 5")}
    else  if(formData.fechaLanzamiento.length <= 0){
      alert("Debe tener fecha de lanzamiento")}
    else if(formData.generos.length <= 0){
      alert("Debe tener al menos un genero")
    }
    else{
    try {
      const response = await fetch("http://localhost:3001/videogames", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Juego creado con éxito');
        alert("Juego creado con exito!")
        console.log(formData)
      } else {
        console.error('Error al crear el juego');
      }
    } catch (error) {
      console.error('Error al crear el juego', error);
    }
    }
  };

  return (
    <div className={styles.wraper}>
    <div className={styles.container}>
      <h2>Crear un Nuevo Juego</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="imagen">Imagen (URL):</label>
          <input type="text" id="imagen" name="imagen" value={formData.imagen} onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea id="descripcion" name="descripcion" value={formData.descripcion} onChange={handleChange}/>
        </div>

          <label htmlFor="plataformas">Plataformas:</label>
        <div className={styles.plataformas}>
          {platforms.map((plat, index) => (
            <label key={index}>
            <input type="checkbox"
            id="plataformas"
            name="plataformas"
            value={plat}
            onChange={handleChange}
            checked={formData.plataformas.includes(plat)}/>
            {plat}</label>
            ))}</div>

        <div>
          <label htmlFor="fechaLanzamiento">Fecha de Lanzamiento:</label>
          <input type="date" id="fechaLanzamiento" name="fechaLanzamiento" value={formData.fechaLanzamiento} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="rating">Rating:</label>
          <input type="number" id="rating" name="rating" step="0.1" value={formData.rating} onChange={handleChange}/>
        </div>
        
        <label htmlFor="generos">Géneros:</label>
        <div className={styles.generos}>
        {generos.map((genre) => (
        <label key={genre.id}>
        <input
        type="checkbox"
        name="generos"
        value={genre.nombre}
        onChange={handleChange}
        checked={formData.generos.includes(genre.nombre)}
        />
        {genre.nombre}
        </label>
        ))}
        </div>
        <div>
          <button type="submit" className={styles.submit}>Crear</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Form;