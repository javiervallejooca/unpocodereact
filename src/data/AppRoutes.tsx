import { Routes, Route } from "react-router-dom";

import Layout from "../layout/Layout";

import About from "../pages/About";
import Index from "../pages/Index";
import Login from "../pages/Login";
import ProductCreate from "../pages/products/Create";
import ProductsIndex from "../pages/products/Index";
import ProductRead from "../pages/products/Read";
import ProductUpdate from "../pages/products/Update";

import PageNotFound from "../components/common/PageNotFound";

import useUserStore from "../zustand/userStore";

import { ROUTES } from "./routes";

import { privateRoute } from "../helper/privateRoute";

const AppRoutes = () => {
  const { user } = useUserStore();

  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />}></Route>
      <Route path={ROUTES.INDEX} element={<Layout />}>
        <Route index element={privateRoute(Index, user)} />
        <Route path="*" element={<PageNotFound />} />
        <Route path={ROUTES.ABOUT} element={privateRoute(About, user)} />
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
