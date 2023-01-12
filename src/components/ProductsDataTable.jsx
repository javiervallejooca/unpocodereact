import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { Container, Row, Col } from "react-bootstrap";

import { GrView } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";

import useProducts from "../hooks/useProducts";
import Modal from "./Modal";
import Loading from "./Loading";
import Footer from "./Footer";

const ProductsDataTable = () => {
  const { data, isLoading, error } = useProducts();

  const [filterText, setFilterText] = useState("");
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(0);

  const navigate = useNavigate();

  const handleModal = (id) => {
    setModal(true);
    setId(id);
    console.log("Click en " + id);
  };

  const paginationComponentOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  const columns = [
    {
      name: "",
      maxWidth: "40px",
      cell: (row) => (
        <img
          src={row.image}
          loading="lazy"
          width="40px"
          height="40px"
          style={{ objectFit: "contain" }}
        />
      ),
      grow: 0,
    },
    {
      name: "Artículo",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Precio",
      selector: (row) => row.price + " €",
      sortable: true,
    },
    {
      name: "Categoria",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      button: true,
      cell: (row) => (
        <>
          <button
            onClick={() => {
              handleModal(row.id);
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              {" "}
              <GrView />
            </div>
          </button>
        </>
      ),
    },
    {
      button: true,
      cell: (row) => (
        <>
          <button
            onClick={() => {
              navigate(`/producto/` + row.id);
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              {" "}
              <GrView />
            </div>
          </button>
        </>
      ),
    },
  ];

  return !isLoading ? (
    <>
      <Container>
        <Row>
          <DataTable
            responsive
            pagination
            paginationComponentOptions={paginationComponentOptions}
            columns={columns}
            data={data}
          />

          {modal && <Modal setModal={setModal} id={id} />}
        </Row>
        <Row></Row>
      </Container>
    </>
  ) : (
    <Loading />
  );
};

export default ProductsDataTable;
