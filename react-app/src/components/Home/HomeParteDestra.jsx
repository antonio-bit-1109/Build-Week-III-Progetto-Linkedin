import React from "react";
import { Col, Row } from "react-bootstrap";
import { InfoSquareFill } from "react-bootstrap-icons";

const HomeParteDestra = () => {
    return (
        <Col className="d-none d-lg-block d-xl-flex align-items-lg-start ms-auto" lg="8" xl="3">
            <Row>
                <div className=" border border-1 rounded-3 bg-white">
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="fw-bold my-2">LinkedIn Notizie</p>
                        <InfoSquareFill />
                    </div>
                    <Row>
                        <Col className="p-0">
                            <ul className="mx-3">
                                <li className="border-0 fw-bold" style={{ fontSize: "13px" }}>
                                    Assunzioni e nuovi premi in Ferrari
                                    <p className="fw-light">Notizie principali | 182 lettori</p>
                                </li>
                                <li className="border-0 fw-bold" style={{ fontSize: "13px" }}>
                                    Saipem punta sull'eolico <br /> di Naval Enginering
                                    <p className="fw-light">2 ore fa</p>
                                </li>
                                <li className="border-0 fw-bold" style={{ fontSize: "13px" }}>
                                    Quante barriere ci sono nella società
                                    <p className="fw-light">4 ore fa</p>
                                </li>
                                <li className="border-0 fw-bold" style={{ fontSize: "13px" }}>
                                    Inclusione LGBTQ+
                                    <p className="fw-light">1 giorno fa | 1.1765 lettori</p>
                                </li>
                                <li className="border-0 fw-bold" style={{ fontSize: "13px" }}>
                                    Nuova acquisiszione per Zenga
                                    <p className="fw-light">11 ore fa | 124 lettori</p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Row>
        </Col>
    );
};

export default HomeParteDestra;
