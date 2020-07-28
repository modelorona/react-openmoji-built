import React from 'react';

const JapaneseAcceptableButton = ({
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36.5",
      cy: "36.5",
      r: "27.5",
      fill: "#d0cfce"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M36.5,11A25.5,25.5,0,1,1,11,36.5,25.5288,25.5288,0,0,1,36.5,11m0-2A27.5,27.5,0,1,0,64,36.5,27.5,27.5,0,0,0,36.5,9Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      x2: "52",
      y1: "25",
      y2: "25",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "37.5 52.5 45.5 52.5 45.5 26.5"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "25.5 47.5 25.5 33.5 37.5 33.5 37.5 43.5 26.5 43.5"
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
      d: "M36.5,11A25.5,25.5,0,1,1,11,36.5,25.5288,25.5288,0,0,1,36.5,11m0-2A27.5,27.5,0,1,0,64,36.5,27.5,27.5,0,0,0,36.5,9Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      x2: "52",
      y1: "25",
      y2: "25",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "37.5 52.5 45.5 52.5 45.5 26.5"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "25.5 47.5 25.5 33.5 37.5 33.5 37.5 43.5 26.5 43.5"
    })));
  }
};

export default JapaneseAcceptableButton;