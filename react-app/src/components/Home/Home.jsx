import React, { useEffect } from "react";
import { fetchData } from "../../redux/functions/fetch";
import { useSelector, useDispatch } from "react-redux";
import { Token, TokenCommenti } from "../../token";
import {
  setDataFetchPaginaNotizie,
  setDataFetchProfilo,
  setdataFetchGetCommenti,
} from "../../redux/reducers/StateSliceReducers";
import { Container, Row } from "react-bootstrap";
import HomeParteDestra from "./HomeParteDestra";
import HomeParteSinistra from "./HomeParteSinistraSez";
import HomeCentro from "./HomeCentro";

const Home = () => {
  const dispatch = useDispatch();
  const datiPaginaNotizie = useSelector((state) => state.FetchData.dataFetchPaginaNotizie);

  const optionsGet = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token} `,
    },
  };

  const optionsGetCommenti = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TokenCommenti} `,
    },
  };

  const fetchingData = async () => {
    /* fetch dati profilo al mount del componente */
    dispatch(fetchData("https://striveschool-api.herokuapp.com/api/profile/me", "", optionsGet, setDataFetchProfilo));

    dispatch(fetchData("https://striveschool-api.herokuapp.com/api/posts/", "", optionsGet, setDataFetchPaginaNotizie));

    dispatch(
      fetchData("https://striveschool-api.herokuapp.com/api/comments/", "", optionsGetCommenti, setdataFetchGetCommenti)
    );
  };

  useEffect(() => {
    fetchingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {datiPaginaNotizie && (
        <div id="sezioneNotizie" className="mt-7">
          <Container>
            <Row>
              {/* SIDE SN */}
              <HomeParteSinistra />
              {/* CENTRALE */}
              <HomeCentro />
              {/* SIDE DX */}
              <HomeParteDestra />
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default Home;
