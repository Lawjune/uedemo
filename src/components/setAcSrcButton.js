import React from "react";
export const AC_SET_ID = "acSet";
export const SRC_SET_ID = "srcSet";
const SetAcSrcButton = ({ onChange }) => {
  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
      onChange={onChange}
    >
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id={AC_SET_ID}
        autoComplete="off"
        defaultChecked
      ></input>
      <label className="btn btn-outline-primary settingButton" htmlFor="acSet">
        AC
      </label>

      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id={SRC_SET_ID}
        autoComplete="off"
      ></input>
      <label className="btn btn-outline-warning settingButton" htmlFor="srcSet">
        SRC
      </label>
    </div>
  );
};

export default SetAcSrcButton;
