import React from 'react';

const RainbowFlag = ({
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
      y: "48",
      width: "62",
      height: "6.2",
      fill: "#b399c8",
      strokeWidth: "0"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "42",
      width: "62",
      height: "6",
      fill: "#92d3f5",
      strokeWidth: "0"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "36",
      width: "62",
      height: "6",
      fill: "#b1cc33",
      strokeWidth: "0"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "30",
      width: "62",
      height: "6",
      fill: "#fcea2b",
      strokeWidth: "0"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "24",
      width: "62",
      height: "6",
      fill: "#f4aa41",
      strokeWidth: "0"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "17.8",
      width: "62",
      height: "6.2",
      fill: "#ea5a47",
      strokeWidth: "0"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
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

export default RainbowFlag;