import React from "react";
import styled from "styled-components";
import Dashboard from "./Components/Dash/Dashboard";
import Sidebar from "./Components/Sidebar";
import MisVehiculos from "./Components/Tarjetas_Vehiculos";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MisPagos from "./Components/MisPagos";
import ModuloInformacion from "./Components/Denunciar_Siniestro/Denuncia";


function App() {
  return (
    <BrowserRouter>
      <Div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/Vehiculos" element={<MisVehiculos/>} />
          <Route path="/MisPagos" element={<MisPagos/>} />
          <Route path="/Siniestros" element = {<ModuloInformacion/>}/>
        </Routes>
      </Div>
    </BrowserRouter>
  );
}

const Div = styled.div`
  position: relative;
`;

export default App;
