import { ProductFormik } from "../../../interfaces/product";

import { readCategories } from "../../../services/categories";
import { useReadAll } from "../../../hooks/useCRUD";

import { CRUD } from "../../../data/constants";

import { Dropdown } from "primereact/dropdown";

type Action = "read" | "create" | "update" | "delete";

const Categories = ({
  action,
  formik,
}: {
  action: Action;
  formik: ProductFormik;
}) => {
  const { data, loading, error } = useReadAll(readCategories);

  if (loading)
    return (
      <div className="flex align-items-center gap-2">
        <p>Obteniendo las categorias...</p>
        <i className="pi pi-spin pi-spinner" style={{ fontSize: "2rem" }}></i>
      </div>
    );
  if (error) throw new Error("No se han podido obtener las categorias");

  return (
    <Dropdown
      className="w-full"
      disabled={action === CRUD.READ}
      onChange={(e) => {
        formik.setFieldValue("category", e.value);
      }}
      options={data}
      optionLabel=""
      placeholder="Seleccione una categoria"
      value={formik.values.category}
    />
  );
};

export default Categories;
