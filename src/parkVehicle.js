import { Row, Col, Form, Button } from "react-bootstrap";
import { Fragment } from "react";
import Receipt from "./modal";
import ParkingSpots from "./parkingSpots";
import "./default.css";

function Component() {
  return (
    <Fragment>
      <Row>
        <Col>
          <Form>
            <fieldset>
              <Form.Group className="mb-3">
                <Form.Control
                  id="PlateNoInput"
                  placeholder="Vehicle plate no."
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Select id="disabledSelect">
                  <option>Small Sized Vehicle</option>
                  <option>Medium Sized Vehicle</option>
                  <option>Large Sized Vehicle</option>
                </Form.Select>
              </Form.Group>
              <Button type="submit">Submit</Button>
            </fieldset>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <ParkingSpots />
        </Col>
      </Row>
    </Fragment>
  );
}

export default Component;
