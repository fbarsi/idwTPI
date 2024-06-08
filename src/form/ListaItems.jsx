import React, { useState } from 'react';

function ListaItems() {
  const [items, setItems] = useState([
    { id: 1, descripcion: 'casa1' },
    { id: 2, descripcion: 'casa2' },
    { id: 3, descripcion: 'casa3' },
    { id: 4, descripcion: 'casa4' },
    { id: 5, descripcion: 'casa5' },
    { id: 6, descripcion: 'casa6' },
    { id: 7, descripcion: 'hotel' }
  ]);
  const [descripcion, setDescripcion] = useState('');

  const agregarItem = () => {
    const nuevoItem = { id: items.length + 1, descripcion };
    setItems([...items, nuevoItem]);
    setDescripcion('');
  };

  const eliminarItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const modificarItem = (id, nuevaDescripcion) => {
    setItems(items.map(item => item.id === id ? { ...item, descripcion: nuevaDescripcion } : item));
  };

  return (
    <div style={{ height: '800px', overflow: 'auto' }}>
        {items.map((item, index) => (
            <div key={item.id} style={{padding: '8px', display: 'flex', justifyContent: 'space-between', backgroundColor: index % 2 === 0 ? 'lightgray' : 'white' }}>
                <p style={{ flex: 1 }}>{item.descripcion}</p>
                <div>
                    <button id='btn-mod' onClick={() => modificarItem(item.id, 'Nueva descripción')}>Modificar</button>
                    <button id='btn-del' onClick={() => eliminarItem(item.id)}>Eliminar</button>
                </div>
            </div>
        ))}
        <button onClick={agregarItem}>Agregar item</button>
    </div>
  );
}

export default ListaItems;
