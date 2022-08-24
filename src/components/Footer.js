import React from "react";
import styled from "styled-components";
import CompLogo from "../data/Logo.png";
import map from "../data/map.png";

const Container = styled.div`
  background-color: #452858;
  display: flex;
  padding: 7.5vh 5vw;
`;
const CompInfo = styled.div`
  color: white;
  flex: 1;
`;
const Links = styled.div`
  flex: 1;
  padding: 5px 0;
  margin-left: 10%;
  display: flex;
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-evenly;
`;
const Link = styled.a`
  text-decoration: none;
  color: white;
  margin-right: ;
`;

const Location = styled.div`
  flex: 1;
`;
const Footer = () => {
  return (
    <Container>
      <CompInfo>
        <img src={CompLogo} alt="Company Logo"></img>
        <h3>Reformiqo Business Service PVT. LTD.</h3>
        <p>
          A journey of Reformation, Revolution, and <br /> Reclamation. We are
          Reformiqo.
        </p>
      </CompInfo>
      <Links>
        <LinkContainer>
          <Link href="">Home</Link>
          <Link href="">About</Link>
          <Link href="">Services</Link>
          <Link href="">Career</Link>
        </LinkContainer>
        <LinkContainer>
          <Link href="">Account</Link>
          <Link href="">Sign Up</Link>
          <Link href="">Sign In</Link>
          <Link href="">Forgot Password</Link>
        </LinkContainer>
      </Links>

      <Location>
        <img style={{ cursor: "pointer" }} src={map} alt="MapImage"></img>
      </Location>
    </Container>
  );
};
export default Footer;
