import { useParams } from "react-router-dom";

import { Product } from "../../interfaces/product";

import { readProduct } from "../../services/products";
import { useReadOne } from "../../hooks/useCRUD";

import { CRUD } from "../../data/constants";

import ProductDetail from "../../components/product/ProductDetail";
import Loading from "../../components/common/Loading";

import { Divider } from "primereact/divider";

const Read = () => {
  const { id } = useParams();

  const { data, error, loading } = useReadOne<Product>(readProduct, Number(id));

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-column">
      <h1 className="mb-0">Ver detalle de producto</h1>
      <Divider />
      <ProductDetail action={CRUD.READ} data={data} />
    </div>
  );
};

export default Read;
