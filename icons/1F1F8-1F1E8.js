import React from 'react';

const Flag_Seychelles = ({
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
      fill: "#1e50a0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d22f27",
      d: "M 67.253,29.579 67,17 47.161125,16.945094 6,54 Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f1b31c",
      d: "m47.13 16.98-20.57 3.44e-4 -20.57 37.02z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "m67.2 41.76-0.03981-12.23-61.16 24.46z"
    }), /*#__PURE__*/React.createElement("path", {
      transform: "matrix(1 0 0 1.105 -.001553 -5.79)",
      fill: "#5c9e31",
      d: "m67 55v-11.95l-61 11.04z"
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

export default Flag_Seychelles;