import { CRUD } from "../../../data/constants";

import { ProductFormik } from "../../../interfaces/product";

import { Image } from "primereact/image";
import { classNames } from "primereact/utils";

type Action = "read" | "create" | "update" | "delete";

const ImageProduct = ({
  action,
  formik,
}: {
  action: Action;
  formik: ProductFormik;
}) => {
  const { values, touched, errors } = formik;

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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const extension = file.name.toLowerCase().split(".").pop();

      const acceptedExtensions = [
        "jpg",
        "png",
        "jpeg",
        "webp",
        "gif",
        "svg",
        "bmp",
        "tiff",
      ];

      if (!acceptedExtensions.includes(extension as string)) {
        alert("El archivo debe ser una imagen");
        return;
      }

      // Enviamos el BLOB
      formik.setFieldValue("image", URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-column justify-content-center">
      {formik.values.image && (
        <Image
          className="flex justify-content-center"
          src={values.image}
          alt={values.title}
          width="250"
          preview
        />
      )}
      {action !== CRUD.READ && (
        <div className="mt-4">
          <input
            className={classNames({
              "p-invalid": isFormFieldInvalid("image"),
              "w-full": true,
            })}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {getFormErrorMessage("image")}
        </div>
      )}
    </div>
  );
};

export default ImageProduct;
