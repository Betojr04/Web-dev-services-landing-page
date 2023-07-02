import React, { useContext } from "react";
import { Context } from "../store/appContext";
import styled from "@emotion/styled";
import TechStack from "../component/TechStack";
import Greeting from "../component/Greeting";
import "../../styles/home.css";

export const Home = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: auto;
    padding: 1em;
    box-sizing: border-box;

    @media (min-width: 600px) {
      flex-direction: row;
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
