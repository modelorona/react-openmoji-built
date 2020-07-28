import React from 'react';

const HorizontalTrafficLight = ({
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
      strokeMiterlimit: "10",
      d: "M54.09,46.91h-36c-3.85,0-7-3.15-7-7v-8c0-3.85,3.15-7,7-7h36 c3.85,0,7,3.15,7,7v8C61.09,43.76,57.94,46.91,54.09,46.91z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "21.6177",
      cy: "35.91",
      r: "5.0001",
      fill: "#b1cc33",
      stroke: "none",
      strokeMiterlimit: "10"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.6177",
      cy: "35.91",
      r: "5.0001",
      fill: "#f4aa41",
      stroke: "none",
      strokeMiterlimit: "10"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50.6177",
      cy: "35.91",
      r: "5.0001",
      fill: "#ea5a47",
      stroke: "none",
      strokeMiterlimit: "10"
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
      strokeMiterlimit: "10",
      d: "M54.09,46.91h-36c-3.85,0-7-3.15-7-7v-8c0-3.85,3.15-7,7-7h36 c3.85,0,7,3.15,7,7v8C61.09,43.76,57.94,46.91,54.09,46.91z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "21.6177",
      cy: "35.91",
      r: "5.0001",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.6177",
      cy: "35.91",
      r: "5.0001",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50.6177",
      cy: "35.91",
      r: "5.0001",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53.91,46.91h-36c-3.85,0-7-3.15-7-7v-8c0-3.85,3.15-7,7-7h36c3.85,0,7,3.15,7,7v8C60.91,43.76,57.76,46.91,53.91,46.91z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "21.4377",
      cy: "35.91",
      r: "5.0001",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.4377",
      cy: "35.91",
      r: "5.0001",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50.4377",
      cy: "35.91",
      r: "5.0001",
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
      strokeMiterlimit: "10",
      d: "M54.09,46.91h-36c-3.85,0-7-3.15-7-7v-8c0-3.85,3.15-7,7-7h36 c3.85,0,7,3.15,7,7v8C61.09,43.76,57.94,46.91,54.09,46.91z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "21.6177",
      cy: "35.91",
      r: "5.0001",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.6177",
      cy: "35.91",
      r: "5.0001",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50.6177",
      cy: "35.91",
      r: "5.0001",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53.91,46.91h-36c-3.85,0-7-3.15-7-7v-8c0-3.85,3.15-7,7-7h36c3.85,0,7,3.15,7,7v8C60.91,43.76,57.76,46.91,53.91,46.91z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "21.4377",
      cy: "35.91",
      r: "5.0001",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.4377",
      cy: "35.91",
      r: "5.0001",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50.4377",
      cy: "35.91",
      r: "5.0001",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default HorizontalTrafficLight;