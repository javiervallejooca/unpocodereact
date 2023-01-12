import { Suspense, useRef, useEffect } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { Container, Row, Col } from "react-bootstrap";

//TODO: Implementar
/*
function checkOutsideModal(ref) {
  useEffect(() => {
    // Function for click event
    function handleOutsideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        alert("you just clicked outside of box!");
      }
    } // Adding click event listener
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [ref]);
}
*/

const ProductDetailInModal = ({ data, setModal }) => {
  // const myModalRef = useRef(null);
  //checkOutsideModal(myModalRef);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="bg-white shadow-sm rounded-2 p-4 position-relative">
      <Container>
        <Row>
          <div className="w-100 pt-4 d-flex justify-content-center">
            <Suspense fallback={<>Cargando...</>}>
              <img
                width={"auto"}
                height={"300px"}
                src={data.image}
                alt={data.title}
              />
            </Suspense>
          </div>
        </Row>
        <Row>
          <Col sm={8}>
            <div className="h3 text-left">
              <strong>{data.title}</strong>
            </div>
            <div className="text-left">{data.description}</div>
          </Col>
          <Col sm={4}>
            <span>{data.price}€</span>
          </Col>
        </Row>
        <Row className="text-left">
          <Col>
            {data.rating.rate}/5 ({data.rating.count} valoraciones)
          </Col>
        </Row>
        <div className="cerrar-modal">
          <RxCrossCircled onClick={closeModal} color="#222" size="30px" />
        </div>
      </Container>
    </div>
  );
};

export default ProductDetailInModal;
