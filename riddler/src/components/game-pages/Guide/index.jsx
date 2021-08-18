import React from "react";
import Layout from "../../game-navbar/Layout";
import "./guide.css";
import img1 from "../../../assets/guide-img-1.png";
import img2 from "../../../assets/guide-img-2.png";
import img3 from "../../../assets/guide-img-3.png";
import img4 from "../../../assets/guide-img-4.png";
import img5 from "../../../assets/guide-img-5.png";
import img6 from "../../../assets/guide-img-6.png";
import { FaDiscord } from "react-icons/fa";
import { Tooltip } from "@material-ui/core";

function Guide() {
  return (
    <div>
      <Layout backgroundColor="var(--map-bg)"></Layout>
      <div className="guide-container">
        <div id="heading">
          <hr id="heading-line" />
          <h1>GUIDE</h1>
        </div>
        <div id="guide-content">
          <h1 className="headings">QUESTIONS</h1>
          <img className="images" src={img1} alt="img1" />
          <ul className="all-lists">
            <li className="each-list">
              Questions are represented in the form of nodes on the map.
            </li>
            <li className="each-list">
              The nodes in each specific track relates to the theme of the
              track. Hence the topic of the question in that node will be
              associated with that track.
            </li>
          </ul>
          <img className="images" src={img2} alt="img2" />
          <ul className="all-lists">
            <li className="each-list">
              After you solve a question, the nodes connected to it get unlocked
              and become available for selection. Once you select the next
              question to attempt, you are freezing into that question and
              connot access the other unlocked questions untill you solve the
              frozen question.
              <br />
              &#40;Note: You don’t get to see the question before making a
              choice, and there’s no going back until you give the right
              answer&#41;
            </li>
          </ul>
          <img className="images" src={img3} alt="img3" />
          <ul className="all-lists">
            <li className="each-list">
              After the frozen question is solved, you can select the next
              question you want to attempt from any one of the unlocked
              questions on the map.
            </li>
            <li className="each-list">
              For each question you solve, you get ___ points, and for every
              hint you use, you lose ___ points
            </li>
            <li className="each-list">
              When all the 39 questions from all 3 tracks are solved, the final
              treasure spot reveals itself in the center of the map for you to
              solve.{" "}
            </li>
            <li className="each-list">
              The participants who hold the top three slots of the leaderboard
              at the end of the 72 hours will be awarded with the main prizes.
            </li>
          </ul>

          <h1 className="headings">Unfreeze</h1>

          <img className="images" src={img4} alt="img4" />

          <ul className="all-lists">
            <li className="each-list">
              Each player will only be allotted 2 unfreezes per day. If you’re
              stuck on a question, you may use 1 unfreeze charge and choose to
              solve another unlocked question.
            </li>
          </ul>

          <h1 className="headings">portals</h1>
          <img className="images" src={img5} alt="img5" />
          <ul className="all-lists">
            <li className="each-list">
              These are with 2 possible answers to the same question. When you
              choose to solve a portal question, there are 2 possible outcomes:
              <ul style={{ marginLeft: "20px" }}>
                <li className="each-list">
                  It can act like just another question If you give one possible
                  answer, the adjacent nodes become unlocked, and you can
                  proceed to move forward.&#40;Just like any other node&#41;
                </li>
                <li className="each-list">
                  You can access the portal by giving the 2nd answer for the
                  portal question. You can use the portal to go to any one of
                  the other 2 portals in the Map. However to successfully land
                  at a portal, you need one possible answer of the destination
                  portal to proceed.
                </li>
              </ul>
            </li>
          </ul>
          <h1 className="headings">bridge questions</h1>
          <ul className="all-lists">
            <li className="each-list">
              These questions lie in the intersection of two themes. That means,
              the question on that node will relate to a mix of both the themes.
            </li>
          </ul>
          <img className="images" src={img6} alt="img6" />
        </div>
      </div>
      <Tooltip title="Join the discord server for any doubt clarifications." arrow placement="left">
        <div id="discord-button">
          <a href="https://discord.gg/DG7UMRx22j" target="_blank">
            <div id="discord-icon">
              <FaDiscord size="2rem" />
            </div>
          </a>
        </div>
      </Tooltip>
    </div>
  );
}

export default Guide;
