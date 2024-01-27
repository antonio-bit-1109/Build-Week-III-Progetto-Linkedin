import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Pen, PenFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { fetchData } from "../../redux/functions/fetch";
import { fetchPutCommenti } from "../../redux/functions/fetchPutCommenti";
import { TokenCommenti } from "../../token";
import { setdataFetchGetCommenti } from "../../redux/reducers/StateSliceReducers";

const Rete = () => {
    const dispatch = useDispatch();

    const optionsGetCommenti = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TokenCommenti} `,
        },
    };

    useEffect(() => {
        dispatch(
            fetchData(
                "https://striveschool-api.herokuapp.com/api/comments/",
                "",
                optionsGetCommenti,
                setdataFetchGetCommenti
            )
        );
    }, []);

    const elencoCommenti = useSelector((state) => state.FetchData.dataFetchGetCommenti);
    const [show, setShow] = useState(false);
    const [datiModale, setDatiModale] = useState({
        comment: "",
        rate: "",
        elementId: "",
    });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log("elencoCommenti", elencoCommenti);

    const handleModificaCommento = async (event) => {
        event.preventDefault();
        console.log("ciao");
        await fetchPutCommenti(datiModale, datiModale._id);
        dispatch(
            fetchData(
                "https://striveschool-api.herokuapp.com/api/comments/",
                "",
                optionsGetCommenti,
                setdataFetchGetCommenti
            )
        );
    };

    const arrayCommentiOrdineCronologico = () => {
        let elencoCommentiTagliato = [...elencoCommenti];
        let elencoCommentitagliatoReverse = elencoCommentiTagliato.reverse().slice(0, 20);
        console.log("elencoCommentitagliatoReverse", elencoCommentitagliatoReverse);
        return elencoCommentitagliatoReverse;
    };
    useEffect(() => {
        if (elencoCommenti) {
            arrayCommentiOrdineCronologico();
        }
    }, [elencoCommenti]);

    return (
        <>
            {elencoCommenti && (
                <div className="mt-7 w-100">
                    <div className="d-flex justify-content-center">
                        {" "}
                        <h2>Elenco dei commenti </h2>{" "}
                    </div>
                    {arrayCommentiOrdineCronologico().map((commento) => (
                        <Container key={`commento${commento._id}`}>
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
                                <Form
                                    onSubmit={(event) => {
                                        handleClose();
                                        handleModificaCommento(event);
                                    }}
                                >
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Autore del commento</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={datiModale.author}
                                            onChange={(event) =>
                                                setDatiModale((prevState) => ({
                                                    ...prevState,
                                                    author: event.target.value,
                                                }))
                                            }
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>commento</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={datiModale.comment}
                                            onChange={(event) =>
                                                setDatiModale((prevState) => ({
                                                    ...prevState,
                                                    comment: event.target.value,
                                                }))
                                            }
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>valutazione in fiorellini</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={datiModale.rate}
                                            onChange={(event) =>
                                                setDatiModale((prevState) => ({
                                                    ...prevState,
                                                    rate: event.target.value,
                                                }))
                                            }
                                        />
                                    </Form.Group>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" type="submit">
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Form>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            )}
        </>
    );
};

export default Rete;
