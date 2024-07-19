import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FloatingLabel, Row, Col } from "react-bootstrap";

const FileTamplate = ({ show, handleClose, data, setData, name }) => {
  const [formData, setFormData] = useState(
    data.reduce((acc, item) => ({ ...acc, [item.title]: item.value }), {})
  );

  function handleSaveDetails(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseInt(value, 10),
    });
  }

  function handleSaveForm(e) {
    e.preventDefault();
    Object.keys(formData).forEach((title) => {
      setData({ title, value: formData[title] });
    });
    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="flex  relative justify-center " closeButton>
          <Modal.Title className=" absolute  ">{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSaveForm}>
            <Row className="mb-3">
              <Col>
                <FloatingLabel controlId="uiUX" label="UI/UX" className="mb-3">
                  <Form.Control
                    type="number"
                    name="uiUX"
                    value={formData.uiUX || ""}
                    onChange={handleSaveDetails}
                    required
                  />
                </FloatingLabel>
              </Col>

              <Col>
                <FloatingLabel
                  controlId="design"
                  label="Design"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    name="Design"
                    value={formData.Design || ""}
                    onChange={handleSaveDetails}
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <FloatingLabel
                  controlId="mobile"
                  label="Mobile"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    name="Mobile"
                    value={formData.Mobile || ""}
                    onChange={handleSaveDetails}
                    required
                  />
                </FloatingLabel>
              </Col>

              <Col>
                <FloatingLabel
                  controlId="illustration"
                  label="Illustration"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    name="Illustration"
                    value={formData.Illustration || ""}
                    onChange={handleSaveDetails}
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <FloatingLabel controlId="art" label="Art" className="mb-3">
                  <Form.Control
                    type="number"
                    name="Art"
                    value={formData.Art || ""}
                    onChange={handleSaveDetails}
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <div className="flex justify-end ">
              <Button variant="primary" type="submit" className="">
                Save
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FileTamplate;
