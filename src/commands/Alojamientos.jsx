import React, { useState, useEffect } from 'react';

const Alojamientos = ({ alojamientos, tiposAlojamiento, setAlojamientos }) => {
  const [formularioVisible, setFormularioVisible] = useState(false);
  const [modificarAlojamiento, setmodificarAlojamiento] = useState({});

  const [nuevoAlojamiento, setNuevoAlojamiento] = useState({
    Titulo: '',
    Descripcion: '',
    idTipoAlojamiento: '',
    Latitud: '',
    Longitud: '',
    PrecioPorDia: '',
    CantidadDormitorios: '',
    CantidadBanios: '',
    Estado: '',
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
      Estado: '',
    });
  };

  const guardarCambios = () => {
    // Lógica para guardar los cambios (enviar a la base de datos)
    // Usar nuevoAlojamiento para enviar los datos
  };

  const buscarDescripcion = (idTipo) => {
    if (tiposAlojamiento.length) {
      return (tiposAlojamiento.find(itemTipo => itemTipo.idTipoAlojamiento === idTipo).Descripcion)
    } else {
      console.log("no hay na")
    }
  }
  
  const formulariooo = (datos) => {
    return(
      <form className='form-alojamientos'>
          <div>
            <label htmlFor='titulo'>Titulo</label>
            <input
              className='input-admin' 
              id='titulo'
              type='text'
              value={datos.Titulo}
              onChange={(e) => setNuevoAlojamiento({ ...datos, Titulo: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor='descripcion'>Descripción</label>
            <input
              className='input-admin' 
              id='descripcion'
              type='text'
              value={datos.Descripcion}
              onChange={(e) => setNuevoAlojamiento({ ...datos, Descripcion: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor='tipo'>Tipo</label>
            <select
              id='tipo'
              className='input-admin' 
              value={datos.idTipoAlojamiento}
              onChange={(e) => setNuevoAlojamiento({ ...datos, idTipoAlojamiento: e.target.value })}
            >
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
              type='text'
              value={datos.Latitud}
              onChange={(e) => setNuevoAlojamiento({ ...datos, Latitud: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor='longitud'>Longitud</label>
            <input
              className='input-admin' 
              id='longitud'
              type='text'
              value={datos.Longitud}
              onChange={(e) => setNuevoAlojamiento({ ...datos, Longitud: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor='precioPorDia'>Precio por dia</label>
            <input
              className='input-admin' 
              id='precioPorDia'
              type='text'
              value={datos.PrecioPorDia}
              onChange={(e) => setNuevoAlojamiento({ ...datos, PrecioPorDia: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor='cantidadDormitorios'>Cantidad de dormitorios</label>
            <input
              className='input-admin' 
              id='cantidadDormitorios'
              type='text'
              value={datos.CantidadDormitorios}
              onChange={(e) => setNuevoAlojamiento({ ...datos, CantidadDormitorios: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor='cantidadBanios'>Cantidad de baños</label>
            <input
              className='input-admin' 
              id='cantidadBanios'
              type='text'
              value={datos.CantidadBanios}
              onChange={(e) => setNuevoAlojamiento({ ...datos, CantidadBanios: e.target.value })}
            />
          </div>
          
          <div>
            <label htmlFor='estado'>Estado</label>
            <select
              id='estado'
              className='input-admin' 
              value={datos.Estado}
              onChange={(e) => setNuevoAlojamiento({ ...datos, Estado: e.target.value })}
            >
              <option value='Disponible'>Disponible</option>
              <option value='Reservado'>Reservado</option>
            </select>
          </div>
          <div>
            <button className='btn-admin btn-accept' onClick={guardarCambios}>Guardar</button>
            <button className='btn-admin mg-left' onClick={ocultarFormulario}>Cancelar</button>
          </div>
          
        </form>
    )
  }

  return (
    <>
      {/* formulario */}

      {formularioVisible ? (
        formulariooo(nuevoAlojamiento)
      ) : (
        <button className='btn-admin btn-color' onClick={mostrarFormulario}>Crear</button>
      )}

      {/* fin del formulario */}

      {alojamientos.map((item, index) => (
        <div className='admin-item-list' key={item.idAlojamiento} style={{backgroundColor: index % 2 === 0 ? '#dddddd' : '#cccccc' }}>
          <p style={{ flex: 1, alignContent:'center'}}>{item.Descripcion} - {buscarDescripcion(item.idTipoAlojamiento)}</p>
          <div>
            <button className='btn-admin btn-color'>Modificar</button>
            <button className='btn-admin btn-color mg-left'>Eliminar</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Alojamientos;