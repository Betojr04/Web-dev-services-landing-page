import React from "react";
import styled from "@emotion/styled";
import betoImage from "../../../front/img/beto.jpeg";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2em;
  justify-items: center;
  align-items: center;
  padding: 1em;
  box-sizing: border-box;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.h3`
  font-size: 2em;
  color: #333; // Adjust as needed
`;

const Title = styled.p`
  font-size: 1.5em;
  color: #777; // Adjust as needed
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  margin: 1em auto;

  @media (min-width: 600px) {
    margin: 0;
  }
`;

const TextContent = styled.div`
  max-width: 90%;
  line-height: 1.6;

  @media (min-width: 600px) {
    max-width: 80%;
  }
`;

const ContactLink = styled.a`
  display: inline-block;
  color: #fff;
  background-color: #3f51b5;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #303f9f;
  }
`;

const AboutMe = () => {
  return (
    <Container>
      <div>
        <ProfileImage src={betoImage} alt="Alberto Valtierra" />
      </div>
      <TextContainer>
        <Name>Alberto Valtierra</Name>
        <Title>Full Stack Software Developer | Phoenix, Arizona</Title>
        <TextContent>
          <p>
            I'm Alberto Valtierra Jr, a full stack developer skilled in
            [JavaScript, React, Node.js, Python, SQL, PostgreSQL, Flask, Restful
            APIs, Scrum]. Having completed an intensive bootcamp, I'm
            enthusiastic about creating efficient, user-friendly web
            applications and continuously learning to stay up-to-date with
            industry trends.
          </p>
          <p>
            Outside of coding, I enjoy hiking & running, exercising, and
            photography/videography, which keeps me inspired and balanced.
          </p>
          <ContactLink href="/contactme">
            Interested in working together? Get in touch here
          </ContactLink>
        </TextContent>
      </TextContainer>
    </Container>
  );
};

export default AboutMe;
