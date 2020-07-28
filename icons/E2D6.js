import React from 'react';

const GeigerCounter = ({
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
      x: "16",
      y: "12",
      rx: "6",
      width: "36",
      height: "49",
      fill: "#f4aa41"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "34",
      cy: "26",
      r: "10",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "34",
      cy: "31.5",
      rx: "8.3475",
      ry: "4.5",
      fill: "#d0cfce"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#e27022",
      d: "M52,55V18a6.0176,6.0176,0,0,0-6-6V61A6.0176,6.0176,0,0,0,52,55Z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "32",
      y: "31",
      width: "4",
      height: "25",
      fill: "#f1b31c"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M24.7536,45.1329a.6288.6288,0,1,1-.3145-.5449A.6289.6289,0,0,1,24.7536,45.1329Z"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M21.6082,45.1329a2.5152,2.5152,0,0,1,1.258-2.18l-1.2584-2.18a5.0306,5.0306,0,0,0-2.516,4.3592Z"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M25.3829,47.3125a2.52,2.52,0,0,1-2.5167,0l-1.2584,2.18a5.0391,5.0391,0,0,0,5.0335,0Z"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M25.3829,42.9533a2.5152,2.5152,0,0,1,1.258,2.18h2.5164a5.0308,5.0308,0,0,0-2.516-4.3592Z"
    })), /*#__PURE__*/React.createElement("rect", {
      x: "16",
      y: "12",
      rx: "6",
      width: "36",
      height: "49",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M42.3475,31.5a9.9923,9.9923,0,0,0-16.695,0"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "29",
      x2: "30.7966",
      y1: "23",
      y2: "27.4935",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36,35.7991a10,10,0,1,0-4,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32,50.5547a4,4,0,1,0,4,0"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "32",
      y: "31",
      rx: "1",
      width: "4",
      height: "25",
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
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M24.7536,45.1329a.6288.6288,0,1,1-.3145-.5449A.6289.6289,0,0,1,24.7536,45.1329Z"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M21.6082,45.1329a2.5152,2.5152,0,0,1,1.258-2.18l-1.2584-2.18a5.0306,5.0306,0,0,0-2.516,4.3592Z"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M25.3829,47.3125a2.52,2.52,0,0,1-2.5167,0l-1.2584,2.18a5.0391,5.0391,0,0,0,5.0335,0Z"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M25.3829,42.9533a2.5152,2.5152,0,0,1,1.258,2.18h2.5164a5.0308,5.0308,0,0,0-2.516-4.3592Z"
    })), /*#__PURE__*/React.createElement("rect", {
      x: "16",
      y: "12",
      rx: "6",
      width: "36",
      height: "49",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M42.3475,31.5a9.9923,9.9923,0,0,0-16.695,0"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "29",
      x2: "30.7966",
      y1: "23",
      y2: "27.4935",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36,35.7991a10,10,0,1,0-4,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32,50.5547a4,4,0,1,0,4,0"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "32",
      y: "31",
      rx: "1",
      width: "4",
      height: "25",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default GeigerCounter;