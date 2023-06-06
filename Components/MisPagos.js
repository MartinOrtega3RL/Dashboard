import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 19vw;
  border-radius: 10px;
  padding: 1rem;
`;

const Title = styled.h1`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  margin: 0;
  margin-top: 20px;
text-align: center;
  background-color: #ffc107;
  color: #000;
  margin-bottom: 4rem;
`;

const Subtitle = styled.h4`
  margin-bottom: 1rem;
`;

const Divider = styled.hr`
  border-top: 3px solid #000;
  margin-bottom: 1rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid #000;
  padding-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: bold;

  &.paid {
    background-color: green;
    color: #000;
  }

  &.pending {
    background-color: #ffc107;
    color: #000;
  }

  &.pay {
    background-color: red;
    color: #000;
    cursor: pointer;
  }
`;

const ImporteContainer = styled.div`
  text-align: center;
  flex: 1;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const Template = () => {
  const cuotas = [
    { vencimiento: "05/11/2022", importe: "$500.5", estado: "paid" },
    { vencimiento: "05/12/2022", importe: "$600.6", estado: "pending" },
    { vencimiento: "05/01/2023", importe: "$700.7", estado: "pending" },
  ];

  return (
    <Container>
      <Title>Pagos</Title>
      <Subtitle>Forma de pago: Banco Caja de Ahorro XXX</Subtitle>
      <Divider />

      {cuotas.map((cuota, index) => (
        <Row key={index}>
          <TextContainer>
            <h3>Cuota de vencimiento</h3>
            <p>{cuota.vencimiento}</p>
          </TextContainer>
          <ImporteContainer>
            <h3>Importe</h3>
            <p>{cuota.importe}</p>
          </ImporteContainer>
          <ButtonContainer>
            {cuota.estado === "paid" && (
              <Button className="paid">Pagado</Button>
            )}
            {cuota.estado === "pending" && (
              <Button className="pay">Pagar</Button>
            )}
            {cuota.estado === "pending" && (
              <Button className="pending">Pendiente</Button>
            )}
          </ButtonContainer>
        </Row>
      ))}
    </Container>
  );
};

export default Template;
