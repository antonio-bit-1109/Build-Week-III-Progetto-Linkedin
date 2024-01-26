import React, { useState } from "react";

import { Col, Container, NavDropdown, Row, Dropdown } from "react-bootstrap";
import { QuestionCircleFill, ShieldFillCheck, GearFill } from "react-bootstrap-icons";

const Footer = () => {
  const [linguaSelezionata, setLinguaSelezionata] = useState("Italiano");

  const cambiaLingua = (nuovaLingua) => {
    setLinguaSelezionata(nuovaLingua);
  };
  return (
    <div className="mt-respect-up mt-respect-down">
      <div id="tarles"></div>
      <Container>
        <Row xs={12}>
          <Col xs={6}>
            <div>
              <p className="m-1 fs-8">Informazioni</p>
            </div>
            <div>
              <p className="m-1 fs-8">Talent Solution</p>
            </div>
            <div>
              <p className="m-1 fs-8">Carriera</p>
            </div>
            <NavDropdown
              className=" m-1 mb-4 fs-8"
              id="nav-dropdown-dark-example"
              title="Privacy e condizioni "
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <div>
              <p className="m-1 fs-8">Pubblicità</p>
            </div>
            <div>
              <p className="m-1 fs-8">Mobile</p>
            </div>
            <div>
              <p className="m-1 fs-8">Centro sicurezza</p>
            </div>
          </Col>
          <Col xs={6}>
            <div>
              <p className="m-1 fs-8">Accessibilità</p>
            </div>
            <div>
              <p className="m-1 fs-8">Linee guida della community</p>
            </div>
            <div>
              <p className="m-1 fs-8">Soluzioni Marketing</p>
            </div>
            <div>
              <p className="m-1 fs-8">Opzioni per gli annunci pubblicitari</p>
            </div>
            <div>
              <p className="m-1 fs-8">Sales Solutions</p>
            </div>
            <div>
              <p className="m-1 fs-8">Piccole imprese</p>
            </div>
          </Col>
          <Col xs={12}>
            <div className="mb-3">
              <div className="d-flex gap-2">
                <div>
                  <QuestionCircleFill className="fs-2" />
                </div>
                <div className="d-flex flex-column">
                  <p className="m-0 fs-7 fw-bold">Domande?</p>
                  <p className="m-0 fs-8">Visita il nostro centro assistenza</p>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="d-flex gap-2">
                <div>
                  <GearFill className="fs-2" />
                </div>
                <div className="d-flex flex-column">
                  <p className="m-0 fs-7 fw-bold">Gestisci il tuo account e la tua privacy</p>
                  <p className="m-0 fs-8">Vai alle impostazioni</p>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="d-flex gap-2">
                <div>
                  <ShieldFillCheck className="fs-2" />
                </div>
                <div className="d-flex flex-column">
                  <p className="m-0 fs-7 fw-bold">Trasparenza sui contenuti consigliati</p>
                  <p className="m-0 fs-8">Scopri di più sui contenuti consigliati</p>
                </div>
              </div>
            </div>
            <div>
              <p className="m-1 fs-8">Selezione Lingua</p>
            </div>
            <Dropdown className="border border-dark border-1" style={{ height: "fit-content" }}>
              <Dropdown.Toggle variant="white" id="dropdown-basic" className="w-100 text-end">
                {linguaSelezionata}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => cambiaLingua("Italiano")}>Italiano</Dropdown.Item>
                <Dropdown.Item onClick={() => cambiaLingua("English")}>English</Dropdown.Item>
                <Dropdown.Item onClick={() => cambiaLingua("Serbian")}>Serbian</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div>
              <p className="m-1 fs-8">LinkedIn Corporation &copy; 2024</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
