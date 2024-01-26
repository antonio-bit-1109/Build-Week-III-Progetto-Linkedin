import { useEffect, useState } from "react";
import { Token } from "../../token";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/functions/fetch";
import { setDataFetchLavori, setQueryLavori } from "../../redux/reducers/StateSliceReducers";
import { Badge, Button } from "react-bootstrap";

const link = "https://strive-benchmark.herokuapp.com/api/jobs";

const options = {
	headers: {
		Authorization: "Bearer " + Token,
	},
};

const ColumnJob = () => {
	const dispatch = useDispatch();
	const { dataFetchLavori } = useSelector((state) => state.FetchData);
	const { queryLavori } = useSelector((state) => state.FetchData);
	const [category, setCategory] = useState(null);
	const [company, setCompany] = useState(null);
	const [numberOfJobs, setNumberOfJobs] = useState(10);

	useEffect(() => {
		if (queryLavori && queryLavori !== "") {
			dispatch(fetchData(link, `?search=${queryLavori}`, options, setDataFetchLavori));
		} else if (!company && !category) {
			dispatch(fetchData(link, ``, options, setDataFetchLavori));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, queryLavori]);

	const handleCategory = (newCategory) => {
		dispatch(setQueryLavori(""));
		setNumberOfJobs(10);
		setCompany(null);
		if (category === newCategory) {
			setCategory(null);
			dispatch(fetchData(link, "", options, setDataFetchLavori));
		} else {
			setCategory(newCategory);
			dispatch(fetchData(link, `?category=${newCategory}`, options, setDataFetchLavori));
		}
	};

	const handleCompany = (newCompany) => {
		dispatch(setQueryLavori(""));
		setNumberOfJobs(10);
		setCategory(null);
		if (company === newCompany) {
			setCompany(null);
			setCategory(null);
			dispatch(fetchData(link, "", options, setDataFetchLavori));
		} else {
			setCompany(newCompany);
			dispatch(fetchData(link, `?company=${newCompany}`, options, setDataFetchLavori));
		}
	};

	const handleSetQuery = () => {
		dispatch(setQueryLavori(""));
	};

	return (
		<>
			{(company || category || queryLavori) && (
				<div className="border border-2 rounded-3 mb-2 bg-white p-3">
					<h5>Filtri:</h5>
					<div className="d-inline-block py-2 bg-primary rounded-5 p-3">
						<span className="text-white m-0 align-middle">{company ? company : category ? category : queryLavori}</span>
						<Button
							variant="outline-danger"
							className="rounded-pill p-0 ms-2"
							onClick={() =>
								category ? handleCategory(category) : company ? handleCompany(company) : handleSetQuery()
							}
						>
							❌
						</Button>
					</div>
				</div>
			)}
			<div className={`p-3 border border-2 rounded-3 mb-2 bg-white`}>
				<h5>Lavori consigliati per te:</h5>
				{dataFetchLavori && (
					<p>
						{dataFetchLavori["data"].length} risultati trovati, di cui{" "}
						{dataFetchLavori["data"].length < numberOfJobs ? dataFetchLavori["data"].length : numberOfJobs} mostrati
					</p>
				)}
				{dataFetchLavori &&
					dataFetchLavori["data"].slice(0, numberOfJobs).map((lavoro) => (
						<div key={lavoro._id} className="border rounded-3 p-3 mb-2">
							<p className="fs-5 m-0">
								Titolo: {lavoro.title}
								<Badge className="cursor-pointer fs-8 ms-2" onClick={() => handleCategory(lavoro.category)}>
									{lavoro.category}
								</Badge>
							</p>
							<p className="m-0 cursor-pointer" onClick={() => handleCompany(lavoro.company_name)}>
								Presso: {lavoro.company_name}
							</p>
							<p className="m-0">
								Pubblicato il:{" "}
								{new Date(lavoro.publication_date).toLocaleDateString("it-IT", {
									day: "2-digit",
									month: "2-digit",
									year: "numeric",
								})}
							</p>
							<p className="m-0">
								Locazione Richiesta:{" "}
								{lavoro.candidate_required_location === "" ? "non specificato" : lavoro.candidate_required_location}
							</p>
							<p className="m-0">Salario: {lavoro.salary === "" ? "non specificato" : lavoro.salary}</p>
						</div>
					))}
				{dataFetchLavori && dataFetchLavori["data"].length > numberOfJobs && (
					<Button variant="outline-primary" onClick={() => setNumberOfJobs(numberOfJobs + 10)}>
						Altro...
					</Button>
				)}
			</div>
		</>
	);
};

export default ColumnJob;
