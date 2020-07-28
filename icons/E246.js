import React from 'react';

const PeopleDialogue = ({
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
      d: "M16.0497,54.9455c-1.6613,0-3.0081-1.3468-3.0081-3.0081v-8.862l-0.0015-3.4078 c-0.0001-0.2111,0.2466-0.326,0.4082-0.1901l3.7794,3.3007c0.1356,0.1142,0.3072,0.1768,0.4845,0.1768h23.2796 c1.6613,0,3.0081,1.3468,3.0081,3.0081v5.9742c0,1.6613-1.3468,3.0081-3.0081,3.0081L16.0497,54.9455L16.0497,54.9455z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M58.6474,32.468c0.1623,0.1367,0.4103,0.0212,0.4102-0.191l-0.0014-3.2289h0.0005v-9.0304 c0-1.6702-1.354-3.0242-3.0242-3.0242H31.1218c-1.6702,0-3.0242,1.354-3.0242,3.0242v6.0062c0,1.6702,1.354,3.0242,3.0242,3.0242 h23.3303c0.1782,0,0.3507,0.063,0.487,0.1777L58.6474,32.468z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "13.0196",
      cy: "20.1223",
      r: "3",
      fill: "#FCEA2B"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "59.0802",
      cy: "42.0363",
      r: "3",
      fill: "#FCEA2B"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#FCEA2B",
      points: "7.4561,30.2263 10.5376,27.5123 15.3719,27.3145 18.3403,30.1415 19.0247,34.1215 6.9435,34.1137"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#FCEA2B",
      points: "53.5796,52.1428 56.6611,49.4288 61.4953,49.2309 64.4638,52.058 65.1481,56.0379 53.067,56.0301"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "13.0196",
      cy: "20.1223",
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
      d: "M7.0196,33.1223c0,0,1-4.3112,3-5.3112s4-1,6,0s3,5.3112,3,5.3112"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "59.0802",
      cy: "42.0363",
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
      d: "M53.0802,55.0363c0,0,1-4.3112,3-5.3112s4-1,6,0s3,5.3112,3,5.3112"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.0497,54.9455 c-1.6613,0-3.0081-1.3468-3.0081-3.0081v-8.862l-0.0015-3.4078c-0.0001-0.2111,0.2466-0.326,0.4082-0.1901l3.7794,3.3007 c0.1356,0.1142,0.3072,0.1768,0.4845,0.1768h23.2796c1.6613,0,3.0081,1.3468,3.0081,3.0081v5.9742 c0,1.6613-1.3468,3.0081-3.0081,3.0081L16.0497,54.9455L16.0497,54.9455z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58.6474,32.468 c0.1623,0.1367,0.4103,0.0212,0.4102-0.191l-0.0014-3.2289h0.0005v-9.0304c0-1.6702-1.354-3.0242-3.0242-3.0242H31.1218 c-1.6702,0-3.0242,1.354-3.0242,3.0242v6.0062c0,1.6702,1.354,3.0242,3.0242,3.0242h23.3303c0.1782,0,0.3507,0.063,0.487,0.1777 L58.6474,32.468z"
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "13.0196",
      cy: "20.1223",
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
      d: "M7.0196,33.1223c0,0,1-4.3112,3-5.3112s4-1,6,0s3,5.3112,3,5.3112"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "59.0802",
      cy: "42.0363",
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
      d: "M53.0802,55.0363c0,0,1-4.3112,3-5.3112s4-1,6,0s3,5.3112,3,5.3112"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.0497,54.9455 c-1.6613,0-3.0081-1.3468-3.0081-3.0081v-8.862l-0.0015-3.4078c-0.0001-0.2111,0.2466-0.326,0.4082-0.1901l3.7794,3.3007 c0.1356,0.1142,0.3072,0.1768,0.4845,0.1768h23.2796c1.6613,0,3.0081,1.3468,3.0081,3.0081v5.9742 c0,1.6613-1.3468,3.0081-3.0081,3.0081L16.0497,54.9455L16.0497,54.9455z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58.6474,32.468 c0.1623,0.1367,0.4103,0.0212,0.4102-0.191l-0.0014-3.2289h0.0005v-9.0304c0-1.6702-1.354-3.0242-3.0242-3.0242H31.1218 c-1.6702,0-3.0242,1.354-3.0242,3.0242v6.0062c0,1.6702,1.354,3.0242,3.0242,3.0242h23.3303c0.1782,0,0.3507,0.063,0.487,0.1777 L58.6474,32.468z"
    })));
  }
};

export default PeopleDialogue;