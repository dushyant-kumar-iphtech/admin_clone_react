import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FloatingLabel, Row, Col } from "react-bootstrap";

const TaskModal = ({ show, handleClose, data, setData, name, type }) => {
  const [newData, setNewData] = useState(data);
  function handleSaveDetails(e) {
    const { name, value } = e.target;
    setNewData({
      ...newData,
      [name]: value,
    });
    console.log(e.target.name, " ", e.target.value);
  }
  function handleSaveForm(e) {
    e.preventDefault();
    setData(newData);
    handleClose();
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="flex  relative justify-center " closeButton>
          <Modal.Title className=" absolute  ">
            {name}
            {type}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSaveForm}>
            <Row className="mb-3">
              <Col>
                <FloatingLabel controlId="task" label="Task" className="mb-3">
                  <Form.Control
                    as="textarea"
                    name="title"
                    value={newData.title}
                    onChange={handleSaveDetails}
                    required
                    disabled={type === "(View)"}
                    style={{ height: "150px" }}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <FloatingLabel
                  controlId="status"
                  label="Status"
                  className="mb-3"
                >
                  <Form.Control
                    as="select"
                    name="label"
                    value={newData.label}
                    onChange={handleSaveDetails}
                    required
                    disabled={type === "(View)"}
                  >
                    <option value="">Select</option>
                    <option value="New">New</option>
                    <option value="InProgress">InProgress</option>
                    <option value="Complete">Complete</option>
                    <option value="Cancel">Cancel</option>
                  </Form.Control>
                </FloatingLabel>
              </Col>
            </Row>
            <div className="flex justify-end ">
              {type === "(Edit)" && (
                <Button variant="primary" type="submit">
                  Save
                </Button>
              )}
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TaskModal;
