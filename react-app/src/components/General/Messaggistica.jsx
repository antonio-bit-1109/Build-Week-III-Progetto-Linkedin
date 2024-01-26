import { Form, Image, Container, Accordion } from "react-bootstrap";
import { ThreeDots, PencilSquare } from "react-bootstrap-icons";

const Messaggistica = () => {
  return (
    <div className="fixed-bottom w-100 text-end">
      <Container>
        <div className="w-50 ms-auto">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="d-flex flex-row align-items-center gap-3">
                  <Image
                    src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                    width={30}
                    height={30}
                    roundedCircle
                  />
                  Messagistica
                  <ThreeDots />
                  <PencilSquare />
                </div>
              </Accordion.Header>
              <Accordion.Body className="messaggistica-height">
                <Form.Control type="text" placeholder="Cerca.." />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default Messaggistica;
