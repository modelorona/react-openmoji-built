import React from 'react';

const CircledCWithOverlaidBackslash = ({
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "8.693",
      d: "m43.02 48.48c-1.917 1.7-4.442 2.734-7.212 2.734-5.999 0-10.87-4.865-10.87-10.87v-8.693 8.693-8.693c0-6.003 4.869-10.87 10.87-10.87 2.769 0 5.295 1.035 7.212 2.734",
      "clip-rule": "evenodd"
    }), /*#__PURE__*/React.createElement("circle", {
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
      d: "m54.49 54.46-36.46-36.46 0.4581-0.4581"
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
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "8.693",
      d: "m43.02 48.48c-1.917 1.7-4.442 2.734-7.212 2.734-5.999 0-10.87-4.865-10.87-10.87v-8.693 8.693-8.693c0-6.003 4.869-10.87 10.87-10.87 2.769 0 5.295 1.035 7.212 2.734",
      "clip-rule": "evenodd"
    }), /*#__PURE__*/React.createElement("circle", {
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
      d: "m54.49 54.46-36.46-36.46 0.4581-0.4581"
    })));
  }
};

export default CircledCWithOverlaidBackslash;