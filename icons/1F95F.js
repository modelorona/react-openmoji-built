import React from 'react';

const Dumpling = ({
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "m57.09 18.09a6.431 6.431 0 0 0-2.467-1.533 4.371 4.371 0 0 0-3.793-0.2243 4.477 4.477 0 0 0-6.104-2.962 4.46 4.46 0 0 0-6.223-0.2 4.445 4.445 0 0 0-6.532 0.5746 4.472 4.472 0 0 0-6.716 2.333 4.434 4.434 0 0 0-5.252 4.424 4.432 4.432 0 0 0 0.0549 0.5449 4.405 4.405 0 0 0-3.979 5.207 4.472 4.472 0 0 0-2.333 6.716 4.445 4.445 0 0 0-0.5746 6.532 4.445 4.445 0 0 0 0.5746 6.532 4.487 4.487 0 0 0 1.955 6.586 6.486 6.486 0 0 0 11.07 4.98l30.32-30.32a6.519 6.519 0 0 0-2e-4 -9.192z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#f1b31c",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "m14.25 33.21 3.393 0.6134"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#f1b31c",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "m20.56 21.28 2.823 2.014"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#f1b31c",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "m32.48 13.98 0.5928 3.396"
    }), /*#__PURE__*/React.createElement("path", {
      transform: "matrix(.6322 .7748 -.7436 .6686 0 0)",
      fill: "none",
      stroke: "#f1b31c",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2.001",
      d: "m50.4 8.855a12.77 14.13 0 0 1-11.4-12.97 12.77 14.13 0 0 1 9.473-14.75",
      "paint-order": "stroke fill markers"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      d: "m42.26 18.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m57.59 18.33a6.431 6.431 0 0 0-2.467-1.533 4.371 4.371 0 0 0-3.793-0.2243 4.477 4.477 0 0 0-6.104-2.962 4.46 4.46 0 0 0-6.223-0.2 4.445 4.445 0 0 0-6.532 0.5746 4.472 4.472 0 0 0-6.716 2.333 4.434 4.434 0 0 0-5.252 4.424 4.432 4.432 0 0 0 0.0549 0.5449 4.405 4.405 0 0 0-3.979 5.207 4.472 4.472 0 0 0-2.333 6.716 4.445 4.445 0 0 0-0.5746 6.532 4.445 4.445 0 0 0 0.5746 6.532 4.487 4.487 0 0 0 1.955 6.586 6.486 6.486 0 0 0 11.07 4.98l30.32-30.32a6.519 6.519 0 0 0-2e-4 -9.192z"
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      d: "m42.26 18.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m57.59 18.33a6.431 6.431 0 0 0-2.467-1.533 4.371 4.371 0 0 0-3.793-0.2243 4.477 4.477 0 0 0-6.104-2.962 4.46 4.46 0 0 0-6.223-0.2 4.445 4.445 0 0 0-6.532 0.5746 4.472 4.472 0 0 0-6.716 2.333 4.434 4.434 0 0 0-5.252 4.424 4.432 4.432 0 0 0 0.0549 0.5449 4.405 4.405 0 0 0-3.979 5.207 4.472 4.472 0 0 0-2.333 6.716 4.445 4.445 0 0 0-0.5746 6.532 4.445 4.445 0 0 0 0.5746 6.532 4.487 4.487 0 0 0 1.955 6.586 6.486 6.486 0 0 0 11.07 4.98l30.32-30.32a6.519 6.519 0 0 0-2e-4 -9.192z"
    })));
  }
};

export default Dumpling;