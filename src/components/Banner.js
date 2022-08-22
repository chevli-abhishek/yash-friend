import React from "react";
import styled from "styled-components";
import ofcStaff from "../data/pngTree.png";

const Container = styled.div`
  padding: 5.75vh 9.75vw;
  display: flex;
  height: 71vh;
`;
const Left = styled.div`
  color: white;
  flex: 1;
`;
const Heading = styled.h1`
  margin-top: 20vh;
  font-size: 2.5rem;
  width: 100%;
`;
const Para = styled.p`
  font-size: 1rem;
  width: 100%;
`;
const ButtonContainer = styled.div`
  margin-top: 10%;
  width: 100%;
`;
const Button = styled.button`
  margin-right: 2.5vw;
  width: 12vw;
  color: white;
  border: 1px solid #7623ad;
  border-radius: 7px;
  padding: 8px;
  background-color: #7623ad;
  cursor: pointer;
`;
const Right = styled.div`
  color: white;
  flex: 1;
  height: 100%;
`;
const ImgBack = styled.div`
  margin-top: 12.5vh;
  margin-left: 12.5vw;
  height: 52.5vh;
  width: 27vw;
  position: relative;
  z-index: 2;
  border: 1px solid #000;
  border-radius: 7px;
  background-color: #212222;
`;
const Image = styled.img`
  height: 119.25%;
  width: 90%;
  margin-left: 6.5%;
  position: relative;
  bottom: 10vh;
`;

const Banner = () => {
  return (
    <Container>
      <Left>
        <Heading>
          Ready to reform <br /> your business?
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
      <Right>
        <ImgBack>
          <Image src={ofcStaff} alt="An Image" />
        </ImgBack>
      </Right>
    </Container>
  );
};
export default Banner;
