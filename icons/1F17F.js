import React from 'react';

const PButton = ({
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
      fill: "#d0cfce",
      stroke: "none",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.0349,60H12.9651 C12.4343,60,12,59.5657,12,59.0349V12.9651C12,12.4343,12.4343,12,12.9651,12h46.0698C59.5657,12,60,12.4343,60,12.9651v46.0698 C60,59.5657,59.5657,60,59.0349,60z"
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
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.0349,60H12.9651 C12.4343,60,12,59.5657,12,59.0349V12.9651C12,12.4343,12.4343,12,12.9651,12h46.0698C59.5657,12,60,12.4343,60,12.9651v46.0698 C60,59.5657,59.5657,60,59.0349,60z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30.1098,47.0048v-22h8.3889c3.0263,0,5.4793,2.4533,5.4793,5.4796l0,0c0,3.0263-2.453,5.4793-5.4793,5.4793h-8.3889"
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
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.0349,60H12.9651 C12.4343,60,12,59.5657,12,59.0349V12.9651C12,12.4343,12.4343,12,12.9651,12h46.0698C59.5657,12,60,12.4343,60,12.9651v46.0698 C60,59.5657,59.5657,60,59.0349,60z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30.1098,47.0048v-22h8.3889c3.0263,0,5.4793,2.4533,5.4793,5.4796l0,0c0,3.0263-2.453,5.4793-5.4793,5.4793h-8.3889"
    })));
  }
};

export default PButton;