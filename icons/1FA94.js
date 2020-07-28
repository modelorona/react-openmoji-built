import React from 'react';

const DiyaLamp = ({
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
      fill: "#a57939",
      d: "M6.5,34.5s4,2.5,4.35,4.1815C12.2991,43.0449,17.7225,56,37.6875,56,61.0625,56,64.5,35.5,64.5,35.5H11Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6a462f",
      d: "M50.21,37.0055S49.5,51.5,44.5,54.5s18-2,20-19Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ea5a47",
      d: "M5.8906,30s0-11.2658,1.6094-12.8752S9.1094,30,9.1094,30Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f1b31c",
      d: "M6.6953,30.5s0-5.6329.8047-6.4376S8.3047,30.5,8.3047,30.5Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M7.1286,30s0-1.6.3714-1.9712S7.8714,30,7.8714,30Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M6.5,34.5s4,2.5,4.35,4.1815C12.2991,43.0449,17.7225,56,37.6875,56,61.0625,56,64.5,35.5,64.5,35.5s-20.85,1.01-27.8063,1C30.2654,36.4905,11,35.5,11,35.5Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "7.5",
      x2: "7.5",
      y1: "34.5",
      y2: "32",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M5.8287,30.5s0-11.6991,1.6713-13.37S9.1713,30.5,9.1713,30.5Z"
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
      d: "M6.5,34.5s4,2.5,4.35,4.1815C12.2991,43.0449,17.7225,56,37.6875,56,61.0625,56,64.5,35.5,64.5,35.5s-20.85,1.01-27.8063,1C30.2654,36.4905,11,35.5,11,35.5Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "7.5",
      x2: "7.5",
      y1: "34.5",
      y2: "32",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M5.8287,30.5s0-11.6991,1.6713-13.37S9.1713,30.5,9.1713,30.5Z"
    })));
  }
};

export default DiyaLamp;