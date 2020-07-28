import React from 'react';

const CircledZeroWithSlash = ({
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
      strokeLinejoin: "round",
      strokeWidth: "4.74",
      d: "m43.24 22.41-15.01 26-0.3267-0.1886"
    }), /*#__PURE__*/React.createElement("g", {
      transform: "matrix(4.347 0 0 4.347 36 20.78)",
      "fill-rule": "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      "clip-rule": "evenodd"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "1.84",
      d: "m0 7c-1.058 0-1.916-0.857-1.916-1.916v-3.168c0-1.058 0.858-1.916 1.916-1.916s1.916 0.858 1.916 1.916v3.168c0 1.059-0.858 1.916-1.916 1.916z"
    }))));
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
      strokeLinejoin: "round",
      strokeWidth: "4.74",
      d: "m43.24 22.41-15.01 26-0.3267-0.1886"
    }), /*#__PURE__*/React.createElement("g", {
      transform: "matrix(4.347 0 0 4.347 36 20.78)",
      "fill-rule": "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      "clip-rule": "evenodd"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "1.84",
      d: "m0 7c-1.058 0-1.916-0.857-1.916-1.916v-3.168c0-1.058 0.858-1.916 1.916-1.916s1.916 0.858 1.916 1.916v3.168c0 1.059-0.858 1.916-1.916 1.916z"
    }))));
  }
};

export default CircledZeroWithSlash;