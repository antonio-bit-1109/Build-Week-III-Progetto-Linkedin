import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Pencil, PlusLg } from "react-bootstrap-icons";
import { Token } from "../../token";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../redux/functions/fetch";
import { setDataFetchEsperienze } from "../../redux/reducers/StateSliceReducers";
import Modale from "./Modale";
import { fetchDelete } from "../../redux/functions/fetchDelete";

const URL = "https://striveschool-api.herokuapp.com/api/profile/";

export const optionsGet = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Token} `,
  },
};

const optionsDelete = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Token} `,
  },
};

const Esperienze = (props) => {
  const { userid } = props;
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState([]);
  const datiFetchEsperienze = useSelector((state) => state.FetchData.dataFetchEsperienze);
  const [me, setMe] = useState(null);

  useEffect(() => {
    if (props.me) {
      setMe(true);
    }
  }, [props.me]);

  // console.log("datiFetchEsperienze", datiFetchEsperienze);

  useEffect(() => {
    dispatch(fetchData(URL, `${userid}/experiences`, optionsGet, setDataFetchEsperienze));
  }, [userid, dispatch]);

  useEffect(() => {
    if (datiFetchEsperienze) {
      const arrayOfFalse = [];
      for (let i = 0; i <= datiFetchEsperienze.length; i++) {
        arrayOfFalse.push(false);
      }
      setIsModalVisible(arrayOfFalse);
    }
  }, [datiFetchEsperienze]);

  const handleSetVisible = (n) => {
    if (n === -1) {
      let array = [...isModalVisible];
      array[-1] = true;
      setIsModalVisible(array);
    } else if (n === false) {
      let array = [...isModalVisible];
      const arrayOfFalse = array.map(() => false);
      setIsModalVisible(arrayOfFalse);
    } else {
      let array = [...isModalVisible];
      array[n] = true;
      setIsModalVisible(array);
    }
  };

  const handleDelete = async (expId) => {
    await fetchDelete(optionsDelete, userid, expId);
    setTimeout(() => {
      dispatch(fetchData(URL, `${userid}/experiences`, optionsGet, setDataFetchEsperienze));
    }, 500);
  };

  return (
    <div>
      {" "}
      <div className="bg-white border border-2 rounded-3 mb-2 overflow-auto">
        <div className="p-3">
          <div className="d-flex gap-3">
            <div>
              <h5 className="my-1">Esperienze</h5>
            </div>
            <div className="ms-auto">
              {me && (
                <div className="rounded-pill hover ">
                  <Button variant="secondary-outline" onClick={() => handleSetVisible(-1)}>
                    {" "}
                    <PlusLg></PlusLg>{" "}
                  </Button>
                  <Modale userid={userid} show={isModalVisible[-1]} onHide={() => handleSetVisible(false)} />
                </div>
              )}
            </div>
          </div>
          <Row>
            {(datiFetchEsperienze === null || datiFetchEsperienze.length === 0) && (
              <div>Non ci sono esperienze da visualizzare.</div>
            )}

            <Row>
              {" "}
              {datiFetchEsperienze &&
                datiFetchEsperienze.map((esperienza, i) => (
                  <Col key={`key-${esperienza._id}`} className="my-1 border rounded-3" xs={12}>
                    {" "}
                    <Modale
                      userid={userid}
                      show={isModalVisible[i]}
                      onHide={() => handleSetVisible(false)}
                      esperienza={esperienza}
                    />
                    <div className="d-flex gap-2 align-items-center">
                      {me ? (
                        <Button variant="outline-dark" className="add-image">
                          <PlusLg />
                        </Button>
                      ) : (
                        <img
                          className="rounded"
                          width={"40px"}
                          src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                          alt="placeholder"
                        />
                      )}
                      <Row>
                        <Col md="6" lg="3">
                          <p className="m-0">
                            <span className="fw-semibold">Ruolo: </span>
                            {esperienza.role}
                          </p>
                        </Col>
                        <Col md="6" lg="3">
                          <p className="m-0">
                            <span className="fw-semibold">Azienda: </span> {esperienza.company}
                          </p>
                        </Col>
                        <Col md="8" lg="4">
                          <p className="m-0">
                            <span className="fw-semibold">Data Inizio: </span>
                            {new Date(esperienza.startDate).toLocaleDateString("it-IT", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            })}
                          </p>
                        </Col>
                        {esperienza.endDate && (
                          <Col md="8" lg="4">
                            <p className="m-0">
                              <span className="fw-semibold">Data Fine: </span>
                              {new Date(esperienza.endDate).toLocaleDateString("it-IT", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                              })}
                            </p>
                          </Col>
                        )}
                      </Row>
                      {me && (
                        <Button
                          onClick={() => handleDelete(esperienza._id)}
                          variant="light"
                          className="rounded-pill ms-auto"
                        >
                          ❌
                        </Button>
                      )}
                      {me && (
                        <Button
                          onClick={() => {
                            handleSetVisible(i);
                          }}
                          variant="light"
                          className="rounded-pill px-3"
                        >
                          <div className="rounded-pill hover ">
                            <Pencil></Pencil>
                          </div>
                        </Button>
                      )}
                    </div>
                  </Col>
                ))}
            </Row>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Esperienze;
