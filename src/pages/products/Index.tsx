import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useProductsStore from "../../zustand/productsStore";

import { Product } from "../../interfaces/product";

import { readProducts, deleteProduct } from "../../services/products";

import { useReadAll } from "../../hooks/useCRUD";

import { TOAST_TYPE } from "../../data/constants";
import { ROUTES } from "../../data/routes";
import { showToast } from "../../utils/toast";

import Filter from "../../components/product/Filter";
import Loading from "../../components/common/Loading";

import { Button } from "primereact/button";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

import { AiOutlineEye, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

function Index() {
  const { products, filteredProducts, setProducts } = useProductsStore();

  const { data, error, loading } = useReadAll(readProducts); // Products from endpoint.

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      setProducts(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading]);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  const actionTemplate = (rowData: Product) => {
    return (
      <div className="flex gap-3">
        <p className="cursor-pointer" onClick={() => handleRead(rowData.id)}>
          <Button
            className="p-0"
            severity="secondary"
            text
            tooltip="Ver"
            tooltipOptions={{ position: "bottom" }}
          >
            <AiOutlineEye size={20} />
          </Button>
        </p>
        <p className="cursor-pointer" onClick={() => handleUpdate(rowData.id)}>
          <Button
            className="p-0"
            severity="secondary"
            text
            tooltip="Editar"
            tooltipOptions={{ position: "bottom" }}
          >
            <AiOutlineEdit size={20} />
          </Button>
        </p>
        <p
          className="cursor-pointer datatable-action-delete"
          onClick={() => handleDelete(rowData.id, rowData.title)}
        >
          <Button
            className="p-0"
            severity="secondary"
            text
            tooltip="Borrar"
            tooltipOptions={{ position: "bottom" }}
          >
            <AiOutlineDelete size={20} />
          </Button>
        </p>
      </div>
    );
  };

  const handleCreate = () => {
    navigate(ROUTES.PRODUCTS.CREATE);
  };

  const handleRead = (id: number) => {
    navigate(ROUTES.PRODUCTS.READ.replace(":id", id.toString())); // The routes are constants, so we need to replace the ":id" for the id of the product.
  };

  const handleUpdate = (id: number) => {
    navigate(ROUTES.PRODUCTS.UPDATE.replace(":id", id.toString())); // The routes are constants, so we need to replace the ":id" for the id of the product.
  };

  const handleDelete = (id: number, name: string) => {
    confirmDialog({
      message: (
        <>
          <p>¿Quieres borrar el producto {name}</p>
          <p>Esta acción es irreversible</p>
        </>
      ),
      header: "Borrar producto",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      accept: () => deleteProductFn(id),
      reject: () => {},
    });
  };

  const deleteProductFn = async (id: number) => {
    try {
      const response = await deleteProduct(id);
      showToast(
        `El producto ${response?.title} se ha eliminado correctamente`,
        TOAST_TYPE.SUCCESS
      );
      const filteredProducts = products.filter((product) => product.id !== id);
      setProducts(filteredProducts);
    } catch (error) {
      showToast("No se ha podido eliminar el producto", TOAST_TYPE.ERROR);
    }
  };

  return (
    <div>
      <h1 className="mb-0">Lista de Productos</h1>
      <p className="mt-0">
        <i>Se han encontrado un total {products.length} resultados</i>
      </p>
      <div className="card flex gap-2 justify-content-between">
        <Filter />
        <Button icon="pi pi-plus" onClick={handleCreate} label="Nuevo" />
      </div>

      <div className="mt-3">
        <DataTable
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 20]}
          stripedRows
          size="small"
          value={filteredProducts.length > 0 ? filteredProducts : products}
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
        <ConfirmDialog />
      </div>
    </div>
  );
}

export default Index;
