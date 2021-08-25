import React, { useEffect, useRef } from "react";
import "../App.css";
import { gsap } from "gsap";

function Crypto({
  home,
  setHome,
  selected,
  demo,
  setDemo,
  net,
  isMobile,
  currentLocation,
}) {
  let btns = useRef(null);
  let over = useRef(null);
  console.log(home);

  useEffect(() => {
    gsap.from([".active__title"], 1.75, {
      delay: 1.25,
      ease: "power3.out",
      opacity: 0,
      x: 20,
    });
    gsap.from([".component__title"], 1.75, {
      delay: 1.25,
      ease: "power3.out",
      opacity: 0,
      x: 20,
    });
    gsap.from([btns], 1.85, {
      delay: 1.55,
      ease: "power3.out",
      opacity: 0,
      y: -64,
    });
    gsap.from([over], 1.95, {
      delay: 1.65,
      ease: "power3.out",
      opacity: 0,
      y: -64,
    });
  }, []);

  if (!home) {
    gsap.to([".container__buttons"], 1.85, {
      ease: "power3.out",
      opacity: 0,
    });
    gsap.to([".overview"], 1.95, {
      ease: "power3.out",
      opacity: 0,
    });
  }

  if (home) {
    gsap.to([".crypt", ".btn", ".component__title"], 1, {
      opacity: 0,
    });
  }
  if (!home) {
    gsap.to([".crypt", ".btn", ".component__title"], 1, {
      opacity: 1,
    });
  }

  if (!demo) {
    gsap.to([".overlay"], 1, {
      ease: "power3.out",
      scale: 1,
    });
    gsap.to([".container__buttons"], 1.85, {
      ease: "power3.out",
      x: 0,
      opacity: 1,
    });
    gsap.to([".overview"], 1.95, {
      ease: "power3.out",
      y: 0,
      opacity: 1,
    });
  }
  if (demo) {
    gsap.to([".overlay"], 1, {
      delay: 1.2,
      ease: "power3.out",
      transformOrigin: "center",
      zIndex: 1,
      border: "0.3em solid rgba(75, 222, 241)",
      scale: 0.8,
    });
    gsap.to([".container__buttons"], 1, {
      ease: "power3.out",
      opacity: 0,
    });
    gsap.to([".overview"], 1, {
      ease: "power3.out",
      opacity: 0,
    });
  }

  return (
    <>
      <>
        {!demo ? (
          <div className="component__title">
            <h2 className="active__title" id="crypto">
              CRYPTO TRACKER
            </h2>
          </div>
        ) : null}
      </>
      <div className="container__overview" id="crypto__overview">
        <div className="overview" ref={(el) => (over = el)}>
          <p className="crypt">
            Use this React Application to track all your favorite Crypto
            Currencies!
          </p>
        </div>
        <div className="container__buttons" ref={(el) => (btns = el)}>
          {!isMobile ? (
            <button
              className="btn"
              onClick={() => {
                setDemo(true);
                setHome(true);
                net();
              }}
            >
              DEMO
            </button>
          ) : null}
          <button className="btn">VIEW CODE</button>
        </div>
      </div>
    </>
  );
}

export default Crypto;
