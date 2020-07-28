import React from 'react';

const MotorBoat = ({
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      d: "M39,36.09v5.55l-15.78-1.03c0.01-0.02,0.02-0.04,0.05-0.07c1.12-1.34,5.87-6.26,14.83-5.45 C38.61,35.14,39,35.58,39,36.09z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M65,38.93v4.43c0,0.55-0.5063,1-1.125,1H60.5v-0.43c0-0.52-0.495-0.96-1.125-0.99L56,42.74v-3.81 c0-0.55,0.5063-1,1.125-1h6.75C64.4937,37.93,65,38.38,65,38.93z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M60,43.93V50H21.45c0,0-2.2-1.54-4.62-5c-0.61-0.86-1.23-1.84-1.83-2.94c-0.1-0.16-0.18-0.32-0.27-0.49 c-0.37-0.7,0.21-1.51,1.03-1.45l0.62,0.04l6.84,0.45L39,41.64l17,1.1l3,0.2C59.56,42.97,60,43.41,60,43.93z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      points: "69.0417,48.2561 68.0417,68.0208 4.0417,68.0208 4.0417,48.2561"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      d: "M68,47.0208h-0.9583c-8,0-10,3-15,3s-10-3-16-3s-10,3-16,3s-12-3-15-3h-1v21h64v-10.5H68V47.0208z"
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
      d: "M39,36.09v5.55l-15.78-1.03c0.01-0.02,0.02-0.04,0.05-0.07c1.12-1.34,5.87-6.26,14.83-5.45C38.61,35.14,39,35.58,39,36.09z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "63",
      x2: "63",
      y1: "44.36",
      y2: "47",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.1213",
      d: "M65,38.93v4.43c0,0.55-0.5063,1-1.125,1H60.5v-0.43c0-0.52-0.495-0.96-1.125-0.99L56,42.74v-3.81c0-0.55,0.5063-1,1.125-1h6.75 C64.4937,37.93,65,38.38,65,38.93z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M21.45,50c0,0-2.2-1.54-4.62-5c-0.61-0.86-1.23-1.84-1.83-2.94c-0.1-0.16-0.18-0.32-0.27-0.49c-0.37-0.7,0.21-1.51,1.03-1.45 l0.62,0.04l6.84,0.45L39,41.64l17,1.1l3,0.2c0.56,0.03,1,0.47,1,0.99v3.0908"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19.6215,40.304"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30,39.864"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M5.0417,47.0208c3,0,9,3,15,3s10-3,16-3s11,3,16,3s7-3,15-3"
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39,36.09v5.55l-15.78-1.03c0.01-0.02,0.02-0.04,0.05-0.07c1.12-1.34,5.87-6.26,14.83-5.45C38.61,35.14,39,35.58,39,36.09z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "63",
      x2: "63",
      y1: "44.36",
      y2: "47",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.1213",
      d: "M65,38.93v4.43c0,0.55-0.5063,1-1.125,1H60.5v-0.43c0-0.52-0.495-0.96-1.125-0.99L56,42.74v-3.81c0-0.55,0.5063-1,1.125-1h6.75 C64.4937,37.93,65,38.38,65,38.93z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M21.45,50c0,0-2.2-1.54-4.62-5c-0.61-0.86-1.23-1.84-1.83-2.94c-0.1-0.16-0.18-0.32-0.27-0.49c-0.37-0.7,0.21-1.51,1.03-1.45 l0.62,0.04l6.84,0.45L39,41.64l17,1.1l3,0.2c0.56,0.03,1,0.47,1,0.99v3.0908"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19.6215,40.304"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30,39.864"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M5.0417,47.0208c3,0,9,3,15,3s10-3,16-3s11,3,16,3s7-3,15-3"
    })));
  }
};

export default MotorBoat;