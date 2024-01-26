import React from "react";
import { Col, Button } from "react-bootstrap";
import { BookmarkFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomeParteSinistra = () => {
  const Profilo = useSelector((state) => state.FetchData.dataFetchProfilo);
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <Col xs="12" sm="12" md="12" lg="4" xl="3">
        <div className="bg-white border rounded-4 mb-3">
          <div className=" d-flex flex-column ">
            {/* IMAGE START*/}
            {Profilo && (
              <>
                <div className="bg-image2 position-relative rounded-top-4">
                  <img
                    width={"100px"}
                    src={Profilo.image}
                    alt="immagine profilo"
                    className="rounded-circle img-fluid circle-img position-absolute bottom-0 custom-end bottom-custom-img-home "
                  />
                </div>

                {/* IMAGE END */}
                <div className="d-flex flex-column align-items-center p-2 pt-5">
                  {" "}
                  <h6 className="m-1 fs-6 fw-bold">Ti diamo il benvenuto</h6>
                  <div className="d-flex gap-1">
                    <p className="m-0 fs-7 fw-bold">{Profilo.name} </p>
                    <p className="m-0 fs-7 fw-bold">{Profilo.surname}</p>
                  </div>
                  <Button variant="outline-primary" onClick={() => navigate("/me")}>
                    Vai al tuo profilo
                  </Button>
                </div>
              </>
            )}
            <hr />
            <div className="p-3 py-2">
              <p className="m-0 fs-7">Collegamenti</p>
              <p className="m-0 fs-7">espandi la tua rete</p>
            </div>
            <hr />
            <div className="p-3">
              <p className="m-0 fs-7">accedi a strumenti e informazioni in esclusiva </p>
              <p className="m-0 fs-7">fatti assumere velocemente grazie a premium</p>
            </div>
          </div>
        </div>
        <div className="p-2 bg-white border rounded-4 mb-2">
          <div className="p-2 d-flex align-items-center gap-2">
            <BookmarkFill />
            <p className="m-0">I miei elementi</p>
          </div>
          <div className="p-2">
            <p className="m-0">Gruppi</p>
          </div>
          <div className="p-2">
            <p className="m-0">Eventi</p>
          </div>
          <div className="p-2">
            <p className="m-0">Hashtag seguiti </p>
          </div>
        </div>
      </Col>
    </>
  );
};

export default HomeParteSinistra;
