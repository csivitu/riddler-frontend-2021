import { useState, React, useRef } from "react";
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

const Map = () => {
  const res = {
    correct: true,
    currentPos: 1,
    unlocked_nodes: [10, 19, 13],
    // unlocked_nodes: [37, 38, 39],
    solved_nodes: [1, 3, 4, 5],
    portal_nodes: [9, 20, 32],
    locked_question: 6,
  };

  const leftover = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
  ];
  let arr = [...res.solved_nodes];
  arr.push(...res.unlocked_nodes);
  if (res.locked_question) arr.push(res.locked_question);

  arr.forEach((i) => {
    let index = leftover.indexOf(i);
    if (index > -1) {
      leftover.splice(index, 1);
    }
  });
  // console.log(leftover);

  // Dialogue box
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  window.addEventListener("DOMContentLoaded", () => {
    // [1, 2, 3].forEach((i) => {
    //   const element = document.getElementById(`deck${i}`);
    //   // element.classList.add('deck');
    //   element.addEventListener("click", () => {
    //     console.log("Deck Node clicked!");
    //   });
    // });

    res.unlocked_nodes.forEach((i) => {
      const element = document.getElementById(`node${i}`);
      element.classList.add("unlocked");
      element.addEventListener("click", () => {
        console.log("Unlocked Node clicked!");
        handleClickOpen();

        const confirmButton = document.getElementById("confirm-button");
        confirmButton.addEventListener("click", function confirmButtonPress() {
          console.log("confirmed");

          // Send request
          window.location.href = "/play";

          confirmButton.removeEventListener("click", confirmButtonPress);
        });
      });
    });

    res.solved_nodes.forEach((i) => {
      const element = document.getElementById(`node${i}`);
      element.classList.add("solved");
      element.addEventListener("click", () => {
        console.log("Solved Node clicked!");
        notify("Solved node clicked");
      });
    });

    res.portal_nodes.forEach((i) => {
      const element = document.getElementById(`node${i}`);
      element.classList.add("portal");
      element.addEventListener("click", () => {
        console.log("portal Node clicked!");
      });
    });

    leftover.forEach((i) => {
      const element = document.getElementById(`node${i}`);
      element.addEventListener("click", () => {
        console.log("Other node clicked!");
        notify("Cannot access this node!");
      });
    });

    const element = document.getElementById(`node${res.locked_question}`);
    element.classList.add("locked");
    element.addEventListener("click", () => {
      console.log("Locked Node clicked!");
      window.location.href = "/play";
    });
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

  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);

  return (
    <div className="map-section">
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
          <div id="node9" className="node">
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
          <div id="node20" className="node">
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
          <div id="node32" className="node">
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
          <DialogTitle id="alert-dialog-title">{"Choose question"}</DialogTitle>
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
  );
};

export default Map;
