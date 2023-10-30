import { ProductFormik } from "../../interfaces/product"; // Importa la interfaz MyFormik
import { Button } from "primereact/button";

// interface FormProductProps {
//   action: string;
//   formik: ProductFormik; // Utiliza MyFormik como tipo para formik
// }
//const FormProduct: React.FC<FormProductProps> = ({ action, formik }) => {

const FormProduct = ({
  action,
  formik,
}: {
  action: string;
  formik: ProductFormik;
}) => {
  const { handleSubmit, values } = formik; //values, errors, touched, initialValues

  return (
    <div>
      <span>La operacion es: {action}</span>
      <p>Aqui los datos del formulario...</p>
      <p>Title: {values.title}</p>
      <Button label="Guardar" onClick={() => handleSubmit()} />
    </div>
  );
};

export default FormProduct;
