import { useState, React, useRef, useEffect } from "react";
// import mapBackground from '../../../assets/map.svg';
import mapBackground from "../../../assets/mapBg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./map.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useDraggableScroll from "use-draggable-scroll";
import Layout from "../../game-navbar/Layout";
import { getMap, insertUser } from "../../../api/requests";
import { useSelector } from "react-redux";
import { CircularProgress, makeStyles, Tooltip } from "@material-ui/core";
import { ImPlus, ImMinus, ImUndo2 } from "react-icons/im";
import { FaRedoAlt, FaPlay, FaDiscord, FaLock } from "react-icons/fa";
import { GoKey } from "react-icons/go";
import Marker from "../../../assets/Marker.svg";
import { SiApplemusic } from "react-icons/si";
import lockedNode from "../../../assets/lockedNode.svg";
import unlockedNode from "../../../assets/unlockedNode.svg";
import portalNode from "../../../assets/portalNode.svg";
import solvedNode from "../../../assets/solvedNode.svg";
import { ReactComponent as onboardingLogo } from "../../../assets/onboarding.svg";
import { ReactComponent as RedoIcon } from "../../../assets/redo.svg";
import { withStyles } from "@material-ui/styles";
import LightTooltip from "../Tooltip";
import Joyride, { ACTIONS, EVENTS, STATUS } from "react-joyride";

const Tutorial = ({ tutorialOpen, setTutorialOpen, setLegendOpen }) => {
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);

  const state = {
    run: true,
    steps: [
      {
        target: ".locked",
        title: "This is YOU on the map",
        content: "The question mark represents your position on the map",
        disableBeacon: true,
      },
      {
        target: "#node21",
        title: "This is a QUESTION",
        content: "Each node in the map represents a question",
        disableBeacon: true,
      },
      {
        target: "#portal-box9",
        title: "These are PORTALS",
        content: "You can use them to travel to the other",
        disableBeacon: true,
      },
      {
        target: ".legend-box",
        title: "Refer the Key",
        content: "The map key explains the representations on the map",
        disableBeacon: true,
      },
      {
        target: "#node37",
        title: "There are 3 tracks",
        content: "Select and answer any of the questions to lock a track",
        disableBeacon: true,
        callback: () => setTutorialOpen(false)
      },
    ],
  };
  const { steps } = state;

  const handleJoyrideCallback = (data) => {
    const { action, index, status, type } = data;
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
        // Need to set our running state to false, so we can restart if we click start again.
        setTutorialOpen(false);
      }
  };

  return (
    <>
        <Joyride
          run={tutorialOpen}
          steps={steps}
          continuous={true}
          disableOverlayClose={true}
          disableCloseOnEsc={true}
          hideCloseButton={true}
          locale={{
            back: "Back",
            next: "Next",
            last: "Finish",
          }}
          showProgress={true}
          styles={{
            buttonClose: {
              display: "none",
            },
          }}
          callback={handleJoyrideCallback}
        />
        
    </>
  );
};

export default Tutorial;
