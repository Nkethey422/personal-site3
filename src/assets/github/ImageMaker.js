import React from "react";
import "./ImageMaker.css";
import CreateGrid from "./createGrid";

function ImageMaker({ flattened, color, handler }) {
  return (
    <div className="container">
      <div className="grid">
        <div className="gridspace">
          <CreateGrid flattened={flattened} color={color} />
        </div>
      </div>
      <div className="button"></div>
    </div>
  );
}

export default ImageMaker;
