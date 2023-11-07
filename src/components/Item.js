// Import our dependencies
import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Animation from "./Animation";
import "./style.css";


function Item(props) {
  const [color, setColor] = useState("#80CED7");


  const description = "From leisurely strolls in the park to adrenaline-pumping hikes in the mountains, our fleece jacket adapts seamlessly to your outdoor pursuits. Its lightweight construction and ergonomic design allow for unrestricted movement, while its durable construction ensures long-lasting performance."

  return (
    <Row className="item">
      <Col sm={6}>
        <Animation color={color} />
      </Col>
      <Col className="info">
        <h2>Jacket</h2>
        <br />
        <br />
        <p>{description}</p>
        <Row className="buttonRow">
          <Col>
            <p>Available Colors:</p>
            <Button id="blue" onClick={() => setColor("#80CED7")}></Button>
            <Button id="flax" onClick={() => setColor("#E9D985")}></Button>
            <Button id="red" onClick={() => setColor("#BF211E")}></Button>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <p>Price: 10,000</p>
            <a href="#">
              <Button id="buy" variant="primary">
                Buy Now
              </Button>
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Item;
