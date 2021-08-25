import React, { useState, useEffect, useRef } from "react";
import useForm from "./useForm.js";
import "../App.css";
import "./Email.css";
import { gsap } from "gsap";
import Success from "./Success.js";
import Form from "./Form.js";

const Email = ({ location, handleClick, isMobile, currentLocation }) => {
  let title = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    gsap.from([".active__title"], 1.75, {
      delay: 1.25,
      ease: "power3.out",
      opacity: 0,
      y: 64,
    });
    gsap.from([".component__title"], 1.75, {
      delay: 1.25,
      ease: "power3.out",
      opacity: 0,
      y: 64,
    });
    gsap.from([".wrap__input"], 2.5, {
      delay: 1.75,
      ease: "power3.out",
      opacity: 0,
      x: -64,
      stagger: 0.5,
    });
    gsap.from([".form__message"], 3.25, {
      ease: "power3.out",
      delay: 3,
      y: 45,
      opacity: 0,
    });
    gsap.from([".send"], 4, {
      ease: "power3.out",
      delay: 3.5,
      opacity: 0,
    });
  }, []);

  if (location != "/email") {
    gsap.to([".active__title"], 1, {
      ease: "power3.out",
      opacity: 0,
    });
    gsap.to([".wrap__input"], 1, {
      opacity: 0,
      ease: "power3.out",
    });
    gsap.to([".form__message"], 1, {
      ease: "power3.out",
      opacity: 0,
    });
    gsap.to([".send"], 1, {
      ease: "power3.out",
      opacity: 0,
    });
    gsap.to([".errors"], 1, {
      ease: "power3.out",
      opacity: 0,
    });
  }

  if (submitted & (location !== "/Email")) {
    gsap.to([".success", ".success__link"], 1, {
      ease: "power3.out",
      opacity: 0,
    });
  }

  return (
    <>
      <>
        {isMobile ? (
          <div className="component__title">
            <h2 className="active__title" ref={(el) => (title = el)}>
              <span>Email</span>
            </h2>
          </div>
        ) : (
          <h2 className="active__title" ref={(el) => (title = el)}>
            <span>Email</span>
          </h2>
        )}
      </>
      <div className="container__form">
        <div className="container__wrap">
          <div className="wrap__form">
            {!submitted && (
              <Form
                setSubmitted={setSubmitted}
                currentLocation={currentLocation}
              />
            )}
            {submitted && (
              <Success setSubmitted={setSubmitted} handleClick={handleClick} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
