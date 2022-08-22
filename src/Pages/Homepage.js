import NavBar from "../components/NavBar";
import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";

const Container = styled.div`
  background-color: #fff;
  background-image: url("https://images.unsplash.com/photo-1554091780-bb3e99c4b02a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80");
  background-repeat: no-repeat;
  background-size: cover;
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
