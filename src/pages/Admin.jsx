import React, { useState, useEffect } from 'react';

const Admin = () => {
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

  const iniciarModificacion = (idTipoAlojamiento) => {
    const item = items.find(item => item.idTipoAlojamiento === idTipoAlojamiento);
    setDescripcionOriginal(item.Descripcion);
    setDescripcionAModificar(item.descripcionAModificar);
    setItemAModificar(idTipoAlojamiento);
  };

  const modificarItem = async (idTipoAlojamiento, nuevaDescripcion) => {
    const data = {
      Descripcion: nuevaDescripcion
    };

    try {
      const response = await fetch(`http://localhost:3001/tiposAlojamiento/putTipoAlojamiento/${idTipoAlojamiento}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        setItems(oldItems => oldItems.map(item => item.idTipoAlojamiento === idTipoAlojamiento ? { ...item, Descripcion: nuevaDescripcion } : item));
        setItemAModificar(null);
      } else {
        alert('Error al modificar el tipo de alojamiento')
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error no se pudo establecer el servicio')
    }
  };

  const cancelarModificacion = () => {
    setDescripcionAModificar(descripcionOriginal);
    setItemAModificar(null);
  };

  const manejarClickAgregar = () => {
    setMostrarInput(true);
  };

  const manejarSubmit = () => {
    agregarItem();
    setMostrarInput(false);
  };

  const cancelarAgregar = () => {
    setDescripcionAgregar('');
    setMostrarInput(false);
  };

  const manejarKeyDown = (e, funcion) => {
    if (e.key === 'Enter') {
      funcion();
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
              <p style={{ flex: 1, alignContent:'center'}}>{item.Descripcion}</p>
              <div>
                <button className='btn-admin btn-color' onClick={() => iniciarModificacion(item.idTipoAlojamiento)}>Modificar</button>
                <button className='btn-admin btn-color mg-left' onClick={() => eliminarItem(item.idTipoAlojamiento)}>Eliminar</button>
              </div>
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

export default Admin;