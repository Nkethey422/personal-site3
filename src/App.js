import React, { useState } from "react";
import { Route, useLocation, useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import Overlay from "./assets/Overlay.js";
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Work from "./components/Work.js";
import About from "./components/About.js";
import Netflix from "./components/Netflix.js";
import Crypto from "./components/Crypto.js";
import Github from "./components/Github.js";
import Email from "./components/Email";
import { gsap } from "gsap";
import { useViewport } from "./use-viewport.js";

const routes = [
  { path: "/", name: "Work", Component: Work, id: 4 },
  { path: "/about", name: "About", Component: About, id: 3 },
  { path: "/Netflix", name: "Netflix", Component: Netflix, id: 0 },
  {
    path: "/Crypto-Tracker",
    name: "Crypto-Tracker",
    Component: Crypto,
    id: 1,
  },
  { path: "/Image-Maker", name: "Github", Component: Github, id: 2 },
  { path: "/email", name: "Email", Component: Email, id: 5 },
];

function App() {
  const { isMobile, height, width } = useViewport();
  const location = useLocation();
  const currentLocation = location.pathname;
  const history = useHistory();
  const [home, setHome] = useState(false);
  const [selected, setSelected] = useState(false);
  const [demo, setDemo] = useState(false);
  const [trigger, setTrigger] = useState(false);

  const net = () => {
    setTimeout(() => {
      setTrigger(true);
    }, 2000);
  };

  function handleClick() {
    setTimeout(() => {
      history.push("/");
    }, 750);
  }

  const onEnter = (node) => {
    gsap.from([node.children[0].childNodes], 1.5, {
      opacity: 1,
      scale: 1.5,
      ease: "power3.out",
    });
  };
  const onExit = (node) => {
    gsap.to([node.children[0].childNodes], 1.75, {
      opacity: 0,
      scale: 1,
      ease: "power3.out",
    });
  };

  return (
    <div
      className="App"
      style={
        isMobile
          ? {
              height: `${height}px`,
              width: `${width}px`,
              position: "absolute",
              bottom: "0",
            }
          : null
      }
    >
      <Overlay
        location={location}
        currentLocation={currentLocation}
        demo={demo}
        trigger={trigger}
        isMobile={isMobile}
        height={height}
      />
      <Header
        setDemo={setDemo}
        demo={demo}
        setTrigger={setTrigger}
        setHome={setHome}
      />
      <Navbar
        handleClick={handleClick}
        setHome={setHome}
        setSelected={setSelected}
        setDemo={setDemo}
        setTrigger={setTrigger}
      />
      <div className="content">
        {routes.map(({ path, Component, id }) => (
          <Route key="name" path={path} exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1250}
                classNames="page"
                unmountOnExit={true}
                onEnter={onEnter}
                onExit={onExit}
              >
                <div className="page">
                  <Component
                    home={home}
                    setHome={setHome}
                    currentLocation={currentLocation}
                    setSelected={setSelected}
                    selected={selected}
                    demo={demo}
                    setDemo={setDemo}
                    net={net}
                    handleClick={handleClick}
                    isMobile={isMobile}
                    key={id}
                  />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </div>
  );
}

export default App;
