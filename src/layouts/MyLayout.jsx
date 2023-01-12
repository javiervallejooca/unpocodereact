import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MyLayoutWithoutHeader = () => {
  return (
    <div className="">
      <main className="mb-0 pb-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MyLayoutWithoutHeader;
