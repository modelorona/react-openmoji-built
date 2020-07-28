import React from 'react';

const BlueBook = ({
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
      x: "18",
      y: "12",
      width: "42",
      height: "47.5",
      fill: "#92d3f5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "12",
      y: "12",
      width: "6.9925",
      height: "47.5",
      fill: "#61b2e4"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      x2: "18",
      y1: "13",
      y2: "59",
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
      d: "M62.9087,54.8149A1.986,1.986,0,0,0,64,53.0467V9.0833A2.0833,2.0833,0,0,0,61.9167,7H16.4591a4.7714,4.7714,0,0,0-3.9733,2.13h0a1.889,1.889,0,0,0,1.573,2.9349h3.8086l2.1331-.0177H59.9167v48H14.0583a1.8905,1.8905,0,0,1-1.8916-1.85V10.575"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "39.533 27.219 39.533 34.219 42.533 34.219"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M33.7078,34.2187h0a2.5,2.5,0,0,1-2.5-2.5v-2a2.5,2.5,0,0,1,2.5-2.5h0a2.5,2.5,0,0,1,2.5,2.5v2A2.5,2.5,0,0,1,33.7078,34.2187Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "45.5328",
      cy: "34.2187",
      r: "1"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "28.416 27.29 26.898 34.29 26.208 34.29 25.537 34.29 24 27.29"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M49.5633,32.8214a1.9316,1.9316,0,0,0,1.9338,1.3973h0a1.7627,1.7627,0,1,0,0-3.5,1.7627,1.7627,0,1,0,0-3.5h0a1.9317,1.9317,0,0,0-1.9338,1.3973"
    }))));
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
      x1: "18",
      x2: "18",
      y1: "13",
      y2: "59",
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
      d: "M62.9087,54.8149A1.986,1.986,0,0,0,64,53.0467V9.0833A2.0833,2.0833,0,0,0,61.9167,7H16.4591a4.7714,4.7714,0,0,0-3.9733,2.13h0a1.889,1.889,0,0,0,1.573,2.9349h3.8086l2.1331-.0177H59.9167v48H14.0583a1.8905,1.8905,0,0,1-1.8916-1.85V10.575"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "39.533 27.219 39.533 34.219 42.533 34.219"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M33.7078,34.2187h0a2.5,2.5,0,0,1-2.5-2.5v-2a2.5,2.5,0,0,1,2.5-2.5h0a2.5,2.5,0,0,1,2.5,2.5v2A2.5,2.5,0,0,1,33.7078,34.2187Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "45.5328",
      cy: "34.2187",
      r: "1"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "28.416 27.29 26.898 34.29 26.208 34.29 25.537 34.29 24 27.29"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M49.5633,32.8214a1.9316,1.9316,0,0,0,1.9338,1.3973h0a1.7627,1.7627,0,1,0,0-3.5,1.7627,1.7627,0,1,0,0-3.5h0a1.9317,1.9317,0,0,0-1.9338,1.3973"
    }))));
  }
};

export default BlueBook;