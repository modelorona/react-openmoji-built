import React from 'react';

const RoundPushpin = ({
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
      fill: "none",
      stroke: "none",
      d: "M36.5,36.3787"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      stroke: "none",
      d: "M35.9717,9.7197c-6.4217,0-11.6459,5.2242-11.6459,11.6459S29.55,33.0115,35.9717,33.0115 c6.4216,0,11.6459-5.2242,11.6459-11.6459S42.3933,9.7197,35.9717,9.7197z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D22F27",
      stroke: "none",
      d: "M39.1689,32.3818c1.7258-0.6456,3.289-0.8166,4.8143-2.212c2.1013-1.9223,3.9035-5.3398,3.9035-8.0238 c0-2.4449-0.578-5.3031-2.3421-7.6335c-1.6276-2.15-4.3608-3.8416-6.3757-4.554c0,0,3.5175,5.6512,3.5175,11.3739 S39.1689,32.3818,39.1689,32.3818z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      d: "M35.837,63.4888l2.8467-7.6704c0,0-0.8248-19.5768-0.3788-19.6775h-5.1693 c0.4459,0.1007-0.2244,19.5589-0.2244,19.5589L35.837,63.4888z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      stroke: "none",
      d: "M35.9556,62.7376l2.649-7.0773c0,0,0.1045-19.0577,0.0622-19.5266l-2.9331,0.0072L35.9556,62.7376z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "35.9715",
      cy: "21.3656",
      r: "11.8084",
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
      points: "38.5196,37.0981 38.5196,55.7135 35.9356,64.2191 32.9209,55.7135 32.9209,37.0981"
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "35.9715",
      cy: "21.3656",
      r: "11.8084",
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
      points: "38.5196,37.0981 38.5196,55.7135 35.9356,64.2191 32.9209,55.7135 32.9209,37.0981"
    })));
  }
};

export default RoundPushpin;