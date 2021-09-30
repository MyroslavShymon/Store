import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BrandBar from "../components/BrandBar";
import DevicesList from "../components/DevicesList";
import TypeBar from "../components/TypeBar";

const ShopPage = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DevicesList />
        </Col>
      </Row>
    </Container>
  );
};

export default ShopPage;
