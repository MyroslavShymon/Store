import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { ListGroup } from "react-bootstrap";

const BrandBar = observer(() => {
  const { devices } = useContext(Context);

  return (
    <ListGroup as="ul" className="d-flex" style={{ flexDirection: "row" }}>
      {devices.brands.map((brand) => (
        <ListGroup.Item
          key={brand.id}
          active={brand.id === devices.selectedBrand.id}
          onClick={() => devices.setSelectedBrand(brand)}
          style={{ cursor: "pointer" }}
          className="p-3"
        >
          {brand.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default BrandBar;
