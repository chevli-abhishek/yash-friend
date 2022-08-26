import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 17vh;
  height: 17vh;
  background: #272a2e;
  border-radius: 10px;
  margin-right: 1.5%;
  text-align: left;
  padding: 20px;
  margin: 10px;
  flex-wrap: wrap;
  cursor: pointer;
`;
const ImageContainer = styled.div`
  width: 25px;
  height: 25px;
  padding: 20px;
  border-radius: 50%;
  background-color: #fff;
  line-height: 25px;
  text-align: center;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  position: relative;
  top: 50%;
  transform: translate(0%, -50%);
`;
const Title = styled.h4`
  color: white;
  margin: 5px;
`;
const Description = styled.p`
  font-size: 12px;
  color: white;
  text-align: justify;
`;
const Card = (props) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={props.src} />
      </ImageContainer>

      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Container>
  );
};
export default Card;
