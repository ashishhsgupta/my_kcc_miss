import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MenuList from "./MenuList";
import ItemAdvertise from "./ItemAdvertise";

const HomeLayout = () => {
  return (
    <Container fluid className="bg-success min-vh-100">
      <Row className="">
        <Col>
          <div className="text-center text-white">
            <h2>The Glocery Hub -{" "} <span className="fs-4 fst-italic">Everyday Essentials</span></h2>
          </div>
        </Col>
      </Row>

      <Row className="mx-4 rounded">
        <Col md={2}>
            <Row className="">
                <Col md={12} className="px-0 rounded"> 
                     <MenuList />
                 </Col>
            </Row>
        
        </Col>
        <Col md={10} className="bg-light rounded-end border p-4">
         <ItemAdvertise />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeLayout;
