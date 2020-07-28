import React from 'react';

const BallotBoxWithBallot = ({
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
      fill: "#d0cfce",
      stroke: "#d0cfce",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m10.14 63.05v-31.95h51.73v31.95z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      stroke: "#9b9b9a",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "m61.35 37-26.34 26.05h10.23l16.11-26.05"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "22.17",
      y: "36.99",
      width: "27.87",
      height: "3.752",
      fill: "#d0cfce"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "m24.1 31.34 16.17 5.836 9.927-22.72-16.38-6.695z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      stroke: "#9b9b9a",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m45.24 63.05h16.62l-0.5146-26.05z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#9b9b9a",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m21.97 38.89h28.18"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      transform: "translate(-7.271 -7.921) scale(1.202)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.664",
      points: "42.41 32.46 57.51 32.46 57.51 57.37"
    }), /*#__PURE__*/React.createElement("path", {
      transform: "translate(-7.271 -7.921) scale(1.202)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.664",
      d: "m14.48 57.37v-24.91h11.26"
    }), /*#__PURE__*/React.createElement("polyline", {
      transform: "translate(-7.271 -7.921) scale(1.202)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.664",
      points: "37.05 37.24 25.83 32.64 34.14 12.37 48.05 18.07 40.25 37.09"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21.91",
      x2: "50.1",
      y1: "36.92",
      y2: "36.92",
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
    }, /*#__PURE__*/React.createElement("polyline", {
      transform: "translate(-7.271 -7.921) scale(1.202)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.664",
      points: "42.41 32.46 57.51 32.46 57.51 57.37"
    }), /*#__PURE__*/React.createElement("path", {
      transform: "translate(-7.271 -7.921) scale(1.202)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.664",
      d: "m14.48 57.37v-24.91h11.26"
    }), /*#__PURE__*/React.createElement("polyline", {
      transform: "translate(-7.271 -7.921) scale(1.202)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.664",
      points: "37.05 37.24 25.83 32.64 34.14 12.37 48.05 18.07 40.25 37.09"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21.91",
      x2: "50.1",
      y1: "36.92",
      y2: "36.92",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default BallotBoxWithBallot;