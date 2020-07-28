import React from 'react';

const PowerSleepSymbol = ({
  size,
  outline
}) => {
  if (!size) size = '1.7em';

  if (!outline) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      fill: "none",
      viewBox: "0 0 72 72",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "color"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      "fill-rule": "evenodd",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53.5366 45.6237C45.7296 51.1493 34.8495 50.4162 27.8579 43.4246C21.4225 36.9892 20.2895 27.2593 24.4589 19.6639C19.341 23.2862 16 29.2529 16 36C16 47.0457 24.9543 56 36 56C43.5571 56 50.1353 51.8086 53.5366 45.6237Z",
      "clip-rule": "evenodd"
    })));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      fill: "none",
      viewBox: "0 0 72 72",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      "fill-rule": "evenodd",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53.5366 45.6237C45.7296 51.1493 34.8495 50.4162 27.8579 43.4246C21.4225 36.9892 20.2895 27.2593 24.4589 19.6639C19.341 23.2862 16 29.2529 16 36C16 47.0457 24.9543 56 36 56C43.5571 56 50.1353 51.8086 53.5366 45.6237Z",
      "clip-rule": "evenodd"
    })));
  }
};

export default PowerSleepSymbol;