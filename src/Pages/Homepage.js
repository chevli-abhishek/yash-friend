import NavBar from "../components/NavBar";
import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import backGround from "../data/backGround.png";

const Container = styled.div`
  background-image: url("${backGround}");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;
const Homepage = () => {
  return (
    <Container>
      <NavBar />
      <Banner />
    </Container>
  );
};
export default Homepage;
