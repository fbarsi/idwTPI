import React, { useState, useEffect } from 'react';

const Servicios = ({ servicios, setServicios}) => {
  const camposVacios = {
    Nombre: '',
  };

  const [formularioVisible, setFormularioVisible] = useState(false);
  const [itemAModificar, setItemAModificar] = useState('');
  const [nuevoServicio, setNuevoServicio] = useState(camposVacios);
  const [datosOriginales, setDatosOriginales] = useState('');
  const [datosAModificar, setDatosAModificar] = useState('');
  
  const agregarItem = async () => {
    try {
      const response = await fetch('http://localhost:3001/servicio/createServicio', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(nuevoServicio)
      });
      if (response.ok) {
        const respuesta = await response.json();
        const nuevoItem = {
            idServicio: respuesta.id, 
            ...nuevoServicio
        };
        setServicios(oldItems => [...oldItems, nuevoItem]);
      } else {
        alert('Error al crear el tipo de alojamiento')
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error no se pudo establecer el servicio')
    }
  };

  const eliminarItem = async (idServicio) => {
    try {
      const response = await fetch(`http://localhost:3001/servicio/deleteServicio/${idServicio}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setServicios(oldItems => oldItems.filter(item => item.idServicio !== idServicio));
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
    setNuevoServicio(camposVacios);
  };

  const enviar = () => {
    agregarItem();
    setNuevoServicio(camposVacios);
  }
  
  const iniciarModificacion = (idServicio) => {
    const item = tiposAlojamiento.find(item => item.idServicio === idServicio);
    setDatosOriginales(item);
    setDatosAModificar(item);
    setItemAModificar(idServicio);
  };

  const modificarItem = async (idServicio) => {
    try {
      const response = await fetch(`http://localhost:3001/servicio/putServicio/${idServicio}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(datosAModificar)
      });
      if (response.ok) {
        setServicios(oldItems => oldItems.map(item => item.idServicio === idServicio ? { ...datosAModificar } : item));
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
          value={nuevoServicio.Nombre} 
          onChange={(e) => setNuevoServicio({ ...nuevoServicio, Nombre: e.target.value })} 
          autoFocus
        />

        <button className='btn-admin btn-accept mg-left' onClick={enviar}>Aceptar</button>
        <button className='btn-admin mg-left mg-bottom' onClick={ocultarFormulario}>Cancelar</button>
      </>
      ) : (
        <button className='btn-admin btn-color mg-bottom' onClick={mostrarFormulario}>Crear</button>
      )}
      {servicios.map((item, index) => (
        <div className='admin-item-list' key={item.idServicio} style={{backgroundColor: index % 2 === 0 ? '#dddddd' : '#cccccc' }}>
          {itemAModificar === item.idServicio ? (
            <>
              <input 
                className='input-admin' 
                value={datosAModificar.Nombre} 
                onChange={(e) => setDatosAModificar({...datosAModificar, Nombre: e.target.value})} 
                autoFocus
              />
              <div>
              <button className='btn-admin btn-accept' onClick={() => modificarItem(item.idServicio)}>Guardar</button>
              <button className='btn-admin mg-left' onClick={cancelarModificacion}>Cancelar</button>
              </div>
            </>
            ) : (
            <>
              <p style={{ flex: 1, alignContent:'center'}}>{item.Nombre}</p>
              <div>
              <button className='btn-admin btn-color' onClick={() => iniciarModificacion(item.idServicio)}>Modificar</button>
              <button className='btn-admin btn-color mg-left' onClick={() => eliminarItem(item.idServicio)}>Eliminar</button>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default Servicios;