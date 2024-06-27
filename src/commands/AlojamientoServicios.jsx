import React, { useState, useEffect } from 'react';

const Alojamientos = ({ items, itemsTipos, setItems }) => {
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

    // logica de la funcion agregar

  };

  const eliminarItem = async (idAlojamiento) => {
    // logica de la funcion eliminar
  };


  return (
    <div className='admin-list'>
			<h2 style={{fontWeight: '500'}}>Modo administrador</h2>
			<h4 style={{color: 'red', marginBottom: '2em'}}>¡Precaución! Eliminar un item es una acción irreversible.</h4>
      <select>
        {itemsTipos.map(tipo => (
          <option key={tipo.idTipoAlojamiento} value={tipo.idTipoAlojamiento}>
            {tipo.Descripcion}
          </option>
        ))}
      </select>
      <button className='btn-admin btn-color' onClick={agregarItem}>Crear</button> {/* Boton Crear */}

      {items.map((item, index) => (
        <div className='admin-item-list' key={item.idAlojamiento} style={{backgroundColor: index % 2 === 0 ? '#dddddd' : '#cccccc' }}>
          <p style={{ flex: 1, alignContent:'center'}}>{item.Descripcion} - {item.Latitud} - {itemsTipos.find(itemTipo => itemTipo.idTipoAlojamiento === item.idTipoAlojamiento).Descripcion}</p>
          <div>
            <button className='btn-admin btn-color'>Modificar</button> {/* Boton Modificar */}
            <button className='btn-admin btn-color mg-left'>Eliminar</button> {/* Boton Eliminar */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Alojamientos;