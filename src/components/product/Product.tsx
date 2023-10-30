import { Product as iProduct } from "../../interfaces/product";

import { useFormik } from "formik";
import { showToast } from "../../utils/toast";
import { createProduct, updateProduct } from "../../services/products";
import FormProduct from "../forms/FormProduct";
import { CRUD, TOAST_TYPE } from "../../data/constants";
import { useNavigate, useParams } from "react-router-dom";

const Product = ({
  action,
  data,
}: {
  action: string;
  data?: iProduct | null;
}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: data?.title,
      price: data?.price,
      description: data?.description,
      image: data?.image,
      category: data?.category,
    } as Partial<iProduct>,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);

      try {
        action === CRUD.CREATE && createProduct(values);
        action === CRUD.UPDATE && updateProduct(Number(id), values);

        showToast(
          `Producto ${
            action === CRUD.CREATE ? `creado` : `actualizado`
          } correctamente`,
          TOAST_TYPE.SUCCESS
        );

        navigate(-1);
      } catch (error) {
        showToast(
          `Error al ${
            action === CRUD.CREATE ? `crear` : `actualizar`
          } el producto`,
          TOAST_TYPE.ERROR
        );
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return <FormProduct action="actualizar" formik={formik} />;
};

export default Product;
