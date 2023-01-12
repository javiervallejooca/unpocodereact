import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyLayout from "./layouts/MyLayout";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="productos" element={<Products />}></Route>
            <Route path="producto/:productId" element={<Product />}></Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
