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
import { ImPlus, ImMinus } from "react-icons/im";
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
import Tutorial from "./tutorial";

const Map = ({ setMapRes, mapOpen, qId }) => {
  const [tutorialOpen, setTutorialOpen] = useState(false);
  const usertoken = useSelector((state) => state.auth.token);
  const [check, setCheck] = useState(0);

  const renderMap = (mapRes) => {
    const leftover = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    ];
    let arr = mapRes === [] ? [] : [...mapRes.solvedNodes];
    arr.push(...mapRes.unlockedNodes);
    if (mapRes.lockedNode) arr.push(mapRes.lockedNode);

    arr.forEach((i) => {
      let index = leftover.indexOf(i);
      if (index > -1) {
        leftover.splice(index, 1);
      }
    });

    mapRes.unlockedNodes.forEach((i) => {
      if (i === mapRes.lockedNode) return;
      const element = document.getElementById(`node${i}`);
      element.classList.add("unlocked");
      if ([37, 38, 39].includes(i)) {
        element.classList.add("display-none");
      }
      if (mapRes.lockedNode === 0) {
        element.addEventListener("click", () => {
          handleClickOpen();

          const confirmButton = document.getElementById("confirm-button");
          confirmButton.addEventListener(
            "click",
            function confirmButtonPress() {
              qId(i);
              mapOpen(false);

              confirmButton.removeEventListener("click", confirmButtonPress);
            }
          );
        });
      } else {
        element.addEventListener("click", function unlockNode() {
          notify("Unfreeze to access");
        });
        return () => element.removeEventListener("click", unlockedNode);
      }
    });

    mapRes.solvedNodes.forEach((i) => {
      const element = document.getElementById(`node${i}`);
      element.classList.add("solved");
      if (mapRes.portalNodes[i] === false) return;
      element.addEventListener("click", function solvedNode() {
        notify("Solved Question");
      });
      return () => {
        element.removeEventListener("click", solvedNode);
      };
    });

    [9, 20, 32].forEach((i) => {
      const element = document.getElementById(`portal-box${i}`);
      if (mapRes.portalNodes[i]) element.classList.add("solved");
      element.addEventListener("click", () => {
      });
      // return () => element.re
    });

    leftover.forEach((i) => {
      const element = document.getElementById(`node${i}`);
      element.addEventListener("click", () => {
        notify("Locked Question!");
      });
    });
    if (mapRes.lockedNode) {
      const element = document.getElementById(`node${mapRes.lockedNode}`);
      element.classList.add("locked");
      const peg = document.getElementById("locked-peg");
      const topOffset = [37, 38, 39].includes(mapRes.lockedNode) ? "50px" : "35px";
      const leftOffset = [37, 38, 39].includes(mapRes.lockedNode) ? "1px" : "1px";
      peg.style.setProperty(
        "top",
        `calc(${getComputedStyle(element).top} - ${topOffset})`
      );
      peg.style.setProperty(
        "left",
        `calc(${getComputedStyle(element).left} - ${leftOffset})`
      );
      element.addEventListener("click", () => {
        qId(mapRes.lockedNode);
        mapOpen(false);
      });
    } else if (mapRes.solvedNodes.length > 0) {
      const element = document.getElementById(
        `node${mapRes.solvedNodes[mapRes.solvedNodes.length - 1]}`
      );
      const peg = document.getElementById("locked-peg");
      peg.style.setProperty(
        "top",
        `calc(${getComputedStyle(element).top} - 35px)`
      );
      peg.style.setProperty(
        "left",
        `calc(${getComputedStyle(element).left} - 1px)`
      );
    } else {
      const peg = document.getElementById("locked-peg");
      peg.style.setProperty("top", "430px");
      peg.style.setProperty("left", "532px");
    }

    document.getElementById("map-loading").style.display = "none";
    document.getElementById("darken").style.display = "none";
  };

  // Dialogue box
  const [dialogueOpen, setDialogueOpen] = useState(false);

  const handleClickOpen = () => {
    setDialogueOpen(true);
  };

  const handleClose = () => {
    setDialogueOpen(false);
  };

  const notify = (message) =>
    toast.dark(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });

  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);

  //Zoom functionality
  const [zoom, setZoom] = useState(1);

  const zoomIn = () => {
    setZoom(zoom + 0.1 < 2 ? zoom + 0.1 : 2);
  };
  const zoomInit = () => {
    setZoom(1);
  };
  const zoomOut = () => {
    setZoom(zoom - 0.1 > 0.2 ? zoom - 0.1 : 0.2);
  };

  const [legendOpen, setLegendOpen] = useState(false);
  const toggleLegend = () => {
    setLegendOpen(!legendOpen);
  };

  const tutorialStart = () => {
    console.log("Tutorial begins");
    setTutorialOpen(true);
  };

  useEffect(() => {
    const asyncMap = async () => {
      let res = await getMap(usertoken);
      setMapRes(res);
      renderMap(res);
    };
    asyncMap();
    console.log('Render: ', check);
    setCheck(check + 1);

    return () => {
      setMapRes({
        lockedNode: 0,
        portalNodes: { 9: false, 20: false, 32: false },
        solvedNodes: [],
        unlockedNodes: [],
        username: "",
      });
      setDialogueOpen(false);
      setZoom(1);
      ref.current = null;
      console.log("Map clean");
    };
  }, [tutorialOpen, mapOpen]);

  return (
    <>
      <Layout
        backgroundColor={getComputedStyle(
          document.documentElement
        ).getPropertyValue("--map-bg")}
      />
      <div className="map-section">
        <div id="map-loading">
          <CircularProgress color="secondary" />
        </div>
        <div id="darken" />
        <div className="map-container" ref={ref} onMouseDown={onMouseDown}>
          <Tutorial
            tutorialOpen={tutorialOpen}
            setTutorialOpen={setTutorialOpen}
            setLegendOpen={setLegendOpen}
          />
          <div
            style={{ transition: "all 0.25s ease-in-out", zoom: `${zoom}` }}
            className="map"
          >
            <img className="map-background" src={mapBackground} alt="" />
            <div id="node1" className="node">
              1
            </div>
            <div id="node2" className="node">
              2
            </div>
            <div id="node3" className="node">
              3
            </div>
            <div id="node4" className="node">
              4
            </div>
            <div id="node5" className="node">
              5
            </div>
            <div id="node6" className="node">
              6
            </div>
            <div id="node7" className="node">
              7
            </div>
            <div id="node8" className="node">
              8
            </div>
            <div id="node9" className="node portal">
              9
            </div>
            <div id="node10" className="node">
              10
            </div>
            <div id="node11" className="node">
              11
            </div>
            <div id="node12" className="node">
              12
            </div>
            <div id="node13" className="node">
              13
            </div>
            <div id="node14" className="node">
              14
            </div>
            <div id="node15" className="node">
              15
            </div>
            <div id="node16" className="node">
              16
            </div>
            <div id="node17" className="node">
              17
            </div>
            <div id="node18" className="node">
              18
            </div>
            <div id="node19" className="node">
              19
            </div>
            <div id="node20" className="node portal">
              20
            </div>
            <div id="node21" className="node">
              21
            </div>
            <div id="node22" className="node">
              22
            </div>
            <div id="node23" className="node">
              23
            </div>
            <div id="node24" className="node">
              24
            </div>
            <div id="node25" className="node">
              25
            </div>
            <div id="node26" className="node">
              26
            </div>
            <div id="node27" className="node">
              27
            </div>
            <div id="node28" className="node">
              28
            </div>
            <div id="node29" className="node">
              29
            </div>
            <div id="node30" className="node">
              30
            </div>
            <div id="node31" className="node">
              31
            </div>
            <div id="node32" className="node portal">
              32
            </div>
            <div id="node33" className="node">
              33
            </div>
            <div id="node34" className="node">
              34
            </div>
            <div id="node35" className="node">
              35
            </div>
            <div id="node36" className="node">
              36
            </div>
            <div id="node37" className="deck">
              37
            </div>
            <div id="node38" className="deck">
              38
            </div>
            <div id="node39" className="deck">
              39
            </div>
            <div id="portal-box9" className="portal-box" />
            <div id="portal-box20" className="portal-box" />
            <div id="portal-box32" className="portal-box" />
            <div id="locked-peg">
              <img src={Marker} alt="locked peg" />
            </div>
          </div>
        </div>

        <ToastContainer />

        <div>
          <Dialog
            open={dialogueOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            className="dialog-container"
          >
            <div id="dialog-icon">
              <FaLock />
            </div>
            <DialogTitle id="alert-dialog-title">
              Freeze onto this question?
            </DialogTitle>
            <DialogActions id="dialog-buttons">
              <Button id="confirm-button" onClick={handleClose} color="primary">
                Yes
              </Button>
              <Button onClick={handleClose} color="primary">
                No
              </Button>
            </DialogActions>
          </Dialog>
        </div>

        <div className="zoom-buttons">
          <LightTooltip title="Zoom Out" placement="bottom">
            <div onClick={zoomOut} id="zoom-out">
              <ImMinus />
            </div>
          </LightTooltip>
          <LightTooltip title="Zoom In" placement="bottom">
            <div onClick={zoomIn} id="zoom-in">
              <ImPlus />
            </div>
          </LightTooltip>
          <LightTooltip title="Reset" placement="bottom">
            <div onClick={zoomInit} id="zoom-init">
              <RedoIcon width="1em" height="1em" />
            </div>
          </LightTooltip>
        </div>

        <div
          style={{
            display: `${legendOpen ? "grid" : "none"}`,
            transition: "all 0.25s ease-in-out",
          }}
          className="legend-box"
        >
          <img src={Marker} alt="Marker" />
          <p>Freezed question</p>
          <img src={lockedNode} alt="Locked node" />
          <p>Locked Question</p>
          <img src={unlockedNode} alt="Unlocked node" />
          <p>Unlocked Question</p>
          <img src={portalNode} alt="Portal Node" />
          <p>Portal Question</p>
          <img className="solvedNode" src={solvedNode} alt="Solved Node" />
          <p>Solved Question</p>
        </div>

        <div onClick={toggleLegend} className="key-button">
          <GoKey />
        </div>

        <LightTooltip title="Tutorial" placement="left">
          <div onClick={tutorialStart} className="tutorial-button">
            <FaPlay />
          </div>
        </LightTooltip>
      </div>
    </>
  );
};

export default Map;
