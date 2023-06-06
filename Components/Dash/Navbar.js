import React from "react";
import styled from "styled-components";

export default function Navbar() {
  return (
    <Nav>
      <div className="Title">
        <h4>Hola Ortega Martin  (Agregar Nombre del Cliente)</h4>
        <h1>Bienvenido a <span>MiSeguro</span></h1>
      </div>

    </Nav>
  );
}


const Nav = styled.nav`
display: flex;
justify-content: space-between;
color:black;
.Title {
    h1{
        span{
            margin-left: 0.5rem;
            color: #ffc107;
            letter-spacing:0.2rem;
            font-family: "Poppins", sans-serif;
        }
    }
}`;
