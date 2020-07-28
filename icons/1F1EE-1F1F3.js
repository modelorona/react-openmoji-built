import React from 'react';

const Flag_India = ({
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
      fill: "#5c9e31"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "17",
      width: "62",
      height: "13",
      fill: "#e27022"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "30",
      width: "62",
      height: "12",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#1e50a0",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "36.296 34.896 38 32.536 36.808 35.192 39.464 34 37.104 35.704 40 36 37.104 36.296 39.464 38 36.808 36.808 38 39.464 36.296 37.104 36 40 35.704 37.104 34 39.464 35.192 36.808 32.536 38 34.896 36.296 32 36 34.896 35.704 32.536 34 35.192 35.192 34 32.536 35.704 34.896 36 32 36.296 34.896"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "5",
      fill: "none",
      stroke: "#1e50a0",
      strokeLinecap: "round",
      strokeLinejoin: "round"
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

export default Flag_India;