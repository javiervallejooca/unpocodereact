import { useParams } from "react-router-dom";

import { Divider } from "primereact/divider";

import { Product as iProduct } from "../../interfaces/product";
import { readProduct } from "../../services/products";

import { useReadOne } from "../../hooks/useCRUD";
import Product from "../../components/product/Product";
import { CRUD } from "../../data/constants";

const Update = () => {
  const { id } = useParams();

  const { data, error, loading } = useReadOne<iProduct>(
    readProduct,
    Number(id)
  );

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="flex flex-column">
      <h1>Actualizar producto</h1>
      <Divider />
      <Product action={CRUD.UPDATE} data={data} />
    </div>
  );
};

export default Update;
