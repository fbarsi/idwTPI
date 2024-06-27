import React, { useState, useEffect } from 'react';

const TiposAlojamiento = ({ tiposAlojamiento, setTiposAlojamiento}) => {
  const camposVacios = {
    Descripcion: '',
  };

  const [formularioVisible, setFormularioVisible] = useState(false);
  const [itemAModificar, setItemAModificar] = useState('');
  const [nuevoTipoAlojamiento, setNuevoTipoAlojamiento] = useState(camposVacios);
  const [datosOriginales, setDatosOriginales] = useState('');
  const [datosAModificar, setDatosAModificar] = useState('');
  
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
    setNuevoTipoAlojamiento(camposVacios);
  };

  const enviar = () => {
    agregarItem();
    setNuevoTipoAlojamiento(camposVacios);
  }
  
  const iniciarModificacion = (idTipoAlojamiento) => {
    const item = tiposAlojamiento.find(item => item.idTipoAlojamiento === idTipoAlojamiento);
    setDatosOriginales(item);
    setDatosAModificar(item);
    setItemAModificar(idTipoAlojamiento);
  };

  const modificarItem = async (idTipoAlojamiento) => {
    try {
      const response = await fetch(`http://localhost:3001/tiposAlojamiento/putTipoAlojamiento/${idTipoAlojamiento}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(datosAModificar)
      });
      if (response.ok) {
        setTiposAlojamiento(oldItems => oldItems.map(item => item.idTipoAlojamiento === idTipoAlojamiento ? { ...datosAModificar } : item));
        setItemAModificar('');
      } else {
        alert('Error al modificar el tipo de alojamiento')
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error no se pudo establecer el servicio')
    }
  };

  const cancelarModificacion = () => {
    setDatosAModificar(datosOriginales);
    setItemAModificar('');
  };

  
  return (
    <>
      {formularioVisible ? (
      <>
        <input 
          className='input-admin' 
          value={nuevoTipoAlojamiento.Descripcion} 
          onChange={(e) => setNuevoTipoAlojamiento({ ...nuevoTipoAlojamiento, Descripcion: e.target.value })} 
          autoFocus
        />


        <button className='btn-admin btn-accept mg-left' onClick={enviar}>Aceptar</button>
        <button className='btn-admin mg-left mg-bottom' onClick={ocultarFormulario}>Cancelar</button>
      </>
      ) : (
        <button className='btn-admin btn-color mg-bottom' onClick={mostrarFormulario}>Crear</button>
      )}
      {tiposAlojamiento.map((item, index) => (
        <div className='admin-item-list' key={item.idTipoAlojamiento} style={{backgroundColor: index % 2 === 0 ? '#dddddd' : '#cccccc' }}>
          {itemAModificar === item.idTipoAlojamiento ? (
            <>
                <input 
                  className='input-admin' 
                  value={datosAModificar.Descripcion} 
                  onChange={(e) => setDatosAModificar({...datosAModificar, Descripcion: e.target.value})} 
                  autoFocus
                />
                <div>
                <button className='btn-admin btn-accept' onClick={() => modificarItem(item.idTipoAlojamiento)}>Guardar</button>
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
    </>
  );
}

export default TiposAlojamiento;