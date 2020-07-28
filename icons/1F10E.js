import React from 'react';

const CircledAnticlockwiseArrow = ({
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "26.68",
      fill: "#fff",
      "fill-rule": "evenodd",
      "paint-order": "normal"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "26.68",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "4.74",
      "paint-order": "normal"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "7",
      strokeWidth: "7",
      d: "m20.66 30.58 5.421 5.421 5.424-5.424"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "7",
      strokeWidth: "7",
      d: "m25.13 31.65c0-6.003 4.869-10.87 10.87-10.87 5.999 0 10.87 4.865 10.87 10.87v8.693-8.693 8.693c0 6.003-4.869 10.87-10.87 10.87-4.264 0-7.957-2.457-9.739-6.034",
      "clip-rule": "evenodd"
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "26.68",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "4.74",
      "paint-order": "normal"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "7",
      strokeWidth: "7",
      d: "m20.66 30.58 5.421 5.421 5.424-5.424"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "7",
      strokeWidth: "7",
      d: "m25.13 31.65c0-6.003 4.869-10.87 10.87-10.87 5.999 0 10.87 4.865 10.87 10.87v8.693-8.693 8.693c0 6.003-4.869 10.87-10.87 10.87-4.264 0-7.957-2.457-9.739-6.034",
      "clip-rule": "evenodd"
    })));
  }
};

export default CircledAnticlockwiseArrow;