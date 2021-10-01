import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

const AdminPanelPage = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <Button
        variant={"outline-success"}
        className="mt-4 p-2"
        onClick={() => setTypeVisible(true)}
      >
        Add type
      </Button>
      <Button
        variant={"outline-success"}
        className="mt-4 p-2"
        onClick={() => setBrandVisible(true)}
      >
        Add brand
      </Button>
      <Button
        variant={"outline-success"}
        className="mt-4 p-2"
        onClick={() => setDeviceVisible(true)}
      >
        Add device
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
    </Container>
  );
};

export default AdminPanelPage;
