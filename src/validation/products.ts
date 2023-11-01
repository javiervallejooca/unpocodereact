import * as yup from "yup";

export const productValidationSchema = yup.object().shape({
  category: yup.string().required("La categoría es obligatoria"),
  description: yup
    .string()
    .required("La descripción es obligatoria")
    .min(3, "La descripción debe tener al menos 3 caracteres"),
  image: yup.mixed().required("La imagen es obligatoria"),
  price: yup
    .number()
    .required("El precio es obligatorio")
    .moreThan(0, "El precio debe ser mayor que cero"),
  title: yup
    .string()
    .required("El título es obligatorio")
    .min(3, "El título debe tener al menos 3 caracteres"),
});
