import React from 'react';

const Spaghetti = ({
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "24.6875",
      cy: "36",
      r: "16",
      fill: "#fcea2b",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "47.3125",
      cy: "36",
      r: "16",
      fill: "#fcea2b",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.9375",
      cy: "23",
      r: "16",
      fill: "#fcea2b",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M49,36c0,16.0156-4,29-13,29c16.0166,0,29-12.9844,29-29H49z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      d: "M7,36c0,16.0156,12.9834,29,29,29c9,0,13-12.9844,13-29H7z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11",
      x2: "18",
      y1: "11",
      y2: "18",
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
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
      d: "M22.1895,17.0195C24.5,11.7109,29.79,8,35.9482,8s11.4493,3.7109,13.7598,9.0195"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.833,17.1582C29.6484,14.6396,32.6064,13,35.9482,13c3.3428,0,6.3008,1.6396,8.1172,4.1582"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M32.8721,19.0771C33.7188,18.4048,34.7832,18,35.9482,18c1.1661,0,2.2305,0.4048,3.0772,1.0771"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M7,36c0,16.0166,12.9834,29,29,29s29-12.9834,29-29H7z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M10,33c1.3896-6.8467,7.4424-12,14.6982-12c7.2579,0,13.3086,5.1533,14.6993,12"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M15.1572,33c1.2754-4.0566,5.0645-7,9.541-7c4.4786,0,8.2676,2.9434,9.5411,7"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.7217,33c0.9121-1.207,2.3467-2,3.9765-2c1.6309,0,3.0645,0.793,3.9786,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39.0068,23.5c2.375-1.5801,5.2276-2.5,8.295-2.5C54.5576,21,60.6104,26.1533,62,33"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.793,27.6533C43.3721,26.6074,45.2656,26,47.3018,26c4.4765,0,8.2656,2.9434,9.541,7"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.9941,32.2715C44.874,31.4844,46.0273,31,47.3018,31c1.6298,0,3.0644,0.793,3.9765,2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11",
      x2: "18",
      y1: "11",
      y2: "18",
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
      d: "M22.1895,17.0195C24.5,11.7109,29.79,8,35.9482,8s11.4493,3.7109,13.7598,9.0195"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.833,17.1582C29.6484,14.6396,32.6064,13,35.9482,13c3.3428,0,6.3008,1.6396,8.1172,4.1582"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M32.8721,19.0771C33.7188,18.4048,34.7832,18,35.9482,18c1.1661,0,2.2305,0.4048,3.0772,1.0771"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M7,36c0,16.0166,12.9834,29,29,29s29-12.9834,29-29H7z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M10,33c1.3896-6.8467,7.4424-12,14.6982-12c7.2579,0,13.3086,5.1533,14.6993,12"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M15.1572,33c1.2754-4.0566,5.0645-7,9.541-7c4.4786,0,8.2676,2.9434,9.5411,7"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.7217,33c0.9121-1.207,2.3467-2,3.9765-2c1.6309,0,3.0645,0.793,3.9786,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39.0068,23.5c2.375-1.5801,5.2276-2.5,8.295-2.5C54.5576,21,60.6104,26.1533,62,33"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.793,27.6533C43.3721,26.6074,45.2656,26,47.3018,26c4.4765,0,8.2656,2.9434,9.541,7"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.9941,32.2715C44.874,31.4844,46.0273,31,47.3018,31c1.6298,0,3.0644,0.793,3.9765,2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11",
      x2: "18",
      y1: "11",
      y2: "18",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default Spaghetti;