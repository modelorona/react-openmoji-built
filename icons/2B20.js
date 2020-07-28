import React from 'react';

const WhitePentagon = ({
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      d: "M34.824,10.451 C35.525,9.942 36.475,9.942 37.176,10.451 L62.405,28.781 C63.106,29.291 63.399,30.193 63.132,31.017 L53.495,60.676 C53.227,61.5 52.459,62.058 51.593,62.058 L20.407,62.058 C19.541,62.058 18.773,61.5 18.505,60.676 L8.868,31.017 C8.601,30.193 8.894,29.291 9.595,28.781 L34.824,10.451 z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeWidth: "2",
      d: "M34.824,10.451 C35.525,9.942 36.475,9.942 37.176,10.451 L62.405,28.781 C63.106,29.291 63.399,30.193 63.132,31.017 L53.495,60.676 C53.227,61.5 52.459,62.058 51.593,62.058 L20.407,62.058 C19.541,62.058 18.773,61.5 18.505,60.676 L8.868,31.017 C8.601,30.193 8.894,29.291 9.595,28.781 L34.824,10.451 z"
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeWidth: "2",
      d: "M34.824,10.451 C35.525,9.942 36.475,9.942 37.176,10.451 L62.405,28.781 C63.106,29.291 63.399,30.193 63.132,31.017 L53.495,60.676 C53.227,61.5 52.459,62.058 51.593,62.058 L20.407,62.058 C19.541,62.058 18.773,61.5 18.505,60.676 L8.868,31.017 C8.601,30.193 8.894,29.291 9.595,28.781 L34.824,10.451 z"
    })));
  }
};

export default WhitePentagon;