import React, { useState} from "react"


const Form = () => {
  
  const [formData, setFormData] = useState({
    nombre: '',
    imagen: '',
    descripcion: '',
    plataformas: '',
    fechaLanzamiento: '',
    rating: 0,
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
  };

  return (
    <div>
      <h2>Crear un Nuevo Juego</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
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
            required
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
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
            required
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
            required
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
            required
          />
        </div>
        <div>
          <button type="submit">Crear Juego</button>
        </div>
      </form>
    </div>
  );
}

export default Form;