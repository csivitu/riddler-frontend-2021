import React from 'react'
import "./Tracks.css";
import bnw from './assets/bnw.svg';
import mythical from './assets/mythical.svg';
import digital from './assets/digital.svg';
import dystopian from './assets/dysptopian.svg';
import tracks from './assets/tracks box.svg';




function Home() {
  return (

    <div class="bg">
      <div class="logo">
        <div class="bnw">
          <img class="track" src={tracks} alt="" />
            <img class="bnwbg" src={bnw} alt="" />
            <div class="discs">
              <img class="disc1 disc rotate" src={mythical} alt="" />
              <img class="disc2 disc rotateX" src={digital} alt="" />
              <img class="disc3 disc rotateY" src={dystopian} alt="" />
            </div>
          
        </div>
      </div>
      <div >

      </div>

    </div>

  )
}

export default Home;
