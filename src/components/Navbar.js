import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import { NavLink } from "react-router-dom";

function Navbar({ handleClick, setHome, setSelected, setDemo, setTrigger }) {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <div className="nav__link">
          <button
            className="nav__link"
            onClick={() => {
              setHome(true);
              handleClick();
              setSelected(false);
              setDemo(false);
              setTrigger(false);
            }}
          >
            <a className="link">WORK</a>
          </button>
        </div>
        <NavLink
          className="nav__link"
          to="/About"
          onClick={() => {
            setDemo(false);
            setSelected(false);
          }}
        >
          <a className="link"> ABOUT</a>
        </NavLink>
        <LinkedInIcon
          className="icon"
          onClick={() =>
            window.open("https://www.linkedin.com/in/Neeraj-Kethey")
          }
        ></LinkedInIcon>
        <GitHubIcon
          className="icon"
          onClick={() => window.open("https://www.github.com/Nkethey422")}
        ></GitHubIcon>
        <NavLink
          classname="nav__link"
          to="/Email"
          exact
          onClick={() => {
            setDemo(false);
            setHome(false);
          }}
        >
          <EmailIcon className="icon"></EmailIcon>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
