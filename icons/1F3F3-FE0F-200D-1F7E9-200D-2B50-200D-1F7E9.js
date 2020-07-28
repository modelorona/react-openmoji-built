import React from 'react';

const EsperantoFlag = ({
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
      x: "5",
      y: "17",
      width: "62",
      height: "38",
      fill: "#5c9e31"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "6",
      y: "18",
      width: "18",
      height: "18",
      fill: "#fff",
      "fill-rule": "evenodd",
      strokeWidth: "0",
      "paint-order": "normal"
    }), /*#__PURE__*/React.createElement("path", {
      transform: "matrix(.9199 0 0 .9196 1.096 1.101)",
      fill: "#5c9e31",
      "fill-rule": "evenodd",
      stroke: "#5c9e31",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.087",
      d: "m15.11 21.88 1.551 4.147 4.423 0.1933-3.465 2.756 1.183 4.266-3.692-2.443-3.692 2.443 1.183-4.266-3.465-2.756 4.423-0.1933z",
      "paint-order": "normal"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "17",
      width: "62",
      height: "38",
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
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "17",
      width: "62",
      height: "38",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default EsperantoFlag;