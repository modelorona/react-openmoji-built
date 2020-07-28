import React from 'react';

const Flag_Guam = ({
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
      fill: "#92d3f5",
      stroke: "#d22f27",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M36.0018,46.5A11.7362,11.7362,0,0,0,42,36.0005,11.736,11.736,0,0,0,36,25.5a11.736,11.736,0,0,0-6,10.5005A11.7364,11.7364,0,0,0,35.9982,46.5Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M30.64,40a11.2419,11.2419,0,0,0,5.3581,6.5h.0035A11.2419,11.2419,0,0,0,41.36,40Z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "7",
      y: "19",
      width: "58",
      height: "34",
      fill: "none",
      stroke: "#d22f27",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "28",
      x2: "44",
      y1: "39",
      y2: "39",
      fill: "none",
      stroke: "#1e50a0",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#d22f27",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.0018,46.5A11.7362,11.7362,0,0,0,42,36.0005,11.736,11.736,0,0,0,36,25.5a11.736,11.736,0,0,0-6,10.5005A11.7364,11.7364,0,0,0,35.9982,46.5Z"
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

export default Flag_Guam;