import React from "react";
import "./Tracks.css";
import mythical from "./assets/mythical.png";
import digital from "./assets/digital.png";
import dystopian from "./assets/dysptopian.png";
import tracks from "./assets/tracks box.svg";

function Home() {
  return (
    <div className="home-bg" id="tracks">
      <img className="track" src={tracks} alt="" />
      <div className="discs">
        <img className="disc disc1" src={mythical} alt="mythical" />
        <img className="disc disc2" src={digital} alt="digital" />
        <img className="disc disc3" src={dystopian} alt="dystopian" />
      </div>
    </div>
  );
}

export default Home;
