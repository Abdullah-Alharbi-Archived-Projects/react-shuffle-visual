import React from "react";

const Number = ({ number, index }) => {
  return (
    <div className="number-box" id={index}>
      {number}
    </div>
  );
};

export default Number;
