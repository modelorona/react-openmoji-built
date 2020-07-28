import React from 'react';

const Dress = ({
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
      fill: "#61B2E4",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,24.6438L29.4165,16V4h-5.5052v12c0,6.0279,4.0037,19.9583,4.0037,19.9583L16,67.9792h20h20L44.0849,35.9583 c0,0,4.0037-13.9304,4.0037-19.9583V4h-5.5052v12L36,24.6438z"
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
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,24.6438L29.4165,16V4h-5.5052v12c0,6.0279,4.0037,19.9583,4.0037,19.9583L16,67.9792h20h20L44.0849,35.9583 c0,0,4.0037-13.9304,4.0037-19.9583V4h-5.5052v12L36,24.6438z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "31.6821",
      x2: "40.3264",
      y1: "35.9583",
      y2: "35.9583",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
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
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,24.6438L29.4165,16V4h-5.5052v12c0,6.0279,4.0037,19.9583,4.0037,19.9583L16,67.9792h20h20L44.0849,35.9583 c0,0,4.0037-13.9304,4.0037-19.9583V4h-5.5052v12L36,24.6438z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "31.6821",
      x2: "40.3264",
      y1: "35.9583",
      y2: "35.9583",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default Dress;