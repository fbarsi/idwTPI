import React, { useState } from 'react'

const AddTipoAlojamiento = () => {
    const [descripcion, setDescripcion] = useState('');

    const enviar = async (e) => {
        e.preventDefault();
        const data = {
            Descripcion: descripcion
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
                alert('Se creó correctamente el tipo de alojamiento');
            } else {
                alert('Error al crear el tipo de alojamiento')
            }
        } catch (error) {
            console.error('Error:', error);
                alert('Error no se pudo establecer el servicio')
        }
    }

    return (
        <div>
            <h2>Alta tipo de alojamiento</h2>
            <form onSubmit={enviar}>
                <div>
                    <label htmlFor="descripcion"> Descripcion: </label>
                    <input 
                        type="text" 
                        id="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default AddTipoAlojamiento;
