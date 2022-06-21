import { Container, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import ParkVehicle from "./parkVehicle";
import "./default.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Nav.Link>
                <Navbar.Brand>Xurpas</Navbar.Brand>
              </Nav.Link>
            </LinkContainer>
            <Nav className="me-auto">
              <LinkContainer to="/park-vehicle">
                <Nav.Link>Park Vehicle</Nav.Link>
              </LinkContainer>
            </Nav>
          </Container>
        </Navbar>
        <Container className="custom-container">
          <Routes>
            <Route exact path="/park-vehicle" element={<ParkVehicle />} />
          </Routes>
        </Container>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
