import React from 'react';

const Flag_DominicanRepublic = ({
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
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "36",
      width: "31",
      height: "19",
      fill: "#d22f27"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "36",
      y: "17",
      width: "31",
      height: "19",
      fill: "#d22f27"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "33",
      width: "62",
      height: "6",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "33",
      y: "17",
      width: "6",
      height: "38",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "3",
      fill: "#5c9e31"
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

export default Flag_DominicanRepublic;