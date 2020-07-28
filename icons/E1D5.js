import React from 'react';

const Potentiometer = ({
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
      x: "21",
      y: "30",
      width: "6",
      height: "12",
      fill: "#FFFFFF"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "41",
      cy: "36",
      r: "15",
      fill: "#FFFFFF"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M30.4,46.6C33.1,49.3,36.9,51,41,51c8.3,0,15-6.7,15-15c0-3.6-1.3-6.9-3.4-9.5c-0.3-0.4-0.7-0.8-1.1-1.2"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "21",
      x2: "16",
      y1: "32",
      y2: "32",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      x2: "16",
      y1: "36",
      y2: "36",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      x2: "16",
      y1: "40",
      y2: "40",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "27,41.4 27,42 21,42 21,30 27,30 27,30.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "41",
      cy: "36",
      r: "15",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "41",
      cy: "36",
      r: "4"
    })), /*#__PURE__*/React.createElement("g", {
      id: "color-foreground"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#E27022",
      d: "M20.005,30.99v2.02h-4.04c-0.606,0-1.01-0.505-1.01-1.01c0-0.505,0.404-1.01,1.01-1.01H20.005z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#E27022",
      d: "M20.005,34.99v2.02h-4.04c-0.606,0-1.01-0.505-1.01-1.01s0.404-1.01,1.01-1.01H20.005z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#E27022",
      d: "M20.005,38.99v2.02h-4.04c-0.606,0-1.01-0.505-1.01-1.01s0.404-1.01,1.01-1.01H20.005z"
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
    }, /*#__PURE__*/React.createElement("line", {
      x1: "21",
      x2: "16",
      y1: "32",
      y2: "32",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      x2: "16",
      y1: "36",
      y2: "36",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      x2: "16",
      y1: "40",
      y2: "40",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "27,41.4 27,42 21,42 21,30 27,30 27,30.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "41",
      cy: "36",
      r: "15",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "41",
      cy: "36",
      r: "4"
    })));
  }
};

export default Potentiometer;