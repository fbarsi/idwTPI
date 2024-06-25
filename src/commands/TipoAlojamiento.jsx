import React, { useState, useEffect } from 'react';

const TipoAlojamiento = () => {
  const [items, setItems] = useState([]);
  const [descripcionAModificar, setDescripcionAModificar] = useState('');
  const [descripcionAgregar, setDescripcionAgregar] = useState(null);
  const [descripcionOriginal, setDescripcionOriginal] = useState('');
  const [itemAModificar, setItemAModificar] = useState(null);
  const [mostrarInput, setMostrarInput] = useState(false);

  useEffect(() => {
    const obtenerItems = async () => {
      try {
        const response = await fetch('http://localhost:3001/tiposAlojamiento/getTiposAlojamiento');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    obtenerItems();
  }, []);

  const agregarItem = async () => {
    const data = {
      Descripcion: descripcionAgregar
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
            Descripcion: descripcionAgregar
        };
        setItems(oldItems => [...oldItems, nuevoItem]);
        setDescripcionAgregar(null);
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
			<h2 style={{fontWeight: '500'}}>Modo administrador</h2>
			<h4 style={{color: 'red', marginBottom: '2em'}}>¡Precaución! Eliminar un item es una acción irreversible.</h4>
      {items.map((item, index) => (
        <div className='admin-item-list' key={item.idTipoAlojamiento} style={{backgroundColor: index % 2 === 0 ? '#dddddd' : '#cccccc' }}>
          <p style={{ flex: 1, alignContent:'center'}}>{item.Descripcion}</p>
          <div>
            <button className='btn-admin btn-color' onClick={() => iniciarModificacion(item.idTipoAlojamiento)}>Modificar</button>
            <button className='btn-admin btn-color mg-left' onClick={() => eliminarItem(item.idTipoAlojamiento)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TipoAlojamiento;