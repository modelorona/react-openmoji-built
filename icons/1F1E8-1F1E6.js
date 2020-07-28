import React from 'react';

const Flag_Canada = ({
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
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "17",
      width: "17",
      height: "38",
      fill: "#d22f27"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "50",
      y: "17",
      width: "17",
      height: "38",
      fill: "#d22f27"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36",
      x2: "36",
      y1: "46",
      y2: "41",
      fill: "#d22f27",
      stroke: "#d22f27",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#d22f27",
      stroke: "#d22f27",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "36 41 42.8 41 42 39 46 35 46 32 43 32 39 36 39 29 36 26"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#d22f27",
      stroke: "#d22f27",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "36 41 29.2 41 30 39 26 35 26 32 29 32 33 36 33 29 36 26"
    })), /*#__PURE__*/React.createElement("g", {
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

export default Flag_Canada;