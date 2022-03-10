import React from "react";

import AngleButton from "./angleButton";
import SwapAcSrcButton from "./swapAcSrcButton";

const SwsPad = ({
  centralBtnOnClick,
  leftBtnOnClick,
  upBtnOnClick,
  rightBtnOnClick,
  downBtnOnClick,
  customizedBtnOnclick,
  swapHuIcmBtnOnClick,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <AngleButton direction="up" onclick={upBtnOnClick} />
        <div className="col"></div>
      </div>
      <div className="row">
        <AngleButton direction="left" onclick={leftBtnOnClick} />
        <div className="col btn btn-dark" onClick={centralBtnOnClick}>
          <span className="fa fa-square" aria-hidden="true"></span>
        </div>
        <AngleButton direction="right" onclick={rightBtnOnClick} />
      </div>
      <div className="row">
        <div className="col"></div>
        <AngleButton direction="down" onclick={downBtnOnClick} />
        <div className="col"></div>
      </div>
      <div className="row">
        <SwapAcSrcButton onClick={customizedBtnOnclick} />
        <div className="col btn btn-warning" onClick={swapHuIcmBtnOnClick}>
          <span className="fa fa-exchange" aria-hidden="true"></span>
        </div>
        <div className="col btn btn-primary">
          <span className="fa fa-weixin" aria-hidden="true"></span>
        </div>
      </div>
    </div>
  );
};

export default SwsPad;
