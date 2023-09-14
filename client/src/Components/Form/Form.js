import React, { useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import { getGenres } from "../../Redux/actions"
import styles from "./Form.module.css"



const Form = () => {

  const dispatch = useDispatch()
  const generos = useSelector((state) => state.genres)

  useEffect(()=> {
    dispatch(getGenres())
  })

  const [formData, setFormData] = useState({
    nombre: '',
    imagen: '',
    descripcion: '',
    plataformas: '',
    fechaLanzamiento: '',
    rating: 0,
    genres: []
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.nombre.length <= 0){
      alert("El nombre no puede estar vacio!");}
    else if(formData.descripcion.length > 50){
      alert("La descripcion no debe ser mayor a 50 caracteres")}
    else if(formData.plataformas.length <= 0){
      alert("Debe tener al menos una plataforma")}
    else if(formData.rating > 0){
      alert("El rating no puede ser mayor a 5")}
    else if(formData.fechaLanzamiento.length <= 0){
      alert("Debe tener fecha de lanzamiento")}
    else {
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
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            
          />
        </div>
        <div>
          <label htmlFor="imagen">Imagen (URL):</label>
          <input
            type="text"
            id="imagen"
            name="imagen"
            value={formData.imagen}
            onChange={handleChange}
            
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            
          />
        </div>
        <div>
          <label htmlFor="plataformas">Plataformas:</label>
          <input
            type="text"
            id="plataformas"
            name="plataformas"
            value={formData.plataformas}
            onChange={handleChange}
            
          />
        </div>
        <div>
          <label htmlFor="fechaLanzamiento">Fecha de Lanzamiento:</label>
          <input
            type="text"
            id="fechaLanzamiento"
            name="fechaLanzamiento"
            value={formData.fechaLanzamiento}
            onChange={handleChange}
            
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            step="0.1"
            value={formData.rating}
            onChange={handleChange}
            
          />
        </div>
        
        <label htmlFor="genres">Géneros:</label>
        <div className={styles.generos}>
        {generos.map((genre) => (
        <label key={genre.id}>
        <input
        type="checkbox"
        name="genres"
        value={genre.nombre}
        onChange={handleChange}
        checked={formData.genres.includes(genre.nombre)}
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