import React from 'react';

const SmilingFaceWithTear = ({
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
    }, /*#__PURE__*/React.createElement("g", {
      id: "color-2"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36.0001",
      cy: "36",
      r: "22.9999",
      fill: "#fcea2b"
    })), /*#__PURE__*/React.createElement("path", {
      fill: "#92d3f5",
      d: "M44.5416,46.2169a3.6376,3.6376,0,0,1-1.1052-2.5764c-.0405-3.2205,2.9651-6.34,3.0929-6.4712a.6891.6891,0,0,1,.9748-.0123c.1313.1281,3.2143,3.1713,3.2555,6.3924l0,0a3.6626,3.6626,0,0,1-6.2183,2.6673Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "23",
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
      d: "M44.1521,45.7678a20.0408,20.0408,0,0,1-17.967-.8385"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30,31a3,3,0,1,1-3-3,3.0011,3.0011,0,0,1,3,3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M48,31a3,3,0,1,1-3-3,3.001,3.001,0,0,1,3,3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.5416,46.2169a3.6376,3.6376,0,0,1-1.1052-2.5764c-.0405-3.2205,2.9651-6.34,3.0929-6.4712a.6891.6891,0,0,1,.9748-.0123c.1313.1281,3.2143,3.1713,3.2555,6.3924l0,0a3.6626,3.6626,0,0,1-6.2183,2.6673Z"
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "23",
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
      d: "M44.1521,45.7678a20.0408,20.0408,0,0,1-17.967-.8385"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30,31a3,3,0,1,1-3-3,3.0011,3.0011,0,0,1,3,3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M48,31a3,3,0,1,1-3-3,3.001,3.001,0,0,1,3,3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.5416,46.2169a3.6376,3.6376,0,0,1-1.1052-2.5764c-.0405-3.2205,2.9651-6.34,3.0929-6.4712a.6891.6891,0,0,1,.9748-.0123c.1313.1281,3.2143,3.1713,3.2555,6.3924l0,0a3.6626,3.6626,0,0,1-6.2183,2.6673Z"
    })));
  }
};

export default SmilingFaceWithTear;