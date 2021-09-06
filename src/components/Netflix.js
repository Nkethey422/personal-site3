import React, { useEffect } from "react";
import "../App.css";
import { gsap } from "gsap";

function Netflix({ home, setHome, selected, demo, setDemo, net, isMobile }) {
  useEffect(() => {
    gsap.from([".active__title"], 1.75, {
      delay: 1.25,
      opacity: 0,
      x: -20,
    });
    gsap.from([".component__title"], 1.75, {
      delay: 1.25,
      opacity: 0,
      x: -20,
    });
    gsap.from([".btn"], 1.85, {
      delay: 1.75,
      ease: "power3.in",
      opacity: 0,
    });
    gsap.from([".description"], 1.95, {
      delay: 1.55,
      ease: "power3.in",
      opacity: 0,
    });
    gsap.from([".chill"], 2.5, {
      delay: 4,
      opacity: 0,
    });
  }, []);

  if (home) {
    gsap.to([".btn", ".description", ".chill", ".component__title"], 0.25, {
      opacity: 0,
    });
  }
  if (!home) {
    gsap.to([".btn", ".description", ".chill", ".component__title"], 0.25, {
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
    gsap.to([".container__buttons"], 0.25, {
      opacity: 0,
    });
    gsap.to([".overview"], 0.25, {
      opacity: 0,
    });
  }

  return (
    <>
      <>
        {selected & !demo & !isMobile ? (
          <h2 className="active__title" id="netflix">
            NETFLIX CLONE
          </h2>
        ) : null}
        {isMobile ? (
          <div className="component__title">
            <h2 className="active__title">NETFLIX CLONE</h2>
          </div>
        ) : null}
      </>
      <div className="container__overview" id="overview__netflix">
        <div className="overview" id="description__netflix">
          <div className="description">
            <p>
              Built in React using Axios, and TMDB's API, this Netflix Clone is
              able to call for today's titles in: Trending, Netflix Originals,
              Top Rated, Action, Comedy, Horror, Romance, and Documentary
              genres.
            </p>
          </div>
        </div>
        <div className="container__buttons">
          <button
            className="btn"
            id="demo"
            onClick={() => {
              setDemo(true);
              setHome(true);
              net();
            }}
          >
            DEMO
          </button>
          <button
            className="btn"
            onClick={() =>
              window.open("https://github.com/Nkethey422/netflix-clone")
            }
          >
            VIEW CODE
          </button>
        </div>
      </div>
    </>
  );
}

export default Netflix;
