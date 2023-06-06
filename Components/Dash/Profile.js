import React from "react";
import styled from "styled-components";
import image from "../Screenshot__709_.jpeg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CardStyle } from "../ReusableStyles";
export default function Profile() {
  return (
    <Section>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
        <h2>Ortega Martin</h2>
        <h5>
          <HiOutlineLocationMarker /> Formosa, Argentina
        </h5>
      </div>
    </Section>
  );
}
const Section = styled.section`
  ${CardStyle};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    img {
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    h2,
    h5 {
      color: #ffc107;
      font-family: "Poppins", sans-serif;
      letter-spacing: 0.3rem;
    }
    h5 {
      letter-spacing: 0.2rem;
    }
  }
`;