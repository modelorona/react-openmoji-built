import React from 'react';

const LargeOrangeDiamond = ({
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
      id: "Diamond_Color_1",
      x: "18.3411",
      y: "18.2994",
      width: "35.3178",
      height: "35.3178",
      transform: "translate(35.9705 -14.9239) rotate(45)",
      fill: "#f4aa41"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      id: "Diamond_Line_1",
      x: "18.3411",
      y: "18.2994",
      width: "35.3178",
      height: "35.3178",
      transform: "translate(35.9705 -14.9239) rotate(45)",
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
      id: "Diamond_Line_1",
      x: "18.3411",
      y: "18.2994",
      width: "35.3178",
      height: "35.3178",
      transform: "translate(35.9705 -14.9239) rotate(45)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default LargeOrangeDiamond;