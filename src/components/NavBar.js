import React from "react";
import styled from "styled-components";
import CompLogo from "../data/Logo.png";

const Container = styled.div`
  padding: 5.75vh 9.75vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 50%;
`;
const Center = styled.div`
  flex: 1;
`;
const Link = styled.a`
  text-decoration: none;
  color: white;
  margin-right: 10%;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
`;
const Button = styled.button`
  margin-left: auto;
  margin-right: 13.07%;
  width: 6vw;
  color: white;
  border: 1px solid #7623ad;
  border-radius: 7px;
  padding: 8px;
  font-weight: bold;
  background-color: #7623ad;
  cursor: pointer;
`;

const NavBar = ({ bColor }) => {
  return (
    <Container style={bColor}>
      <Left>
        <Logo src={CompLogo} alt="Company_logo" />
      </Left>
      <Center>
        <Link href="">Home</Link>
        <Link href="">About</Link>
        <Link href="">Services</Link>
        <Link href="">Career</Link>
      </Center>
      <Right>
        <Button>Logout</Button>
      </Right>
    </Container>
  );
};
export default NavBar;
