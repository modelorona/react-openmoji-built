import React from 'react';

const Flag_StVincentGrenadines = ({
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
      x: "5",
      y: "17",
      width: "62",
      height: "38",
      fill: "#fcea2b"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "17",
      width: "21",
      height: "38",
      fill: "#1e50a0"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "46",
      y: "17",
      width: "21",
      height: "38",
      fill: "#5c9e31"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
      fill: "#5c9e31",
      points: "39.182 41 36 46 32.818 41 36 36 39.182 41"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#5c9e31",
      points: "43 35 39.818 40 36.636 35 39.818 30 43 35"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#5c9e31",
      points: "35.364 35 32.182 40 29 35 32.182 30 35.364 35"
    }))), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "17",
      width: "62",
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
      x: "5",
      y: "17",
      width: "62",
      height: "38",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default Flag_StVincentGrenadines;