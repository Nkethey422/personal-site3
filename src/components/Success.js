import React from "react";
import "../App.css";
import "./success.css";
import gsap from "gsap";

function Success({ handleClick }) {
  const click = () => {
    gsap.to([".success"], 1, {
      ease: "power3.out",
      opacity: 0,
    });
    gsap.to([".success__link"], 1, {
      ease: "power3.out",
      opacity: 0,
    });
  };

  return (
    <div className="container__success">
      <h2 className="success">Thank you</h2>
      <a
        className="success__link"
        onClick={() => {
          handleClick();
          click();
        }}
      >
        WORK
      </a>
    </div>
  );
}

export default Success;
