import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { PersonFillAdd } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { setDataElencoProfili } from "../../redux/reducers/StateSliceReducers";
import { UseSelector, useDispatch } from "react-redux";
import { Token } from "../../token";
import { fetchData } from "../../redux/functions/fetch";

const optionsGet = {
    method: "GET",
    headers: {
        Authorization: `Bearer ${Token}`,
    },
};

const SideBarProfile = () => {
    const dispatch = useDispatch();

    const elencoTuttiProfili = useSelector((state) => state.FetchData.dataElencoProfili);
    console.log("elencoTuttiProfili", elencoTuttiProfili);

    /* profili senz aun immagine di default  */
    const profiliConImg = () => {
        let profiloWithImage = [...elencoTuttiProfili];
        let nuovoArrayProfiliConImg = profiloWithImage.filter(
            (profilo) => profilo.name && !profilo.image.includes("pixabay")
        );
        console.log("nuovoArrayProfiliConImg", nuovoArrayProfiliConImg);
        return nuovoArrayProfiliConImg;
    };

    /* profili che potrei conoscere  */

    const profiliChePotreiConoscere = () => {
        let profiliChePossoConoscere = [...elencoTuttiProfili];
        let nuovoArrayProfiliConosciuti = profiliChePossoConoscere.filter(
            (profilo) =>
                profilo.createdAt.includes("2024-01-22" || "2024-01-21") && (profilo.surname === "rizzuti" || "Rizzuti")
        );
        console.log("nuovoArrayProfiliConosciuti", nuovoArrayProfiliConosciuti);
        return nuovoArrayProfiliConosciuti;
    };

    useEffect(() => {
        dispatch(
            fetchData("https://striveschool-api.herokuapp.com/api/profile/", "", optionsGet, setDataElencoProfili)
        );
    }, []);

    /*  const [showMore, setShowMore] = useState(false);
    const handleClose = () => {
        showMore ? setShowMore(false) : setShowMore(true);
    }; */

    return (
        <>
            <div className="sidebar d-flex flex-column mb-2 border border-2 rounded-3 bg-white">
                <div className=" p-3">
                    <h5 className="mb-3">Altri profili consultati</h5>
                    {elencoTuttiProfili &&
                        profiliConImg()
                            .slice(0, 10)
                            .map((profile, i) => (
                                <div
                                    key={`${profile.name} - ${profile.surname}`}
                                    className="d-flex justify-content-start text-secondary mb-3 gap-2"
                                >
                                    <img
                                        width={45}
                                        height={45}
                                        className="me-1 rounded-circle"
                                        src={profile.image}
                                        alt=""
                                    />
                                    <div>
                                        <p className="attivitaAmiciNome m-0 fw-semibold">
                                            {profile.name} {profile.surname}
                                        </p>
                                        <p className="attivitaAmici m-0">
                                            {profile.title.length < 20
                                                ? profile.title
                                                : profile.title.substring(0, 20) + "..."}
                                        </p>

                                        <Button variant="outline-secondary" className="opacity-75 mt-1 rounded-pill">
                                            <PersonFillAdd className="button-icon" />
                                            Collegati
                                        </Button>
                                    </div>
                                </div>
                            ))}
                </div>

                {/*  <div className="hover text-center" onClick={() => handleClose()}>
                    <p className="my-2 opacity-75">{showMore ? "Visualizza Meno ▲" : "Visualzza Altro ▼"}</p>
                </div> */}
            </div>

            {/*persone potresi conoscere*/}

            <div className="sidebar mb-2 border border-2 rounded-3 bg-white">
                <div className=" p-3">
                    <h5 className="m-0">Potresti conoscere</h5>
                    <p className="fs-7 opacity-75 mb-3">Dalla tua scuola o università</p>
                    {elencoTuttiProfili && (
                        <>
                            {profiliChePotreiConoscere()
                                .slice(0, 8)
                                .map((profile) => (
                                    <div
                                        key={`${profile.name} - ${profile.surname}`}
                                        className="d-flex justify-content-start text-secondary mb-3 gap-2"
                                    >
                                        <img
                                            width={45}
                                            height={45}
                                            className="me-1 rounded-circle"
                                            src={profile.image}
                                            alt=""
                                        />
                                        <div>
                                            <p className="attivitaAmiciNome m-0 fw-semibold">
                                                {profile.name} {profile.surname}
                                            </p>
                                            <p className="attivitaAmici m-0">
                                                {profile.title.length < 20
                                                    ? profile.title
                                                    : profile.title.substring(0, 20) + "..."}
                                            </p>

                                            <Button
                                                variant="outline-secondary"
                                                className="opacity-75 mt-1 rounded-pill"
                                            >
                                                <PersonFillAdd className="button-icon" />
                                                Collegati
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                        </>
                    )}
                </div>
            </div>

            <div className="sidebar mb-2 border border-2 rounded-3 bg-white p-3">
                <div className="mb-2 p-2 rounded bg-white">
                    <h5 className="m-0">Potrebbe interessarti</h5>
                    <p className="fs-7 opacity-75 mb-3">Gruppi per te</p>
                    <div className="d-flex justify-content-start text-secondary mb-3">
                        <img
                            width={45}
                            height={45}
                            className="me-1 rounded-circle"
                            src="https://static.vecteezy.com/system/resources/previews/009/023/888/non_2x/pmo-logo-pmo-letter-pmo-letter-logo-design-initials-pmo-logo-linked-with-circle-and-uppercase-monogram-logo-pmo-typography-for-technology-business-and-real-estate-brand-vector.jpg"
                            alt=""
                        />
                        <div className="ps-2">
                            <p className="fs-7 attivitaAmiciNome m-0">
                                PMO - Project Management OfficePMO - Project Management Office
                            </p>
                            <p className="fs-7 attivitaAmici m-0">utenti 217.548</p>
                            <Button variant="outline-secondary" className="opacity-75 mt-1 rounded-pill">
                                Partecipa
                            </Button>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="d-flex justify-content-start text-secondary mb-3">
                    <img
                        width={45}
                        height={45}
                        className="me-1 rounded-circle"
                        src="https://as2.ftcdn.net/v2/jpg/05/09/87/47/500_F_509874727_6O0NmKoKUBEkDn2UlIZvfDeoK9NtF49e.jpg"
                        alt=""
                    />
                    <div className="ps-2">
                        <p className="fs-7 attivitaAmiciNome m-0">
                            PMO - Project Management OfficePMO - Project Management Office
                        </p>
                        <p className="fs-7 attivitaAmici m-0">utenti 217.548</p>
                        <Button variant="outline-secondary" className="opacity-75 mt-1 rounded-pill">
                            Partecipa
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBarProfile;
