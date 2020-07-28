import React from 'react';

const VerticalTrafficLight = ({
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
      fill: "#d0cfce",
      stroke: "none",
      d: "M47,15.82v36c0,3.85-3.15,7-7,7h-8c-3.85,0-7-3.15-7-7v-36c0-3.85,3.15-7,7-7h8 C43.85,8.82,47,11.97,47,15.82z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "48.2923",
      r: "5",
      fill: "#b1cc33",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "34.2923",
      r: "5",
      fill: "#f4aa41",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "19.2923",
      r: "5",
      fill: "#ea5a47",
      stroke: "none"
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
      d: "M47,16v36c0,3.85-3.15,7-7,7h-8c-3.85,0-7-3.15-7-7V16c0-3.85,3.15-7,7-7h8C43.85,9,47,12.15,47,16z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "48.4723",
      r: "5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "34.4723",
      r: "5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "19.4723",
      r: "5",
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
      d: "M47,16v36c0,3.85-3.15,7-7,7h-8c-3.85,0-7-3.15-7-7V16c0-3.85,3.15-7,7-7h8C43.85,9,47,12.15,47,16z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "48.4723",
      r: "5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "34.4723",
      r: "5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "19.4723",
      r: "5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default VerticalTrafficLight;