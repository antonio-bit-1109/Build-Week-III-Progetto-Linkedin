import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Token } from "../../token";
import { useDispatch } from "react-redux";
import { postImage } from "../../redux/functions/postImage";

const CambiaImmagine = ({ show, setShow, img, userid }) => {
	const dispatch = useDispatch();
	const [inputImg, setInputImg] = useState(img);

	useEffect(() => {
		setInputImg(img);
	}, [img]);

	const handleChange = (e) => {
		const selectedPhoto = e.target.files[0];
		if (selectedPhoto) {
			setInputImg(URL.createObjectURL(selectedPhoto));
		} else {
			setInputImg(img);
		}
	};

	const handleClose = () => {
		setInputImg(img);
		setShow(false);
	};

	const handleSubmit = async (e) => {
		const options = {
			method: "POST",
			body: new FormData(e.target),
			headers: {
				Authorization: "Bearer " + Token,
			},
		};

		e.preventDefault();
		dispatch(postImage(userid, "picture", options));
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Cambia Immagine Profilo</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="my-3">
					<form onSubmit={handleSubmit}>
						<label htmlFor="formFileLg" className="form-label fw-normal fs-5">
							Carica un'immagine qui
						</label>
						<input
							name="profile"
							className="form-control form-control-lg d-none"
							id="formFileLg"
							type="file"
							accept="image/*"
							onChange={handleChange}
						/>
						{inputImg && <img src={inputImg} alt="immagine-profilo" className="w-100" />}
						<Button variant="primary" className="mt-3" type="submit">
							Save Changes
						</Button>
					</form>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CambiaImmagine;
