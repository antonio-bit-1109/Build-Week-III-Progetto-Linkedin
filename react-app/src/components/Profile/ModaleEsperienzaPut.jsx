import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ModaleEsperienzaPut = ({
    showModalPut,
    handleCloseModalPut,
    handleMakeAPut,
    setEsperienzaData,
    esperienzaData,
}) => {
    return (
        <>
            <Modal show={showModalPut} onHide={handleCloseModalPut}>
                <Modal.Header>
                    <Modal.Title>Aggiorna Nuova Esperienza </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        onSubmit={(event) => {
                            handleMakeAPut(event);
                        }}
                        /*  onSubmit={(event) => {
                HandleMakeAPost(event);
            }} */
                    >
                        <Form.Group className="mb-3" controlId="formRuolo">
                            <Form.Label>Ruolo:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="inserisci ruolo"
                                onChange={(event) => {
                                    setEsperienzaData({ ...esperienzaData, role: event.target.value });
                                }}
                                value={esperienzaData.role}
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
                                value={esperienzaData.company}
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
                                value={esperienzaData.startDate}
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
                                value={esperienzaData.endDate}
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
                                value={esperienzaData.description}
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
                                value={esperienzaData.area}
                            />
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModalPut}>
                                Close
                            </Button>
                            <Button type="submit" variant="primary" onClick={handleCloseModalPut}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModaleEsperienzaPut;
