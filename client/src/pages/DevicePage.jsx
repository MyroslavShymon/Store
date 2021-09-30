import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

const DevicePage = () => {
  const device = {
    id: 3,
    name: "IPhone 11 pro",
    price: 15343,
    rating: 3,
    img: "../../../server/static/04b23981-ac64-4bb5-b4b0-28ef6f6097a7.jpg",
  };
  const description = [
    { id: 1, title: "RAM", description: "5gb" },
    { id: 2, title: "Color", description: "grey" },
    { id: 3, title: "Camera", description: "12mp" },
  ];

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div className="d-flex align-items-center justify-content-center"></div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>From: {device.price} grivnas</h3>
            <Button variant={"outline-success"}>Add to bascket</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Characteristics</h1>
        {description.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgrey" : "transparent",
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
