import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import {Tooltip} from '@material-ui/core';
import "./play.css";
import Tooltip from "@material-ui/core/Tooltip";
import hintIcon from "./assets/hint.svg";
import mapIcon from "./assets/map.svg";
import { ReactComponent as Bulb } from "../../../assets/bulb_dark.svg";
import {
  FaRedoAlt,
  FaPlay,
  FaDiscord,
  FaLock,
  FaUnlock,
  FaStar,
  FaTimes,
} from "react-icons/fa";
import { GoCheck } from "react-icons/go";
import {
  Button,
  CircularProgress,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Layout from "../../game-navbar/Layout";
import { useSelector } from "react-redux";
import {
  getHint,
  getPlayerdata,
  getQuestion,
  penaltyPoint,
  submitAnswer,
} from "../../../api/requests";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { makeStyles } from "@material-ui/core/styles";
import {
  PlaySection,
  QuestionContainer,
  TopBox,
  TrackBox,
  Trackname,
  QuestionBox,
  QBtnContainer,
  AContainer,
  AnswerBox,
  OurButton,
  QuestionContent,
  Image,
  ButtonContainer,
  LinkText,
} from "./playElements";

const useStyles = makeStyles({
  myStyle: {
    backgroundColor: "transparent",
    color: "white",
  },
});

const notify = (message) =>
  toast.dark(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
  });

function Question({ lastQuestion, mapOpen, qId, mapData }) {
  const classes = useStyles();

  const trackName = {
    2: "mythical past",
    1: "digital present",
    3: "dystopian future",
  };
  const colorVariable = {
    "mythical past": "var(--past)",
    "digital present": "var(--present)",
    "dystopian future": "var(--future)",
  };
  const usertoken = useSelector((state) => state.auth.token);
  const [wantHint, setWantHint] = useState(false);

  const [ques, setQues] = useState("");
  const [quesImg, setQuesImg] = useState([]);
  const [quesLink, setQuesLink] = useState([]);
  const [hintImg, setHintImg] = useState([]);
  const [hintLink, setHintLink] = useState([]);
  const [track1, setTrack1] = useState("");
  const [track2, setTrack2] = useState("");
  const [hint, setHint] = useState("");
  const [unfreezeQues, setUnfreezeQues] = useState(false);
  const [penaltyPoints, setPenaltyPoints] = useState(0);

  const [openHintDialog, setOpenHintDialog] = useState(false);
  const [openUnfreezeDialog, setOpenUnfreezeDialog] = useState(false);
  const [hintButton, setHintButton] = useState(true);
  const [loadingPage, setLoadingPage] = useState(true);

  const [correctAnsAlert, setCorrectAnsAlert] = useState(false);

  const [type, setType] = useState("normal");

  const handleClickOpen = async () => {
    setOpenHintDialog(true);
  };

  const handleClose = () => {
    setOpenHintDialog(false);
  };

  // const handleUnfreezeClick = () => {

  // }

  // const handleCorrectAnsClose = () => {
  //   setCorrectAnsAlert(false);
  // };
  const handleUnfreezeClose = () => {
    setOpenUnfreezeDialog(false);
  };

  const clickYesHint = async () => {
    const res = await getHint(usertoken, qId);
    if (res.code === "S4") {
      const ques = await getQuestion(usertoken, qId);
      setHint(ques.hint.text);
      setHintImg(ques.hint.img);
      setHintLink(ques.hint.links);
      setWantHint(true);
      setHintButton(false);
    } else {
      notify("Hint was not provided");
    }

    handleClose();
  };

  const handleHint = async (res) => {
    if (JSON.stringify(res.hint) !== JSON.stringify({})) {
      setHint(res.hint.text);
      setHintImg(res.hint.img);
      setHintLink(res.hint.links);
      setWantHint(true);
      setHintButton(false);
    }
  };

  const checkType = (qId) => {
    if (
      qId === 35 ||
      qId === 36 ||
      qId === 23 ||
      qId === 24 ||
      qId === 11 ||
      qId === 12
    ) {
      return "bridge";
    } else if (qId === 9 || qId === 20 || qId === 32) {
      return "portal";
    } else return "normal";
  };
  const handleAnswer = async () => {
    setLoadingPage(true);
    const answerBox = document.getElementById("answer-box");
    const answer = answerBox.value;
    if (answer) {
      answerBox.value = "";
      const res = await submitAnswer(usertoken, qId, answer);
      if (res.code === "S2" || res.code === "S0") {
        setCorrectAnsAlert(true);
        setTimeout(function () {
          setCorrectAnsAlert(false);
          mapOpen(true);
        }, 2000);
      } else {
        const notifs = [
          "Hold on there buddy...Think more about this.",
          "It looks like you’ve hit a bump...Try again?",
          "Oops..Try Again",
          "“Try harder.”",
          "NOPE.Try Again",
          "You can do better. Try again ",
        ];
        notify(notifs[Math.floor(Math.random() * 6)]);
      }
    }
    setLoadingPage(false);
  };

  const handleFreeze = async () => {
    setOpenUnfreezeDialog(true);
  };

  const unfreezeYes = async () => {
    setLoadingPage(true);
    const res = await penaltyPoint(usertoken, qId);
    if (res.code === "S3") {
      mapOpen(true);
    } else if (res.code === "L4") {
      notify("Not enough penalty points");
    }
    setOpenUnfreezeDialog(false);
    setUnfreezeQues(true);
    setLoadingPage(false);
  };

  const updateColor = (res) => {
    // setCurrentTrack(JSON.parse(localStorage.getItem("currentTracks")));
    const current = res.currentTrack;
    if (qId === 40) {
      document.documentElement.style.setProperty("--leaderboard-bg", "white");
      document.documentElement.style.setProperty("--map-bg", "white");
      document.documentElement.style.setProperty("--guide-bg", "white");
    } else if (current === [] || current === null) {
      document.documentElement.style.setProperty(
        "--leaderboard-bg",
        "--future"
      );
      document.documentElement.style.setProperty("--map-bg", "--past");
      document.documentElement.style.setProperty("--guide-bg", "--present");
    } else {
      const varNames = {
        1: "--present",
        2: "--past",
        3: "--future",
      };
      const currentColor = varNames[current[0]];
      document.documentElement.style.setProperty(
        "--leaderboard-bg",
        `var(${currentColor})`
      );
      document.documentElement.style.setProperty(
        "--map-bg",
        `var(${currentColor})`
      );
      document.documentElement.style.setProperty(
        "--guide-bg",
        `var(${currentColor})`
      );
    }
  };

  useEffect(() => {
    const asyncQuestion = async () => {
      setType(checkType(qId));
      let res = await getQuestion(usertoken, qId);
      localStorage.setItem("currentTracks", JSON.stringify(res.track));
      if (res.track.length === 1) res.track = [res.track[0], res.track[0]];
      // setRes(res);
      if (res.question) {
        setQues(res.question.text);
        setQuesLink(res.question.links);
        setQuesImg(res.question.img);
        if (res.track.length === 2) {
          setTrack1(trackName[res.track[0]]);
          setTrack2(trackName[res.track[1]]);
        } else {
          setTrack1(trackName[res.track[0]]);
          setTrack2(trackName[res.track[0]]);
        }
        handleHint(res);
        setLoadingPage(false);
      } else {
        mapOpen(true);
      }
      let userData = await getPlayerdata(usertoken);
      updateColor(userData);
      setPenaltyPoints(userData.playerPenaltyPoints);
      if (userData.playerScore < 40) {
        setHintButton(false);
      }
    };

    asyncQuestion();
    setHint("");
    setHintImg([]);
    setHintImg([]);
  }, [wantHint]);

  return (
    <>
      <Layout backgroundColor="var(--map-bg)" />
      <PlaySection>
        {loadingPage && (
          <div>
            <div id="map-loading">
              <CircularProgress color="secondary" />
            </div>
            <div id="darken" />
          </div>
        )}
        <TopBox>
          <TrackBox>
            {lastQuestion ? (
              <Trackname>Final Question</Trackname>
            ) : (
              <>
                {track1 === track2 ? (
                  <Trackname
                    color1={colorVariable[track1]}
                    color2={colorVariable[track1]}
                    style={{
                      borderRadius: 5,
                    }}
                  >
                    {track1}
                  </Trackname>
                ) : (
                  <>
                    <Trackname
                      color1={colorVariable[track1]}
                      color2={colorVariable[track1]}
                      style={{
                        borderTopLeftRadius: 5,
                        borderBottomLeftRadius: 5,
                      }}
                    >
                      {track1}
                    </Trackname>
                    <Trackname
                      color1={colorVariable[track1]}
                      color2={colorVariable[track2]}
                    >
                      <FaTimes />
                    </Trackname>
                    <Trackname
                      color1={colorVariable[track2]}
                      color2={colorVariable[track2]}
                      style={{
                        borderTopRightRadius: 5,
                        borderBottomRightRadius: 5,
                      }}
                    >
                      {track2}
                    </Trackname>
                  </>
                )}
              </>
            )}
          </TrackBox>
        </TopBox>
        <QuestionContainer>
          <QuestionBox>
            <QuestionContent>{ques}</QuestionContent>
            {quesImg?.map((imgLink) => {
              return (
                <Image>
                  <img src={imgLink} alt="" />
                </Image>
              );
            })}
            {quesLink?.map((link) => (
              <LinkText href={link} rel="noreferrer" target="_blank">
                {link}
              </LinkText>
            ))}
            {wantHint && (
              <>
                <h1
                  style={{
                    color: "var(--map-bg)",
                    fontFamily: "Poppins",
                  }}
                >
                  Hint
                </h1>
                <QuestionContent>{hint}</QuestionContent>
                {hintImg?.map((imgLink) => {
                  return (
                    <Image>
                      <img src={imgLink} alt="" />
                    </Image>
                  );
                })}
                {hintLink?.map((link) => (
                  <LinkText href={link} rel="noreferrer" target="_blank">
                    {link}
                  </LinkText>
                ))}
              </>
            )}
          </QuestionBox>
          <QBtnContainer>
            {hintButton && (
              <Tooltip title="Hint" arrow placement="left">
                <IconButton onClick={handleClickOpen}>
                  <img src={hintIcon} alt="" />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title="Map" arrow placement="left">
              <IconButton onClick={() => mapOpen(true)}>
                <img src={mapIcon} alt="" />
              </IconButton>
            </Tooltip>
          </QBtnContainer>
        </QuestionContainer>
        <AContainer>
          <AnswerBox
            autoFocus
            id="answer-box"
            type="text"
            placeholder="Type here..."
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleAnswer();
              }
            }}
          ></AnswerBox>
          <ButtonContainer>
            <OurButton onClick={handleAnswer} type="submit">
              SUBMIT
            </OurButton>
            {!lastQuestion && (
              <Tooltip title="What does unfreeze do?">
                <OurButton onClick={handleFreeze}>UNFREEZE</OurButton>
              </Tooltip>
            )}
          </ButtonContainer>
        </AContainer>
      </PlaySection>

      <Dialog
        open={openHintDialog}
        keepMounted
        onClose={handleClose}
        className="hintDialog-container"
      >
        <div id="hintDialog-icon">
          <Bulb
            style={{
              width: "1em",
              fill: "black",
            }}
          />
        </div>
        <DialogTitle id="alert-hintDialog-title">Take a hint?</DialogTitle>
        <DialogContent id="hintDialog-text">
          -40 <FaStar />
        </DialogContent>
        <DialogActions id="hintDialog-buttons">
          <Button id="confirm-button" onClick={clickYesHint} color="primary">
            Yes
          </Button>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openUnfreezeDialog}
        keepMounted
        onClose={handleUnfreezeClose}
        className="hintDialog-container"
      >
        <div id="hintDialog-icon">
          <FaUnlock
            style={{
              width: "0.6em",
              fill: "black",
            }}
          />
        </div>
        <DialogTitle id="alert-hintDialog-title">
          Unfreeze this question?
        </DialogTitle>
        {penaltyPoints > 0 ? (
          <>
            <DialogContent id="hintDialog-text">
              {Math.floor(penaltyPoints)} chance
              {Math.floor(penaltyPoints) === 2 ? "s" : ""} left
            </DialogContent>
            <DialogActions id="hintDialog-buttons">
              <Button id="confirm-button" onClick={unfreezeYes} color="primary">
                Yes
              </Button>
              <Button onClick={handleUnfreezeClose} color="primary">
                No
              </Button>
            </DialogActions>
          </>
        ) : (
          <>
            <DialogContent
              id="hintDialog-text"
              style={{
                fontSize: "1rem",
                marginBottom: "1rem",
              }}
            >
              Penalty points renew after midnight!
            </DialogContent>
          </>
        )}
      </Dialog>

      <Modal
        open={correctAnsAlert}
        closeAfterTransition
        className="answer-modal"
      >
        <Fade in={correctAnsAlert}>
          <div id="answer-alert">
            <div id="alert-icon">
              <GoCheck
                style={{
                  width: "1em",
                  fill: "black",
                }}
              />
            </div>
            <h2 id="alert-title">
              {
                ["Spot On!", "Nailed it!", "Way to go!", "Correct-a-mundo!"][
                  Math.floor(Math.random() * 4)
                ]
              }
            </h2>
            <p id="alert-message">
              +{type === "portal" ? 50 : type === "bridge" ? 70 : 100}{" "}
              <FaStar />
            </p>
          </div>
        </Fade>
      </Modal>

      <ToastContainer />
    </>
  );
}

export default Question;
