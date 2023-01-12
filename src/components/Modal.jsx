import React, { useEffect } from "react";
import Loading from "./Loading";
import ProductDetail from "./ProductDetailInModal";

import "./styles/modal.css";

import useProduct from "../hooks/useProduct";

const Modal = ({ setModal, id }) => {
  const { data, isLoading, error } = useProduct(id);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setModal(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  console.log(data);

  return (
    <div className="my-modal">
      <div className="d-flex justify-content-center align-items-center h-100">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="d-flex flex-column">
            <ProductDetail data={data} setModal={setModal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
