import React from 'react';

const LargeBlueDiamond = ({
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "19.1581",
      y: "18.3756",
      width: "34.2487",
      height: "34.2487",
      transform: "translate(-14.4754 36.0533) rotate(-45)",
      fill: "#92d3f5"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "19.1581",
      y: "18.3756",
      width: "34.2487",
      height: "34.2487",
      transform: "translate(-14.4754 36.0533) rotate(-45)",
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "19.1581",
      y: "18.3756",
      width: "34.2487",
      height: "34.2487",
      transform: "translate(-14.4754 36.0533) rotate(-45)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default LargeBlueDiamond;