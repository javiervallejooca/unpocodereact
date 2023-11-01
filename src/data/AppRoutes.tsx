import { Routes, Route } from "react-router-dom";

import Layout from "../layout/Layout";

import Index from "../pages/Index";
import About from "../pages/About";
import ProductsIndex from "../pages/products/Index";
import ProductReadOrUpdate from "../pages/products/ReadOrUpdate";
import ProductCreate from "../pages/products/Create";
import Login from "../pages/Login";

import PageNotFound from "../components/common/PageNotFound";

import useUserStore from "../zustand/userStore";

import { ROUTES } from "./routes";
import { CRUD } from "./constants";
import { privateRoute } from "../helper/privateRoute";
import { Action } from "../interfaces/action";

const AppRoutes = () => {
  const { user } = useUserStore();

  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />}></Route>
      <Route path={ROUTES.INDEX} element={<Layout />}>
        <Route
          index
          element={privateRoute(Index, user, { action: undefined })}
        />
        <Route path="*" element={<PageNotFound />} />
        <Route
          path={ROUTES.ABOUT}
          element={privateRoute(About, user, { action: undefined })}
        />
        <Route
          path={ROUTES.PRODUCTS.LIST}
          element={privateRoute(ProductsIndex, user, {
            action: CRUD.READ as unknown as Action,
          })}
        ></Route>
        <Route
          path={ROUTES.PRODUCTS.READ}
          element={privateRoute(ProductReadOrUpdate, user, {
            action: CRUD.READ as unknown as Action,
          })}
        ></Route>
        <Route
          path={ROUTES.PRODUCTS.CREATE}
          element={privateRoute(ProductCreate, user, {
            action: CRUD.CREATE as unknown as Action,
          })}
        ></Route>
        <Route
          path={ROUTES.PRODUCTS.UPDATE}
          element={privateRoute(ProductReadOrUpdate, user, {
            action: CRUD.UPDATE as unknown as Action,
          })}
        ></Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
