import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <main>
        <h1>Alberto Valtierra Jr</h1>
        <p>Software Developer and Entrepreneur</p>
      </main>
    </div>
  );
};
