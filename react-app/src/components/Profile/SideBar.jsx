import { Col, Row } from "react-bootstrap";
import { Pencil, InfoSquareFill } from "react-bootstrap-icons";
import SideBarProfile from "./SideBarProfile";

function SideBar() {
	return (
		<>
			<div className="d-none d-md-block d-lg-none p-4"></div>

			{/* LINGUA E PROFILO */}
			<div className="mb-2 border border-2 rounded-3 bg-white p-3 mt-7">
				<Row className="border-bottom pb-2 mb-3">
					<Col>
						<div className="d-flex justify-content-between">
							<h5>Lingua del Profilo</h5>
							<Pencil color="black" className="ms-2" style={{ cursor: "pointer" }} />
						</div>
						<span className="text-secondary d-flex justify-content-start">Italiano</span>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className="d-flex justify-content-between">
							<h5>Public Profile & URL</h5>
							<Pencil color="black" className="ms-2" style={{ cursor: "pointer" }} />
						</div>
						<span className="text-secondary d-flex justify-content-start">qui va url</span>
					</Col>
				</Row>
			</div>

			{/* ALTRI PROFILI CONSULTATI */}
			{/* <div className="d-flex flex-column mb-2 border border-2 rounded-3 bg-white">
        <div className="p-3 border-bottom">
          <h6>Altri profili consultati</h6>
          <Row className="mb-2 mt-3">
            <Col xs={12} md={4}>
              <img id="sideImg" alt="profile"></img>
            </Col>
            <Col xs={12} md={8}>
              <h6>Qui va il nome</h6>
              <span>Qui la posizione di lavoro</span>
            </Col>
            <div className="d-flex justify-content-center mt-2">
              <Button variant="outline-secondary rounded-pill w-75">
                <SendFill color="black" className="ms-2 me-2" />
                Messaggio
              </Button>
            </div>
          </Row>
        </div>
        <div className="hover text-center">
          <p className="my-2 opacity-75">Mostra tutto</p>
        </div>
  </div>*/}

			{/* PERSONE CHE POTRESTI CONOSCERE */}
			{/* <div className="d-flex flex-column mb-2 border border-2 rounded-3 bg-white">
        <div className="border-bottom p-3">
          <h6>Persone che potresti conoscere</h6>
          <span>Dalla tua scuola o università</span>
          <Row className="mb-2 mt-3">
            <Col xs={12} md={4}>
              <img id="sideImg" alt="profile"></img>
            </Col>
            <Col xs={12} md={8}>
              <h6>Qui va il nome</h6>
              <span>Qui la posizione di lavoro</span>
            </Col>
            <div className="d-flex justify-content-center mt-2">
              <Button variant="outline-secondary rounded-pill w-75">
                <PersonPlusFill color="black" className="ms-2 me-2" />
                Collegati
              </Button>
            </div>
          </Row>
        </div>
        <div className="hover text-center">
          <p className="my-2 opacity-75">Mostra tutto</p>
        </div>
      </div> */}

			<SideBarProfile />

			{/* ROBA STATICA PER RENDERE LA PAGINA PIU SIMPATICA */}
			<div className="mb-2 border border-2 rounded-3 bg-white p-3">
				<Row className="border-bottom pb-2 mb-3">
					<Col>
						<div className="text-start">
							<img
								src="https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg"
								alt="linkedin mini-logo"
								width={20}
								height={20}
								className="me-2"
							/>
							<span>L E A R N I N G</span>
							<p className="text-secondary d-flex justify-content-start">
								Aggiungi nuove competenze con questi corsi, gratuiti per 24 ore
							</p>
						</div>
					</Col>
				</Row>
				<Row>
					<Col className="py-4 px-1 border border-bottom rounded background-columns">
						<div>
							<div className="">
								<div className="d-flex justify-content-between">
									<h5 className="mt-3 ms-3">Linkedln Notizie</h5>
									<InfoSquareFill className="me-3 cursor" />
								</div>
							</div>
							<ul id="ul-sidebar">
								<li className="fs-7">Single e fieri di esserlo</li>
								<p className="text-secondary">3 giorni fa </p>
								<li className="fs-7">Che cosa vuole l'Italia dall'AI</li>
								<p className="text-secondary">3 giorni fa </p>
								<li className="fs-7">PayPal si allarga alle bollette</li>
								<p className="text-secondary">7 ore fa </p>
								<li className="fs-7">Impennata degli attacchi informatici</li>
								<p className="text-secondary">5 giorni fa </p>
								<li className="fs-7">I primi supermercati senza casse</li>
								<p className="text-secondary">3 giorni fa </p>
								<li className="fs-7">Innovazione,ricerca e sviluppo</li>
								<p className="text-secondary">1 ora fa </p>
							</ul>
						</div>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default SideBar;
