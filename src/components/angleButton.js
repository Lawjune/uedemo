import React from "react";

const AngleButton = ({ direction, onclick: onClick, color = "secondary" }) => {
  let buttonClass = "col btn btn-" + color;
  let angleClass = "fa fa-angle-" + direction;
  return (
    <div className={buttonClass} onClick={onClick}>
      <span className={angleClass} aria-hidden="true"></span>
    </div>
  );
};

export default AngleButton;
