import React, { useState, useEffect } from 'react';

const Alojamientos2 = ({ alojamientos, tiposAlojamiento, setAlojamientos }) => {
  const [camposVacios, setCamposVacios] = useState({
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
  const [formularioVisible, setFormularioVisible] = useState(false);
  const [itemAModificar, setItemAModificar] = useState('');
  const [nuevoAlojamiento, setNuevoAlojamiento] = useState(camposVacios);
  const [datosOriginales, setDatosOriginales] = useState('');
  const [datosAModificar, setDatosAModificar] = useState('');
  const [descripciones, setDescripciones] = useState({});

  const agregarItem = async () => {
    try {
      const response = await fetch('http://localhost:3001/alojamiento/createAlojamiento', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(nuevoAlojamiento)
      });
      if (response.ok) {
        const respuesta = await response.json();
        const nuevoItem = {
          idAlojamiento: respuesta.id, 
          ...nuevoAlojamiento
        };
        setAlojamientos(oldItems => [...oldItems, nuevoItem]);
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
        setAlojamientos(oldItems => oldItems.filter(item => item.idAlojamiento !== idAlojamiento));
      } else {
        alert('Error al eliminar el alojamiento')
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error no se pudo establecer el servicio')
    }
  };

  const obtenerDescripcion = async (idTipoAlojamiento) => {
    if (descripciones[idTipoAlojamiento]) {
      return descripciones[idTipoAlojamiento];
    } else {
      try {
        const response = await fetch(`http://localhost:3001/tiposAlojamiento/getTipoAlojamiento/${idTipoAlojamiento}`);
        if (response.ok) {
          const data = await response.json();
          setDescripciones(prevState => ({ ...prevState, [idTipoAlojamiento]: data.Descripcion }));
          return data.Descripcion;
        } else {
          return 'Descripción no encontrada';
        }
      } catch (error) {
        console.error('Error:', error);
        return 'Error al obtener la descripción';
      }
    }
  };

  useEffect(() => {
    const fetchDescriptions = async () => {
      for (const item of alojamientos) {
        await obtenerDescripcion(item.idTipoAlojamiento);
      }
    };
    fetchDescriptions();
  }, [alojamientos]);

  const mostrarFormulario = () => setFormularioVisible(true);
  const ocultarFormulario = () => setFormularioVisible(false);
  const enviar = () => {
    agregarItem();
    ocultarFormulario();
  };

  return (
    <>
      {formularioVisible ? (
        <div className='form-alojamientos'>
          <div>
            <label htmlFor='titulo'>Título</label>
            <input
              className='input-admin'
              id='titulo'
              type='text'
              value={nuevoAlojamiento.Titulo}
              onChange={(e) => setNuevoAlojamiento({ ...nuevoAlojamiento, Titulo: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor='descripcion'>Descripción</label>
            <input
              className='input-admin'
              id='descripcion'
              type='text'
              value={nuevoAlojamiento.Descripcion}
              onChange={(e) => setNuevoAlojamiento({ ...nuevoAlojamiento, Descripcion: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor='tipo'>Tipo</label>
            <select
              id='tipo'
              className='input-admin' 
              value={nuevoAlojamiento.idTipoAlojamiento}
              onChange={(e) => setNuevoAlojamiento({ ...nuevoAlojamiento, idTipoAlojamiento: e.target.value })}
            > 
              <option value=''>Elija un tipo</option>
              {tiposAlojamiento.map((tipo) => (
                <option key={tipo.idTipoAlojamiento} value={tipo.idTipoAlojamiento}>
                  {tipo.Descripcion}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor='latitud'>Latitud</label>
            <input
              className='input-admin' 
              id='latitud'
              type='number'
              value={nuevoAlojamiento.Latitud}
              onChange={(e) => setNuevoAlojamiento({ ...nuevoAlojamiento, Latitud: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor='longitud'>Longitud</label>
            <input
              className='input-admin' 
              id='longitud'
              type='number'
              value={nuevoAlojamiento.Longitud}
              onChange={(e) => setNuevoAlojamiento({ ...nuevoAlojamiento, Longitud: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor='precioPorDia'>Precio por dia</label>
            <input
              className='input-admin' 
              id='precioPorDia'
              type='number'
              value={nuevoAlojamiento.PrecioPorDia}
              onChange={(e) => setNuevoAlojamiento({ ...nuevoAlojamiento, PrecioPorDia: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor='cantidadDormitorios'>Cantidad de dormitorios</label>
            <input
              className='input-admin' 
              id='cantidadDormitorios'
              type='number'
              value={nuevoAlojamiento.CantidadDormitorios}
              onChange={(e) => setNuevoAlojamiento({ ...nuevoAlojamiento, CantidadDormitorios: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor='cantidadBanios'>Cantidad de baños</label>
            <input
              className='input-admin' 
              id='cantidadBanios'
              type='number'
              value={nuevoAlojamiento.CantidadBanios}
              onChange={(e) => setNuevoAlojamiento({ ...nuevoAlojamiento, CantidadBanios: e.target.value })}
            />
          </div>
          
          <div>
            <label htmlFor='estado'>Estado</label>
            <select
              id='estado'
              className='input-admin' 
              value={nuevoAlojamiento.Estado}
              onChange={(e) => setNuevoAlojamiento({ ...nuevoAlojamiento, Estado: e.target.value })}
            >
              <option value='Disponible'>Disponible</option>
              <option value='Reservado'>Reservado</option>
            </select>
          </div>
          
          <div>
            <button className='btn-admin btn-accept' onClick={enviar}>Guardar</button>
            <button className='btn-admin mg-left' onClick={ocultarFormulario}>Cancelar</button>
          </div>  
        </div>
      ) : (
        <button className='btn-admin btn-color mg-bottom' onClick={mostrarFormulario}>Crear</button>
      )}
      {/* Fin del formulario */}
      {alojamientos.map((item, index) => (
        <div className='admin-item-list' key={item.idAlojamiento} style={{backgroundColor: index % 2 === 0 ? '#dddddd' : '#cccccc' }}>
          <p style={{ flex: 1, alignContent:'center'}}>
            {item.Descripcion} - {descripciones[item.idTipoAlojamiento] || 'Cargando...'}
          </p>
          <div>
            <button className='btn-admin btn-color'>Modificar</button>
            <button className='btn-admin btn-color mg-left'>Eliminar</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Alojamientos2;
