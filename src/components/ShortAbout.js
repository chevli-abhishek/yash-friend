import React from "react";
import styled from "styled-components";
import backGround from "../data/Shape.png";
import shape2 from "../data/shape2.png";
const Conatiner = styled.div`
  background: url("${backGround}");
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 75vw 75vw;
  background-position: 0 2vh;
  height: 75vh;
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  width: 50%;
  height: 50%;
  opacity: 0.15;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10%;
`;
const ShortAbout = () => {
  return (
    <Conatiner>
      <Left>
        <Img src={shape2} alt="AnIMage" />
      </Left>
      <Right>
        <h1>
          <span style={{ borderBottom: "solid 3px #7623AD" }}>A</span>bout
        </h1>
        <p style={{ paddingRight: "35%", textAlign: "justify" }}>
          A journey of Reformation, Revolution, and Reclamation. We are
          Reformiqo.
          <br />
          <br />
          Founded with a strong set of values, Reformiqo is a boutique
          consulting company that helps businesses move towards future-fit
          business operations. The company's diverse industry experience enables
          it to introduce innovation and change.
          <br />
          <br />
          The company engages in building trustful relationships with clients
          and stakeholders at every stage. Our aim is to provide unique and
          propositional services to unlock the true potential of businesses. We
          initiate a change in corporate and digital ventures through technology
          and visionary management consulting.
        </p>
        <button
          style={{
            marginRight: "80%",
            marginTop: "20px",
            fontSize: "1rem",
            padding: "10px",
            border: "none",
            borderRadius: "7px",
            color: "White",
            cursor: "pointer",
            backgroundColor: "#7623AD",
          }}
        >
          Read More
        </button>
      </Right>
    </Conatiner>
  );
};
export default ShortAbout;
