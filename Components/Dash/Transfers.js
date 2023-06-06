import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import avatarImage from "../Screenshot__709_.jpeg";
import { CardStyle } from "../ReusableStyles";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Historial() {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
  };

  const transactions = [
    {
      image: avatarImage,
      name: "Cuota N°1",
      time: "27-08-2023",
      amount: "$8.000",
    },
    {
      image: avatarImage,
      name: "Cuota N°2",
      time: "27-09-2023",
      amount: "$8.000",
    },
    {
      image: avatarImage,
      name: "Cuota N°3",
      time: "27-10-2023",
      amount: "$8.000",
    },
  ];

  return (
    <Section>
      <div className="title">
        <h2>Tus Pagos</h2>
      </div>
      <div className="transactions">
        {transactions.map((transaction) => (
          <div className="transaction" key={transaction.name}>
            <div className="transaction__title">
              <div className="transaction__title__image">
                <img src={transaction.image} alt="" />
              </div>
              <div className="transaction__title__details">
                <h3>{transaction.name}</h3>
                <h5>{transaction.time}</h5>
              </div>
            </div>
            <div className="transaction__amount">
              <span>{transaction.amount}</span>
            </div>
          </div>
        ))}
      </div>
      <a className="view" onClick={() => handleLinkClick("/MisPagos")}>
        Ver todos <HiArrowNarrowRight />
      </a>
    </Section>
  );
}

const Section = styled.section`
  ${CardStyle};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title {
    h2 {
      color: black;
      font-family: "Poppins", sans-serif;
      letter-spacing: 0.3rem;
    }
  }

  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;

    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      &__title {
        display: flex;
        gap: 1rem;

        &__image {
          img {
            height: 2.5rem;
            border-radius: 3rem;
          }
        }

        &__details {
        }
      }

      &__amount {
        background-color: #d7e41e1d;
        padding: 0.2rem 0.5rem;
        width: 4rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;

        &:hover {
          background-color: #f7edb5;
          span {
            color: black;
          }
        }

        span {
          color: white;
        }
      }
    }
  }

  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: white;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;

    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }

    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 375px) {
    .transactions {
      .transaction {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;
