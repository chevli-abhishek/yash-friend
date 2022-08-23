import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import backGround from "../data/backGround.png";
import backButton from "../data/backButton.png";
import xButton from "../data/Xbutton.png";
import lappy from "../data/laptop.png";
Modal.setAppElement("#root");
const customStyles = {
  overlay: {
    background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("${backGround}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundBlendMode: "darken",
    backgroundPosition: "center",
    height: "100vh",
  },
  content: {
    backgroundColor: `rgba(0, 0, 0, 0)`,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
  },
};
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
`;
const Head = styled.h2`
  color: white;
  text-align: center;
`;
const Para = styled.p`
  color: white;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  box-sizing: border-box;
  font-weight: bold;
  color: #7623ad;
  padding-left: 20px;
  width: 20vw;
  height: 5vh;
  margin: 1.5vh;
  border: 1px solid #7623ad;
  border-radius: 5px;
`;
const SignUpbutton = styled.button`
  width: 20vw;
  height: 5vh;
  margin: 1.5vh;
  font-size: 1rem;
  color: white;
  border: 1px solid #7623ad;
  border-radius: 5px;
  background-color: #7623ad;
  cursor: pointer;
  :hover {
    background-color: transparent;
  }
`;
const SignInLink = styled.a`
  color: #7623ad;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  align-self: center;
`;
const Laptop = styled.img`
  width: 100%;
`;
const RecoverModal = ({ modalIsOpen, closeModal }) => {
  return (
    <div>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img
            style={{ cursor: "pointer" }}
            src={backButton}
            alt="Back"
            onClick={closeModal}
          ></img>
          <img
            style={{ cursor: "pointer" }}
            src={xButton}
            alt="Back"
            onClick={closeModal}
          ></img>
        </div>
        <Container>
          <Left>
            <Head>Recover Password</Head>
            <Para>To interact with your account</Para>
            <Form>
              <Input placeholder="E-mail"></Input>
              <SignUpbutton type="submit">Submit</SignUpbutton>
            </Form>
          </Left>
          <Right>
            <Laptop src={lappy}></Laptop>
          </Right>
        </Container>
      </Modal>
    </div>
  );
};

export default RecoverModal;
