import React from "react";
import styled from "@emotion/styled";

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  list-style: none;
`;

const TechItem = styled.li`
  margin: 0.5em;
  padding: 0.5em 1em;
  border-radius: 20px;
  background: #3f51b5; // Adjust as needed
  color: white; // Adjust as needed
  font-size: 1em;
`;

const TechStack = () => {
  const techs = [
    "React",
    "Flask",
    "Python",
    "JavaScript",
    "Node.js",
    "PostgreSQL",
    "SQL",
  ];

  return (
    <TechList>
      {techs.map((tech, index) => (
        <TechItem key={index}>{tech}</TechItem>
      ))}
    </TechList>
  );
};

export default TechStack;
