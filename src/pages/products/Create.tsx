import { Divider } from "primereact/divider";
import { CRUD } from "../../data/constants";
import Product from "../../components/product/ProductDetail";
import { Action } from "../../interfaces/action";

const Create = () => {
  return (
    <div className="flex flex-column">
      <h1 className="mb-0">Crear un nuevo producto</h1>
      <Divider />
      <Product action={CRUD.CREATE as unknown as Action} />
    </div>
  );
};

export default Create;
