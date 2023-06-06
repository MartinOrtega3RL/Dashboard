import React from 'react';
import styled from "styled-components";
import FAQ from './FAQ';
import Resumen from './Home';
import Navbar from './Navbar';
import Profile from './Profile';
import Siniestro from './Siniestros';
import Historial from './Transfers';

export default function Dashboard() {
  return (
    <Section>
        <Navbar/>
        <div className="grid">
            <div className="row_one"> 
                <Resumen/>  {/*Analisis de gastos o pagos */}
                <FAQ/> {/*Cuotas Faltantes o por Pagar*/}
            </div>
            <div className="row_two">  
                <Historial/>  {/*Reemplazar por cuotas pagadas */}
                <Siniestro/>
                <Profile/>
            </div>
        </div>
    </Section>
  )
}


const Section = styled.section`
margin-left :18vw;
padding:2rem;
height:100%;
.grid{
    display:flex;
    flex-direction:column;
    height:100%;
    gap: 1rem;
    margin-top:2rem;
    .row_one{
        display:grid;
        grid-template-columns: repeat(2,1fr);
        height:50%;
        gap:1rem;
    }
    .row_two{
        display:grid;
        grid-template-columns: repeat(3,1fr);
        height:50%;
        gap:1rem;
    }
}`;
