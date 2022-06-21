import { Row, Col, Form, Button } from "react-bootstrap";
import { Fragment, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./default.css";

function Component() {
  const [settings, setSettings] = useState({
    receiptNo: "",
  });

  const onClick = async (e) => {};

  return (
    <Fragment>
      <Row>
        <Col>
          <Form>
            <fieldset>
              <Form.Group className="mb-3">
                <Form.Control
                  id="PlateNoInput"
                  placeholder="Receipt no."
                  name="receiptNo"
                  onChange={(e) => {
                    setSettings({
                      ...settings,
                      vehiclePlateNo: e.target.value,
                    });
                  }}
                />
              </Form.Group>
              <Button type="button" onClick={onClick}>
                Submit
              </Button>
            </fieldset>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Component;
