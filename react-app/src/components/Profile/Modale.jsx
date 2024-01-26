import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { Token } from "../../token";
import { fetchDataPost } from "../../redux/functions/fetchPost";
import { fetchData } from "../../redux/functions/fetch";
import { setDataFetchEsperienze } from "../../redux/reducers/StateSliceReducers";
import { optionsGet } from "./Esperienze";
import { useDispatch } from "react-redux";
import { fetchDataPut } from "../../redux/functions/fetchPut";

/* const IdUtente = "65ae24f3600be100183a8682"; */
const URL = "https://striveschool-api.herokuapp.com/api/profile/";

const Modale = (props) => {
	/*  console.log("method === "PUT"", method === "PUT"); */
	/*console.log("props.userid", props.userid);
  console.log("esperienza", esperienza);
  console.log("method === "PUT"", method === "PUT");*/
	const dispatch = useDispatch();
	const [method, setMethod] = useState("POST");
	const [dati, setDati] = useState({
		role: "",
		company: "",
		startDate: "",
		endDate: "", // può essere null
		description: "",
		area: "",
	});

	useEffect(() => {
		if (props.esperienza !== undefined) {
			setDati({
				role: props.esperienza.role,
				company: props.esperienza.company,
				startDate: props.esperienza.startDate,
				endDate: props.esperienza.endDate, // può essere null
				description: props.esperienza.description,
				area: props.esperienza.area,
			});
			setMethod("PUT");
		}
	}, [props.esperienza]);

	/* opzioni per la put  */
	const handleSubmitPut = async (event) => {
		const optionsPut = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${Token} `,
			},
			body: JSON.stringify(dati),
		};

		event.preventDefault();
		console.log("ciao ciao ");
		fetchDataPut(optionsPut, props.userid, props.esperienza._id);
		setTimeout(() => {
			dispatch(fetchData(URL, `${props.userid}/experiences`, optionsGet, setDataFetchEsperienze));
		}, 500);
	};

	const handleSubmitPost = async (event) => {
		const optionsPost = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${Token} `,
			},
			body: JSON.stringify(dati),
		};

		event.preventDefault();
		props.onHide();

		fetchDataPost(optionsPost, props.userid, "experiences");
		setTimeout(() => {
			dispatch(fetchData(URL, `${props.userid}/experiences`, optionsGet, setDataFetchEsperienze));
		}, 500);
	};

	return (
		<div>
			<Modal show={props.show} onHide={props.onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header>
					<Modal.Title id="contained-modal-title-vcenter">
						{method === "PUT" ? "Aggiorna Esperienza" : "Inserisci Nuova Esperienze"}
					</Modal.Title>
				</Modal.Header>
				<Row>
					<Col>
						<Modal.Body>
							<Form onSubmit={method === "PUT" ? handleSubmitPut : handleSubmitPost}>
								<Form.Group className="mb-3" controlId="formGroupEmail">
									<Form.Label>Role:</Form.Label>
									<Form.Control
										required
										type="text"
										placeholder="Ruolo Lavorativo..."
										onChange={(event) => {
											setDati({ ...dati, role: event.target.value });
										}}
										value={dati.role}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formGroupPassword">
									<Form.Label>Company:</Form.Label>
									<Form.Control
										required
										type="text"
										placeholder="Azienda"
										onChange={(event) => {
											setDati({ ...dati, company: event.target.value });
										}}
										value={dati.company}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formGroupPassword">
									<Form.Label>Data inizio lavoro:</Form.Label>
									<Form.Control
										required
										type="text"
										placeholder="AAAA-MM-GG"
										onChange={(event) => {
											setDati({ ...dati, startDate: event.target.value });
										}}
										value={dati.startDate}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formGroupPassword">
									<Form.Label>Data fine lavoro: </Form.Label>
									<Form.Control
										type="text"
										placeholder="AAAA-MM-GG"
										onChange={(event) => {
											setDati({ ...dati, endDate: event.target.value });
										}}
										value={dati.endDate}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formGroupPassword">
									<Form.Label>Description:</Form.Label>
									<Form.Control
										required
										type="text"
										placeholder="ruolo aziendale"
										onChange={(event) => {
											setDati({ ...dati, description: event.target.value });
										}}
										value={dati.description}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formGroupPassword">
									<Form.Label>Luogo:</Form.Label>
									<Form.Control
										required
										type="text"
										placeholder="Luogo di lavoro..."
										onChange={(event) => {
											setDati({ ...dati, area: event.target.value });
										}}
										value={dati.area}
									/>
								</Form.Group>
								<Button
									/* onClick={() => {
                                        props.onHide(); // Chiude il modal
                                        setmethod === "PUT"(false);
                                    }} */
									className="me-2"
									type="submit"
									variant="success"
								>
									{" "}
									{method === "PUT" ? "Aggiorna dati" : "Invia Dati"}
								</Button>

								<Button
									onClick={() => {
										props.onHide(); // Chiude il modal
									}}
								>
									Chiudi
								</Button>
							</Form>
						</Modal.Body>
					</Col>
				</Row>
			</Modal>
		</div>
	);
};

export default Modale;
