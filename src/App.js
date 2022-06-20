import { Container, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ParkVehicle from "./parkVehicle";
import "./default.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Xurpas</Navbar.Brand>
          </Container>
        </Navbar>
        <Container className="custom-container">
          <Routes>
            <Route exact path="/" element={<ParkVehicle />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
