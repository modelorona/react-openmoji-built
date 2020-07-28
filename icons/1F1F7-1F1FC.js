import React from 'react';

const Flag_Rwanda = ({
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
      fill: "#61b2e4"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "36",
      width: "62",
      height: "9",
      fill: "#fcea2b"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "45",
      width: "62",
      height: "10",
      fill: "#5c9e31"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#fcea2b",
      stroke: "#fcea2b",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "56.296 24.896 58 22.536 56.808 25.192 59.464 24 57.104 25.704 60 26 57.104 26.296 59.464 28 56.808 26.808 58 29.464 56.296 27.104 56 30 55.704 27.104 54 29.464 55.192 26.808 52.536 28 54.896 26.296 52 26 54.896 25.704 52.536 24 55.192 25.192 54 22.536 55.704 24.896 56 22 56.296 24.896"
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

export default Flag_Rwanda;