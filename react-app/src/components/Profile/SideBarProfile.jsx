import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { PersonFillAdd } from "react-bootstrap-icons";

const SideBarProfile = () => {
  const otherProfile = [
    {
      name: "Giacomo",
      surname: "Poretti",
      title: "Comico, Attore",
      image: "https://www.nonprofitday.it/wp-content/uploads/2021/07/speaker-nonprofit3.jpg",
    },
    {
      name: "Pippo",
      surname: "Baudo",
      title: "Conduttore Televisivo, Autore Televisivo",
      image: "https://cloud.rtl.it/RTLFM/News/Article/1000x1000/pippo-baudo-torno-a-condurre-domenica-in-votow.jpg",
    },
    {
      name: "Leonardo",
      surname: "Di Caprio",
      title: "Attore, Sceneggiatore, Produttore Cinematografico",
      image:
        "https://compass-media.vogue.it/photos/6468fc827b0d0b8c29dbccfc/master/w_1280,c_limit/Leonardo%20DiCaprio%20Cannes%202023.jpg",
    },
    {
      name: "Valentino",
      surname: "Rossi",
      title: "Pilota Motociclistico, Pilota Automobilistico",
      image:
        "https://imgresizer.eurosport.com/unsafe/420x420/filters:format(jpeg):focal(144x117:146x115)/origin-imgresizer.eurosport.com/2023/11/27/3833225-77897444-310-310.jpg",
    },
    {
      name: "Miriam",
      surname: "Leone",
      title: "Attrice, Conduttrice Televisiva",
      image:
        "https://compass-media.vogue.it/photos/63ac19ef556c51bc7cd76488/1:1/w_2361,h_2361,c_limit/miriam-leone-struccata.jpg",
    },
    {
      name: "Vittorio",
      surname: "Sgarbi",
      title: "Capra, Sindaco di Arpino, Critico d'Arte",
      image: "https://img.ilgcdn.com/sites/default/files/vocabulary/Autore/vittorio_sgarbi.jpg",
    },
    {
      name: "Gianluca",
      surname: "Vacchi",
      title: "Intrattenitore, Imprenditore",
      image: "https://images2.corriereobjects.it/methode_image/2016/08/04/Moda/Foto%20Gallery/gianlucav2_MGZOOM.PNG",
    },
    {
      name: "Mario",
      surname: "Balotelli",
      title: "Calciatore",
      image:
        "https://goalist.it/app/uploads/2024/01/Acquisisci-schermata-Web_21-1-2024_10226_www.instagram.com_-768x754.jpeg",
    },
  ];

  const profileFromSchool = [
    {
      name: "Giulia",
      surname: "Rossi",
      title: "Full Stack Web Developer",
      image:
        "https://www.artmood.it/assets/startups/68/1550398157_portrait-photography-favorite-lightness-giuseppe-gradella-04.jpg",
    },
    {
      name: "Mario",
      surname: "Giuliani",
      title: "Web Developer",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Fabio_Novembre_primo_piano.jpg",
    },
    {
      name: "Antonio",
      surname: "Verdi",
      title: "Front-End Developer",
      image:
        "https://img.freepik.com/free-photo/handsome-man-white-shirt-posing-attractive-guy-with-fashion-hairstyle-confident-man-with-short-beard-adult-boy-with-brown-hair-closeup-portrait_186202-8540.jpg",
    },
    {
      name: "Federico",
      surname: "Rocelli",
      title: "Full Stack Web Developer",
      image: "https://www.colorami.space/wp-content/uploads/2023/04/COVER-ZONE.jpg",
    },
    {
      name: "Matteo",
      surname: "Robustelli",
      title: "Full STack Web Developer",
      image: "https://www.beautydea.it/wp-content/uploads/2024/11/tagli-capelli-uomo-3-1200-128.jpg",
    },
  ];

  const [showMore, setShowMore] = useState(false);
  const handleClose = () => {
    showMore ? setShowMore(false) : setShowMore(true);
  };

  return (
    <>
      <div className="sidebar d-flex flex-column mb-2 border border-2 rounded-3 bg-white">
        <div className=" p-3">
          <h5 className="mb-3">Altri profili consultati</h5>
          {showMore
            ? otherProfile.map((profile, i) => (
                <div
                  key={`${profile.name} - ${profile.surname}`}
                  className="d-flex justify-content-start text-secondary mb-3 gap-2"
                >
                  <img width={45} height={45} className="me-1 rounded-circle" src={profile.image} alt="" />
                  <div>
                    <p className="attivitaAmiciNome m-0 fw-semibold">
                      {profile.name} {profile.surname}
                    </p>
                    <p className="attivitaAmici m-0">
                      {profile.title.length < 20 ? profile.title : profile.title.substring(0, 20) + "..."}
                    </p>

                    <Button variant="outline-secondary" className="opacity-75 mt-1 rounded-pill">
                      <PersonFillAdd className="button-icon" />
                      Collegati
                    </Button>
                  </div>
                </div>
              ))
            : otherProfile.slice(0, 5).map((profile, i) => (
                <div
                  key={`${profile.name} - ${profile.surname}`}
                  className="d-flex justify-content-start text-secondary mb-3 gap-2"
                >
                  <img width={45} height={45} className="me-1 rounded-circle" src={profile.image} alt="" />
                  <div>
                    <p className="attivitaAmiciNome m-0 fw-semibold">
                      {profile.name} {profile.surname}
                    </p>
                    <p className="attivitaAmici m-0">
                      {profile.title.length < 20 ? profile.title : profile.title.substring(0, 20) + "..."}
                    </p>

                    <Button variant="outline-secondary" className="opacity-75 mt-1 rounded-pill">
                      <PersonFillAdd className="button-icon" />
                      Collegati
                    </Button>
                  </div>
                </div>
              ))}
        </div>

        <div className="hover text-center" onClick={() => handleClose()}>
          <p className="my-2 opacity-75">{showMore ? "Visualizza Meno ▲" : "Visualzza Altro ▼"}</p>
        </div>
      </div>

      {/*persone potresi conscere*/}

      <div className="sidebar mb-2 border border-2 rounded-3 bg-white">
        <div className=" p-3">
          <h5 className="m-0">Potresti conoscere</h5>
          <p className="fs-7 opacity-75 mb-3">Dalla tua scuola o università</p>
          {profileFromSchool.map((profile) => (
            <div
              key={`${profile.name} - ${profile.surname}`}
              className="d-flex justify-content-start text-secondary mb-3 gap-2"
            >
              <img width={45} height={45} className="me-1 rounded-circle" src={profile.image} alt="" />
              <div>
                <p className="attivitaAmiciNome m-0 fw-semibold">
                  {profile.name} {profile.surname}
                </p>
                <p className="attivitaAmici m-0">
                  {profile.title.length < 20 ? profile.title : profile.title.substring(0, 20) + "..."}
                </p>

                <Button variant="outline-secondary" className="opacity-75 mt-1 rounded-pill">
                  <PersonFillAdd className="button-icon" />
                  Collegati
                </Button>
              </div>
            </div>
          ))}
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
            <p className="fs-7 attivitaAmiciNome m-0">PMO - Project Management OfficePMO - Project Management Office</p>
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
