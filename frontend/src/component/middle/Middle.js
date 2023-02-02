import React from "react";
import "./style.css";

export default function Middle() {
  return (
    <div className="middle">
      <div className="middleContainer">
        <div className="date">
          5 <span>mon</span>
        </div>
        <div className="todo">todo</div>
        <div></div>
        <div className="deadline">
          10hrs <span>20mins</span>
        </div>
      </div>
    </div>
  );
}
