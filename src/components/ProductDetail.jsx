import { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";

const ProductDetail = ({ data }) => {
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
      </Container>
    </div>
  );
};

export default ProductDetail;
