import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FloatingLabel, Row, Col } from "react-bootstrap";

const ProjectTamplate = ({ show, handleClose, data, setData }) => {
  const [formData, setFormData] = useState(
    data.reduce((acc, item) => ({ ...acc, [item.label]: item.value }), {})
  );

  function handleSaveDetails(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseInt(value),
    });
  }
  function handleSaveForm(e) {
    e.preventDefault();
    Object.keys(formData).forEach((label) => {
      setData({ label, value: formData[label] });
    });

    handleClose();
  }
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="flex justify-center relative">
          <Modal.Title className="absolute ">Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSaveForm}>
            <Row className="mb-3">
              <Col>
                <FloatingLabel
                  controlId="inProgress"
                  label="InProgress"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    name="InProgress"
                    value={formData.InProgress}
                    onChange={handleSaveDetails}
                    required
                  />
                </FloatingLabel>
              </Col>

              <Col>
                <FloatingLabel controlId="new" label="New" className="mb-3">
                  <Form.Control
                    type="number"
                    name="New"
                    value={formData.New}
                    onChange={handleSaveDetails}
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <FloatingLabel
                  controlId="complete"
                  label="Complete"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    name="Complete"
                    value={formData.Complete}
                    onChange={handleSaveDetails}
                    required
                  />
                </FloatingLabel>
              </Col>

              <Col>
                <FloatingLabel
                  controlId="cancel"
                  label="Cancel"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    name="Cancel"
                    value={formData.Cancel}
                    onChange={handleSaveDetails}
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <div className="flex justify-end">
              <Button variant="primary" type="submit">
                Save
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProjectTamplate;
