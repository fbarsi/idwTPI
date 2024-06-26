import React, { useState, useEffect } from 'react';



const TiposAlojamiento = ({ asd, setAsd}) => {
  
  const agregarItem = async () => {
    const data = {
      Descripcion: 'a'
    };

    try {
      const response = await fetch('http://localhost:3001/tiposAlojamiento/createTipoAlojamiento', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        const respuesta = await response.json();
        const nuevoItem = {
            idTipoAlojamiento: respuesta.id, 
            ...data
        };
        // setItems(oldItems => [...oldItems, nuevoItem]);
        setAsd(oldItems => [...oldItems, nuevoItem]);
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
        setItems(oldItems => oldItems.filter(item => item.idTipoAlojamiento !== idTipoAlojamiento));
      } else {
        alert('Error al eliminar el tipo de alojamiento')
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error no se pudo establecer el servicio')
    }
  };

  return (
    <div className='admin-list'>
      <button className='btn-admin btn-color' onClick={agregarItem}>Crear</button>
      {asd.map((item, index) => (
        <div className='admin-item-list' key={item.idTipoAlojamiento} style={{backgroundColor: index % 2 === 0 ? '#dddddd' : '#cccccc' }}>
          <p style={{ flex: 1, alignContent:'center'}}>{item.Descripcion}</p>
          <div>
            <button className='btn-admin btn-color'>Modificar</button>
            <button className='btn-admin btn-color mg-left'>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TiposAlojamiento;