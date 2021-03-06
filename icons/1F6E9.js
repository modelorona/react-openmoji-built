import React from 'react';

const SmallAirplane = ({
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
      fill: "#D0CFCE",
      d: "M49,30c0,0-24,23-27,20s20-27,20-27s4-5,8-1S49,30,49,30z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      d: "M31.98,54.83l-2.17,3.25c-0.27,0.4-0.84,0.44-1.17,0.09l-7.45-8.12l-8.25-7.56 c-0.35-0.33-0.31-0.9,0.09-1.17l3.25-2.17c0.26-0.17,0.61-0.16,0.86,0.03l8.52,6.41l6.29,8.38C32.14,54.22,32.15,54.57,31.98,54.83 z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      d: "M59.12,51.13l-5.56,3.01c-0.45,0.25-1.14,0.09-1.71-0.38L33.79,38.87l-0.62-0.5l-0.5-0.62L17.78,19.69 c-0.47-0.57-0.63-1.26-0.38-1.71l3.01-5.56c0.38-0.69,1.49-0.56,2.28,0.27L40.24,31.3l18.61,17.55 C59.68,49.64,59.81,50.75,59.12,51.13z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "49.4",
      x2: "47.87",
      y1: "32.5998",
      y2: "31.0698",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.93",
      x2: "39.4",
      y1: "24.1298",
      y2: "22.5998",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "39.9924",
      x2: "36.9924",
      y1: "20.2008",
      y2: "23.2008",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "51.6938",
      x2: "48.6938",
      y1: "31.9022",
      y2: "34.9022",
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
      strokeWidth: "2",
      d: "M33.79,38.8698l2.78,2.29c-3.14,2.66-6.38,5.22-9.02,6.94l-1.89-2.51l-1.68-1.26c1.71-2.61,4.21-5.77,6.82-8.85l1.87,2.27l0.5,0.62 L33.79,38.8698z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49,29.9998c0,0-0.41,0.39-1.13,1.07c-0.9,0.85-2.3,2.15-3.98,3.67l-3.65-3.44l-3-3.18c1.54-1.69,2.84-3.08,3.69-3.99 c0.68-0.72,1.07-1.13,1.07-1.13s4-5,8-1S49,29.9998,49,29.9998z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.98,54.8298l-2.17,3.25c-0.27,0.4-0.84,0.44-1.17,0.09l-7.45-8.12l-8.25-7.56c-0.35-0.33-0.31-0.9,0.09-1.17l3.25-2.17 c0.2599-0.17,0.61-0.16,0.86,0.03l6.84,5.15l1.68,1.26l1.89,2.51l4.4,5.87C32.14,54.2198,32.15,54.5698,31.98,54.8298z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.12,51.1298l-5.56,3.01c-0.45,0.25-1.14,0.09-1.71-0.38l-15.28-12.6l-2.78-2.29l-0.62-0.5l-0.5-0.62l-1.87-2.27l-13.02-15.79 c-0.47-0.57-0.63-1.26-0.38-1.71l3.0099-5.56c0.38-0.69,1.4901-0.56,2.28,0.27l14.55,15.43l3,3.18l3.65,3.44l14.96,14.11 C59.68,49.6398,59.81,50.7498,59.12,51.1298z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "45.2187",
      x2: "59.0313",
      y1: "13.1562",
      y2: "26.9687",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.7979"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "53.3437",
      x2: "50.6875",
      y1: "18.8437",
      y2: "21.5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.7979"
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
      x1: "49.4",
      x2: "47.87",
      y1: "32.5998",
      y2: "31.0698",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.93",
      x2: "39.4",
      y1: "24.1298",
      y2: "22.5998",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "39.9924",
      x2: "36.9924",
      y1: "20.2008",
      y2: "23.2008",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "51.6938",
      x2: "48.6938",
      y1: "31.9022",
      y2: "34.9022",
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
      strokeWidth: "2",
      d: "M33.79,38.8698l2.78,2.29c-3.14,2.66-6.38,5.22-9.02,6.94l-1.89-2.51l-1.68-1.26c1.71-2.61,4.21-5.77,6.82-8.85l1.87,2.27l0.5,0.62 L33.79,38.8698z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49,29.9998c0,0-0.41,0.39-1.13,1.07c-0.9,0.85-2.3,2.15-3.98,3.67l-3.65-3.44l-3-3.18c1.54-1.69,2.84-3.08,3.69-3.99 c0.68-0.72,1.07-1.13,1.07-1.13s4-5,8-1S49,29.9998,49,29.9998z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.98,54.8298l-2.17,3.25c-0.27,0.4-0.84,0.44-1.17,0.09l-7.45-8.12l-8.25-7.56c-0.35-0.33-0.31-0.9,0.09-1.17l3.25-2.17 c0.2599-0.17,0.61-0.16,0.86,0.03l6.84,5.15l1.68,1.26l1.89,2.51l4.4,5.87C32.14,54.2198,32.15,54.5698,31.98,54.8298z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.12,51.1298l-5.56,3.01c-0.45,0.25-1.14,0.09-1.71-0.38l-15.28-12.6l-2.78-2.29l-0.62-0.5l-0.5-0.62l-1.87-2.27l-13.02-15.79 c-0.47-0.57-0.63-1.26-0.38-1.71l3.0099-5.56c0.38-0.69,1.4901-0.56,2.28,0.27l14.55,15.43l3,3.18l3.65,3.44l14.96,14.11 C59.68,49.6398,59.81,50.7498,59.12,51.1298z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "45.2187",
      x2: "59.0313",
      y1: "13.1562",
      y2: "26.9687",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.7979"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "53.3437",
      x2: "50.6875",
      y1: "18.8437",
      y2: "21.5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.7979"
    })));
  }
};

export default SmallAirplane;