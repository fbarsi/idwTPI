import React, { useState, useEffect } from 'react';
import Alojamientos from '../commands/Alojamientos';
import TiposAlojamiento from '../commands/TiposAlojamiento';


const Admin = () => {
  const [alojamientos, setAlojamientos] = useState([]);
  const [tiposAlojamiento, setTiposAlojamiento] = useState([]);
  const [alojamientoServicios, setAlojamientoServicios] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [imagenes, setImagenes] = useState([]);

  
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


  return (
    <div>
			<Alojamientos items={alojamientos} setItems={setAlojamientos} itemsTipos={tiposAlojamiento}/>
      <TiposAlojamiento asd={tiposAlojamiento} setAsd={setTiposAlojamiento}/>
    </div>
  );
}

export default Admin;