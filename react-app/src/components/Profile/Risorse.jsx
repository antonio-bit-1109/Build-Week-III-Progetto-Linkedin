import { ArrowRight, EyeFill, PeopleFill, Wifi } from "react-bootstrap-icons";
import { Badge } from "react-bootstrap";

const Risorse = () => {
	return (
		<div className="d-flex flex-column border border-2 rounded-3 mb-2 bg-white">
			<div className="px-3 pt-3 border-bottom">
				<h5 className="m-0">Risorse</h5>
				<div className="fs-8 d-flex align-items-center gap-1 opacity-75">
					<EyeFill></EyeFill> <p className="m-0">Solo per te</p>
				</div>
				<div className="mt-2 pb-2 border-bottom">
					<div className="d-inline-block align-top me-2">
						<Wifi className="fs-5"></Wifi>
					</div>
					<div className="d-inline-block w-75">
						<h6 className="mb-0 mt-1">Modalità creazione contenuti</h6>
						<Badge className="bg-body-secondary text-black fw-normal">No</Badge>
						<p className="m-0 fs-7">
							Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione
						</p>
					</div>
				</div>
				<div className="mt-2 pb-2 border-bottom">
					<div className="d-inline-block align-top me-2">
						<PeopleFill className="fs-5"></PeopleFill>
					</div>
					<div className="d-inline-block w-75">
						<h6 className="mb-0 mt-1">La mia rete</h6>
						<p className="m-0 fs-7">Salva e gestisci i tuoi collegamenti e interessi.</p>
					</div>
				</div>
			</div>
			<div className="hover text-center">
				<p className="my-2 opacity-75">
					Mostra tutte le risorse <ArrowRight></ArrowRight>
				</p>
			</div>
		</div>
	);
};

export default Risorse;
