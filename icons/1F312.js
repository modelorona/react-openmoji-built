import React from 'react';

const WaxingCrescentMoon = ({
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
      cx: "36",
      cy: "36",
      r: "28",
      fill: "#3f3f3f",
      stroke: "#3f3f3f",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M55,35A28.001,28.001,0,0,1,28.4535,62.9626,27.9995,27.9995,0,1,0,36,8q-.7312,0-1.4535.0374A28.0059,28.0059,0,0,1,55,35Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "28",
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
      d: "M55,35A28.001,28.001,0,0,1,28.4535,62.9626,27.9995,27.9995,0,1,0,36,8q-.7312,0-1.4535.0374A28.0059,28.0059,0,0,1,55,35Z"
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
      cx: "36",
      cy: "36",
      r: "28",
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
      d: "M55,35A28.001,28.001,0,0,1,28.4535,62.9626,27.9995,27.9995,0,1,0,36,8q-.7312,0-1.4535.0374A28.0059,28.0059,0,0,1,55,35Z"
    })));
  }
};

export default WaxingCrescentMoon;