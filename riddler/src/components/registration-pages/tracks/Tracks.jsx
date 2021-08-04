import React from "react";
import "./Tracks.css";
import mythical from "./assets/1.png";
import digital from "./assets/2.png";
import dystopian from "./assets/3.png";
import tracksBox from "./assets/track-box.svg";
import Header from "../header/Header";
import $ from "jquery";

$(document).on("click", ".rotating", function () {
  $(this).toggleClass("Y");
});
function Home() {
  return (
    <div className="home-bg" id="tracks">
      {/* <img className="track" src={tracks} alt="" />
      <p class="title">Yet to be<br/>revealed</p> */}
      <Header
        TitleTextTop="Yet to be"
        TitleTextBottom="revealed"
        TitleColor="black"
        ImageURL={tracksBox}
        Opposite="true"
      />
      <div className="discs">
        <img className="disc rotating" src={mythical} alt="mythical" />
        <img className="disc disc2 rotating" src={digital} alt="digital" />
        <img className="disc disc3 rotating" src={dystopian} alt="dystopian" />
      </div>
    </div>
  );
}

export default Home;
