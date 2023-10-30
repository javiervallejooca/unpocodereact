import { Link, useParams } from "react-router-dom";

import { Product } from "../../interfaces/product";

import { readProduct } from "../../services/products";
import { useReadOne } from "../../hooks/useCRUD";

const Read = () => {
  const { id } = useParams();

  const { data, error, loading } = useReadOne<Product>(readProduct, Number(id));

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Detalle del producto con id: {id}</h1>
      <ul>
        <h3>{data?.title}</h3>
        <p>Precio: {data?.price}</p>
        <p>Categoría: {data?.category}</p>
      </ul>

      <Link to="/products">Volver al listado</Link>
    </div>
  );
};

export default Read;
