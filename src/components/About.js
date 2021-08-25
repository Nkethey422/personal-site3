import React, { useEffect } from "react";
import "./About.css";
import { gsap } from "gsap";

function About({ demo, currentLocation, home, isMobile }) {
  useEffect(() => {
    gsap.from([".active__title"], 1.75, {
      ease: "power3.out",
      y: 64,
      opacity: 0,
    });
    gsap.from(
      [".overview__title1", ".overview__title2", ".overview__title3"],
      1.5,
      {
        delay: 0.5,
        y: 64,
        opacity: 0,
        stagger: 0.5,
      }
    );
    gsap.from([".about1", ".about2", ".about3"], 2, {
      ease: "power3.in",
      delay: 2.6,
      opacity: 0,
      stagger: 0.5,
    });
  }, []);

  if (currentLocation !== "/About") {
    gsap.to(
      [
        ".overview__title1",
        ".overview__title2",
        ".overview__title3",
        ".about1",
        ".about2",
        ".about3",
      ],
      1,
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
            <h2 className="active__title">
              <span>ABOUT</span>
            </h2>
          </div>
        ) : (
          <h2 className="active__title">
            <span>ABOUT</span>
          </h2>
        )}
      </>
      <div className="wrap__content">
        <div className="container__overview1">
          <div className="overview1">
            <div className="title1">
              <h3 className="overview__title1">
                The <span className="journey">journey</span>.
              </h3>
            </div>
            <div className="about1">
              <p className="overview__about1">
                Mechanical Engineering Technician
              </p>
              <p className="overview__about1">Mechanical Engineer</p>
              <p className="overview__about1">Technical Project Manager</p>
            </div>
          </div>
          <div className="overview2">
            <div className="title2">
              <h3 className="overview__title2">
                The <span className="present">present</span>.
              </h3>
            </div>
            <div className="about2">
              <p className="overview__about2">
                Self-taught Web Developer with a focus on React Applications.
              </p>
              <h3 className="overview__title5">Well versed with:</h3>
              <ul>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>REACT</li>
                <li>Axios</li>
                <li>Github</li>
                <li>GSAP</li>
              </ul>
            </div>
          </div>
          <div className="overview3">
            <div className="title3">
              <h3 className="overview__title3">
                The <span className="future">future</span>.
              </h3>
            </div>
            <div className="about3">
              <p className="overview__about3">
                Seeking an opportunity to join a team of like-minded individuals
                and grow my skills as a Web Developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
