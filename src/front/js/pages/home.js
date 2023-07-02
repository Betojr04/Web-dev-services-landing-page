import React, { useContext } from "react";
import { Context } from "../store/appContext";
import styled from "@emotion/styled";
import TechStack from "../component/TechStack";
import Greeting from "../component/Greeting";
// import "../../styles/home.css";

export const Home = () => {
  const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2em;
    justify-items: center;
    align-items: center;
    height: calc(100vh - 60px); // Adjust as needed
    padding: 1em;
    box-sizing: border-box;

    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
    }
  `;
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <Greeting />
      <TechStack />
    </div>
  );
};
