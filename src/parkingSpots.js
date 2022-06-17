import { Table } from "react-bootstrap";
import { useState } from "react";

function parkingSpots() {
  return (
    <Table bordered hover className="mt-5">
      <thead>
        <tr>
          <th>Parking Spot #</th>
          <th>Size</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Small</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Medium</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Large</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default parkingSpots;
