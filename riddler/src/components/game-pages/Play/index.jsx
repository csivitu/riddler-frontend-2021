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
    1: "mythical past",
    2: "digital present",
    3: "dystopian future",
  };
  const usertoken = useSelector((state) => state.auth.token);
  const [wantHint, setWantHint] = useState(false);
  console.log(wantHint);

  const [ques, setQues] = useState("");
  const [quesImg, setQuesImg] = useState([]);
  const [quesLink, setQuesLink] = useState([]);
  const [hintImg, setHintImg] = useState([]);
  const [hintLink, setHintLink] = useState([]);
  const [track1, setTrack1] = useState("digital present");
  const [track2, setTrack2] = useState("digital present");
  const [hint, setHint] = useState("");

  const [openHintDialog, setOpenHintDialog] = useState(false);
  const [hintButton, setHintButton] = useState(true);
  const [loadingPage, setLoadingPage] = useState(true);

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
      setHint(ques.hint.text);
      setHintImg(ques.hint.img);
      setHintLink(ques.hint.links);
      setWantHint(true);
      setHintButton(false);
    }

    handleClose();
  };

  const handleHint = async (res) => {
    if (res.hint.text) {
      setHint(res.hint.text);
      setHintImg(res.hint.img);
      setHintLink(res.hint.links);
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
      const res = await submitAnswer(usertoken, qId, [answer]);
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
    };

    asyncQuestion();
    setHint("");
    setHintImg([]);
    setHintImg([]);
  }, [wantHint]);

  return (
    <>
      <Layout></Layout>
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
              <Trackname>{track1} X</Trackname>
              <Trackname>&nbsp;{track2}</Trackname>
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
            <QuestionContent>{ques}</QuestionContent>
            <Qdiv  >
              {quesImg.map((imgLink) => {
                return (
                  <Image>
                    <img src={imgLink} alt="" />
                  </Image>
                );
              })}
              <br />
              {quesLink.map((link) => {
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
