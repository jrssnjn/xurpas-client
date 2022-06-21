import { Fragment } from "react";

function ParkingSpot({ id, distance, description }) {
  return (
    <Fragment>
      <tr>
        <td>{id}</td>
        <td>{distance.slice(0, 4)}m</td>
        <td>{description}</td>
      </tr>
    </Fragment>
  );
}

export default ParkingSpot;
