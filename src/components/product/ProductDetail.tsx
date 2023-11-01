import { useNavigate, useParams } from "react-router-dom";

import { Product } from "../../interfaces/product";
import { Action } from "../../interfaces/action";

import { createProduct, updateProduct } from "../../services/products";

import { showToast } from "../../utils/toast";
import { CRUD, TOAST_TYPE } from "../../data/constants";

import FormProduct from "../forms/Product/FormProduct";
import { productValidationSchema } from "../../validation/products";

import { useFormik } from "formik";

const ProductDetail = ({
  action,
  data,
}: {
  action?: Action;
  data?: Product | null;
}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      category: data?.category,
      description: data?.description,
      image: data?.image,
      price: data?.price,
      title: data?.title,
    } as Partial<Product>,
    validationSchema: productValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);

      try {
        // TODO: Hacer para que pueda subir la imagen como un multipart/form-data
        // const formData = new FormData();

        // formData.append("image", values?.image);
        // formData.append("title", values?.title);
        // formData.append("description", values?.description);
        // formData.append("price", values?.price);
        // formData.append("category", values?.category);

        action?.toString() === CRUD.CREATE && (await createProduct(values));
        action?.toString() === CRUD.UPDATE &&
          (await updateProduct(Number(id), values));

        showToast(
          `Producto ${
            action?.toString() === CRUD.CREATE ? `creado` : `actualizado`
          } correctamente`,
          TOAST_TYPE.SUCCESS
        );

        navigate(-1);
      } catch (error) {
        showToast(
          `Error al ${
            action?.toString() === CRUD.CREATE ? `crear` : `actualizar`
          } el producto`,
          TOAST_TYPE.ERROR
        );
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return <FormProduct action={action} formik={formik} />;
};

export default ProductDetail;
