import React from 'react';

const BrowncoatFlag = ({
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
      fill: "#5c9e31",
      d: "M67 17H5.31909V54.8044H67V17Z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "30",
      width: "62",
      height: "4",
      fill: "#FCEA2B"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "38",
      width: "62",
      height: "4",
      fill: "#FCEA2B"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M67 17H5V55H67V17Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36 25L38.4697 32.9463H46.4616L39.996 37.8574L42.4656 45.8037L36 40.8926L29.5344 45.8037L32.004 37.8574L25.5384 32.9463H33.5303L36 25Z"
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
      d: "M67 17H5V55H67V17Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36 25L38.4697 32.9463H46.4616L39.996 37.8574L42.4656 45.8037L36 40.8926L29.5344 45.8037L32.004 37.8574L25.5384 32.9463H33.5303L36 25Z"
    })));
  }
};

export default BrowncoatFlag;