import React from 'react';

const OverlappingWhiteSquares = ({
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
      x: "12",
      y: "28",
      width: "32",
      height: "32",
      fill: "#ffffff"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "28",
      y: "12",
      width: "32",
      height: "32",
      fill: "#ffffff"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "12",
      y: "28",
      width: "32",
      height: "32",
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "28",
      y: "12",
      width: "32",
      height: "32",
      fill: "none",
      stroke: "#000000",
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
      x: "12",
      y: "28",
      width: "32",
      height: "32",
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "28",
      y: "12",
      width: "32",
      height: "32",
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default OverlappingWhiteSquares;