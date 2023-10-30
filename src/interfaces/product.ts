import { FormikProps } from "formik";

export interface Product {
  id: number;
  title: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface ProductFormik extends FormikProps<Partial<Product>> {}
