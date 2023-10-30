import { useNavigate } from "react-router-dom";

import { Product } from "../../interfaces/product";

import { readProducts, deleteProduct } from "../../services/products";

import { useReadAll } from "../../hooks/useCRUD";

import { TOAST_TYPE } from "../../data/constants";
import { ROUTES } from "../../data/routes";
import { showToast } from "../../utils/toast";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

import { AiOutlineEye, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
function Index() {
  const { data, error, loading } = useReadAll(readProducts);

  const navigate = useNavigate();

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  const actionTemplate = (rowData: Product) => {
    return (
      <div className="flex gap-2">
        <p className="cursor-pointer" onClick={() => handleRead(rowData.id)}>
          <AiOutlineEye size={20} />
        </p>
        <p className="cursor-pointer" onClick={() => handleUpdate(rowData.id)}>
          <AiOutlineEdit size={20} />
        </p>
        <p className="cursor-pointer" onClick={() => handleDelete(rowData.id)}>
          <AiOutlineDelete size={20} />
        </p>
      </div>
    );
  };

  const handleRead = (id: number) => {
    navigate(ROUTES.PRODUCTS.READ.replace(":id", id.toString()));
  };

  const handleUpdate = (id: number) => {
    navigate(ROUTES.PRODUCTS.UPDATE.replace(":id", id.toString()));
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await deleteProduct(id);
      showToast(
        `El producto ${response.title} se ha eliminado correctamente`,
        TOAST_TYPE.SUCCESS
      );
    } catch (error) {
      showToast("No se ha podido eliminar el producto", TOAST_TYPE.ERROR);
    }
  };

  const handleCreate = () => {
    navigate(ROUTES.PRODUCTS.CREATE);
  };

  return (
    <div>
      <h1>Lista de Productos</h1>
      <div className="card flex justify-content-end">
        <Button onClick={handleCreate} label="Nuevo" />
      </div>
      <div className="card mt-2">
        <DataTable
          paginator
          rows={20}
          rowsPerPageOptions={[5, 10, 20]}
          stripedRows
          size="small"
          value={data}
        >
          <Column field="id" header="Id"></Column>
          <Column field="title" header="Artículo" sortable></Column>
          <Column field="category" header="Categoria" sortable></Column>
          <Column field="price" header="Precio" sortable></Column>
          <Column
            body={actionTemplate}
            header="Acciones"
            style={{ textAlign: "center" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}

export default Index;
