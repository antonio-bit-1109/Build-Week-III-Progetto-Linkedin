import { Col, Row } from "react-bootstrap";
import { BookmarkFill, Clipboard2Check, GearFill, ListTask, PencilSquare, PlayBtnFill } from "react-bootstrap-icons";

const JobRight = () => {
  return (
    <Col xs="12" sm="12" md="3" lg="2">
      <div className="flex-column">
        <Row className="flex-column">
          <Col
            className={`d-lg-block "d-block" : "d-none"
            }`}
          >
            <Row className="flex-column bg-white">
              <Col className="d-flex align-items-start py-3" style={{ fontSize: "14px" }}>
                <BookmarkFill className="me-2 text-black-50 fs-4" />
                <span className="mb-0 fw-bold">I miei elementi</span>
              </Col>
              <Col className="d-flex align-items-start py-3 " style={{ fontSize: "14px" }}>
                <ListTask className="me-2 text-black-50 fs-4" />
                <p className="mb-0 fw-bold">Preferenza</p>
              </Col>
              <Col className="d-flex align-items-start py-3" style={{ fontSize: "14px" }}>
                <Clipboard2Check className="me-2 text-black-50 fs-4" />
                <p className="mb-0 fw-bold">Valutazioni delle competenze</p>
              </Col>
              <Col className="d-flex align-items-start py-3" style={{ fontSize: "14px" }}>
                <PlayBtnFill className="me-2 text-black-50 fs-4" />
                <p className="mb-0 fw-bold">Indicazioni per chi cerca lavoro</p>
              </Col>
              <Col className="d-flex align-items-start py-3 " style={{ fontSize: "14px" }}>
                <GearFill className="me-2 text-black-50 fs-4" />
                <p className="mb-0 fw-bold">Impostazioni candidatura</p>
              </Col>
            </Row>
            <Col>
              <div className="border rounded-4 border-primary d-flex gap-3 justify-content-center align-items-center btn btn-outline-primary mt-3 mb-3">
                <PencilSquare />
                <p className="mb-0 fs-8 fw-bold">Pubblica offerta gratuita</p>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default JobRight;
