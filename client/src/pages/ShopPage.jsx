import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import BrandBar from "../components/BrandBar";
import DevicesList from "../components/DevicesList";
import Pages from "../components/Pages";
import TypeBar from "../components/TypeBar";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceApi";

const ShopPage = observer(() => {
  const { devices } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => devices.setTypes(data));
    fetchBrands().then((data) => devices.setBrands(data));
    fetchDevices(null, null, 1, 3).then((data) => {
      console.log("data", data);
      devices.setDevices(data.rows);
      devices.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchDevices(
      devices.selectedType.id,
      devices.selectedBrand.id,
      devices.page,
      2
    ).then((data) => {
      devices.setDevices(data.rows);
      devices.setTotalCount(data.count);
    });
  }, [devices.page, devices.selectedType, devices.selectedBrand]);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DevicesList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default ShopPage;
