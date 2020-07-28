import React from 'react';

const LatinCross = ({
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
      fill: "#B399C8",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53.13,28.38v2.91c0,1.6569-1.3431,3-3,3H43.45c-1.6569,0-3,1.3431-3,3v20.72c0,1.6569-1.3431,3-3,3h-2.9c-1.6569,0-3-1.3431-3-3 V37.29c0-1.6569-1.3431-3-3-3H21.87c-1.6569,0-3-1.3431-3-3v-2.91c0-1.6569,1.3431-3,3-3h6.6799c1.6569,0,3-1.3431,3-3v-8.39 c0-1.6569,1.3431-3,3-3h2.9c1.6569,0,3,1.3431,3,3v8.39c0,1.6569,1.3431,3,3,3H50.13C51.7869,25.38,53.13,26.7232,53.13,28.38z"
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
      d: "M53.13,28.38v2.91c0,1.6569-1.3431,3-3,3H43.45c-1.6569,0-3,1.3431-3,3v20.72c0,1.6569-1.3431,3-3,3h-2.9c-1.6569,0-3-1.3431-3-3 V37.29c0-1.6569-1.3431-3-3-3H21.87c-1.6569,0-3-1.3431-3-3v-2.91c0-1.6569,1.3431-3,3-3h6.6799c1.6569,0,3-1.3431,3-3v-8.39 c0-1.6569,1.3431-3,3-3h2.9c1.6569,0,3,1.3431,3,3v8.39c0,1.6569,1.3431,3,3,3H50.13C51.7869,25.38,53.13,26.7232,53.13,28.38z"
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
      d: "M53.13,28.38v2.91c0,1.6569-1.3431,3-3,3H43.45c-1.6569,0-3,1.3431-3,3v20.72c0,1.6569-1.3431,3-3,3h-2.9c-1.6569,0-3-1.3431-3-3 V37.29c0-1.6569-1.3431-3-3-3H21.87c-1.6569,0-3-1.3431-3-3v-2.91c0-1.6569,1.3431-3,3-3h6.6799c1.6569,0,3-1.3431,3-3v-8.39 c0-1.6569,1.3431-3,3-3h2.9c1.6569,0,3,1.3431,3,3v8.39c0,1.6569,1.3431,3,3,3H50.13C51.7869,25.38,53.13,26.7232,53.13,28.38z"
    })));
  }
};

export default LatinCross;