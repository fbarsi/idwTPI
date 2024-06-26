import React, { useState, useEffect } from 'react';

const Alojamientos = ({ items, itemsTipos, setItems }) => {
  const [formularioVisible, setFormularioVisible] = useState(false);
  const [nuevoAlojamiento, setNuevoAlojamiento] = useState({
    Titulo: '',
    Descripcion: '',
    idTipoAlojamiento: '',
    Latitud: '',
    Longitud: '',
    PrecioPorDia: '',
    CantidadDormitorios: '',
    CantidadBanios: '',
    Estado: 'Disponible',
  });

  const agregarItem = async () => {
    const data = {
      Titulo: "Ejemplo de alojamiento",
      Descripcion: "Descripción del alojamiento",
      idTipoAlojamiento: 7,
      Latitud: 12.345,
      Longitud: 67.890,
      PrecioPorDia: 100,
      CantidadDormitorios: 3,
      CantidadBanios: 2,
      Estado: "Disponible"
    };

    try {
      const response = await fetch('http://localhost:3001/alojamiento/createAlojamiento', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        const respuesta = await response.json();
        const nuevoItem = {
          idAlojamiento: respuesta.id, 
          ...data
        };
        setItems(oldItems => [...oldItems, nuevoItem]);
      } else {
        alert('Error al crear el alojamiento')
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error no se pudo establecer el servicio')
    }
  };

  const eliminarItem = async (idAlojamiento) => {
    try {
      const response = await fetch(`http://localhost:3001/alojamiento/deleteAlojamiento/${idAlojamiento}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setItems(oldItems => oldItems.filter(item => item.idAlojamiento !== idAlojamiento));
      } else {
        alert('Error al eliminar el alojamiento')
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error no se pudo establecer el servicio')
    }
  };

  

  const mostrarFormulario = () => {
    setFormularioVisible(true);
  };

  const ocultarFormulario = () => {
    setFormularioVisible(false);
    setNuevoAlojamiento({
      Titulo: '',
      Descripcion: '',
      idTipoAlojamiento: '',
      Latitud: '',
      Longitud: '',
      PrecioPorDia: '',
      CantidadDormitorios: '',
      CantidadBanios: '',
      Estado: 'Disponible',
    });
  };

  const guardarCambios = () => {
    // Lógica para guardar los cambios (enviar a la base de datos)
    // Usar nuevoAlojamiento para enviar los datos
  };

  return (
    <div className='admin-list'>
			<h2 style={{fontWeight: '500'}}>Modo administrador</h2>
			<h4 style={{color: 'red', marginBottom: '2em'}}>¡Precaución! Eliminar un item es una acción irreversible.</h4>

      {/* formulario */}

      {formularioVisible ? (
        <div>
          {/* Formulario para crear un nuevo alojamiento */}
          <input
            type='text'
            placeholder='Título'
            value={nuevoAlojamiento.Titulo}
            onChange={(e) => setNuevoAlojamiento({ ...nuevoAlojamiento, Titulo: e.target.value })}
          />
          {/* Agrega más campos aquí (Latitud, Longitud, etc.) */}
          <select
            value={nuevoAlojamiento.idTipoAlojamiento}
            onChange={(e) => setNuevoAlojamiento({ ...nuevoAlojamiento, idTipoAlojamiento: e.target.value })}
          >
            {itemsTipos.map((tipo) => (
              <option key={tipo.idTipoAlojamiento} value={tipo.idTipoAlojamiento}>
                {tipo.Descripcion}
              </option>
            ))}
          </select>
          <select
            value={nuevoAlojamiento.Estado}
            onChange={(e) => setNuevoAlojamiento({ ...nuevoAlojamiento, Estado: e.target.value })}
          >
            <option value='Disponible'>Disponible</option>
            <option value='Reservado'>Reservado</option>
          </select>
          <button onClick={guardarCambios}>Guardar</button>
          <button onClick={ocultarFormulario}>Cancelar</button>
        </div>
      ) : (
        <button onClick={mostrarFormulario}>Crear</button>
      )}

      {/* fin del formulario */}

      <select>
        {itemsTipos.map(tipo => (
          <option key={tipo.idTipoAlojamiento} value={tipo.idTipoAlojamiento}>
            {tipo.Descripcion}
          </option>
        ))}
      </select>
      <button className='btn-admin btn-color' onClick={agregarItem}>Crear</button>

      {items.map((item, index) => (
        <div className='admin-item-list' key={item.idAlojamiento} style={{backgroundColor: index % 2 === 0 ? '#dddddd' : '#cccccc' }}>
          <p style={{ flex: 1, alignContent:'center'}}>{item.Descripcion} - {item.Latitud} - {itemsTipos.find(itemTipo => itemTipo.idTipoAlojamiento === item.idTipoAlojamiento).Descripcion}</p>
          <div>
            <button className='btn-admin btn-color'>Modificar</button>
            <button className='btn-admin btn-color mg-left'>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Alojamientos;