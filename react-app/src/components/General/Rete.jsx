import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Pen, PenFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const Rete = () => {
    const elencoCommenti = useSelector((state) => state.FetchData.dataFetchGetCommenti);
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
                                <Button variant="transparent">
                                    <div>
                                        <PenFill fontSize={"25"} />
                                    </div>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            ))}
        </div>
    );
};

export default Rete;
