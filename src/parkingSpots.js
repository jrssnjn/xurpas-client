import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import Spot from "./spotItem";

function ParkingSpots({ vehicleSize, entryPoint }) {
  const [parkingSpots, setParkingSpots] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let { data } = await axios.get(
        `http://localhost:3000/parking-spots?entry_point=${entryPoint}&size=${vehicleSize}`
      );

      setParkingSpots(data);
    }

    fetchData();
  }, [vehicleSize, entryPoint]);

  return (
    <Table bordered hover className="mt-5">
      <thead>
        <tr>
          <th>Parking Spot #</th>
          <th>Distance</th>
          <th>Parking Spot Size</th>
        </tr>
      </thead>
      <tbody>
        {parkingSpots.length > 0 &&
          parkingSpots.map((elem) => {
            return (
              <Spot
                key={elem.parkingSpotNumber}
                id={elem.parkingSpotNumber}
                distance={elem.distance}
                description={elem.description}
              />
            );
          })}
      </tbody>
    </Table>
  );
}

export default ParkingSpots;
