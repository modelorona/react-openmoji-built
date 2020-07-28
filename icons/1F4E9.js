import React from 'react';

const EnvelopeWithArrow = ({
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
      x: "20.28",
      y: "22.5625",
      width: "31.72",
      height: "3.125",
      fill: "#D0CFCE"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M28.2272,40.7829l-3.2868,3.2264l-2.2014-0.9L11.3975,53.5567c-0.35-0.6201-0.57-1.44-0.57-2.32v-26.51 L28.2272,40.7829z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      d: "M60.7675,24.6767v26.56c0,0.86-0.2,1.65-0.55,2.27L48.7783,43.0324l-1.5232,0.1969l-3.4731-2.8072 l3.9748-3.7456L60.7675,24.6767z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M26.7475,39.4167l4.47,4.13c0.24,0.22,0.48,0.41,0.72,0.57c2.4301,1.8,5.26,1.8,7.6801-0.01 c0.23-0.16,0.47-0.36,0.69-0.56l4.5-4.15"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "#D0CFCE",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8",
      d: "M26.7475,39.4167l4.47,4.13c0.24,0.22,0.48,0.41,0.72,0.57c2.4301,1.8,5.26,1.8,7.6801-0.01c0.23-0.16,0.47-0.36,0.69-0.56 l4.5-4.15l15.41,14.11c-0.42,0.77-1.07,1.27-1.79,1.27h-45.26c-0.7,0-1.34-0.47-1.77-1.22L26.7475,39.4167"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M23.4757,42.4306"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M47.872,42.2026l12.3455,11.304c-0.42,0.77-1.07,1.27-1.79,1.27h-45.26c-0.7,0-1.34-0.47-1.77-1.22 l12.0782-11.126"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M46.9665,41.3734"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M49.5942,23.5667h9.46c0.59,0,1.16,0.35,1.57,0.91c0.05,0.06,0.1,0.13,0.14,0.2l-15.96,14.72l-4.5,4.15 c-0.22,0.2-0.46,0.4-0.69,0.56c-2.42,1.81-5.25,1.81-7.68,0.01c-0.24-0.16-0.48-0.35-0.72-0.57l-4.47-4.13l-15.92-14.69 c0.04-0.06,0.09-0.13,0.14-0.2c0.42-0.6,0.99-0.96,1.61-0.96h8.48"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      d: "M29.9493,22.0974h1.5889c0.5519,0,0.9994-0.4474,0.9994-0.9994v-4.4112 c0-0.5519,0.4474-0.9994,0.9994-0.9994h4.3313c0.5519,0,0.9994,0.4474,0.9994,0.9994v4.4112c0,0.5519,0.4474,0.9994,0.9994,0.9994 h1.5788c0.8109,0,1.2842,0.9149,0.8157,1.5768l-5.7482,8.1208c-0.3983,0.5627-1.2331,0.5627-1.6314,0l-5.7482-8.1208 C28.6651,23.0123,29.1384,22.0974,29.9493,22.0974z"
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
      d: "M22.739,43.1093L11.3975,53.5567c-0.35-0.6201-0.57-1.44-0.57-2.32v-26.51l17.3997,16.0562"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.782,40.4221l3.9748-3.7456l13.0107-11.9998v26.56c0,0.86-0.2,1.65-0.55,2.27L48.7783,43.0324"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.7475,39.4167l4.47,4.13c0.24,0.22,0.48,0.41,0.72,0.57c2.4301,1.8,5.26,1.8,7.6801-0.01c0.23-0.16,0.47-0.36,0.69-0.56 l4.5-4.15"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.4757,42.4306"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.872,42.2026l12.3455,11.304c-0.42,0.77-1.07,1.27-1.79,1.27h-45.26c-0.7,0-1.34-0.47-1.77-1.22l12.0782-11.126"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.9665,41.3734"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.5942,23.5667h9.46c0.59,0,1.16,0.35,1.57,0.91c0.05,0.06,0.1,0.13,0.14,0.2l-15.96,14.72l-4.5,4.15 c-0.22,0.2-0.46,0.4-0.69,0.56c-2.42,1.81-5.25,1.81-7.68,0.01c-0.24-0.16-0.48-0.35-0.72-0.57l-4.47-4.13l-15.92-14.69 c0.04-0.06,0.09-0.13,0.14-0.2c0.42-0.6,0.99-0.96,1.61-0.96h8.48"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.9493,22.0974h1.5889 c0.5519,0,0.9994-0.4474,0.9994-0.9994v-4.4112c0-0.5519,0.4474-0.9994,0.9994-0.9994h4.3313c0.5519,0,0.9994,0.4474,0.9994,0.9994 v4.4112c0,0.5519,0.4474,0.9994,0.9994,0.9994h1.5788c0.8109,0,1.2842,0.9149,0.8157,1.5768l-5.7482,8.1208 c-0.3983,0.5627-1.2331,0.5627-1.6314,0l-5.7482-8.1208C28.6651,23.0123,29.1384,22.0974,29.9493,22.0974z"
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
      d: "M22.739,43.1093L11.3975,53.5567c-0.35-0.6201-0.57-1.44-0.57-2.32v-26.51l17.3997,16.0562"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.782,40.4221l3.9748-3.7456l13.0107-11.9998v26.56c0,0.86-0.2,1.65-0.55,2.27L48.7783,43.0324"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.7475,39.4167l4.47,4.13c0.24,0.22,0.48,0.41,0.72,0.57c2.4301,1.8,5.26,1.8,7.6801-0.01c0.23-0.16,0.47-0.36,0.69-0.56 l4.5-4.15"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.4757,42.4306"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.872,42.2026l12.3455,11.304c-0.42,0.77-1.07,1.27-1.79,1.27h-45.26c-0.7,0-1.34-0.47-1.77-1.22l12.0782-11.126"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.9665,41.3734"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.5942,23.5667h9.46c0.59,0,1.16,0.35,1.57,0.91c0.05,0.06,0.1,0.13,0.14,0.2l-15.96,14.72l-4.5,4.15 c-0.22,0.2-0.46,0.4-0.69,0.56c-2.42,1.81-5.25,1.81-7.68,0.01c-0.24-0.16-0.48-0.35-0.72-0.57l-4.47-4.13l-15.92-14.69 c0.04-0.06,0.09-0.13,0.14-0.2c0.42-0.6,0.99-0.96,1.61-0.96h8.48"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.9493,22.0974h1.5889 c0.5519,0,0.9994-0.4474,0.9994-0.9994v-4.4112c0-0.5519,0.4474-0.9994,0.9994-0.9994h4.3313c0.5519,0,0.9994,0.4474,0.9994,0.9994 v4.4112c0,0.5519,0.4474,0.9994,0.9994,0.9994h1.5788c0.8109,0,1.2842,0.9149,0.8157,1.5768l-5.7482,8.1208 c-0.3983,0.5627-1.2331,0.5627-1.6314,0l-5.7482-8.1208C28.6651,23.0123,29.1384,22.0974,29.9493,22.0974z"
    })));
  }
};

export default EnvelopeWithArrow;