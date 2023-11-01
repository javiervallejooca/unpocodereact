import { useNavigate, useParams } from "react-router-dom";

import { Product } from "../../interfaces/product";

import { createProduct, updateProduct } from "../../services/products";

import { showToast } from "../../utils/toast";
import { CRUD, TOAST_TYPE } from "../../data/constants";

import FormProduct from "../forms/Product/FormProduct";
import { productValidationSchema } from "../../validation/products";

import { useFormik } from "formik";

type Action = "read" | "create" | "update" | "delete";

const ProductDetail = ({
  action,
  data,
}: {
  action: Action;
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

        action === CRUD.CREATE && (await createProduct(values));
        action === CRUD.UPDATE && (await updateProduct(Number(id), values));

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

  return <FormProduct action={action} formik={formik} />;
};

export default ProductDetail;
