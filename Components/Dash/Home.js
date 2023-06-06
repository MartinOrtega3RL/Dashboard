import React from "react";
import styled from "styled-components";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { CardStyle } from "../ReusableStyles";
import { FaCar } from "react-icons/fa";

export default function Resumen() {
  return (
    <Section> 
      <div className="analytic "> 
        <div className="content">
          <h5>Cuotas Pendientes</h5> {/* Consulta  */ }
          <h2>12</h2>
        </div>
        <div className="logo">
          <BsFillCalendar2WeekFill /> 
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <FaCar />
        </div>
        <div className="content">
          <h5>Vehiculos Asegurados</h5> {/* Consulta de vehiculos totales  */ }
          <h2>3</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <BiGroup />
        </div>
        <div className="content">
          <h5>Cuotas Pagadas</h5> {/* Consulta de Cuotas Pagadas*/ }
          <h2>5</h2>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <h5>Ultimo Pago</h5>  {/* Consulta del Ultimo Pago*/ }
          <h2>27-02-2023</h2>
        </div>
        <div className="logo">
          <FiActivity />
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analytic {
    ${CardStyle};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #ffc107;
      color: black;
      svg {
        color: black;
      }
    }
    .logo {
      background-color: white;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;