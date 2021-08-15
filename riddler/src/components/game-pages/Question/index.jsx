import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { AContainer, AnswerBox, QContainer, QuestionBox, QuestionContent, TrackBox, Trackname, OurButton, ButtonContainer, Hint, Container1, QBtnContainer, TopBox } from './style'
// import {Tooltip} from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import hintIcon from './assets/hint.svg'
import mapIcon from './assets/map.svg'
import { Button, DialogContentText, DialogTitle, IconButton } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Layout from '../../game-navbar/Layout';

function Question({ mapOpen, qId }) {
    console.log(qId);
    const [ques, setQues] = useState("");
    const [track1, setTrack1] = useState("");
    const [track2, setTrack2] = useState("");
    const [hint, setHint] = useState("");
    const [wantHint, setWantHint] = useState(false);

    const [openHintDialog, setOpenHintDialog] = useState(false);

    const handleClickOpen = () => {
        setOpenHintDialog(true);
    };

    const handleClose = () => {
        setOpenHintDialog(false);
    };

    const clickNoHint = () => {
        setWantHint(false);
        handleClose();
    }
    const clickYesHint = () => {
        setWantHint(true);
        handleClose();
    }
    useEffect(() => {
        setQues("Did you hear about the puppet? No, not miss piggy, but you’re pulling the right strings. Close, but you have much lesser than 900 years to find the answer. This Is The Way to go.Almost there, but that’s just what everyone calls him. Maybe you should ask for his real name? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit praesentium voluptas placeat reprehenderit tempore doloribus, voluptatibus sapiente quibusdam tempora tenetur?");

        setTrack1("digital present");
        setTrack2("digital present");
        setHint("Not now bitch");
        setWantHint(false)

    }, []);
    return (
        <>
            <Layout></Layout>
            <QContainer>
                <Container1>
                    <TopBox>
                        <TrackBox>
                            <Trackname>{track1} X</Trackname><Trackname>&nbsp;{track2}</Trackname>
                        </TrackBox>
                        <QBtnContainer>
                            <IconButton onClick={handleClickOpen}><img src={hintIcon} alt="" /></IconButton>
                            <IconButton onClick={() => mapOpen(true)}><img src={mapIcon} alt="" /></IconButton>
                        </QBtnContainer>
                    </TopBox>

                    <QuestionBox>
                        <QuestionContent>{ques}</QuestionContent>

                        {wantHint && <Hint>Hint: {hint}</Hint>}

                    </QuestionBox>
                    <AContainer>
                        <AnswerBox type="text" placeholder="Type here..."></AnswerBox>
                        <ButtonContainer >
                            <OurButton >SUBMIT</OurButton>
                            <Tooltip title="What does unfreeze do?"><OurButton>UNFREEZE</OurButton></Tooltip>


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
                    <DialogTitle id="alert-dialog-slide-title">{"Do you want to take a hint?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            You'll lose 60 points
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={clickNoHint} color="primary">
                            Nope I'm good 😁
                        </Button>
                        <Button onClick={clickYesHint} color="primary">
                            Yes I want 😢
                        </Button>
                    </DialogActions>
                </Dialog>

            </QContainer></>

    )
}

export default Question;
