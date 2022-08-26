import Footer from "components/Footer";
import NavBar from "components/NavBar";
import ShortAbout from "components/ShortAbout";
import React from "react";
import styled from "styled-components";
const Container = styled.div``;
const Header = styled.h1`
  text-align: center;
  font-size: 2.75rem;
  background: #2c2c2c;
  color: white;
  margin-top: 0;
  padding: 5vh;
`;
const Wrapper = styled.div`
  display: flex;
  margin: 0 0 7.5vh 0;
`;
const Left = styled.div`
  margin-left: 10%;
`;
const Right = styled.div`
  margin-left: 15%;
`;

const About = () => {
  return (
    <Container>
      <NavBar bColor={{ backgroundColor: "#2C2C2C" }} />
      <Header>
        About
        <p style={{ fontSize: "16px" }}>About Reformiqo</p>
      </Header>

      <ShortAbout />
      <Wrapper>
        <Left>
          <h2 style={{ width: "25vw" }}>
            <span
              style={{
                borderBottom: "solid 3px #7623AD",
                textAlign: "justify",
              }}
            >
              Our
            </span>{" "}
            Approach / Our Process{" "}
          </h2>
          <p style={{ textAlign: "justify", width: "25vw" }}>
            Identifying a roadblock is more critical than solving one. Companies
            often fail to identify small yet critical issues that sit right at
            the bottom of a channel. The Simplistic Approach of Reformiqo
            identifies issues that often go unnoticed but cause a great deal of
            concern. Our experts employ proven and pre-planned strategies to
            enable smarter and faster decisions.
          </p>
        </Left>
        <Right>
          <h2 style={{ width: "25vw" }}>
            <span style={{ borderBottom: "solid 3px #7623AD" }}>Get</span>{" "}
            acquainted with reforms
          </h2>
          <p style={{ textAlign: "justify", width: "25vw" }}>
            The greatest challenges a company faces today are organizational
            crises such as technology integration, operational disagreements,
            hierarchy conflicts, etc which significantly can hamper progress.
            Reformiqo guides businesses at such crossroads with pivotal
            solutions. We take pride in our user-friendly and adaptable systems.
          </p>
        </Right>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default About;
