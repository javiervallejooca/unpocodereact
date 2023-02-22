import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link className="my-2 btn btn-default" to="/productos">
        Ir a productos
      </Link>
      <Link className="my-2 btn btn-default" to="/tareas">
        Ir a tareas
      </Link>
    </>
  );
};

export default Home;
