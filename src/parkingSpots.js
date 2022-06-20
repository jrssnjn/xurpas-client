import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import Spot from "./spotItem";

function ParkingSpots() {
  const [parkingSpots, setParkingSpots] = useState([]);

  useEffect(() => {
    console.log("Parking Spots :", parkingSpots);
  }, []);

  return (
    <Table bordered hover className="mt-5">
      <thead>
        <tr>
          <th>Parking Spot #</th>
          <th>Size</th>
        </tr>
      </thead>
      <tbody>
        <Spot id="1" description="Small parking size" />
      </tbody>
    </Table>
  );
}

export default ParkingSpots;
