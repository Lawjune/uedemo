import React from "react";

const MuteState = ({ muted }) => {
  let classes = "badge rounded-pill systemState bg-";
  let label = "muted";

  if (!muted) {
    classes += "success";
    label = "unmuted";
  } else {
    classes += "warning text-dark";
    label = "muted";
  }
  return <span className={classes}>{label}</span>;
};

export default MuteState;
