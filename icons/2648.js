import React from 'react';

const Aries = ({
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "12",
      y: "12",
      width: "48",
      height: "48",
      fill: "#b399c8"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "3",
      d: "m36 48.84c3.087-16.36 6.337-26.33 11.64-25.68 2.611 0.586 3.711 3.609 2.58 5.817"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "12",
      y: "12",
      width: "48",
      height: "48",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "3",
      d: "m36 48.84c-3.087-16.36-6.337-26.33-11.64-25.68-2.611 0.586-3.711 3.609-2.58 5.817"
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "3",
      d: "m36 48.84c3.087-16.36 6.337-26.33 11.64-25.68 2.611 0.586 3.711 3.609 2.58 5.817"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "12",
      y: "12",
      width: "48",
      height: "48",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "3",
      d: "m36 48.84c-3.087-16.36-6.337-26.33-11.64-25.68-2.611 0.586-3.711 3.609-2.58 5.817"
    })));
  }
};

export default Aries;