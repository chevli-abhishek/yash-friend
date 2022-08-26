import Card from "components/Card";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import React from "react";
import styled from "styled-components";
import Src1 from "../data/image1.png";
import Src2 from "../data/image2.png";
import Src3 from "../data/image3.png";
import Src4 from "../data/image4.png";
import Src5 from "../data/image5.png";
import Src6 from "../data/image6.png";

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
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 7.5%;
`;
const Right = styled.div`
  flex: 1;
  padding-top: 6.5%;
`;
const Services = () => {
  return (
    <div>
      <NavBar bColor={{ backgroundColor: "#2C2C2C" }} />
      <Header>
        Services
        <p style={{ fontSize: "16px" }}>Our best services</p>
      </Header>
      <Wrapper>
        <Left>
          <Card
            src={Src1}
            title={"Account"}
            description={
              "Manage an unlimited number of accounts from one place"
            }
          />
          <Card
            src={Src2}
            title={"Roles & Permissions"}
            description={
              "Full control with flexible user permissions for views and actions"
            }
          />
          <Card
            src={Src3}
            title={"Integration"}
            description={"Connect the tools you already use"}
          />
          <Card
            src={Src4}
            title={"Chat Bots"}
            description={
              "AI powered chatbots to improve your business and customer satisfaction"
            }
          />
          <Card
            src={Src5}
            title={"In-App Messaging"}
            description={"Build a better business with proactive messages."}
          />
          <Card
            src={Src6}
            title={"Knowledge Base"}
            description={"Create and publish answers for customers"}
          />
        </Left>
        <Right>
          <p style={{ textAlign: "justify", width: "25vw" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.{" "}
          </p>
        </Right>
      </Wrapper>
      <Footer />
    </div>
  );
};
export default Services;
