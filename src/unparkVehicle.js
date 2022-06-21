import { Row, Col, Form, Button } from "react-bootstrap";
import { Fragment, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./default.css";
import Modal from "./modal";

function Component() {
  const [settings, setSettings] = useState({
    receiptNo: "",
  });

  const [visible, setVisible] = useState(false);

  const [response, setResponse] = useState({});

  const onClick = async (e) => {
    if (!settings.receiptNo)
      return toast("Receipt Number required for this action.");

    let res = await axios.post("http://localhost:3000/unpark-vehicle", {
      receiptNumber: settings.receiptNo,
      parkedAt: new Date(),
    });

    setResponse(res.data);

    setVisible(true);
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
                  placeholder="Receipt no."
                  name="receiptNo"
                  onChange={(e) => {
                    setSettings({
                      ...settings,
                      receiptNo: e.target.value,
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
      <Modal
        visible={visible}
        onHide={() => {
          setVisible(false);
        }}
        data={response}
      />
    </Fragment>
  );
}

export default Component;
