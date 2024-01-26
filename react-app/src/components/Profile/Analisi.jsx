import { ArrowRight, EyeFill, PeopleFill } from "react-bootstrap-icons";

const Analisi = () => {
	return (
		<div className="d-flex flex-column mb-2 border border-2 rounded-3 bg-white">
			<div className="px-3 pt-3 border-bottom">
				<h5 className="m-0">Analisi</h5>
				<div className="fs-8 d-flex align-items-center gap-1 opacity-75">
					<EyeFill></EyeFill> <p className="m-0">Solo per te</p>
				</div>
				<div className="my-2">
					<div className="d-inline-block align-top me-2">
						<PeopleFill className="fs-5"></PeopleFill>
					</div>
					<div className="d-inline-block w-75">
						<h6 className="mb-0 mt-1">0 visualizzazioni del profilo</h6>
						<p className="m-0 fs-7">Aggiorna il tuo profilo per attrarre visitatori.</p>
					</div>
				</div>
			</div>
			<div className="hover text-center">
				<p className="my-2 opacity-75">
					Mostra tutte le analisi <ArrowRight></ArrowRight>
				</p>
			</div>
		</div>
	);
};

export default Analisi;
