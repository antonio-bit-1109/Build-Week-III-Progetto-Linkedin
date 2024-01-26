import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { Nav, Accordion, Row, Col } from "react-bootstrap";

const ToggleButton = ({ children, eventKey }) => {
	const decoratedOnClick = useAccordionButton(eventKey, () => console.log("toggle"));

	return <span onClick={decoratedOnClick}>{children}</span>;
};

const Interessi = () => {
	return (
		<div className="mb-2 border border-2 rounded-3 bg-white">
			<div className="p-3">
				<h5 className="m-0">Interessi</h5>
			</div>
			<Accordion defaultActiveKey="0">
				<Nav variant="tabs" defaultActiveKey="#">
					<Nav.Item>
						<Nav.Link href="#" className="text-decoration-none text-black">
							<ToggleButton eventKey="0">Aziende</ToggleButton>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="link-1" className="text-decoration-none text-black">
							<ToggleButton eventKey="1">Scuole o Università</ToggleButton>
						</Nav.Link>
					</Nav.Item>
				</Nav>
				<Accordion.Collapse eventKey="0">
					<div className="p-3">
						<Row>
							<Col xs={2}>
								<img
									src="https://consumersiteimages.trustpilot.net/business-units/62a6277627ee655c1226b624-198x149-2x.avif"
									alt="immagine-school"
									className="img-fluid rounded-circle"
								></img>
							</Col>
							<Col>
								<h5 className="mb-0 fs-6">EPICODE</h5>
								<p className="fs-7 opacity-50">12.865 follower</p>
							</Col>
						</Row>
						<Row>
							<Col xs={2}>
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/108px-LinkedIn_icon.svg.png?20210220164014"
									alt="logo Linkedin"
									className="img-fluid rounded-circle"
								></img>
							</Col>
							<Col>
								<h5 className="mb-0 fs-6">LinkedIn</h5>
								<p className="fs-7 opacity-50">123.456 follower</p>
							</Col>
						</Row>
					</div>
				</Accordion.Collapse>
				<Accordion.Collapse eventKey="1">
					<div className="p-3">
						<Row>
							<Col xs={2}>
								<img
									src="https://consumersiteimages.trustpilot.net/business-units/62a6277627ee655c1226b624-198x149-2x.avif"
									alt="immagine-school"
									className="img-fluid rounded-circle"
								></img>
							</Col>
							<Col>
								<h5 className="mb-0 fs-6">EPICODE</h5>
								<p className="fs-7 opacity-50">12.865 follower</p>
							</Col>
						</Row>
					</div>
				</Accordion.Collapse>
			</Accordion>
		</div>
	);
};

export default Interessi;
