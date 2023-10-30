import { Routes, Route } from "react-router-dom";

import Layout from "../layout/Layout";

import Index from "../pages/Index";
import About from "../pages/About";
import ProductsIndex from "../pages/products/Index";
import ProductRead from "../pages/products/Read";
import ProductCreate from "../pages/products/Create";
import ProductUpdate from "../pages/products/Update";
import Login from "../pages/Login";

import PageNotFound from "../components/common/PageNotFound";

import { privateRoute } from "../helper/privateRoute";
import { ROUTES } from "./routes";

import useUserStore from "../zustand/userStore";

const AppRoutes = () => {
  const { user } = useUserStore();

  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />}></Route>
      <Route path={ROUTES.INDEX} element={<Layout />}>
        <Route index element={privateRoute(Index, user)}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path={ROUTES.ABOUT} element={privateRoute(About, user)}></Route>
        <Route
          path={ROUTES.PRODUCTS.LIST}
          element={privateRoute(ProductsIndex, user)}
        ></Route>
        <Route
          path={ROUTES.PRODUCTS.READ}
          element={privateRoute(ProductRead, user)}
        ></Route>
        <Route
          path={ROUTES.PRODUCTS.CREATE}
          element={privateRoute(ProductCreate, user)}
        ></Route>
        <Route
          path={ROUTES.PRODUCTS.UPDATE}
          element={privateRoute(ProductUpdate, user)}
        ></Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
