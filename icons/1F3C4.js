import React from 'react';

const PersonSurfing = ({
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
      fill: "#92D3F5",
      stroke: "none",
      d: "M34,66c0,0,5,1,8,0l5-2l5-6c0,0,2-3,3-6s2.0313-3.625,2.8281-3.625c0.7969,0,1.8291,0.625,1.8291,0.625 s0.6914,2.1738,0.167,3c0,0-2.1103,3.2178-1.4736,2.4795c0,0,1.7744-0.3545,2.6494-0.3545s3.6689,0.3867,4,2.375 c0.125,0.75-0.125,1.8242,1.125,2.9746c0,0,1.1221,4,0.709,3.9697c-0.4131-0.0302-4.583,0.543-5.834-0.4013 c0,0-2.751-3.0215-3.834-3.0215c0,0-2.3066,1.3506-5.167,3.4228C44.333,69,36.6445,68.0352,35,66.7754"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "35.9688",
      cy: "11.0938",
      r: "3",
      fill: "#FCEA2B",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      stroke: "none",
      d: "M45,23v16v8l-2,13h-3V47l-2-8h-1l-6,8l-4,10h-3l2-13l6-9l2-5v-5l-2.916-1.7495 c0,0-1.707-0.5835-3.999,0.6245S21.501,25.833,20.001,26s-6.6905,0-7.125,0C11.709,26,11,25.3335,11,24.042 c0,0,8.584-0.0425,10.25-0.626s10.25-4.0835,10.25-4.0835L46.084,18l11.9707,6.7378l3.7803,1.6792c0,0-0.377,1.8745-2.8975,1.1143 C56.6631,26.8452,52.667,25,49.0625,22.5c-0.6504-0.4507-3.125-1.0937-3.125,0.5"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#000000",
      stroke: "none",
      d: "M65.834,63.4443"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.9688",
      cy: "11.0938",
      r: "3",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M11.875,24L17,23.9927c2.75-0.0039,6.7998-1.1289,9-2.5c2.2002-1.3711,5.7998-2.7178,8-2.9927c2.2002-0.2749,6.25-0.5,9-0.5l0,0 c2.75,0,6.3496,1.125,8,2.5c1.6504,1.375,4.5752,3.1748,6.5,4C59.4248,25.3252,61,26,61,26"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.9834,52.5381"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45,23v14c0,1.0996,0,2.9004,0,4v4c0,1.0996-0.1367,2.8896-0.3037,3.9766l-1.3926,9.0468C43.1367,59.1104,42.3252,60,41.5,60 c-0.8252,0-1.5-0.9004-1.5-2v-9c0-1.0996-0.2187-2.873-0.4854-3.9404l-1.0292-4.1192C38.2188,39.873,37.7754,39,37.5,39 c-0.2754,0-1.04,0.7197-1.7002,1.5996l-3.6006,4.8008c-0.6601,0.8799-1.5342,2.4355-1.9424,3.457l-2.5146,6.2852 C27.334,56.1641,26.3242,57,25.5,57c-0.8242,0-1.3633-0.8896-1.1953-1.9766l1.3906-9.0468 c0.168-1.087,0.8037-2.7256,1.4141-3.6407l3.7812-5.6718c0.6104-0.9151,1.4434-2.5,1.8516-3.5215l0.5156-1.2852 C33.666,30.8359,34,29.0996,34,28v-1c0-1.1001-0.4502-2.4502-1-3c-0.5498-0.5498-1-1-1-1"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M56,53c0,0,0-4,2-4s2,2,1,3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53,63.4443c0,0,1.1055-1.5527,2-2c2-1,3,0,3,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M62,62.7441c0,0,3.2686,2.3047,4.4209,0.67c0.6445-0.9141,0.9121-3.0284-2.1162-3.9395"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M6.8125,57.1875c0,0,2.3535,1.2939,9.1875,2.8125c9,2,22.8125,3.1875,22.8125,3.1875"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33,66c4,1,9,1,12-1c3.7207-2.4805,6-9,15-10"
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
      fill: "#000000",
      stroke: "none",
      d: "M65.834,63.4443"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.9688",
      cy: "11.0938",
      r: "3",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M11.875,24L17,23.9927c2.75-0.0039,6.7998-1.1289,9-2.5c2.2002-1.3711,5.7998-2.7178,8-2.9927c2.2002-0.2749,6.25-0.5,9-0.5l0,0 c2.75,0,6.3496,1.125,8,2.5c1.6504,1.375,4.5752,3.1748,6.5,4C59.4248,25.3252,61,26,61,26"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.9834,52.5381"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45,23v14c0,1.0996,0,2.9004,0,4v4c0,1.0996-0.1367,2.8896-0.3037,3.9766l-1.3926,9.0468C43.1367,59.1104,42.3252,60,41.5,60 c-0.8252,0-1.5-0.9004-1.5-2v-9c0-1.0996-0.2187-2.873-0.4854-3.9404l-1.0292-4.1192C38.2188,39.873,37.7754,39,37.5,39 c-0.2754,0-1.04,0.7197-1.7002,1.5996l-3.6006,4.8008c-0.6601,0.8799-1.5342,2.4355-1.9424,3.457l-2.5146,6.2852 C27.334,56.1641,26.3242,57,25.5,57c-0.8242,0-1.3633-0.8896-1.1953-1.9766l1.3906-9.0468 c0.168-1.087,0.8037-2.7256,1.4141-3.6407l3.7812-5.6718c0.6104-0.9151,1.4434-2.5,1.8516-3.5215l0.5156-1.2852 C33.666,30.8359,34,29.0996,34,28v-1c0-1.1001-0.4502-2.4502-1-3c-0.5498-0.5498-1-1-1-1"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M56,53c0,0,0-4,2-4s2,2,1,3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53,63.4443c0,0,1.1055-1.5527,2-2c2-1,3,0,3,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M62,62.7441c0,0,3.2686,2.3047,4.4209,0.67c0.6445-0.9141,0.9121-3.0284-2.1162-3.9395"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M6.8125,57.1875c0,0,2.3535,1.2939,9.1875,2.8125c9,2,22.8125,3.1875,22.8125,3.1875"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33,66c4,1,9,1,12-1c3.7207-2.4805,6-9,15-10"
    })));
  }
};

export default PersonSurfing;