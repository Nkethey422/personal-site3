import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

function Work({ setSelected, home, setHome }) {
  let title1 = useRef(null);
  let title2 = useRef(null);
  let title3 = useRef(null);

  useEffect(() => {
    gsap.from([title1, title2, title3], 3, {
      delay: 1,
      ease: "power3.out",
      opacity: 0,
      y: 1000,
      stagger: {
        amount: 0.3,
      },
    });
  }, [title1, title2, title3]);
  console.log(home);
  return (
    <div className="content">
      <h2 ref={(el) => (title1 = el)}>
        <NavLink
          to="/Netflix"
          exact
          className="nav__link"
          onClick={() => {
            setSelected(true);
          }}
        >
          <span
            className="work__title"
            onClick={() => {
              setHome(false);
            }}
          >
            NETFLIX CLONE
          </span>
        </NavLink>
      </h2>
      <h2 ref={(el) => (title2 = el)}>
        <NavLink to="/Image-Maker" exact className="nav__link">
          <span
            className="work__title"
            onClick={() => {
              setHome(false);
            }}
          >
            IMAGE MAKER
          </span>
        </NavLink>
      </h2>
      <h2 ref={(el) => (title3 = el)}>
        <NavLink to="/Crypto-Tracker" exact className="nav__link">
          <span
            className="work__title"
            onClick={() => {
              setHome(false);
            }}
          >
            CRYPTO TRACKER
          </span>
        </NavLink>
      </h2>
    </div>
  );
}

export default Work;
