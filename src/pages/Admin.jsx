import React, { useState, useEffect } from 'react';
import Alojamientos from '../commands/Alojamientos';
import TiposAlojamiento from '../commands/TiposAlojamiento';
import Alojamientos2 from '../commands/Alojamientos2';
import Servicios from '../commands/Servicios';


const Admin = () => {
  const [alojamientos, setAlojamientos] = useState([]);
  const [tiposAlojamiento, setTiposAlojamiento] = useState([]);
  const [tiposAlojamiento2, setTiposAlojamiento2] = useState([]);
  const [alojamientoServicios, setAlojamientoServicios] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const obtenerTiposAlojamiento = async () => {
      try {
        const response = await fetch('http://localhost:3001/tiposAlojamiento/getTiposAlojamiento');
        const data = await response.json();
        setTiposAlojamiento(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    obtenerTiposAlojamiento();
  }, []);
  
  useEffect(() => {
    const obtenerServicios = async () => {
      try {
        const response = await fetch('http://localhost:3001/servicio/getAllServicios');
        const data = await response.json();
        setServicios(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    obtenerServicios();
  }, []);
  
  useEffect(() => {
    const obtenerImagenes = async () => {
      try {
        const response = await fetch('http://localhost:3001/imagen/getAllImagenes');
        const data = await response.json();
        setImagenes(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    obtenerImagenes();
  }, []);
  
  useEffect(() => {
    const obtenerAlojamientoServicios = async () => {
      try {
        const response = await fetch('http://localhost:3001/alojamientosServicios/getAllAlojamientoServicios');
        const data = await response.json();
        setAlojamientoServicios(data);
      } catch (error) {
          console.error('Error:', error);
      }
    };
    obtenerAlojamientoServicios();
  }, []);
          
  useEffect(() => {
    const obtenerAlojamientos = async () => {
      try {
        const response = await fetch('http://localhost:3001/alojamiento/getAlojamientos');
        const data = await response.json();
        setAlojamientos(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    obtenerAlojamientos();
  }, []);
          
  return (
    <div className='admin-list'>
      <h2 style={{fontWeight: '500'}}>Modo administrador</h2>
			<h4 style={{color: 'red', marginBottom: '2em'}}>¡Precaución! Eliminar un item es una acción irreversible.</h4>
      <TiposAlojamiento tiposAlojamiento={tiposAlojamiento} setTiposAlojamiento={setTiposAlojamiento}/>
      <br />
      <Servicios servicios={servicios} setServicios={setServicios}/>
      <br />
			<Alojamientos alojamientos={alojamientos} setAlojamientos={setAlojamientos} tiposAlojamiento={tiposAlojamiento}/>
    </div>
  );
}

export default Admin;