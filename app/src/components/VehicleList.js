
// src/components/VehicleList.js
import React from "react";

const VehicleList = ({ vehicles }) => {
    return (
        <div>
            <h2>Lista de Veículos</h2>
            <ul>
                {vehicles.map(vehicle => (
                    <li key={vehicle.id}>
                        <p>Modelo: {vehicle.nome_modelo}</p>
                        <p>Ano: {vehicle.ano}</p>
                        <p>Combustível: {vehicle.combustivel}</p>
                        <p>Número de Portas: {vehicle.num_portas}</p>
                        <p>Cor: {vehicle.cor}</p>
                        <p>Valor: R$ {vehicle.valor}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VehicleList;
