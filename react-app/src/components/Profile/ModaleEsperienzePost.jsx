import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ModaleEsperienzePost = ({ show, handleClose, HandleMakeAPost, setEsperienzaData, esperienzaData }) => {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Inserisci Nuova Esperienza </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        onSubmit={(event) => {
                            HandleMakeAPost(event);
                        }}
                    >
                        <Form.Group className="mb-3" controlId="formRuolo">
                            <Form.Label>Ruolo:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="inserisci ruolo"
                                onChange={(event) => {
                                    setEsperienzaData({ ...esperienzaData, role: event.target.value });
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Company:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="inserisci Company"
                                onChange={(event) => {
                                    setEsperienzaData({
                                        ...esperienzaData,
                                        company: event.target.value,
                                    });
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Data Inizio Lavoro</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="inserisci data inizio lavoro"
                                onChange={(event) => {
                                    setEsperienzaData({
                                        ...esperienzaData,
                                        startDate: event.target.value,
                                    });
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Data Fine Lavoro (non oblbigatoria)</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="inserisci data termine lavoro"
                                onChange={(event) => {
                                    setEsperienzaData({
                                        ...esperienzaData,
                                        endDate: event.target.value,
                                    });
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Descrizione:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="inserisci descrizione"
                                onChange={(event) => {
                                    setEsperienzaData({
                                        ...esperienzaData,
                                        description: event.target.value,
                                    });
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Luogo Di lavoro: </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="inserisci luodo di lavoro "
                                onChange={(event) => {
                                    setEsperienzaData({ ...esperienzaData, area: event.target.value });
                                }}
                            />
                        </Form.Group>
                        <Modal.Footer>
                            <Button
                                variant="secondary"
                                onClick={() => {
                                    handleClose();
                                    setEsperienzaData({
                                        role: "",
                                        company: "",
                                        startDate: "",
                                        endDate: "", // può essere null
                                        description: "",
                                        area: "",
                                    });
                                }}
                            >
                                Close
                            </Button>
                            <Button
                                type="submit"
                                variant="primary"
                                onClick={() => {
                                    handleClose();
                                    setTimeout(() => {
                                        setEsperienzaData({
                                            role: "",
                                            company: "",
                                            startDate: "",
                                            endDate: "", // può essere null
                                            description: "",
                                            area: "",
                                        });
                                    }, 700);
                                }}
                            >
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModaleEsperienzePost;
