import React from "react";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import { Col, Row } from "react-bootstrap";

const ItemAdvertise = () => {
  const images = [img1, img2, img3, img4, img1, img4];

  return (
    <Row md={12} className="g-3">
      {images.map((img, index) => (
        <Col md={4} key={index}>
          <div className="border rounded p-2 m-6 h-100 m-6 shadow-sm bg-warning">
            <img
              src={img}
              alt={`Advertise ${index + 1}`}
              className="img-fluid rounded"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ItemAdvertise;
