import React from "react";
import "./Overlay.css";
import Tv from "../assets/tv.mp4";
import Netflix from "../assets/netflix.mp4";
import Crypt from "../assets/crypto.mp4";
import email from "../assets/email.mp4";
import about from "../assets/about.mp4";
import home_background from "../assets/home1.jpg";
import chill from "../assets/netflix2.jpeg";
import chill2 from "../assets/netflix_background2.jpeg";
import clouds from "../assets/clouds1.jpg";
import cloudsBig from "../assets/clouds__big.jpg";
import cryptoMobile from "../assets/cryptoTracker.jpg";
import cryptoBig from "../assets/cryptoBig.jpeg";

function Overlay({ currentLocation, trigger, isMobile, height }) {
  const newHeight = height - 0.5;
  return (
    <div className="overlay__container">
      <div className="overlay" style={{ height: `${newHeight}px` }}>
        {!isMobile && currentLocation === "/" ? (
          <video autoPlay loop muted className="vid__tv">
            <source src={Tv} type="video/mp4" />
          </video>
        ) : null}
        {trigger && currentLocation === "/Netflix" ? (
          <video autoPlay loop muted className="vid__netflix">
            <source src={Netflix} type="video/mp4" />
          </video>
        ) : null}
        {trigger && currentLocation === "/Crypto-Tracker" ? (
          <video autoPlay loop muted className="vid__crypto">
            <source src={Crypt} type="video/mp4" />
          </video>
        ) : null}
        {!isMobile && currentLocation === "/Email" ? (
          <video autoPlay loop muted className="vid__email">
            <source src={email} type="video/mp4" />
          </video>
        ) : null}
        {!isMobile && currentLocation === "/About" ? (
          <video autoPlay loop muted className="vid__about">
            <source src={about} type="video/mp4" />
          </video>
        ) : null}
        {isMobile && currentLocation === "/Image-Maker" ? (
          <img src={clouds} className="clouds" />
        ) : null}
        {!isMobile && currentLocation === "/Image-Maker" ? (
          <img src={cloudsBig} className="clouds__big" />
        ) : null}
        {isMobile && currentLocation === "/About" ? (
          <div className="gradient" />
        ) : null}
        {currentLocation === "/" ? (
          <img src={home_background} className="home__mobile" />
        ) : null}
        {isMobile && currentLocation === "/Netflix" ? (
          <img src={chill} className="chill" />
        ) : null}
        {!isMobile && currentLocation === "/Netflix" ? (
          <img src={chill2} className="chill2" />
        ) : null}
        {isMobile && currentLocation === "/Crypto-Tracker" ? (
          <img src={cryptoMobile} className="crypto__tracker" />
        ) : null}
        {!isMobile && currentLocation === "/Crypto-Tracker" ? (
          <img src={cryptoBig} className="crypto5" />
        ) : null}
      </div>
    </div>
  );
}

export default Overlay;
