import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 25px;
  margin: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: inline-block;
`;
const Logo = styled.div`
  font-size: 32px;
  font-weight: 800;
  color: white;
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
  color: white;
  border: 1px solid #80558c;
  border-radius: 7px;
  padding: 8px;
  font-weight: bold;
  background-color: #80558c;
  cursor: pointer;
`;

const NavBar = () => {
  return (
    <Container>
      <Left>
        <Logo>
          Ref<span style={{ color: "#AF7AB3" }}>o</span>rmiqo
        </Logo>
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
