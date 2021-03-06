import React from 'react';

const Banana = ({
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
      stroke: "#fcea2b",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "0.75",
      d: "m50.46 50.44c-11.2 13.24-28.24 12.54-35.31 6.547l-0.4132-1.901c12.72-3.783 15.02-2.284 25.01-11.49 5.776-6.855 10.6-16.93 10.32-24.26 6.04-0.1879 0 0 4.682-0.1879 3.885 9.759 2.355 22.91-4.282 31.29z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f1b31c",
      stroke: "#f1b31c",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "0.75",
      d: "m53.21 19.66c4.526-0.4236 5.228 22.66-1.408 31.04-11.8 11.01-24.25 12.1-36.84 5.362 25.96 5.489 39.47-15.38 38.25-36.4z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "52.09",
      x2: "51.52",
      y1: "15.49",
      y2: "11.2",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m25.79 56.55c16.7-2.905 24.45-11.14 26.67-27.09"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m47.54 54.03c-8.106 7.212-23.05 9.45-32.43 2.757l-0.4132-1.901c18.42-2.206 32.78-13.96 35.36-35.55 1.105-0.0041 4.645-0.3957 4.645-0.3957 5.599 15.1 1.754 27.15-7.164 35.08z"
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
    }, /*#__PURE__*/React.createElement("line", {
      x1: "52.09",
      x2: "51.52",
      y1: "15.49",
      y2: "11.2",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m25.79 56.55c16.7-2.905 24.45-11.14 26.67-27.09"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m47.54 54.03c-8.106 7.212-23.05 9.45-32.43 2.757l-0.4132-1.901c18.42-2.206 32.78-13.96 35.36-35.55 1.105-0.0041 4.645-0.3957 4.645-0.3957 5.599 15.1 1.754 27.15-7.164 35.08z"
    })));
  }
};

export default Banana;