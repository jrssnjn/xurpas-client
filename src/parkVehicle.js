import { Row, Col, Form, Button } from "react-bootstrap";
import { Fragment, useState } from "react";
import ParkingSpots from "./parkingSpots";
import "./default.css";

function Component() {
  const [settings, setSettings] = useState({ vehicleSize: 1, entryPoint: 1 });
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
                <Form.Select
                  id="vehicleSize"
                  name="vehicleSize"
                  onChange={(e) => {
                    setSettings({ ...settings, vehicleSize: e.target.value });
                  }}
                >
                  <option value={1}>Small Sized Vehicle</option>
                  <option value={2}>Medium Sized Vehicle</option>
                  <option value={3}>Large Sized Vehicle</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                onChange={(e) => {
                  setSettings({ ...settings, entryPoint: e.target.value });
                }}
              >
                <Form.Select id="entryPoint" name="entryPoint">
                  <option value={1}>Entry Point # 1</option>
                  <option value={2}>Entry Point # 2</option>
                  <option value={3}>Entry Point # 3</option>
                </Form.Select>
              </Form.Group>
              <Button type="submit">Submit</Button>
            </fieldset>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <ParkingSpots
            vehicleSize={settings.vehicleSize}
            entryPoint={settings.entryPoint}
          />
        </Col>
      </Row>
    </Fragment>
  );
}

export default Component;
