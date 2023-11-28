import styled from 'styled-components';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { UploadIcon } from './Icons';
import axios from 'axios';

const API_URL = "http://casevault-lb-1054477253.us-east-1.elb.amazonaws.com:3000/api/v1/cases";
let api = axios.create({
  baseURL: API_URL,
});

function CreateModal() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    video: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpload = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("video", formData.video );
      const response = await api.post("http://casevault-lb-1054477253.us-east-1.elb.amazonaws.com:3000/api/v1/cases", { case: formData });
      console.log(API_URL);
      console.log("Solicitud POST exitosa:", response.data);

      handleClose();
    } catch (error) {
      console.error("Error al realizar la solicitud POST:", error);
    }
  };


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button variant="outline-light" onClick={handleShow}>
          CREAR<UploadIcon />
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Caso </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.Video">
              <Form.Label>Link video (YouTube)</Form.Label>
              <Form.Control
                type="text"
                name="video"
                value={formData.video}
                onChange={handleInputChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} 
                              type="text"
                              name="description"
                              value={formData.description}
                              onChange={handleInputChange}
                              autoFocus
                            />
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Archivos adjuntos</Form.Label>
                <Form.Control type="file" multiple />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="dark" onClick={handleUpload}>
            Subir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateModal;

export function openCreateModal() {
    setShow(true);
  }