import { Fragment } from "react";

function ParkingSpot({ id, description }) {
  return (
    <Fragment>
      <tr>
        <td>{id}</td>
        <td>{description.slice(0, 4)}m</td>
      </tr>
    </Fragment>
  );
}

export default ParkingSpot;
