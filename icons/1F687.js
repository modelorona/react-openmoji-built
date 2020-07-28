import React from 'react';

const Metro = ({
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "29",
      fill: "#3f3f3f"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "M24.83,14H47.1695A7.2305,7.2305,0,0,1,54.4,21.2305V47.5A1.5,1.5,0,0,1,52.9,49H19.1a1.5,1.5,0,0,1-1.5-1.5V21.23A7.23,7.23,0,0,1,24.83,14Z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "42",
      y: "39",
      width: "9",
      height: "5",
      fill: "#fcea2b"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "20",
      y: "39",
      width: "9",
      height: "5",
      fill: "#fcea2b"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "51",
      x2: "21",
      y1: "35",
      y2: "35",
      fill: "none",
      stroke: "#ea5a47",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "17",
      x2: "21",
      y1: "60.8113",
      y2: "54",
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "4"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "55",
      x2: "51",
      y1: "60.8113",
      y2: "54",
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "4"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "20",
      y: "22",
      width: "31",
      height: "10",
      fill: "#3f3f3f"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M24.83,14H47.1695A7.2305,7.2305,0,0,1,54.4,21.2305V47.5A1.5,1.5,0,0,1,52.9,49H19.1a1.5,1.5,0,0,1-1.5-1.5V21.23A7.23,7.23,0,0,1,24.83,14Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M51,23v8.8H21"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "21 44 29 44 29 40"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "43 44 51 44 51 40"
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
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M24.83,14H47.1695A7.2305,7.2305,0,0,1,54.4,21.2305V47.5A1.5,1.5,0,0,1,52.9,49H19.1a1.5,1.5,0,0,1-1.5-1.5V21.23A7.23,7.23,0,0,1,24.83,14Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M51,23v8.8H21"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "21 44 29 44 29 40"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "43 44 51 44 51 40"
    })));
  }
};

export default Metro;