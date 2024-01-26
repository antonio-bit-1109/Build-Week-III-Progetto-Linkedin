import { ArrowRight, Pencil } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

const Attività = () => {
	return (
		<div className="d-flex flex-column mb-2 border border-2 rounded-3 bg-white">
			<div className="px-3 pt-3 border-bottom">
				<div className="d-flex gap-3">
					<div>
						<h5 className="m-0">Attività</h5>
						<p className="text-primary">0 follower</p>
					</div>
					<div className="ms-auto">
						<Button variant="outline-primary" className="rounded-pill">
							Crea un post
						</Button>
					</div>
					<div>
						<div className="rounded-pill hover pt-1 pb-2 px-2">
							<Pencil></Pencil>
						</div>
					</div>
				</div>
				<div className="my-2">
					<h6 className="mb-0 mt-1">0 visualizzazioni del profilo</h6>
					<p className="m-0 fs-7">Aggiorna il tuo profilo per attrarre visitatori.</p>
				</div>
			</div>
			<div className="hover text-center">
				<p className="my-2 opacity-75">
					Mostra tutte le attività <ArrowRight></ArrowRight>
				</p>
			</div>
		</div>
	);
};

export default Attività;
