import React from 'react';

const SpeechBalloon = ({
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
      fill: "#fff",
      d: "m17.09 50.75c-3.184-4.073-5.088-9.191-5.088-14.75 0-13.23 10.77-24 24-24s24 10.77 24 24-10.77 24-24 24c-1.955 0-3.855-0.2406-5.676-0.6839-5.919-1.481-10.33-4.341-13.24-8.567z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "23.48",
      cy: "54.97",
      r: "5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "-15.8",
      cy: "62.94",
      r: "2.5",
      transform: "scale(-1,1)",
      fill: "#fff"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m31.54 58.56c1.442 0.2858 2.93 0.4391 4.455 0.4391 12.68 0 23-10.32 23-23s-10.32-23-23-23-23 10.32-23 23c0 4.913 1.552 9.467 4.187 13.21"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "26.79",
      cy: "36",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "45.21",
      cy: "36",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "-4.026",
      cy: "64.73",
      r: "2.5",
      transform: "matrix(-.9831 .1829 .1829 .9831 0 0)",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "-13.58",
      cy: "57.88",
      r: "4.981",
      transform: "matrix(-.9831 .1829 .1829 .9831 0 0)",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m31.54 58.56c1.442 0.2858 2.93 0.4391 4.455 0.4391 12.68 0 23-10.32 23-23s-10.32-23-23-23-23 10.32-23 23c0 4.913 1.552 9.467 4.187 13.21"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "26.79",
      cy: "36",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "45.21",
      cy: "36",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "-4.026",
      cy: "64.73",
      r: "2.5",
      transform: "matrix(-.9831 .1829 .1829 .9831 0 0)",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "-13.58",
      cy: "57.88",
      r: "4.981",
      transform: "matrix(-.9831 .1829 .1829 .9831 0 0)",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default SpeechBalloon;