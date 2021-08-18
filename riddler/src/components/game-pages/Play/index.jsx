import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  AContainer,
  AnswerBox,
  QContainer,
  QuestionBox,
  QuestionContent,
  TrackBox,
  Trackname,
  OurButton,
  ButtonContainer,
  Hint,
  Container1,
  QBtnContainer,
  TopBox,
  Image,
  Qdiv,
  Adiv,
} from "./style";
// import {Tooltip} from '@material-ui/core';
import Tooltip from "@material-ui/core/Tooltip";
import hintIcon from "./assets/hint.svg";
import mapIcon from "./assets/map.svg";
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
  getQuestion,
  penaltyPoint,
  submitAnswer,
} from "../../../api/requests";

function Question({ mapOpen, qId, mapData }) {
  const trackName = {
    2: "mythical past",
    1: "digital present",
    3: "dystopian future",
  };
  const usertoken = useSelector((state) => state.auth.token);
  const [wantHint, setWantHint] = useState(false);
  console.log(wantHint);

  let ques = "";
  let quesImg = [];
  let quesLink = [];
  let hintImg = [];
  let hintLink = [];
  let track1 = "digital present";
  let track2 = "digital present";
  let hint = "";

  const [res, setRes] = useState({
    "question": {
        "img": [
            ""
        ],
        "links": [
            ""
        ],
        "text": ""
    },
    "hint": {
      "img": [
            ""
        ],
        "links": [
            ""
        ],
        "text": ""
    },
    "track": [
        2,
        2
    ],
    "points": 0
})
  const [openHintDialog, setOpenHintDialog] = useState(false);
  const [hintButton, setHintButton] = useState(true);
  const [loadingPage, setLoadingPage] = useState(true);

  console.log("Questions page render");

  const handleClickOpen = async () => {
    setOpenHintDialog(true);
  };

  const handleClose = () => {
    setOpenHintDialog(false);
  };

  const clickNoHint = () => {
    setWantHint(false);
    handleClose();
  };

  const clickYesHint = async () => {
    const res = await getHint(usertoken, qId);
    if (res.code === "S4") {
      const ques = await getQuestion(usertoken, qId);
      // setHint(ques.hint.text);
      // setHintImg(ques.hint.img);
      // setHintLink(ques.hint.links);
      setWantHint(true);
      setHintButton(false);
    }

    handleClose();
  };

  const handleHint = async (res) => {
    if (res.hint.text) {
      // setHint(res.hint.text);
      // setHintImg(res.hint.img);
      // setHintLink(res.hint.links);
      setWantHint(true);
      setHintButton(false);
    }
  };

  const handleAnswer = async () => {
    setLoadingPage(true);
    const answerBox = document.getElementById("answer-box");
    const answer = answerBox.value;
    if (answer) {
      answerBox.value = "";
      const res = await submitAnswer(usertoken, qId, answer);
      console.log("Response of answer submit");
      console.log(res);
      if (res.code === "S2") {
        mapOpen(true);
      }
    }
    setLoadingPage(false);
  };

  const handleFreeze = async () => {
    setLoadingPage(true);
    const res = await penaltyPoint(usertoken, qId);
    console.log("Response on unfreeze");
    console.log(res);
    if (res.code === "L3") setLoadingPage(false);
    mapOpen(true);
  };

  useEffect(() => {
    const asyncQuestion = async () => {
      let res = await getQuestion(usertoken, qId);
      console.log("Question: ");
      console.log(res);
      localStorage.setItem("currentTracks",JSON.stringify(res.track));
      if(res.track.length === 1) res.track = [res.track[0],res.track[0]];
      setRes(res);
      if (res.question) {
        ques = res.question.text;
        quesLink = res.question.links;
        quesImg = res.question.img;
        if (res.track.length === 2) {
          track1 = trackName[res.track[0]];
          track2 = trackName[res.track[1]];
        } else {
          track1 = trackName[res.track[0]];
          track2 = trackName[res.track[0]];
        }
        handleHint(res);
        setLoadingPage(false);
      } else {
        mapOpen(true);
      }
    };
    asyncQuestion();

    return () => {
      // setHint("");
      // setHintImg([]);
    };
  }, [wantHint, mapOpen]);

  return (
    <>
      <Layout backgroundColor={getComputedStyle(document.documentElement).getPropertyValue('--map-bg')} />
      <QContainer>
        {loadingPage && (
          <div>
            <div id="map-loading">
              <CircularProgress color="secondary" />
            </div>
            <div id="darken" />
          </div>
        )}
        <Container1>
          <TopBox>
            <TrackBox>
              <Trackname>{trackName[res.track[0]]} X</Trackname>
              <Trackname>&nbsp;{trackName[res.track[1]]}</Trackname>
            </TrackBox>
            <QBtnContainer>
              {hintButton && (
                <IconButton onClick={handleClickOpen}>
                  <img src={hintIcon} alt="" />
                </IconButton>
              )}
              <IconButton onClick={() => mapOpen(true)}>
                <img src={mapIcon} alt="" />
              </IconButton>
            </QBtnContainer>
          </TopBox>

          <QuestionBox>
            <QuestionContent>{res.question.text}</QuestionContent>
            <Qdiv>
              {res.question.img.map((imgLink) => {
                return (
                  <Image>
                    <img src={imgLink} alt="" />
                  </Image>
                );
              })}
              <br />
              {res.question.links.map((link) => {
                return (
                  <>
                    <a href={link} target="_blank">
                      {link}
                    </a>
                    <br />
                  </>
                );
              })}
              {wantHint && (
                <Hint>
                  Hint: {hint} {hintImg} {hintLink}
                </Hint>
              )}
            </Qdiv>
          </QuestionBox>
          <AContainer>
            <Adiv>
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
            </Adiv>
            <ButtonContainer>
              <OurButton onClick={handleAnswer} type="submit">
                SUBMIT
              </OurButton>
              <Tooltip title="What does unfreeze do?">
                <OurButton onClick={handleFreeze}>UNFREEZE</OurButton>
              </Tooltip>
            </ButtonContainer>
          </AContainer>
        </Container1>

        <Dialog
          open={openHintDialog}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Do you want to take a hint?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              You'll lose 5 points
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={clickNoHint} color="primary">
              No
            </Button>
            <Button onClick={clickYesHint} color="primary">
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </QContainer>
    </>
  );
}

export default Question;
