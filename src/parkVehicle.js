import { Row, Col, Form, Button } from "react-bootstrap";
import { Fragment, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import ParkingSpots from "./parkingSpots";
import "./default.css";

function Component() {
  const [settings, setSettings] = useState({
    vehicleSize: 1,
    entryPoint: 1,
    vehiclePlateNo: "",
  });

  const onClick = async (e) => {
    const { vehicleSize, entryPoint, vehiclePlateNo } = settings;

    if (vehiclePlateNo === "")
      return toast("Please assign a plate number for the vehicle.");

    let res = await axios.post("http://localhost:3000/park-vehicle", {
      size: Number(vehicleSize),
      entryPoint,
      vehiclePlateNumber: vehiclePlateNo,
    });

    console.log(res.data);

    toast(
      `Vehicle has been assigned to parking spot # ${res.data.parkingSpotNumber}, with receipt number ${res.data.receiptNumber}`
    );
  };

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
                  name="vehiclePlateNo"
                  onChange={(e) => {
                    setSettings({
                      ...settings,
                      vehiclePlateNo: e.target.value,
                    });
                  }}
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
                  <option value={1}>Entrance # 1</option>
                  <option value={2}>Entrance # 2</option>
                  <option value={3}>Entrance # 3</option>
                </Form.Select>
              </Form.Group>
              <Button type="button" onClick={onClick}>
                Submit
              </Button>
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
