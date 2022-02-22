import { View, Text } from "react-native";
import React from "react";
import { Button, Col, Form, FormGroup, Modal, Row } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import * as yup from "yup";
import { useFormik } from "formik";

export default function CategoryForm({ isOpen, handleClose }) {
  const formik = useFormik({
    initialValues: {
      description: "",
      status: {
        id: 1,
        description: "Activo",
      },
    },
    validationSchema: yup.object().shape({
      description: yup.string().required("Campo obligatorio"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registrar categoría</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="description"
              placeholder="Gaming"
              value={formik.values.description}
              onChange={formik.handleChange}
            ></Form.Control>
            {
                formik.errors.description ?
                <span>{formik.errors.description}</span> : null
            }
          </Form.Group>
          <FormGroup className="mb-4">
            <Row>
              <Col className="text-end">
                <Button variant="danger" type="button" onClick={handleClose}>
                  <FeatherIcon icon={"x"} />
                  &nbsp; Cerrar
                </Button>
                <Button className="ms-3" variant="success" type="submit" disabled={formik.isValid}>
                  <FeatherIcon icon={"check"} />
                  &nbsp; Guardar
                </Button>
              </Col>
            </Row>
          </FormGroup>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
