import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Pen, PenFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Rete = () => {
    const elencoCommenti = useSelector((state) => state.FetchData.dataFetchGetCommenti);
    const [show, setShow] = useState(false);
    const [datiModale, setDatiModale] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(elencoCommenti);

    return (
        <div className="mt-7 w-100">
            <div className="d-flex justify-content-center">
                {" "}
                <h2>Elenco dei commenti </h2>{" "}
            </div>
            {elencoCommenti.slice(0, 20).map((commento) => (
                <Container>
                    <Row>
                        <Col>
                            <div className="d-flex align-items-center">
                                <div className="d-block  ">
                                    <div className="d-flex gap-3 w-100 p-3 ">
                                        <p className="m-0 my-1">{commento.author}</p>
                                        <p className="m-0 my-1">{commento.comment}</p>
                                        <p className="m-0 my-1">{commento.rate} 🌼 </p>
                                    </div>
                                </div>
                                <Button
                                    onClick={() => {
                                        handleShow(true);
                                        setDatiModale(commento);
                                    }}
                                    variant="transparent"
                                >
                                    <div>
                                        <PenFill fontSize={"25"} />
                                    </div>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            ))}
            {/* MODALE MESSO FUORI DAL MAP!! SOLO UN MODALE PER TUTTI QUANTI, IL MODALE VIENE CARICATO OGNI VOLTA CON I DATI DELL SINGOLO OGGETTO MAPPATO (commento), TRAMITE UNO STATO (datiModale) */}
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>uN MODALE VALIDO PER TUTTI</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Autore del commento</Form.Label>
                                <Form.Control type="text" autoFocus value={datiModale.author} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>commento</Form.Label>
                                <Form.Control type="text" autoFocus value={datiModale.comment} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>valutazione in fiorellini</Form.Label>
                                <Form.Control type="text" autoFocus value={datiModale.rate} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Rete;
