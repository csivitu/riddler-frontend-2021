import "./Timer.css"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import ScreensaverRiddlerLogo from './assets/riddlerlogo_svg.svg';
// import p5 from "p5";


function Timer() {
  const calculateTimeLeft = () => {
    const difference = +new Date("Aug 20, 2021 00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        // seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  // Object.keys(timeLeft).forEach((interval) => {
  //   if (!timeLeft[interval]) {
  //     return;
  //   }

  //   timerComponents.push(
  //     <span className="timer-card">
  //       {timeLeft[interval]} {interval}{" "}

  //     </span>
  //   );
  // });
  timerComponents.push(
    <div id="countdown" className="timers">
      <div className="timer-card">
        <h1>{timeLeft.days}</h1>
        <h2>{timeLeft.days === 1? "day" : "days"}</h2>
      </div>
      <div className="timer-card">
        <h1>{timeLeft.hours}</h1>
        <h2>{timeLeft.hours === 1? "hour" : "hours"}</h2>
      </div>
      <div className="timer-card">
        <h1>{timeLeft.minutes}</h1>
        <h2>{timeLeft.minutes === 1? "min" : "mins"}</h2>
      </div>
    </div>

  );

  return (

    <div className="timer-bg">
      <div class='screensaver'>
        <p className="screensaver-logo">RIDDLER</p>
        {/* <img class="screensaver-logo" src={ScreensaverRiddlerLogo} alt="riddler logo" /> */}
      </div>
      <div className="TimerContainer">

        <div className="section-timer" data-anchor="timer">
          <div className="container">
            <h1 id="headline">RIDDLER STARTS IN</h1>
            <div id="timer">
              {timerComponents.length ? timerComponents : <span>Riddler is live!</span>}
            </div>
          </div>
        </div>

        <div className="HomeBtnWrapper">
          <Link className="reg_button" to="/">HOME</Link>
        </div>
      </div>
    </div>
  );
}

export default Timer;