import { Outlet } from "react-router-dom";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex flex-column align-items-center">
        <div
          style={{ maxWidth: "1280px" }}
          className="flex flex-column justify-content-center relative m-3 p-3 w-full"
        >
          <ToastContainer />
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
