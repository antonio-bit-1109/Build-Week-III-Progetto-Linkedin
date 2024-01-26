import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { EyeFill, MagnetFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";

const ConsigliatoPerTe = () => {
  return (
    <div className="border border-2 rounded-3 mb-2 p-3 bg-white">
      <Row>
        <Col>
          <div className="d-flex flex-column">
            <h5 className="m-0">Consigliato per Te</h5>
            <div className="fs-8 d-flex align-items-center gap-1 opacity-75">
              <EyeFill></EyeFill> <p className="m-0">Solo per te</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="border rounded-4 p-3 my-3">
            <Row>
              <Col>
                <div className="d-flex align-items-center gap-2">
                  <MagnetFill width={"50px"} height={"50px"} />
                  <p className="my-1 fw-semibold">
                    Entra in contatto con una persona che ricopre il ruolo Programmatore per raggiungere i tuoi
                    obiettivi professionali
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <p className="my-1">
                    Trova persone che possono fornire indicazioni e aiutarti a trovare potenziali opportunità.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <Button variant="outline-secondary" className="rounded-pill px-3 py-1 my-1">
                    Cerca Persone
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ConsigliatoPerTe;
