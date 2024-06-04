import "../css/Card.css";
import React from "react";

const Card = ({ imagen, titulo, ciudad, caracteristicas, precio}) => {
    return (
        <div className="card">
            <img src={imagen} alt={titulo} />
            <div className="card-info">
                <h3 className="card-title">{titulo}</h3>
                <p className="card-subtitle opacity70">{ciudad}</p>
                <ul>
                    {caracteristicas.map((caracteristica, index) => (
                        <li key={index}>- {caracteristica}</li>
                    ))}
                </ul>
                <h3 className="price">{precio} <span className="opacity70">/ noche</span></h3>
            </div>
        </div>
    );
};

export default Card;