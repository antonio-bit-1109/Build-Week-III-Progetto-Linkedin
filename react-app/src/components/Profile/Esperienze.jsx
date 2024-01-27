import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Pencil, PlusLg } from "react-bootstrap-icons";
import { Token } from "../../token";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../redux/functions/fetch";
import { setDataFetchEsperienze } from "../../redux/reducers/StateSliceReducers";
import { fetchDataPost } from "../../redux/functions/fetchPost";
import { fetchDelete } from "../../redux/functions/fetchDelete";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const URL = "https://striveschool-api.herokuapp.com/api/profile/";

export const optionsGet = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token} `,
    },
};

const optionsDelete = {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token} `,
    },
};

const Esperienze = (props) => {
    const { userid } = props;
    const dispatch = useDispatch();
    const datiFetchEsperienze = useSelector((state) => state.FetchData.dataFetchEsperienze);
    const [show, setShow] = useState(false);
    const [esperienzaData, setEsperienzaData] = useState({
        role: "",
        company: "",
        startDate: "",
        endDate: "", // può essere null
        description: "",
        area: "",
    });

    console.log("userid", userid);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        dispatch(fetchData(URL, `${userid}/experiences`, optionsGet, setDataFetchEsperienze));
    }, [userid, dispatch]);

    const handleDelete = async (expId) => {
        await fetchDelete(optionsDelete, userid, expId);
        dispatch(fetchData(URL, `${userid}/experiences`, optionsGet, setDataFetchEsperienze));
    };

    const HandleMakeAPost = async (event) => {
        event.preventDefault();
        await fetchDataPost(
            `https://striveschool-api.herokuapp.com/api/profile/${userid}/experiences `,
            esperienzaData
        );
        dispatch(fetchData(URL, `${userid}/experiences`, optionsGet, setDataFetchEsperienze));
    };

    return (
        <div>
            {" "}
            <div className="bg-white border border-2 rounded-3 mb-2 overflow-auto">
                <div className="p-3">
                    <div className="d-flex gap-3">
                        <div>
                            <h5 className="my-1">Esperienze</h5>
                        </div>
                        <div className="ms-auto">
                            {
                                /* me &&  */ <div className="rounded-pill hover ">
                                    <Button variant="secondary-outline" /* onClick={() => handleSetVisible(-1)} */>
                                        {" "}
                                        <PlusLg onClick={handleShow} />
                                    </Button>
                                </div>
                            }
                        </div>
                    </div>
                    <Row>
                        {(datiFetchEsperienze === null || datiFetchEsperienze.length === 0) && (
                            <div>Non ci sono esperienze da visualizzare.</div>
                        )}

                        <Row>
                            {" "}
                            {datiFetchEsperienze &&
                                datiFetchEsperienze.map((esperienza, i) => (
                                    <Col key={`key-${esperienza._id}`} className="my-1 border rounded-3" xs={12}>
                                        {" "}
                                        <div className="d-flex gap-2 align-items-center">
                                            {
                                                <img
                                                    className="rounded"
                                                    width={"40px"}
                                                    src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                                                    alt="placeholder"
                                                />
                                            }
                                            <Row>
                                                <Col md="6" lg="3">
                                                    <p className="m-0">
                                                        <span className="fw-semibold">Ruolo: </span>
                                                        {esperienza.role}
                                                    </p>
                                                </Col>
                                                <Col md="6" lg="3">
                                                    <p className="m-0">
                                                        <span className="fw-semibold">Azienda: </span>{" "}
                                                        {esperienza.company}
                                                    </p>
                                                </Col>
                                                <Col md="8" lg="4">
                                                    <p className="m-0">
                                                        <span className="fw-semibold">Data Inizio: </span>
                                                        {new Date(esperienza.startDate).toLocaleDateString("it-IT", {
                                                            day: "2-digit",
                                                            month: "2-digit",
                                                            year: "numeric",
                                                        })}
                                                    </p>
                                                </Col>
                                                {esperienza.endDate && (
                                                    <Col md="8" lg="4">
                                                        <p className="m-0">
                                                            <span className="fw-semibold">Data Fine: </span>
                                                            {new Date(esperienza.endDate).toLocaleDateString("it-IT", {
                                                                day: "2-digit",
                                                                month: "2-digit",
                                                                year: "numeric",
                                                            })}
                                                        </p>
                                                    </Col>
                                                )}
                                            </Row>
                                            {
                                                /* me && */ <Button
                                                    onClick={() => handleDelete(esperienza._id)}
                                                    variant="light"
                                                    className="rounded-pill ms-auto"
                                                >
                                                    ❌
                                                </Button>
                                            }
                                            {
                                                <Button variant="light" className="rounded-pill px-3">
                                                    <div className="rounded-pill hover ">
                                                        <Pencil />
                                                    </div>
                                                </Button>
                                            }
                                        </div>
                                    </Col>
                                ))}
                            {/* MODALE VA FUORI DAL MAP, SOLO UN MDALE CARICATO CON I DATI, I DATI VENGONO SALVATI IN UNO STATO APPOSITO  */}
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
                        </Row>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Esperienze;
