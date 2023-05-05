import React from "react";
import './index.css';

const Middle2 = ({ bgcolor, text }) => {
  return (
    <React.Fragment>
      <div className="card">
        <div
          className="iconl"
          id="iconl1"
          style={{ backgroundColor: bgcolor }}
        ></div>
        <a href="#">{text}</a>
      </div>
    </React.Fragment>
  );
};

export default Middle2;