import { Table } from "react-bootstrap";
import { Fragment, useEffect } from "react";

function ParkingSpot(props) {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <Fragment>
      <tr>
        <td>1</td>
        <td>Small</td>
      </tr>
    </Fragment>
  );
}

export default ParkingSpot;
