import React from 'react';

const MartialArtsUniform = ({
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
      fill: "#D0CFCE",
      stroke: "none",
      d: "M41.826,7.6609"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      d: "M62.48,46.02c-0.74-0.16-1.45-0.22-2.13-0.22c-3.8199,0-6.58,2.09-6.58,2.09L47.71,28.21L47.2,47.45 l4.66,15.96c0,0-2.19,0.85-3.86,1.21l-0.01-0.14c-4.28,1.03-12.01,2.11-22.63,0.4v-2.92c0,0-2.73,0.85-4.52-1.15l3.98-13.65 l-0.51-19.24L18.25,47.6v-0.03c0,0-2.76-2.09-6.58-2.09c-0.68,0-1.38,0.06-2.12,0.22l7.11-23.02c0,0,1.56-5.47,3.44-7.19 c1.87-1.72,8.1801-2.46,8.1801-2.46l2.1-5.37c0.12-0.3,0.47-0.55,1.22-0.55h9.01c0.76,0,1.1,0.24,1.22,0.55l2.11,5.37 c0,0,6.11,1.04,7.98,2.76c1.88,1.71,3.44,7.18,3.44,7.18L62.48,46.02z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#9B9B9A",
      stroke: "none",
      points: "30.9212,7.875 41.5833,7.875 36,16.9583"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "25.25",
      y: "42.25",
      width: "21.9505",
      height: "3.6875",
      fill: "#3F3F3F",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      stroke: "none",
      d: "M33.7748,22.0446l-5.0167-8.8259l1.9294-4.3596l5.5648,8.6206l5.3311-8.6206l1.5417,3.5575v1.3958 C36.0625,23,31.1678,42.4148,31.1678,42.4148l-4.2859-0.2612C26.8819,42.1536,29.8657,29.8704,33.7748,22.0446z"
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
      d: "M28.2667,12.9217c0,0-6.3025,0.7358-8.1775,2.4233s-3.4375,7.0625-3.4375,7.0625L9.5276,45.0492l-0.0009,0.0041l0.0009-0.0303 l-0.0009,0.0041c4.875-1.0208,8.7083,1.8333,8.7083,1.8333v0.0262l6.0634-19.3333l0.5143,18.9039l-4.156,13.9804 c1.7944,1.9678,4.6915,1.352,4.6915,1.352v2.2188c10.6269,1.6752,18.3598,0.6209,22.6412-0.3947"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.9299,12.9217c0,0,6.1059,1.0241,7.9809,2.7116s3.4375,7.0625,3.4375,7.0625l7.1241,22.6418l0.0009,0.0041 c-4.875-1.0208-8.7083,1.8333-8.7083,1.8333l-6.0634-19.3333l-0.5143,18.9039l4.6611,15.6794"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36.0952,17.5229c-2.6908-4.8889-4.9342-7.8331-5.4623-8.6188c0,0-1.1458-1.7917,0.9583-1.7917h4.5h0.0071h4.5 c2.1042,0,0.9583,1.7917,0.9583,1.7917c-1.1477,1.7075-10.3965,13.609-14.7321,33.5106"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30.9212,42.692c4.1212-17.8053,11.9731-28.1405,13.0087-29.7703l-2.1148-5.2704"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.7748,22.0448c-2.6766-5.2005-4.9797-8.2986-5.5081-9.1302"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "28.2667",
      x2: "30.3815",
      y1: "12.9217",
      y2: "7.6512",
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
      d: "M47.3123,42.1536c-9.8928,0.9136-17.8024,0.7124-22.6167,0.0011"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.2005,46.2577c-9.7712,0.8963-17.5847,0.7032-22.393,0.0074"
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
      d: "M28.2667,12.9217c0,0-6.3025,0.7358-8.1775,2.4233s-3.4375,7.0625-3.4375,7.0625L9.5276,45.0492l-0.0009,0.0041l0.0009-0.0303 l-0.0009,0.0041c4.875-1.0208,8.7083,1.8333,8.7083,1.8333v0.0262l6.0634-19.3333l0.5143,18.9039l-4.156,13.9804 c1.7944,1.9678,4.6915,1.352,4.6915,1.352v2.2188c10.6269,1.6752,18.3598,0.6209,22.6412-0.3947"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.9299,12.9217c0,0,6.1059,1.0241,7.9809,2.7116s3.4375,7.0625,3.4375,7.0625l7.1241,22.6418l0.0009,0.0041 c-4.875-1.0208-8.7083,1.8333-8.7083,1.8333l-6.0634-19.3333l-0.5143,18.9039l4.6611,15.6794"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36.0952,17.5229c-2.6908-4.8889-4.9342-7.8331-5.4623-8.6188c0,0-1.1458-1.7917,0.9583-1.7917h4.5h0.0071h4.5 c2.1042,0,0.9583,1.7917,0.9583,1.7917c-1.1477,1.7075-10.3965,13.609-14.7321,33.5106"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30.9212,42.692c4.1212-17.8053,11.9731-28.1405,13.0087-29.7703l-2.1148-5.2704"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.7748,22.0448c-2.6766-5.2005-4.9797-8.2986-5.5081-9.1302"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "28.2667",
      x2: "30.3815",
      y1: "12.9217",
      y2: "7.6512",
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
      d: "M47.3123,42.1536c-9.8928,0.9136-17.8024,0.7124-22.6167,0.0011"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.2005,46.2577c-9.7712,0.8963-17.5847,0.7032-22.393,0.0074"
    })));
  }
};

export default MartialArtsUniform;