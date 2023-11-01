import { useNavigate } from "react-router-dom";

import { ProductFormik } from "../../../interfaces/product";

import Categories from "./Categories";
import ImageProduct from "./ImageProduct";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from "primereact/inputnumber";
import { CRUD } from "../../../data/constants";
import { Action } from "../../../interfaces/action";

const FormProduct = ({
  action,
  formik,
}: {
  action?: Action;
  formik: ProductFormik;
}) => {
  const { handleSubmit, values, isSubmitting, touched, errors } = formik;

  const navigate = useNavigate();

  const readOnly = action?.toString() === CRUD.READ;

  const isFormFieldInvalid = (name: keyof typeof values) => {
    return !!(touched[name] && errors[name]);
  };

  const getFormErrorMessage = (name: keyof typeof values) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name]}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  return (
    <div>
      <div className="flex flex-column lg:flex-row">
        <div className="w-full lg:w-4 m-4 p-4 flex align-items-center justify-content-center">
          <ImageProduct action={action} formik={formik} />
        </div>
        <div className="w-full lg:w-8">
          <div className="my-5">
            <span className="p-float-label">
              <InputText
                id="title"
                disabled={readOnly}
                name="title"
                value={formik.values.title}
                onChange={(e) => {
                  formik.setFieldValue("title", e.target.value);
                }}
                className={classNames({
                  "p-invalid": isFormFieldInvalid("title"),
                  "w-full": true,
                })}
              />
              <label htmlFor="username">Nombre del producto</label>
            </span>
            {getFormErrorMessage("title")}
          </div>
          <div className="mb-5">
            <span className="p-float-label">
              <InputTextarea
                id="description"
                disabled={readOnly}
                name="description"
                rows={10}
                cols={35}
                className={classNames({
                  "p-invalid": isFormFieldInvalid("description"),
                  "w-full": true,
                })}
                value={formik.values.description}
                onChange={(e) => {
                  formik.setFieldValue("description", e.target.value);
                }}
              />
              <label htmlFor="description">Descripción</label>
            </span>
            {getFormErrorMessage("description")}
          </div>
          <div className="mb-5">
            <div className="flex gap-2">
              <div className="flex flex-column">
                <span className="p-float-label">
                  <InputNumber
                    className="w-full"
                    disabled={readOnly}
                    id="price"
                    name="price"
                    locale="es-ES"
                    minFractionDigits={2}
                    onValueChange={(e) => {
                      formik.setFieldValue("price", e.value);
                    }}
                    value={formik.values.price}
                  />
                  <label htmlFor="price">Precio</label>
                </span>
                {getFormErrorMessage("price")}
              </div>
              <div className="w-full">
                <Categories action={action} formik={formik} />
                {getFormErrorMessage("category")}
              </div>
            </div>
          </div>
          <div className="flex justify-content-between">
            <Button
              icon="pi pi-arrow-left"
              label="Atrás"
              onClick={() => navigate(-1)}
              outlined
            />
            <Button
              disabled={readOnly || isSubmitting}
              icon="pi pi-save"
              label="Guardar"
              onClick={() => handleSubmit()}
              type="submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormProduct;
