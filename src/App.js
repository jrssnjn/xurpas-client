import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import './default.css'
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
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
