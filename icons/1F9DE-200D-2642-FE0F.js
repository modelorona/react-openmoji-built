import React from 'react';

const ManGenie = ({
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
      fill: "#92d3f5",
      d: "M45.5317,50.6166l.797,2.48-1.1339,4.9948L40.0135,63.766A23.9672,23.9672,0,0,0,54.951,59.6536s2-13-10-13c-3.1918,2.1279-5.9264,3.5984-9,3.5921h.125c-3.0736.0063-5.8081-1.4642-9-3.5921-12,0-10,13-10,13,9.9776,6.0208,14.368,3.708,28.1188-1.5619l.6171-3.5208-24.0677,1.35,5.3094-.9076"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92d3f5",
      d: "M54.9358,59.6536s2-13-10-13c-3.1919,2.1279-5.9264,3.5984-9,3.5921h.125c-3.0736.0063-5.8081-1.4642-9-3.5921-12,0-10,13-10,13"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61b2e4",
      d: "M45.2181,46.6536a18.0129,18.0129,0,0,1-8.9375,3.5885c13.0625.4115,13.0625,5.4115,13.8247,9.4115h5.1128S57.2181,46.6536,45.2181,46.6536Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61b2e4",
      d: "M55.2181,59.6536S43.4619,68.68,34.4813,62.6168l10.7135-4.5251,1.1339-4.9948S55.3057,50.6328,55.2181,59.6536Z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "36.0134",
      cy: "30.1536",
      rx: "11.3386",
      ry: "14.1732",
      fill: "#92d3f5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M49.1847,14.728c-13.1713,4.1165-24.51,13.5184-24.51,13.5184s-3.96-5.3394-2.2369-10.7265c0,0,2.2369-8.0773,13.036-8.0773,7.7035,0,11.5948,3.1694,13.7108,5.2854C55.331,23.4529,47.05,28.3322,47.05,28.3322a126.1662,126.1662,0,0,1-9.655-8.3413"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3f3f3f",
      d: "M36.0422,46.9384c5.0174-.1253,9.5065-6.0464,10.3-10.8959-3.2477,5.68-8.6155,4.61-8.6155,4.61L36.02,38.0191l-1.7063,2.6338s-5.3678,1.0695-8.6155-4.61c.7933,4.85,5.2824,10.7706,10.3,10.8959"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "M49.1847,14.728C55.331,23.4529,47.05,28.3322,47.05,28.3322a126.1662,126.1662,0,0,1-9.655-8.3413"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M36.0135,25.82h0a2,2,0,0,1-2-2v-4a2,2,0,0,1,2-2h0a2,2,0,0,1,2,2v4A2,2,0,0,1,36.0135,25.82Z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#fcea2b",
      points: "45.195 58.092 40.783 59.923 40.783 54.678 45.812 54.678 45.195 58.092"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M40.0135,63.766A23.9672,23.9672,0,0,0,54.951,59.6536s2-13-10-13c-3.1918,2.1279-5.9264,3.5984-9,3.5921h.125c-3.0736.0063-5.8081-1.4642-9-3.5921-12,0-10,13-10,13,9.9776,6.0208,14.368,3.708,28.1188-1.5619l.6171-3.5208-24.0677,1.35"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M45.5317,50.6166l.797,2.48-1.1339,4.9948"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M25.7159,36.0725a17.002,17.002,0,0,1-1.04-5.92,18.7051,18.7051,0,0,1,.11-2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M47.2459,28.2025a17.9177,17.9177,0,0,1,.11,1.95,17.0185,17.0185,0,0,1-1.06,5.97"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M42.0135,28.7928a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34.0135,28.7928a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M36.0134,38.7952a7.6528,7.6528,0,0,1-3.4473-.8579,1,1,0,0,1,.8946-1.7891,5.3772,5.3772,0,0,0,5.1054,0,1,1,0,0,1,.8946,1.7891A7.6528,7.6528,0,0,1,36.0134,38.7952Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.0422,46.9384c5.0174-.1253,9.5065-6.0464,10.3-10.8959-3.2477,5.68-8.6155,4.61-8.6155,4.61L36.02,38.0191l-1.7063,2.6338s-5.3678,1.0695-8.6155-4.61c.7933,4.85,5.2824,10.7706,10.3,10.8959"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.0159,21.7725c-1.28.77-2.47,1.53-3.53,2.24-3.13,2.09-5.21,3.75-5.7,4.14-.07.06-.11.09-.11.09s-3.96-5.34-2.24-10.72c0,0,2.24-8.08,13.04-8.08,7.7,0,11.59,3.17,13.71,5.29,5.58,7.91-.72,12.65-1.94,13.47-.13.09-.2.13-.2.13s-4.41-3.38-9.03-7.75"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M37.9859,19.5125a66.4314,66.4314,0,0,1,11.2-4.78"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.0135,25.82h0a2,2,0,0,1-2-2v-4a2,2,0,0,1,2-2h0a2,2,0,0,1,2,2v4A2,2,0,0,1,36.0135,25.82Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.7828",
      x2: "40.7828",
      y1: "54.9709",
      y2: "59.7193",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
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
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M40.0135,63.766A23.9672,23.9672,0,0,0,54.951,59.6536s2-13-10-13c-3.1918,2.1279-5.9264,3.5984-9,3.5921h.125c-3.0736.0063-5.8081-1.4642-9-3.5921-12,0-10,13-10,13,9.9776,6.0208,14.368,3.708,28.1188-1.5619l.6171-3.5208-24.0677,1.35"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M45.5317,50.6166l.797,2.48-1.1339,4.9948"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M25.7159,36.0725a17.002,17.002,0,0,1-1.04-5.92,18.7051,18.7051,0,0,1,.11-2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M47.2459,28.2025a17.9177,17.9177,0,0,1,.11,1.95,17.0185,17.0185,0,0,1-1.06,5.97"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M42.0135,28.7928a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34.0135,28.7928a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M36.0134,38.7952a7.6528,7.6528,0,0,1-3.4473-.8579,1,1,0,0,1,.8946-1.7891,5.3772,5.3772,0,0,0,5.1054,0,1,1,0,0,1,.8946,1.7891A7.6528,7.6528,0,0,1,36.0134,38.7952Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.0422,46.9384c5.0174-.1253,9.5065-6.0464,10.3-10.8959-3.2477,5.68-8.6155,4.61-8.6155,4.61L36.02,38.0191l-1.7063,2.6338s-5.3678,1.0695-8.6155-4.61c.7933,4.85,5.2824,10.7706,10.3,10.8959"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.0159,21.7725c-1.28.77-2.47,1.53-3.53,2.24-3.13,2.09-5.21,3.75-5.7,4.14-.07.06-.11.09-.11.09s-3.96-5.34-2.24-10.72c0,0,2.24-8.08,13.04-8.08,7.7,0,11.59,3.17,13.71,5.29,5.58,7.91-.72,12.65-1.94,13.47-.13.09-.2.13-.2.13s-4.41-3.38-9.03-7.75"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M37.9859,19.5125a66.4314,66.4314,0,0,1,11.2-4.78"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.0135,25.82h0a2,2,0,0,1-2-2v-4a2,2,0,0,1,2-2h0a2,2,0,0,1,2,2v4A2,2,0,0,1,36.0135,25.82Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.7828",
      x2: "40.7828",
      y1: "54.9709",
      y2: "59.7193",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default ManGenie;