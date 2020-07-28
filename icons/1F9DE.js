import React from 'react';

const Genie = ({
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
      fill: "#b1cc33",
      d: "M45.5218,50.5618l.797,2.48-1.1339,4.9948-5.1813,5.6743a23.9672,23.9672,0,0,0,14.9375-4.1124s2-13-10-13c-3.1918,2.1279-5.9264,3.5984-9,3.5921h.125c-3.0736.0063-5.8081-1.4642-9-3.5921-12,0-10,13-10,13,9.9776,6.0208,14.368,3.708,28.1188-1.5619l.6171-3.5208-24.0677,1.35,5.3094-.9076"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#b1cc33",
      d: "M54.9259,59.5988s2-13-10-13c-3.1919,2.1279-5.9264,3.5984-9,3.5921h.125c-3.0736.0063-5.8081-1.4642-9-3.5921-12,0-10,13-10,13"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      d: "M45.2082,46.5988a18.0129,18.0129,0,0,1-8.9375,3.5885c13.0625.4115,13.0625,5.4115,13.8247,9.4115h5.1128S57.2082,46.5988,45.2082,46.5988Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      d: "M55.2082,59.5988S43.452,68.6247,34.4714,62.562l10.7135-4.5251,1.1339-4.9948S55.2958,50.578,55.2082,59.5988Z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "36.0035",
      cy: "30.0988",
      rx: "11.3386",
      ry: "14.1732",
      fill: "#b1cc33"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M49.1748,14.6732c-13.1713,4.1165-24.51,13.5184-24.51,13.5184s-3.96-5.3394-2.2369-10.7265c0,0,2.2369-8.0773,13.036-8.0773,7.7035,0,11.5948,3.1694,13.7108,5.2854C55.3211,23.3981,47.04,28.2774,47.04,28.2774a126.1662,126.1662,0,0,1-9.655-8.3413"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "M49.1748,14.6732C55.3211,23.3981,47.04,28.2774,47.04,28.2774a126.1662,126.1662,0,0,1-9.655-8.3413"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M36.0036,25.7654h0a2,2,0,0,1-2-2v-4a2,2,0,0,1,2-2h0a2,2,0,0,1,2,2v4A2,2,0,0,1,36.0036,25.7654Z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#fcea2b",
      points: "45.185 58.037 40.773 59.868 40.773 54.623 45.802 54.623 45.185 58.037"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M40.0036,63.7112a23.9672,23.9672,0,0,0,14.9375-4.1124s2-13-10-13c-3.1918,2.1279-5.9264,3.5984-9,3.5921h.125c-3.0736.0063-5.8081-1.4642-9-3.5921-12,0-10,13-10,13,9.9776,6.0208,14.368,3.708,28.1188-1.5619l.6171-3.5208-24.0677,1.35"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M45.5218,50.5618l.797,2.48-1.1339,4.9948"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M42.0036,28.738a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34.0036,28.738a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M36.0035,38.74a7.6528,7.6528,0,0,1-3.4473-.8579,1,1,0,0,1,.8946-1.7891,5.3772,5.3772,0,0,0,5.1054,0,1,1,0,0,1,.8946,1.7891A7.6528,7.6528,0,0,1,36.0035,38.74Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.006,21.7177c-1.28.77-2.47,1.53-3.53,2.24-3.13,2.09-5.21,3.75-5.7,4.14-.07.06-.11.09-.11.09s-3.96-5.34-2.24-10.72c0,0,2.24-8.08,13.04-8.08,7.7,0,11.59,3.17,13.71,5.29,5.58,7.91-.72,12.65-1.94,13.47-.13.09-.2.13-.2.13s-4.41-3.38-9.03-7.75"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M37.976,19.4577a66.4314,66.4314,0,0,1,11.2-4.78"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.0036,25.7654h0a2,2,0,0,1-2-2v-4a2,2,0,0,1,2-2h0a2,2,0,0,1,2,2v4A2,2,0,0,1,36.0036,25.7654Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.7729",
      x2: "40.7729",
      y1: "54.9161",
      y2: "59.6645",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M24.7429,28.2805a17.8611,17.8611,0,0,0-.0948,1.8417c0,7.8276,5.0765,14.1732,11.3386,14.1732S47.3253,37.95,47.3253,30.1222a17.8264,17.8264,0,0,0-.101-1.9"
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
      d: "M40.0036,63.7112a23.9672,23.9672,0,0,0,14.9375-4.1124s2-13-10-13c-3.1918,2.1279-5.9264,3.5984-9,3.5921h.125c-3.0736.0063-5.8081-1.4642-9-3.5921-12,0-10,13-10,13,9.9776,6.0208,14.368,3.708,28.1188-1.5619l.6171-3.5208-24.0677,1.35"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M45.5218,50.5618l.797,2.48-1.1339,4.9948"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M42.0036,28.738a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34.0036,28.738a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M36.0035,38.74a7.6528,7.6528,0,0,1-3.4473-.8579,1,1,0,0,1,.8946-1.7891,5.3772,5.3772,0,0,0,5.1054,0,1,1,0,0,1,.8946,1.7891A7.6528,7.6528,0,0,1,36.0035,38.74Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.006,21.7177c-1.28.77-2.47,1.53-3.53,2.24-3.13,2.09-5.21,3.75-5.7,4.14-.07.06-.11.09-.11.09s-3.96-5.34-2.24-10.72c0,0,2.24-8.08,13.04-8.08,7.7,0,11.59,3.17,13.71,5.29,5.58,7.91-.72,12.65-1.94,13.47-.13.09-.2.13-.2.13s-4.41-3.38-9.03-7.75"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M37.976,19.4577a66.4314,66.4314,0,0,1,11.2-4.78"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.0036,25.7654h0a2,2,0,0,1-2-2v-4a2,2,0,0,1,2-2h0a2,2,0,0,1,2,2v4A2,2,0,0,1,36.0036,25.7654Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.7729",
      x2: "40.7729",
      y1: "54.9161",
      y2: "59.6645",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M24.7429,28.2805a17.8611,17.8611,0,0,0-.0948,1.8417c0,7.8276,5.0765,14.1732,11.3386,14.1732S47.3253,37.95,47.3253,30.1222a17.8264,17.8264,0,0,0-.101-1.9"
    })));
  }
};

export default Genie;