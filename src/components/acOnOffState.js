import React from "react";

const AcOnOffState = ({ acOn }) => {
  let classes = "badge rounded-pill systemState bg-";
  let label = "AC ON";
  if (acOn) {
    classes += "primary";
    label = "AC ON";
  } else {
    classes += "info text-dark";
    label = "AC OFF";
  }

  return <span className={classes}>{label}</span>;
};

export default AcOnOffState;
