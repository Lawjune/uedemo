import React from "react";

const SwapAcSrcButton = ({ onClick }) => {
  return (
    <div className="col btn btn-danger" onClick={onClick}>
      <span className="fa fa-star-o" aria-hidden="true"></span>
    </div>
  );
};

export default SwapAcSrcButton;
