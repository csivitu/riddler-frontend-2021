import { useState, React, useRef, useEffect } from "react";
// import mapBackground from '../../../assets/map.svg';
import mapBackground from "../../../assets/map.svg";
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
import { CircularProgress } from "@material-ui/core";
import { ImZoomIn, ImZoomOut } from "react-icons/im";
import { FaRedo } from "react-icons/fa";

const Map = ({ setMapRes, mapOpen, qId }) => {
  // const [mapRes, setMapRes] = useState({});
  // let mapRes = {};
  const usertoken = useSelector((state) => state.auth.token);
  useEffect(() => {
    const asyncInsert = async () => {
      let res = await insertUser(usertoken);
      console.log(res);
    };
    const asyncMap = async () => {
      let res = await getMap(usertoken);
      // setMapRes(res.nodeInfo);
      // mapRes = res.nodeInfo;
      // console.log(mapRes);
      setMapRes(res);
      renderMap(res);
    };

    asyncInsert();
    asyncMap();
    // console.log("mapres");
    // console.log(mapRes);
  }, []);

  const renderMap = (mapRes) => {
    const leftover = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    ];
    let arr = [...mapRes.solvedNodes];
    arr.push(...mapRes.unlockedNodes);
    if (mapRes.lockedNode) arr.push(mapRes.lockedNode);

    arr.forEach((i) => {
      let index = leftover.indexOf(i);
      if (index > -1) {
        leftover.splice(index, 1);
      }
    });

    // [1, 2, 3].forEach((i) => {
    //   const element = document.getElementById(`deck${i}`);
    //   // element.classList.add('deck');
    //   element.addEventListener("click", () => {
    //     console.log("Deck Node clicked!");
    //   });
    // });
    console.log("mapRes.unlockedNodes");
    mapRes.unlockedNodes.forEach((i) => {
      if (i === mapRes.lockedNode) return;
      console.log(i);
      const element = document.getElementById(`node${i}`);
      element.classList.add("unlocked");
      element.addEventListener("click", () => {
        console.log("Unlocked Node clicked!");
        handleClickOpen();

        const confirmButton = document.getElementById("confirm-button");
        confirmButton.addEventListener("click", function confirmButtonPress() {
          console.log("confirmed");

          // Send request
          // window.location.href = `/play?qid=${i}`;
          qId(i);
          mapOpen(false);

          confirmButton.removeEventListener("click", confirmButtonPress);
        });
      });
    });

    mapRes.solvedNodes.forEach((i) => {
      const element = document.getElementById(`node${i}`);
      element.classList.add("solved");
      element.addEventListener("click", () => {
        console.log("Solved Node clicked!");
        notify("Solved node clicked");
      });
    });

    [9, 20, 32].forEach((i) => {
      const element = document.getElementById(`portal-box${i}`);
      if (mapRes.portalNodes.i) element.classList.add("solved");
      element.addEventListener("click", () => {
        console.log("portal Node Box clicked!");
      });
    });

    leftover.forEach((i) => {
      const element = document.getElementById(`node${i}`);
      element.addEventListener("click", () => {
        console.log("Other node clicked!");
        notify("Cannot access this node!");
      });
    });
    if (mapRes.lockedNode) {
      const element = document.getElementById(`node${mapRes.lockedNode}`);
      element.classList.add("locked");
      element.addEventListener("click", () => {
        console.log("Locked Node clicked!");
        qId(mapRes.lockedNode);
        mapOpen(false);
      });
    }

    document.getElementById("map-loading").style.display = "none";
    document.getElementById("darken").style.display = "none";
  };

  // Dialogue box
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
    document.querySelector(".map").style.zoom = zoom;
  };
  const zoomInit = () => {
    setZoom(1);
    document.querySelector(".map").style.zoom = zoom;
  };
  const zoomOut = () => {
    setZoom(zoom - 0.1 > 0.2 ? zoom - 0.1 : 0.2);
    document.querySelector(".map").style.zoom = zoom;
  };

  return (
    <>
      <Layout />
      <div className="map-section">
        <div id="map-loading">
          <CircularProgress color="secondary" />
        </div>
        <div id="darken" />
        <div className="zoom-buttons">
          <div onClick={zoomIn} id="zoom-in">
            <ImZoomIn />
          </div>
          <div onClick={zoomOut} id="zoom-out">
            <ImZoomOut />
          </div>
          <div onClick={zoomInit} id="zoom-init">
            <FaRedo />
          </div>
        </div>
        <div className="map-container" ref={ref} onMouseDown={onMouseDown}>
          <div className="map">
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
          </div>
        </div>
        <ToastContainer />

        <div>
          {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open alert dialog
        </Button> */}
          <Dialog
            open={open}
            //   onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Choose question"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure you want to lock onto this question?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Nah
              </Button>
              <Button id="confirm-button" onClick={handleClose} color="primary">
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default Map;
