import NavBar from "../components/NavBar";
import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import backGround from "../data/backGround.png";
import Footer from "components/Footer";
import ShortAbout from "components/ShortAbout";

const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("${backGround}");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;
const Homepage = () => {
  return (
    <Container>
      <NavBar />
      <Banner />
      <ShortAbout />
      <Footer />
    </Container>
  );
};
export default Homepage;
