import React, { useState, useEffect } from 'react';



const TiposAlojamiento = ({ tiposAlojamiento, setTiposAlojamiento}) => {
  const [formularioVisible, setFormularioVisible] = useState(false);
  const [nuevoTipoAlojamiento, setNuevoTipoAlojamiento] = useState({
    Descripcion: '',
  })

  const agregarItem = async () => {
    try {
      const response = await fetch('http://localhost:3001/tiposAlojamiento/createTipoAlojamiento', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(nuevoTipoAlojamiento)
      });
      if (response.ok) {
        const respuesta = await response.json();
        const nuevoItem = {
            idTipoAlojamiento: respuesta.id, 
            ...nuevoTipoAlojamiento
        };
        setTiposAlojamiento(oldItems => [...oldItems, nuevoItem]);
      } else {
        alert('Error al crear el tipo de alojamiento')
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error no se pudo establecer el servicio')
    }
  };

  const eliminarItem = async (idTipoAlojamiento) => {
    try {
      const response = await fetch(`http://localhost:3001/tiposAlojamiento/deleteTipoAlojamiento/${idTipoAlojamiento}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setTiposAlojamiento(oldItems => oldItems.filter(item => item.idTipoAlojamiento !== idTipoAlojamiento));
      } else {
        alert('Error al eliminar el tipo de alojamiento')
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
    setNuevoTipoAlojamiento({
      Descripcion: ''
    });
  };

  const enviar = () => {
    agregarItem();
    setNuevoTipoAlojamiento({
      Descripcion: ''
    });
  }

  return (
    <>
      {formularioVisible ? (
      <>
        <input 
          className='input-admin' 
          value={nuevoTipoAlojamiento.Descripcion} 
          onChange={(e) => setNuevoTipoAlojamiento({ ...nuevoTipoAlojamiento, Descripcion: e.target.value })} 
          style={{}} 
          autoFocus
        />


        <button className='btn-admin btn-accept mg-left' onClick={enviar}>Aceptar</button>
        <button className='btn-admin mg-left' onClick={ocultarFormulario}>Cancelar</button>
      </>
      ) : (
        <button className='btn-admin btn-color' onClick={mostrarFormulario}>Crear</button>
      )}
      {tiposAlojamiento.map((item, index) => (
        <div className='admin-item-list' key={item.idTipoAlojamiento} style={{backgroundColor: index % 2 === 0 ? '#dddddd' : '#cccccc' }}>
          <p style={{ flex: 1, alignContent:'center'}}>{item.Descripcion}</p>
          <div>
            <button className='btn-admin btn-color'>Modificar</button>
            <button className='btn-admin btn-color mg-left' onClick={() => eliminarItem(item.idTipoAlojamiento)}>Eliminar</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default TiposAlojamiento;