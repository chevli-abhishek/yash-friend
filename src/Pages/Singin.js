import React from "react";
import styled from "styled-components";
import backGround from "../data/backGround.png";
import logo from "../data/Reformiqo_Singin_logo.png";
import RecoverModal from "./RecoverModal";
import SignUpModal from "./SingUpModal";

const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("${backGround}");
  background-repeat: no-repeat;
  background-blend-mode: darken;
  background-size: cover;
  background-position: center;
  height: 100vh;
  text-align: center;
`;
const Logo = styled.img`
  margin-top: 20vh;
`;
const Head = styled.h2`
  color: white;
`;
const Para = styled.p`
  color: white;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 24vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  box-sizing: border-box;
  font-weight: bold;
  color: #7623ad;
  padding-left: 20px;
  width: 24vw;
  height: 5vh;
  margin: 1.5vh;
  border: 1px solid #7623ad;
  border-radius: 5px;
`;
const ForgotPassLink = styled.a`
  color: #7623ad;
  padding-left: 40%;
  cursor: pointer;
  text-decoration: none;
`;
const Signinbutton = styled.button`
  width: 24vw;
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
const SignupLink = styled.a`
  color: #7623ad;
  cursor: pointer;
`;
const signInHandler = (e) => {
  e.preventDefault();
};
const Singin = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpen2, setIsOpen2] = React.useState(false);

  return (
    <Container>
      <Logo src={logo}></Logo>
      <Head>Sign in</Head>
      <Para>To interact with your account</Para>
      <Form>
        <Input placeholder="E-mail"></Input>
        <Input placeholder="Password"></Input>
        <Wrapper>
          <input
            style={{ accentColor: "#7623AD", cursor: "pointer" }}
            type="radio"
            id="remember"
          ></input>
          <label style={{ color: "white" }} htmlFor="remember">
            Remember me
          </label>
          <ForgotPassLink
            onClick={() => {
              setIsOpen2(true);
            }}
          >
            Forgot password?
          </ForgotPassLink>
        </Wrapper>

        <Signinbutton onClick={signInHandler} type="submit">
          Sing In
        </Signinbutton>
      </Form>
      <Para>
        Dont have an account yet?
        <SignupLink
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Sign Up
        </SignupLink>
      </Para>
      {modalIsOpen && (
        <SignUpModal
          modalIsOpen={modalIsOpen}
          closeModal={() => setIsOpen(false)}
        />
      )}
      {modalIsOpen2 && (
        <RecoverModal
          modalIsOpen={modalIsOpen2}
          closeModal={() => setIsOpen2(false)}
        />
      )}
    </Container>
  );
};
export default Singin;
