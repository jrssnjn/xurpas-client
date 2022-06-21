import { useEffect } from "react";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";

function Receipt(props) {
  return (
    <>
      <Modal
        centered
        aria-labelledby="contained-modal-title-vcenter"
        show={props.visible}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Receipt Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12}>Vehicle Size : {props.data.carSize}</Col>
              <Col xs={12}>
                Total hours parked : {props.data.totalHoursParked}
              </Col>
              {props.data.flatRate && (
                <Col xs={12}>Flat Rate : {props.data.flatRate}</Col>
              )}
              {props.data.flatRateTotal && (
                <Col xs={12}>Flat Rate Total : {props.data.flatRateTotal}</Col>
              )}
              {props.data.exceedingHours && (
                <Col xs={12}>Exceeding Hours : {props.data.exceedingHours}</Col>
              )}
              {props.data.exceedingHourlyRate && (
                <Col xs={12}>
                  Exceeding Hourly Rate : {props.data.exceedingHourlyRate}
                </Col>
              )}
              {props.data.exceedingHourlyTotal && (
                <Col xs={12}>
                  Exceeding Hourly Total : {props.data.exceedingHourlyTotal}
                </Col>
              )}
              <Col xs={12}>Total Fees : {props.data.totalFees}</Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Receipt;
