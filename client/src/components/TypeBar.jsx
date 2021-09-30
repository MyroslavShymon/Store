import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { ListGroup } from "react-bootstrap";

const TypeBar = observer(() => {
  const { devices } = useContext(Context);

  return (
    <ListGroup as="ul">
      {devices.types.map((type) => (
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          active={type.id === devices.selectedType.id}
          onClick={() => devices.setSelectedType(type)}
          key={type.id}
          as="li"
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
