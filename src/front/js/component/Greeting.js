import React from "react";
import styled from "@emotion/styled";

const GreetingContainer = styled.div`
  text-align: center;
`;

const Name = styled.h1`
  font-size: 2.5em;
  color: #333; // Adjust as needed
`;

const Title = styled.h2`
  font-size: 1.8em;
  color: #777; // Adjust as needed
`;

const Greeting = () => {
  return (
    <GreetingContainer>
      <Name>Alberto Valtierra Jr</Name>
      <Title>Full Stack Software Developer</Title>
    </GreetingContainer>
  );
};

export default Greeting;
