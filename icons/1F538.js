import React from 'react';

const SmallOrangeDiamond = ({
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
      x: "22.7114",
      y: "22.2114",
      width: "27.5772",
      height: "27.5772",
      transform: "translate(-14.7652 36.3536) rotate(-45)",
      fill: "#e27022"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "22.7114",
      y: "22.2114",
      width: "27.5772",
      height: "27.5772",
      transform: "translate(-14.7652 36.3536) rotate(-45)",
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
      x: "22.7114",
      y: "22.2114",
      width: "27.5772",
      height: "27.5772",
      transform: "translate(-14.7652 36.3536) rotate(-45)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default SmallOrangeDiamond;