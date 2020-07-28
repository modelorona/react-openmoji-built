import React from 'react';

const SmallBlueDiamond = ({
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
      x: "21.7114",
      y: "22.2114",
      width: "27.5772",
      height: "27.5772",
      transform: "translate(-15.0581 35.6464) rotate(-45)",
      fill: "#92d3f5"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "21.7114",
      y: "22.2114",
      width: "27.5772",
      height: "27.5772",
      transform: "translate(-15.0581 35.6464) rotate(-45)",
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
      x: "21.7114",
      y: "22.2114",
      width: "27.5772",
      height: "27.5772",
      transform: "translate(-15.0581 35.6464) rotate(-45)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default SmallBlueDiamond;