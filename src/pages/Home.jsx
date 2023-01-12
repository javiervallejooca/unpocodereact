import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link className="my-2 btn btn-default" to="/productos">
        Ir a productos
      </Link>
    </>
  );
};

export default Home;
