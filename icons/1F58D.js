import React from 'react';

const Crayon = ({
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
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "#EA5A47",
      stroke: "none",
      points: "15.8466,59.4954 23.6833,54.7934 16.8591,47.9691 12.157,55.8059"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#EA5A47",
      stroke: "none",
      points: "24.5167,55.6267 16.8728,47.9829 16.0257,47.1357 53.2503,9.9112 61.7413,18.4022"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#d22f27",
      stroke: "none",
      points: "28.4351,51.7084 20.7912,44.0645 19.9441,43.2174 49.7237,13.4377 58.2147,21.9287"
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
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.7888",
      d: "M55.5203,56.0838"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.2166",
      d: "M19.3526,43.2136"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.2166",
      points: "24.5167,55.6267 16.8728,47.9829 16.0257,47.1357 53.2503,9.9112 61.7413,18.4022"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.2166",
      points: "15.8466,59.4954 23.6833,54.7934 16.8591,47.9691 12.157,55.8059"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "19.9938",
      x2: "28.4028",
      y1: "43.267",
      y2: "51.676",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.2166"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "49.7735",
      x2: "58.1823",
      y1: "13.4874",
      y2: "21.8964",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.2166"
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
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.7888",
      d: "M55.5203,56.0838"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.2166",
      d: "M19.3526,43.2136"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.2166",
      points: "24.5167,55.6267 16.8728,47.9829 16.0257,47.1357 53.2503,9.9112 61.7413,18.4022"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.2166",
      points: "15.8466,59.4954 23.6833,54.7934 16.8591,47.9691 12.157,55.8059"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "19.9938",
      x2: "28.4028",
      y1: "43.267",
      y2: "51.676",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.2166"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "49.7735",
      x2: "58.1823",
      y1: "13.4874",
      y2: "21.8964",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.2166"
    })));
  }
};

export default Crayon;