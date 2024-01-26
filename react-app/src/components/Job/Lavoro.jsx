import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import JobRight from "./JobRight";
import ColumnJob from "./ColumnJob";
import JobLeft from "./JobLeft";

const Lavoro = () => {
	return (
		<>
			<div className="d-none d-md-block d-lg-none p-4"></div>
			<Container className="mt-7">
				<Row>
					{/* SIDE SN */}
					<JobRight />
					{/* CENTRALE */}
					<Col xs="12" sm="12" md="9" lg="7">
						<ColumnJob />
					</Col>
					{/* SIDE DX */}
					<JobLeft />
				</Row>
			</Container>
		</>
	);
};

export default Lavoro;
