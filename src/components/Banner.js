import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
`;
const Left = styled.div`
  color: white;
  flex: 1;
  padding: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Heading = styled.h1`
  font-size: 54px;
`;
const Para = styled.p`
  padding-left: 16px;
  font-size: 18px;
`;
const ButtonContainer = styled.div`
  text-align: center;
`;
const Button = styled.button`
  margin-right: 5px;
  color: white;
  border: 1px solid #80558c;
  border-radius: 7px;
  padding: 8px;
  font-weight: bold;
  background-color: #80558c;
  cursor: pointer;
`;
const Right = styled.div`
  color: white;
  flex: 1;
  padding: 8%;
`;

const Banner = () => {
  return (
    <Container>
      <Left>
        <Heading>
          Ready to reforn <br /> your business?
        </Heading>
        <Para>
          A journey of Reformation, Revolution, and Reclamation.
          <br />
          We are Reformiqo.
        </Para>
        <ButtonContainer>
          <Button>Contact US</Button>
          <Button style={{ backgroundColor: "transparent" }}>
            Our Servicees
          </Button>
        </ButtonContainer>
      </Left>
      <Right>Right Banner</Right>
    </Container>
  );
};
export default Banner;
