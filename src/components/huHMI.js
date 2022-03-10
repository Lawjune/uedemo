import React from "react";
import SetAcSrcButton from "./setAcSrcButton";
import MuteState from "./muteState";
import AcOnOffState from "./acOnOffState";

const HeadUnitHMI = ({ message, acSrcSettingOnChange, muted, acOn }) => {
  return (
    <div className="container">
      <div className="row">
        <span className="border border-success border-4">
          <SetAcSrcButton onChange={acSrcSettingOnChange} />
          <span className="ms-4" />
          <MuteState muted={muted} />
          <span className="ms-4" />
          <AcOnOffState acOn={acOn} />
        </span>
      </div>
      <div className="row rounded-3 p-4 bg-success bg-gradient text-white position-relative">
        {message}
      </div>
    </div>
  );
};

export default HeadUnitHMI;
