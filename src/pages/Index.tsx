import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-column">
      <h1>Index</h1>
      <p className="my-2">
        <Link to="/products">Ver el listado de productos</Link>
      </p>
      <p>
        <Link to="/about">Ir a "Acerca de"</Link>
      </p>
    </div>
  );
};

export default Index;
