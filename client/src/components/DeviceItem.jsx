import React from "react";
import { useHistory } from "react-router";
import { Card, Col, Image } from "react-bootstrap";
import { DEVICE_ROUTE } from "../utils/constants";

const DeviceItem = ({ device }) => {
  const history = useHistory();

  return (
    <Col md={3} onClick={() => history.push(DEVICE_ROUTE + "/" + device.id)}>
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image width={150} height={150} src={device.img} />
        <div
          className="d-flex text-black-50"
          style={{ flexDirection: "column" }}
        >
          <div className="d-flex justify-content-between">
            <div>Sumsung</div>
            <div>{device.rating}</div>
          </div>
          <div>{device.name}</div>
        </div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
