import ProductsDataTable from "../components/ProductsDataTable";
import { useParams } from "react-router-dom";

import Loading from "../components/Loading";
import ProductDetail from "../components/ProductDetail";

import useProduct from "../hooks/useProduct";

const Product = () => {
  const { productId } = useParams();
  const { data, isLoading, error } = useProduct(productId);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center h-100">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="d-flex flex-column">
            <ProductDetail data={data} />
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
