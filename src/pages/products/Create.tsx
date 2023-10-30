import { Divider } from "primereact/divider";
import { CRUD } from "../../data/constants";
import Product from "../../components/product/Product";

const Create = () => {
  return (
    <div className="flex flex-column">
      <h1>Nuevo producto</h1>
      <Divider />
      <Product action={CRUD.CREATE} />
    </div>
  );
};

export default Create;
