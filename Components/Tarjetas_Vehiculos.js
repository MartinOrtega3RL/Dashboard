import React from "react";
import styled from "styled-components";

const vehiclesData = [ //Modificar por las consultas en Axios de la DB
  {
    id: 1,
    Titular: "Ortega Minardi Martin Eduardo",
    Agente: "Maldonado Gustavo Omar",
    AgenteNum:"11959",
    Vigencia:"29-02-2023 hasta el 29-02-2024",
    Marca: "Ducati",
    TipoVehiculo: "Motocicleta",
    Motor: "6GCH4001",
    Chasis: "FFF022300020",
    Cobertura: "C3",
    Patente:"IPX547",
    Descripcion: "Freno a Discos, Full inyection",
    Año:"2020",
  },
  {
    id: 2,
    Titular: "Ortega Minardi Martin Eduardo",
    Agente: "Maldonado Gustavo Omar",
    AgenteNum:"11959",
    Vigencia:"29-02-2023 hasta el 29-02-2024",
    Marca: "Toyota Hilux",
    TipoVehiculo: "Automovil",
    Motor: "6GCH5002",
    Chasis: "FFF09992812",
    Cobertura: "D3",
    Patente:"RTX309",
    Descripcion: "Caja Manual",
    Año:"2023",
  },
  {
    id: 3,
    Titular: "Ortega Minardi Martin Eduardo",
    Agente: "Maldonado Gustavo Omar",
    AgenteNum:"11959",
    Vigencia:"29-02-2023 hasta el 29-02-2024",
    Marca: "Ford Mustang",
    TipoVehiculo: "Automovil",
    Motor: "6GCH3001",
    Chasis: "FFF029128409",
    Cobertura: "C1",
    Patente:"OVE344",
    Descripcion: "Caja Automatica",
    Año:"2023",
  },
  {
    id: 4,
    Titular: "Ortega Minardi Martin Eduardo",
    Agente: "Maldonado Gustavo Omar",
    AgenteNum:"11959",
    Vigencia:"29-02-2023 hasta el 29-02-2024",
    Marca: "Ford Mustang",
    TipoVehiculo: "Automovil",
    Motor: "6GCH3001",
    Chasis: "FFF029128409",
    Cobertura: "C1",
    Patente:"OVE344",
    Descripcion: "Caja Automatica",
    Año:"2023",
  },
  {
    id: 5,
    Titular: "Ortega Minardi Martin Eduardo",
    Agente: "Maldonado Gustavo Omar",
    AgenteNum:"11959",
    Vigencia:"29-02-2023 hasta el 29-02-2024",
    Marca: "Ford Mustang",
    TipoVehiculo: "Automovil",
    Motor: "6GCH3001",
    Chasis: "FFF029128409",
    Cobertura: "C1",
    Patente:"OVE344",
    Descripcion: "Caja Automatica",
    Año:"2023",
  },
  {
    id: 6,
    Titular: "Ortega Minardi Martin Eduardo",
    Agente: "Maldonado Gustavo Omar",
    AgenteNum:"11959",
    Vigencia:"29-02-2023 hasta el 29-02-2024",
    Marca: "Ford Mustang",
    TipoVehiculo: "Automovil",
    Motor: "6GCH3001",
    Chasis: "FFF029128409",
    Cobertura: "C1",
    Patente:"OVE344",
    Descripcion: "Caja Automatica",
    Año:"2023",
  },
  
];

const MisVehiculos = () => {
  return (
      <CardContainer>
        {vehiclesData.map((vehicle) => (
          <div key={vehicle.id}>
            <Title>Cobertura vehiculo {vehicle.id}</Title>
            <DetailsContainer>
            <DetailItem>
                <Label>Titular:</Label>
                <Value><h3>{vehicle.Titular}</h3></Value>
              </DetailItem>
              <DetailItem>
                <Label>Agente:</Label>
                <Value><h3>{vehicle.Agente}</h3></Value>
              </DetailItem>
              <DetailItem>
                <Label>Agente N°:</Label>
                <Value><h3>{vehicle.AgenteNum}</h3></Value>
              </DetailItem>
              <DetailItem>
                <Label>Vigencia:</Label>
                <Value><h3>{vehicle.Vigencia}</h3></Value>
              </DetailItem>
              <DetailItem>
                <Label>Marca y modelo:</Label>
                <Value>{vehicle.Marca}</Value>
              </DetailItem>
              <DetailItem>
                <Label>Tipo de Vehiculo:</Label>
                <Value>{vehicle.TipoVehiculo}</Value>
              </DetailItem>
              <DetailItem>
                <Label>Motor:</Label>
                <Value>{vehicle.Motor}</Value>
              </DetailItem>
              <DetailItem>
                <Label>Chasis:</Label>
                <Value>{vehicle.Chasis}</Value>
              </DetailItem>
              <DetailItem>
                <Label>Cobertura</Label>
                <Value>{vehicle.Cobertura}</Value>
              </DetailItem>
              <DetailItem>
                <Label>Patente:</Label>
                <Value>{vehicle.Patente}</Value>
              </DetailItem>
              <DetailItem>
                <Label>Descripcion:</Label>
                <Value>{vehicle.Descripcion}</Value>
              </DetailItem>
              <DetailItem>
                <Label>Año:</Label>
                <Value>{vehicle.Año}</Value>
              </DetailItem>
            </DetailsContainer>
          </div>
        ))}
      </CardContainer>
  );
};

const CardContainer = styled.div`
margin-left :18vw;
padding:2rem;
height:100%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  background-color: #006db2;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin: 0;
`;

const DetailsContainer = styled.div`
  margin-top: 16px;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Label = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const Value = styled.span`
  margin-left: 8px;
  font-size: 20px;
`;

export default MisVehiculos;
