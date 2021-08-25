import React, { useRef, useEffect, useState } from "react";
import "../App.css";
import "./Github.css";
import gsap from "gsap";
import ImageMaker from "../assets/github/ImageMaker";
import GitHubIcon from "@material-ui/icons/GitHub";

function Github({ currentLocation, isMobile, home }) {
  let btns = useRef(null);
  let over = useRef(null);
  const [image, setImage] = useState(false);
  const [flattened, setFlattened] = useState([]);
  const [color, setColor] = useState("#ffffff");
  const handler = () => {
    const pattern = makePattern();
    const newColor = squareColor();
    setFlattened(pattern);
    setColor(newColor);
  };

  const handleImage = () => {
    setImage(true);
  };

  console.log(image);

  function squareColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  function makePattern() {
    let flattened = [];
    let blnk = [];
    for (var i = 0; i < 5; i++) {
      const appnd = [];
      for (var j = 0; j < 3; j++) {
        if (Math.random() < 0.5) {
          appnd.push(1);
        } else {
          appnd.push(0);
        }
      }
      appnd.push(appnd[1], appnd[0]);
      blnk.push(appnd);
      flattened = blnk.flat();
    }
    return flattened;
  }

  useEffect(() => {
    gsap.from([".component__title"], 1.75, {
      delay: 1.5,
      opacity: 0,
      x: -5,
    });
    gsap.from([".active__title"], 1.75, {
      delay: 1.5,
      opacity: 0,
      x: -5,
    });

    gsap.from([btns], 1.85, {
      delay: 1.5,
      ease: "power3.out",
      opacity: 0,
      y: -64,
    });
    gsap.from([over], 1.95, {
      delay: 1.65,
      ease: "power3.out",
      opacity: 0,
      y: 20,
    });
    gsap.from([".github2"], 2, {
      ease: "power3.in",
      delay: 1.75,
      opacity: 0,
    });
  }, []);

  if (home) {
    gsap.to(
      [
        ".githubimage__container",
        ".component__title",
        ".active__title",
        ".container__buttons2",
        ".image__maker",
        ".image__maker_overview",
        ".github2",
      ],
      0.25,
      {
        opacity: 0,
      }
    );
  }
  return (
    <>
      <>
        {isMobile ? (
          <div className="component__title">
            <h2 className="active__title">IMAGE MAKER</h2>
          </div>
        ) : null}
        {!isMobile ? (
          <h2 className="active__title">
            <span>IMAGE MAKER</span>
          </h2>
        ) : null}
      </>
      <div className="content2">
        <div className="container__overview2">
          <div className="githubimage__container">
            {image ? (
              <ImageMaker
                className="image__maker"
                flattened={flattened}
                color={color}
                handler={handler}
              />
            ) : (
              <GitHubIcon className="github2"></GitHubIcon>
            )}
          </div>
          <div className="image__maker_overview" ref={(el) => (over = el)}>
            <p1>Click New Image to randomly generate a GitHub Avatar!</p1>
          </div>
          <div className="container__buttons2" ref={(el) => (btns = el)}>
            <button
              className="btn"
              onClick={() =>
                window.open("https://github.com/Nkethey422/github-image-maker")
              }
            >
              VIEW CODE
            </button>
            <button
              className="btn"
              onClick={() => {
                handler();
                handleImage();
              }}
            >
              NEW IMAGE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Github;
