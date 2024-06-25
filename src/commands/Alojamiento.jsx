import React, { useState, useEffect } from 'react';

const Alojamiento = () => {
  const [items, setItems] = useState([]);
  const [descripcionAModificar, setDescripcionAModificar] = useState('');
  const [descripcionAgregar, setDescripcionAgregar] = useState(null);
  const [descripcionOriginal, setDescripcionOriginal] = useState('');
  const [itemAModificar, setItemAModificar] = useState(null);
  const [mostrarInput, setMostrarInput] = useState(false);

  useEffect(() => {
    const obtenerItems = async () => {
      try {
        const response = await fetch('http://localhost:3001/alojamiento/getAlojamientos');
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

  const eliminarItem = async (idAlojamiento) => {
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
          {itemAModificar === item.idTipoAlojamiento ? (
            <>
              <input 
                className='input-admin' 
                value={descripcionAModificar} 
                onChange={(e) => setDescripcionAModificar(e.target.value)} 
                autoFocus
              />
              <div>
                <button className='btn-admin btn-accept' onClick={() => modificarItem(item.idTipoAlojamiento, descripcionAModificar)}>Guardar</button>
                <button className='btn-admin mg-left' onClick={cancelarModificacion}>Cancelar</button>
              </div>
            </>
          ) : (
            <>
              
            </>
          )}
        </div>
      ))}
      {mostrarInput ? (
        <>
          <input 
            className='input-admin' 
            value={descripcionAgregar} 
            onChange={(e) => setDescripcionAgregar(e.target.value)} 
            onKeyDown={(e) => manejarKeyDown(e, manejarSubmit)}
						style={{marginTop:'1em'}} 
            autoFocus
          />
          <button className='btn-admin btn-accept mg-left' onClick={manejarSubmit}>Aceptar</button>
          <button className='btn-admin mg-left' onClick={cancelarAgregar}>Cancelar</button>
        </>
      ) : (
        <button className='input-admin btn-color' onClick={manejarClickAgregar} style={{marginTop:'1em', padding: '1em 2em', height:'auto'}}>Agregar item</button>
      )}
    </div>
  );
}

export default Alojamiento;