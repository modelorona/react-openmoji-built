import React from 'react';

const Flag_Switzerland = ({
  size,
  outline
}) => {
  if (!size) size = '1.7em';

  if (!outline) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "17",
      y: "17",
      width: "38",
      height: "38",
      fill: "#d22f27"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#fff",
      stroke: "#fff",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "47 32.462 39.538 32.462 39.538 25 32.462 25 32.462 32.462 25 32.462 25 39.538 32.462 39.538 32.462 47 39.538 47 39.538 39.538 47 39.538 47 32.462"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "17",
      y: "17",
      width: "38",
      height: "38",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "17",
      y: "17",
      width: "38",
      height: "38",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default Flag_Switzerland;