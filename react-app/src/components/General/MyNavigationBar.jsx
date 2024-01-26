import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import {
	BellFill,
	BriefcaseFill,
	ChatRightDotsFill,
	HouseDoorFill,
	PeopleFill,
	PersonFill,
	MenuAppFill,
} from "react-bootstrap-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDataFetchProfilo, setQueryLavori } from "../../redux/reducers/StateSliceReducers";
import { fetchData } from "../../redux/functions/fetch";
import { Token } from "../../token";

const MyNavigationBar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [query, setQuery] = useState("");
	const { dataFetchProfilo } = useSelector((state) => state.FetchData);

	useEffect(() => {
		const link = "https://striveschool-api.herokuapp.com/api/profile/me";

		const options = {
			headers: {
				Authorization: "Bearer " + Token,
			},
		};
		dispatch(fetchData(link, "", options, setDataFetchProfilo));
	}, [dispatch]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(setQueryLavori(query));
		setQuery("");
		navigate(`/job`);
	};

	return (
		<Container fluid>
			<Row>
				{" "}
				<Navbar expand="lg" className="bg-body-tertiary position-fixed top-0 index">
					<Container>
						<div className="d-flex justify-content-md-center align-items-center flex-grow-1">
							<Navbar.Brand href="#home">
								<NavLink to={"/"}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										data-supported-dps="24x24"
										fill="currentColor"
										className="mercado-match"
										width="40"
										height="40"
										focusable="false"
									>
										<path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
									</svg>
								</NavLink>
							</Navbar.Brand>
							{/*   <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
							<Col xs="10" md="8" lg="10" xl="12">
								<Form onSubmit={handleSubmit}>
									<Form.Control
										type="text"
										placeholder="Cerca..."
										value={query}
										onChange={(e) => setQuery(e.target.value)}
									/>
								</Form>
							</Col>
						</div>
						<Navbar.Toggle className="d-md-none" aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto d-md-none">
								<NavLink className="nav-link" to={"/"}>
									<div className="d-flex align-items-center p-1">
										<HouseDoorFill className="fs-4" />
										<p className="m-0">Home</p>
									</div>
								</NavLink>
								<Nav.Link href="#link">
									<div className="d-flex align-items-center p-1">
										<PeopleFill className="fs-4" />
										<p className="m-0">Rete</p>
									</div>
								</Nav.Link>
								<NavLink className={"nav-link"} to={"/job"}>
									<div className="d-flex align-items-center p-1">
										<BriefcaseFill className="fs-4" />
										<p className="m-0">Lavoro</p>
									</div>
								</NavLink>
								<Nav.Link href="#link">
									<div className="d-flex align-items-center p-1">
										<ChatRightDotsFill className="fs-4" />
										<p className="m-0">Messaggistica</p>
									</div>
								</Nav.Link>
								<Nav.Link href="#link">
									<div className="d-flex align-items-center p-1">
										<BellFill className="fs-4" />
										<p className="m-0">Notifiche</p>
									</div>
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>

						<div className="d-none d-md-flex justify-content-sm-center justify-content-end gap-4 flex-grow-1">
							<div className="d-flex flex-column align-items-center p-1">
								<NavLink className="text-decoration-none" to={"/"}>
									<div className="d-flex flex-column align-items-center text-secondary">
										<HouseDoorFill className="fs-4" />
										<p className="m-0 ">Home</p>
									</div>
								</NavLink>
							</div>
							<div className="d-flex flex-column align-items-center p-1 text-secondary">
								<PeopleFill className="fs-4" />
								<p className="m-0">Rete</p>
							</div>
							<div className="d-flex flex-column align-items-center p-1 text-secondary">
								<NavLink className="text-decoration-none" to={"/job"}>
									<div className="d-flex flex-column align-items-center text-secondary">
										<BriefcaseFill className="fs-4" />
										<p className="m-0">Lavoro</p>
									</div>
								</NavLink>
							</div>
							<div className="d-flex flex-column align-items-center p-1 text-secondary">
								<ChatRightDotsFill className="fs-4" />
								<p className="m-0">Messaggistica</p>
							</div>
							<div className="d-flex flex-column align-items-center p-1 text-secondary">
								<BellFill className="fs-4" />
								<p className="m-0">Notifiche</p>
							</div>
						</div>

						{/*    <Navbar.Collapse className="justify-content-start w-auto gap-3" id="basic-navbar-nav"> */}
						<div className="d-none d-md-flex d-flex flex-column align-items-center ms-3 me-2">
							<PersonFill className="fs-4 text-secondary" />
							<NavDropdown drop="down-centered" className="mx-2 text-secondary" title="Tu">
								<Row style={{ width: "250px" }}>
									<div className="d-flex flex-column mb-2">
										<div className="d-flex">
											{dataFetchProfilo ? (
												<img
													className="rounded-circle p-1 circle-img"
													width={"60px"}
													height={"60px"}
													src={dataFetchProfilo.image}
													alt="placeholder"
												/>
											) : (
												<img
													className="rounded-circle p-1"
													width={"60px"}
													height={"60px"}
													src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
													alt="placeholder"
												/>
											)}
											<div className="d-flex flex-column">
												{dataFetchProfilo ? (
													<h6 className="m-1">{dataFetchProfilo.name + " " + dataFetchProfilo.surname}</h6>
												) : (
													<h6 className="m-1">Nome Cognome</h6>
												)}
												{dataFetchProfilo ? (
													<p className="m-0 fs-8 mx-1">{dataFetchProfilo.title}</p>
												) : (
													<p className="m-0 fs-8 mx-1">Lorem, ipsum. </p>
												)}
											</div>
										</div>
										<div className="d-flex justify-content-center mt-2">
											<NavLink to={"/me"}>
												<Button variant="outline-primary" className=" px-4 py-0">
													Visualizza Profilo
												</Button>
											</NavLink>
										</div>
									</div>
								</Row>
								<hr className="my-1 w-90 m-auto" />
								<Row>
									<div>
										<div>
											<p className="m-0 p-1 mx-3 fs-6 fw-bold">Account</p>
										</div>
										<div>
											<p className="m-0 p-1 mx-3 fs-7 fw-semibold text-secondary">Prova Premium per 0 Eur</p>
										</div>
										<div>
											<p className="m-0 p-1 mx-3 fs-7 text-secondary">Impostazioni e privacy</p>
										</div>
										<div>
											<p className="m-0 p-1 mx-3 fs-7 text-secondary">Guida</p>
										</div>
										<div>
											<p className="m-0 p-1 mx-3 fs-7 text-secondary">Lingua</p>
										</div>
									</div>
								</Row>
								<hr className="my-1 w-90 m-auto" />
								<Row>
									<div>
										<div>
											<p className="m-0 p-1 mx-3 fs-6 fw-bold">Gestisci</p>
										</div>
										<div>
											<p className="m-0 p-1 mx-3 fs-7 text-secondary">Post e Attività</p>
										</div>
										<div>
											<p className="m-0 p-1 mx-3 fs-7 text-secondary">Lorem ipsum dolor sit. lorem prova </p>
										</div>
									</div>
								</Row>
							</NavDropdown>
						</div>
						<div className="vr d-none d-md-block"></div>
						<div className="d-none d-md-flex d-flex flex-column align-items-center">
							<MenuAppFill className="fs-4 text-secondary" />
							<NavDropdown className="mx-2 text-secondary" title="Per le aziende" id="basic-nav-dropdown"></NavDropdown>
							{/* <p>Prova Premium per 0 EUR</p> */}
						</div>
						{/*   </Navbar.Collapse> */}
					</Container>
				</Navbar>
			</Row>
		</Container>
	);
};

export default MyNavigationBar;
