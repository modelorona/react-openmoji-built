import React from 'react';

const Cancer = ({
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
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "12",
      y: "12",
      width: "48",
      height: "47.83",
      fill: "#b399c8"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "3",
      d: "m33.61 30.26a5.559 5.559 0 1 1-5.559-5.558 5.56 5.56 0 0 1 5.559 5.558z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "3",
      d: "m25.7 25.26s10.84-4.787 23.81 3.012"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "3",
      d: "m38.39 41a5.559 5.559 0 1 1 5.56 5.56 5.561 5.561 0 0 1-5.56-5.56z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "3",
      d: "m46.3 46s-10.84 4.787-23.81-3.012"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "12",
      y: "12",
      width: "48",
      height: "48",
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
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "3",
      d: "m33.61 30.26a5.559 5.559 0 1 1-5.559-5.558 5.56 5.56 0 0 1 5.559 5.558z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "3",
      d: "m25.7 25.26s10.84-4.787 23.81 3.012"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "3",
      d: "m38.39 41a5.559 5.559 0 1 1 5.56 5.56 5.561 5.561 0 0 1-5.56-5.56z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "3",
      d: "m46.3 46s-10.84 4.787-23.81-3.012"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "12",
      y: "12",
      width: "48",
      height: "48",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default Cancer;