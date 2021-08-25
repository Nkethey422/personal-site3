import React from "react";
import ClearIcon from "@material-ui/icons/Clear";

function Header({ setDemo, demo, setTrigger, setHome }) {
  return (
    <div className="header">
      <div className="header__title">
        <h1>N.Kethey</h1>
      </div>
      {demo ? (
        <div className="x">
          <ClearIcon
            style={{ color: "lightblue" }}
            className="x__button"
            onClick={() => {
              setDemo(false);
              setHome(false);
              setTrigger(false);
            }}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Header;
