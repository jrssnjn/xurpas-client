import {
  Container,
  Row,
  Col,
  Navbar,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import Receipt from "./modal";
import "./default.css";

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
