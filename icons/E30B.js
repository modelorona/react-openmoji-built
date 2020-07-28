import React from 'react';

const PatientClipboard = ({
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#A57939",
      d: "M22.2499,14.3071h27.5003c1.8029,0,3.2644,1.4615,3.2644,3.2644V57.651 c0,1.8029-1.4615,3.2644-3.2644,3.2644H22.2499c-1.8029,0-3.2644-1.4615-3.2644-3.2644V17.5715 C18.9855,15.7686,20.447,14.3071,22.2499,14.3071z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "23.3085",
      y: "16.5645",
      width: "25.3953",
      height: "38.9302",
      fill: "#FFFFFF"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "26.1942",
      y: "13.2157",
      width: "19.6239",
      height: "5.4611",
      fill: "#9B9B9A"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#D22F27",
      points: "26.204,24.599 28.087,24.599 28.087,26.483 29.413,26.483 29.413,24.599 31.297,24.599 31.297,23.273 29.413,23.273 29.413,21.389 28.087,21.389 28.087,23.273 26.204,23.273"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M45.8181,14.3071h3.9321 c1.8029,0,3.2644,1.4615,3.2644,3.2644V57.651c0,1.8029-1.4615,3.2644-3.2644,3.2644H22.2499 c-1.8029,0-3.2644-1.4615-3.2644-3.2644V17.5715c0-1.8029,1.4615-3.2644,3.2644-3.2644h3.9443"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "45.82,16.56 48.7,16.56 48.7,55.49 23.31,55.49 23.31,16.56 26.19,16.56"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "26.1942",
      y: "13.2157",
      width: "19.6239",
      height: "5.4611",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "26.1942",
      x2: "31.2155",
      y1: "32.9831",
      y2: "32.9831",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "26.1942",
      x2: "42.7503",
      y1: "38.6575",
      y2: "38.6575",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "26.1942",
      x2: "39.7736",
      y1: "42.0063",
      y2: "42.0063",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "26.1942",
      x2: "42.7503",
      y1: "45.3552",
      y2: "45.3552",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "26.1942",
      x2: "39.7736",
      y1: "48.704",
      y2: "48.704",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M29.4134,21.3892v1.8837h1.8837v1.3261h-1.8837v1.8838h-1.3261V24.599h-1.8837v-1.3261h1.8837v-1.8837H29.4134 M29.4134,20.3892h-1.3261c-0.5523,0-1,0.4477-1,1v0.8837h-0.8837c-0.5523,0-1,0.4477-1,1v1.3261c0,0.5523,0.4477,1,1,1h0.8837 v0.8838c0,0.5523,0.4477,1,1,1h1.3261c0.5523,0,1-0.4477,1-1V25.599h0.8837c0.5523,0,1-0.4477,1-1v-1.3261c0-0.5523-0.4477-1-1-1 h-0.8837v-0.8837C30.4134,20.8369,29.9657,20.3892,29.4134,20.3892z"
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
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M45.8181,14.3071h3.9321 c1.8029,0,3.2644,1.4615,3.2644,3.2644V57.651c0,1.8029-1.4615,3.2644-3.2644,3.2644H22.2499 c-1.8029,0-3.2644-1.4615-3.2644-3.2644V17.5715c0-1.8029,1.4615-3.2644,3.2644-3.2644h3.9443"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "45.82,16.56 48.7,16.56 48.7,55.49 23.31,55.49 23.31,16.56 26.19,16.56"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "26.1942",
      y: "13.2157",
      width: "19.6239",
      height: "5.4611",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "26.1942",
      x2: "31.2155",
      y1: "32.9831",
      y2: "32.9831",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "26.1942",
      x2: "42.7503",
      y1: "38.6575",
      y2: "38.6575",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "26.1942",
      x2: "39.7736",
      y1: "42.0063",
      y2: "42.0063",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "26.1942",
      x2: "42.7503",
      y1: "45.3552",
      y2: "45.3552",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "26.1942",
      x2: "39.7736",
      y1: "48.704",
      y2: "48.704",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M29.4134,21.3892v1.8837h1.8837v1.3261h-1.8837v1.8838h-1.3261V24.599h-1.8837v-1.3261h1.8837v-1.8837H29.4134 M29.4134,20.3892h-1.3261c-0.5523,0-1,0.4477-1,1v0.8837h-0.8837c-0.5523,0-1,0.4477-1,1v1.3261c0,0.5523,0.4477,1,1,1h0.8837 v0.8838c0,0.5523,0.4477,1,1,1h1.3261c0.5523,0,1-0.4477,1-1V25.599h0.8837c0.5523,0,1-0.4477,1-1v-1.3261c0-0.5523-0.4477-1-1-1 h-0.8837v-0.8837C30.4134,20.8369,29.9657,20.3892,29.4134,20.3892z"
    })));
  }
};

export default PatientClipboard;