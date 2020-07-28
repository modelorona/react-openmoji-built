import React from 'react';

const Locomotive = ({
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
      fill: "#EA5A47",
      d: "M7.7037,46.5833L7.7037,46.5833z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M67.19,30.9498v9.26c0,0.19-0.05,0.37-0.15,0.51c-0.07-0.01-0.15-0.02-0.23-0.02H6.75 c-0.09-0.14-0.14-0.31-0.14-0.49v-9.26c0-0.55,0.46-1,1.03-1h58.51c0.02,0,0.05,0,0.0699,0.01 C66.77,29.9897,67.19,30.4197,67.19,30.9498z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      d: "M27.14,49.6598h-9.62c0.58-2.11,2.51-3.66,4.81-3.66S26.56,47.5497,27.14,49.6598z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "31.4074",
      y: "25.4404",
      width: "4.1482",
      height: "4.5232",
      fill: "#3F3F3F"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M27.2963,31.732h-6.7407c-0.0205,0-0.0371-0.0165-0.0371-0.037v-6.3704 c0-1.3295,1.0779-2.4074,2.4074-2.4074h2.2963c1.166,0,2.1111,0.9452,2.1111,2.1111v6.6667 C27.3333,31.7155,27.3168,31.732,27.2963,31.732z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "9.5556",
      y: "18.695",
      width: "3.1111",
      height: "11.6296",
      fill: "#3F3F3F"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M7.56,37.73v-6.78c0-0.55,0.45-1,1-1H45.5V18.1h20.72v12.75c0.01,0.03,0.01,0.07,0.01,0.1v6.6125 L7.56,37.73z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "53.7037",
      y: "14.9172",
      width: "4.5926",
      height: "3.1852",
      fill: "#3F3F3F"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      d: "M45.27,50.9998c0,2.76-2.24,5-5,5s-5-2.24-5-5c0-0.46,0.06-0.91,0.19-1.34c0.44-1.63,1.7-2.9301,3.31-3.42 c0.48-0.16,0.98-0.24,1.5-0.24c0.93,0,1.79,0.25,2.53,0.69c1.11,0.65,1.94,1.71,2.28,2.97 C45.21,50.0898,45.27,50.5397,45.27,50.9998z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "29.8241",
      x2: "32.9907",
      y1: "48.692",
      y2: "48.692",
      fill: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      d: "M68,41.8798v0.82c0,0.65-0.53,1.18-1.19,1.18H65v4.71c0,0.59-0.48,1.07-1.07,1.07h-5.81 c-0.13-0.46-0.32-0.89-0.57-1.29c-0.88-1.42-2.46-2.37-4.25-2.37c-1.39,0-2.64,0.56-3.55,1.48c-0.59,0.6-1.04,1.34-1.27,2.1801 h-3.4c-0.34-1.26-1.17-2.32-2.28-2.97c-0.74-0.44-1.6-0.69-2.53-0.69c-0.52,0-1.02,0.08-1.5,0.24c-1.61,0.49-2.87,1.79-3.31,3.42 h-8.32c-0.58-2.11-2.51-3.66-4.81-3.66s-4.23,1.55-4.81,3.66H9.04c-1.2599,0-2.28-1.02-2.28-2.28v-3.5H5.19 c-0.66,0-1.19-0.53-1.19-1.18v-0.82c0-0.65,0.53-1.18,1.19-1.18h61.62c0.08,0,0.16,0.01,0.23,0.02 C67.59,40.8298,68,41.3098,68,41.8798z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      d: "M58.3,50.9998c0,2.76-2.24,5-5,5c-2.77,0-5-2.24-5-5c0-0.46,0.06-0.91,0.18-1.34 c0.23-0.84,0.68-1.58,1.27-2.1801c0.91-0.92,2.16-1.48,3.55-1.48c1.79,0,3.37,0.95,4.25,2.37c0.25,0.4,0.44,0.83,0.57,1.29 C58.24,50.0898,58.3,50.5397,58.3,50.9998z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      d: "M27.33,50.9998c0,2.76-2.24,5-5,5s-5-2.24-5-5c0-0.46,0.06-0.91,0.19-1.34c0.58-2.11,2.51-3.66,4.81-3.66 s4.23,1.55,4.81,3.66C27.27,50.0898,27.33,50.5397,27.33,50.9998z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M57.3333,29.9636h-8v-8.6342c0-0.5523,0.4477-1,1-1h7V29.9636z"
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
      d: "M7.7037,46.5833"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "31.4074",
      y: "25.4404",
      width: "4.1482",
      height: "4.5232",
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
      d: "M27.33,25.0298v4.92h-6.81v-4.63c0-1.32,1.08-2.4,2.41-2.4h2.29C26.39,22.9197,27.33,23.8597,27.33,25.0298z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "9.56",
      y: "18.6998",
      width: "3.11",
      height: "11.25",
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
      d: "M66.23,37.5598v-6.61c0-0.03,0-0.07-0.01-0.1v-12.75H58.3h-4.6h-8.2v11.85h-9.94h-4.15h-4.08"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M7.56,37.7298v-6.78c0-0.55,0.45-1,1-1h1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "20.52",
      x2: "12.67",
      y1: "29.9498",
      y2: "29.9498",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "53.7037",
      y: "14.9172",
      width: "4.5926",
      height: "3.1852",
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
      d: "M64,41.2135"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M7.7037,44.5833v3.1087c0,0.5523,0.4477,1,1,1h6.2088"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.4028,48.692H64c0.5523,0,1-0.4477,1-1v-3.8118"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "29.8241",
      x2: "32.9907",
      y1: "48.692",
      y2: "48.692",
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
      d: "M68,41.8798v0.82c0,0.65-0.53,1.18-1.19,1.18H5.19c-0.66,0-1.19-0.53-1.19-1.18v-0.82c0-0.65,0.53-1.18,1.19-1.18h61.62 C67.47,40.6998,68,41.2297,68,41.8798z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "53.2962",
      cy: "51",
      r: "5.0001",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40.273",
      cy: "51",
      r: "5.0001",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "22.3332",
      cy: "51",
      r: "5.0001",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "57.162,21.297 57.162,29.9636 50.2454,29.9636"
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
      d: "M7.7037,46.5833"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "31.4074",
      y: "25.4404",
      width: "4.1482",
      height: "4.5232",
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
      d: "M27.33,25.0298v4.92h-6.81v-4.63c0-1.32,1.08-2.4,2.41-2.4h2.29C26.39,22.9197,27.33,23.8597,27.33,25.0298z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "9.56",
      y: "18.6998",
      width: "3.11",
      height: "11.25",
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
      d: "M66.23,37.5598v-6.61c0-0.03,0-0.07-0.01-0.1v-12.75H58.3h-4.6h-8.2v11.85h-9.94h-4.15h-4.08"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M7.56,37.7298v-6.78c0-0.55,0.45-1,1-1h1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "20.52",
      x2: "12.67",
      y1: "29.9498",
      y2: "29.9498",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "53.7037",
      y: "14.9172",
      width: "4.5926",
      height: "3.1852",
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
      d: "M64,41.2135"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M7.7037,44.5833v3.1087c0,0.5523,0.4477,1,1,1h6.2088"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.4028,48.692H64c0.5523,0,1-0.4477,1-1v-3.8118"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "29.8241",
      x2: "32.9907",
      y1: "48.692",
      y2: "48.692",
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
      d: "M68,41.8798v0.82c0,0.65-0.53,1.18-1.19,1.18H5.19c-0.66,0-1.19-0.53-1.19-1.18v-0.82c0-0.65,0.53-1.18,1.19-1.18h61.62 C67.47,40.6998,68,41.2297,68,41.8798z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "53.2962",
      cy: "51",
      r: "5.0001",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40.273",
      cy: "51",
      r: "5.0001",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "22.3332",
      cy: "51",
      r: "5.0001",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "57.162,21.297 57.162,29.9636 50.2454,29.9636"
    })));
  }
};

export default Locomotive;