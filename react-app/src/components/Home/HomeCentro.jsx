import React, { useEffect, useState } from "react";
import { fetchData } from "../../redux/functions/fetch";
import { useSelector, useDispatch } from "react-redux";
import { Token, TokenCommenti } from "../../token";
import { setDataFetchPaginaNotizie } from "../../redux/reducers/StateSliceReducers";
import { Button, Col, FormControl, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import {
  CalendarFill,
  EnvelopePaperFill,
  HandThumbsUpFill,
  ChatDotsFill,
  Shuffle,
  SendExclamationFill,
  Dash,
  PlusLg,
  Check2,
} from "react-bootstrap-icons";
import { fetchPost } from "../../redux/functions/fetchPostHome";
import { fetchDeleteHome } from "../../redux/functions/fetchDeleteHome";
import { postImageHome } from "../../redux/functions/postImageHome";
import { fetchPostCommenti } from "../../redux/functions/fetchPostCommenti";
import { setdataFetchGetCommenti } from "../../redux/reducers/StateSliceReducers";
import { fetchDeleteCommentiHome } from "../../redux/functions/fetchDeleteCommenti";

const HomeCentro = () => {
  const urlpostHome = "https://striveschool-api.herokuapp.com/api/posts/";
  const dispatch = useDispatch();
  const datiPaginaNotizie = useSelector((state) => state.FetchData.dataFetchPaginaNotizie);
  const commentiHome = useSelector((state) => state.FetchData.dataFetchGetCommenti);
  console.log("commentiHome", commentiHome);

  const { dataFetchProfilo } = useSelector((state) => state.FetchData);
  const [datiPost, setDatiPost] = useState("");
  const [commentId, setCommentId] = useState("");
  const [iscommentVisible, setIsCommentVisible] = useState(false);
  const [commentData, setCommentData] = useState({
    comment: "",
    rate: "3",
    elementId: "",
  });
  const [isMakingAComment, setIsMakingAComment] = useState(false);

  /* nozie home */
  const arrayNotizieTagliato = function () {
    let arrayNotizie = [...datiPaginaNotizie];
    let arrayNotizieTagliato = arrayNotizie.reverse().slice(0, 10);
    console.log("arrayNotizieTagliato", arrayNotizieTagliato);
    return arrayNotizieTagliato;
  };

  /* commenti sotto i post  */
  const arrayCommentiPostTagliato = function () {
    let arraycommenti = [...commentiHome];
    let arraycommentiTagliato = arraycommenti.reverse().slice(0, 50);
    console.log("arraycommentiTagliato", arraycommentiTagliato);
    return arraycommentiTagliato;
  };

  useEffect(() => {
    if (datiPaginaNotizie) {
      arrayNotizieTagliato();
    }
    if (commentiHome) {
      arrayCommentiPostTagliato();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [datiPaginaNotizie, commentiHome]);

  const optionsGet = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token} `,
    },
  };

  const handleSubmitHome = async (event) => {
    event.preventDefault();
    await fetchPost(urlpostHome, datiPost.text);
    setDatiPost({ text: "" });
    dispatch(fetchData("https://striveschool-api.herokuapp.com/api/posts/", "", optionsGet, setDataFetchPaginaNotizie));
  };

  const optionsDelete = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token} `,
    },
  };
  const handleDelete = async (commentID) => {
    await fetchDeleteHome(optionsDelete, commentID);
    dispatch(fetchData("https://striveschool-api.herokuapp.com/api/posts/", "", optionsGet, setDataFetchPaginaNotizie));
  };

  const addImgToComment = async (event, postid) => {
    event.preventDefault();
    setInputImg(null);
    console.log("ciao");
    const formData = new FormData(event.target);
    await postImageHome(postid, formData);
    console.log("ciao");
    dispatch(fetchData("https://striveschool-api.herokuapp.com/api/posts/", "", optionsGet, setDataFetchPaginaNotizie));
  };

  const optionsGetCommenti = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TokenCommenti} `,
    },
  };

  const handlesubmitCommento = async (event) => {
    event.preventDefault();
    console.log("ciao");
    setCommentData({ ...commentData, comment: "" });
    await fetchPostCommenti("https://striveschool-api.herokuapp.com/api/comments/", commentData);
    /* rifaccio la fetch dei commenti per vedere aggiornamento in tempo reale  */
    dispatch(
      fetchData("https://striveschool-api.herokuapp.com/api/comments/", "", optionsGetCommenti, setdataFetchGetCommenti)
    );
  };

  const handleDeleteCommento = async (idCommento) => {
    await fetchDeleteCommentiHome(`https://striveschool-api.herokuapp.com/api/comments/${idCommento}`);
    dispatch(
      fetchData("https://striveschool-api.herokuapp.com/api/comments/", "", optionsGetCommenti, setdataFetchGetCommenti)
    );
  };

  const [inputImg, setInputImg] = useState(null);

  const handleChange = (e) => {
    const selectedPhoto = e.target.files[0];
    if (selectedPhoto) {
      setInputImg(URL.createObjectURL(selectedPhoto));
    } else {
      setInputImg(null);
    }
  };

  const navigate = useNavigate();

  return (
    <Col xs="12" sm="12" md="12" lg="8" xl="6">
      {/* aggiungi un post  */}
      <div className="bg-white p-2 rounded-2">
        <Row>
          <div className="d-flex align-items-center gap-2">
            <img
              className="rounded-circle"
              width={"50px"}
              height={"50px"}
              src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
              alt="img profilo"
            />
            <Form onSubmit={handleSubmitHome} className="d-flex w-100 gap-3">
              <FormControl
                className="w-100"
                placeholder="Avvia un post..."
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(event) => setDatiPost({ text: event.target.value })}
                value={datiPost.text}
              />

              <Button type="submit" variant="primary">
                <SendExclamationFill />
              </Button>
            </Form>
          </div>
        </Row>
        <Row>
          <div className="d-flex justify-content-center gap-5 my-2">
            <div className="d-flex align-items-center gap-1">
              <CalendarFill fontSize={"22"} /> <p className="m-0">Evento</p>
            </div>
            <div className="d-flex align-items-center gap-1">
              <EnvelopePaperFill fontSize={"22"} />
              <p className="m-0">Scrivi un articolo</p>
            </div>
          </div>
        </Row>
      </div>
      {/* sezione notizie  */}
      {arrayNotizieTagliato().map((post) => (
        <div key={`post -${post._id}`} className="bg-white my-2 border rounded-3 p-3">
          <Row className="g-0">
            <Col>
              <div>
                <div>
                  <div className="d-flex gap-2 my-2">
                    <div>
                      <div>
                        <img
                          className="rounded-circle circle-img"
                          width={"50px"}
                          height={"50px"}
                          src={post.user.image}
                          alt="immagine profilo"
                        />
                      </div>
                    </div>
                    <div className="me-auto">
                      <div>
                        <h6 className="fw-bold m-0 fs-6 cursor-pointer" onClick={() => navigate(`/${post.user._id}`)}>
                          {post.user.name} {post.user.surname}
                        </h6>
                      </div>
                      <div>
                        <p className="m-0 fs-7 text-secondary">{post.user.title}</p>
                      </div>
                      <div>
                        <p className="m-0 fs-7 text-secondary">{post.user.email}</p>
                      </div>
                    </div>{" "}
                    <div>
                      {post.user.email === dataFetchProfilo.email ? (
                        <Button
                          onClick={() => {
                            handleDelete(post._id);
                          }}
                          variant="trasparent"
                        >
                          ❌
                        </Button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <Col>
                <div>
                  {" "}
                  <p className="m-0 mb-3">{post.text}</p>
                </div>
                {post.image && (
                  <div className="d-flex justify-content-center">
                    {" "}
                    <img className="rounded-3" width={"95%"} src={post.image} alt="immagine" />
                  </div>
                )}

                <div className="my-3">
                  {post.user.email === dataFetchProfilo.email && (
                    <form
                      className=""
                      onSubmit={(event) => {
                        addImgToComment(event, post._id);
                      }}
                    >
                      <Row className="g-0">
                        <Col xs={12} md={8}>
                          <label
                            htmlFor="formFileLg"
                            className="m-0 p-2 w-100 text-center form-label fw-normal fs-sm-5 border bg-body-tertiary"
                          >
                            Seleziona un'immagine cliccando qui
                          </label>
                        </Col>
                        <input
                          name="post"
                          className="form-control form-control-lg d-none"
                          id="formFileLg"
                          type="file"
                          accept="image/*"
                          onChange={handleChange}
                        />
                        <Col xs={12} md={4}>
                          <Button variant="primary" className="fs-sm-5 py-2 w-100" type="submit">
                            Save Changes
                          </Button>
                        </Col>
                        {inputImg && <img src={inputImg} alt="immagine-profilo" className="w-100" />}
                      </Row>
                    </form>
                  )}
                </div>
                <div className="d-flex justify-content-center gap-5">
                  <div className="d-flex align-items-center p-1 gap-2 m-1">
                    <HandThumbsUpFill fontSize={"25"} />{" "}
                    <Button className="p-0" variant="transparent">
                      <p className="m-0 fs-7">Consiglia</p>
                    </Button>
                  </div>
                  <div className="d-flex align-items-center p-1 gap-2 m-1">
                    <ChatDotsFill fontSize={"25"} />{" "}
                    <Button
                      onClick={() => {
                        setCommentId(post._id);
                        setIsCommentVisible(!iscommentVisible);
                        setCommentData({ ...commentData, comment: "" });
                      }}
                      className="p-0"
                      variant="transparent"
                    >
                      <p className="m-0 fs-7">Commenta</p>
                    </Button>
                  </div>
                  <div className="d-flex align-items-center p-1 gap-2 m-1">
                    <Shuffle fontSize={"25"} />{" "}
                    <Button className="p-0" variant="transparent">
                      <p className="m-0 fs-7">Diffondi il Post</p>
                    </Button>
                  </div>
                </div>
                {commentId === post._id && iscommentVisible && (
                  <div>
                    <div className="mx-5 d-flex align-items-center mb-2">
                      <h6 className="m-0">Commenti:</h6>
                      <Button
                        variant="light"
                        className="ms-auto"
                        onClick={() => {
                          setIsMakingAComment(!isMakingAComment);
                          setCommentData({ ...commentData, comment: "" });
                        }}
                      >
                        {isMakingAComment ? <Dash></Dash> : <PlusLg></PlusLg>}
                      </Button>
                    </div>
                    {isMakingAComment && (
                      <div className="ms-5 mb-2">
                        <form onSubmit={(event) => handlesubmitCommento(event)}>
                          <span>Aggiungi un commento: </span>
                          <input
                            type="text"
                            className="me-2"
                            value={commentData.comment}
                            onChange={(e) => {
                              setCommentData({ ...commentData, comment: e.target.value, elementId: post._id });
                            }}
                          ></input>
                          <Button variant="light" type="submit">
                            <Check2></Check2>
                          </Button>
                        </form>
                      </div>
                    )}
                    {arrayCommentiPostTagliato().map((commento) => {
                      if (commento.elementId === post._id) {
                        return (
                          <div
                            key={`comment-id-${commento._id}`}
                            className="d-flex align-items-center gap-2 border rounded-3 p-2 mx-5"
                          >
                            <p className="m-0">
                              {commento.comment.length < 22 ? commento.comment : commento.comment.slice(0, 22) + "..."}
                            </p>
                            {(dataFetchProfilo.email === post.user.email ||
                              dataFetchProfilo.email === commento.author) && (
                              <Button
                                variant="light"
                                className="ms-auto"
                                onClick={() => handleDeleteCommento(commento._id)}
                              >
                                ❌
                              </Button>
                            )}
                          </div>
                        );
                      } else {
                        return <div key={`comment-id-${commento._id}`} className="d-none"></div>;
                      }
                    })}
                  </div>
                )}
              </Col>
            </Col>
          </Row>
        </div>
      ))}
    </Col>
  );
};

export default HomeCentro;
