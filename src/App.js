import {
  Container,
  Row,
  Col,
  Navbar,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import { useState } from "react";
import "./default.css";

function Receipt() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Xurpas</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="custom-container">
        <Row>
          <Col>
            <Form>
              <fieldset>
                <Form.Group className="mb-3">
                  <Form.Control id="PlateNoInput" placeholder="Vehicle no." />
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
      </Container>
      <Receipt />
    </div>
  );
}

export default App;
