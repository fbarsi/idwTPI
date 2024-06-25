// AGREGAR
export const agregarItem = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      const respuesta = await response.json();
      return(respuesta.id)
    } else {
      alert('Error al crear')
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error no se pudo establecer el servicio')
  }
};



// ELIMINAR
export const eliminarItem = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'DELETE'
    });
    if (response.ok) {
      return(response.ok)
    } else {
      alert('Error al eliminar')
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error no se pudo establecer el servicio')
  }
};



// MODIFICAR
export const modificarItem = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      return(response.ok)
    } else {
      alert('Error al modificar')
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error no se pudo establecer el servicio')
  }
};