import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { Card, Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DevicesList = () => {
  const { devices } = useContext(Context);

  return (
    <Row className="d-flex">
      {devices.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  );
};

export default DevicesList;
