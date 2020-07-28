import React from 'react';

const Bank = ({
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
      x: "16",
      y: "26",
      width: "40",
      height: "34",
      fill: "#9B9B9A"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "22",
      width: "44",
      height: "4",
      fill: "#D0CFCE"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#FFFFFF",
      points: "19.5,26 21.5525,26 21.5525,60 19.5,60"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#FFFFFF",
      points: "24.9331,26 26.9708,26 26.9708,60 24.9331,60"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#FFFFFF",
      points: "47.0669,60 45.0177,60 45.0177,26 47.0669,26"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#FFFFFF",
      points: "52.5,60 50.4816,60 50.4816,26 52.5,26"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#D0CFCE",
      points: "36,12 19,22 53,22"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "31.5",
      y: "50",
      width: "9",
      height: "10",
      fill: "#92D3F5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "35",
      r: "5",
      fill: "#FCEA2B"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#F4AA41",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      d: "M36.9482,34.2622 c-0.0977-0.3803-0.5204-0.6665-1.0269-0.6665l0,0c-0.5789,0-1.0483,0.3737-1.0483,0.8347c0,0.461,0.4693,0.8347,1.0483,0.8347 L35.9,35.2682c0.5789,0,1.0483,0.3737,1.0483,0.8347c0,0.461-0.4693,0.8347-1.0483,0.8347l0,0 c-0.5066,0-0.9293-0.2861-1.027-0.6665"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.9106",
      x2: "35.9106",
      y1: "33.5958",
      y2: "32.8",
      fill: "none",
      stroke: "#F4AA41",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.9106",
      x2: "35.9106",
      y1: "37.7333",
      y2: "36.9375",
      fill: "none",
      stroke: "#F4AA41",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "16",
      y: "26",
      width: "40",
      height: "34",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "22",
      width: "44",
      height: "4",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "19.5,26 22.5,26 22.5,60 19.5,60"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "24.9331,26 27.9331,26 27.9331,60 24.9331,60"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "47.0669,60 44.0669,60 44.0669,26 47.0669,26"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "52.5,60 49.5,60 49.5,26 52.5,26"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "36,12 19,21.7491 53,21.7491"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "31.5",
      y: "50",
      width: "9",
      height: "10",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36",
      x2: "36",
      y1: "60",
      y2: "50",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "35",
      r: "5",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      d: "M36.9482,34.2622 c-0.0977-0.3803-0.5204-0.6665-1.0269-0.6665l0,0c-0.5789,0-1.0483,0.3737-1.0483,0.8347c0,0.461,0.4693,0.8347,1.0483,0.8347 L35.9,35.2682c0.5789,0,1.0483,0.3737,1.0483,0.8347c0,0.461-0.4693,0.8347-1.0483,0.8347l0,0 c-0.5066,0-0.9293-0.2861-1.027-0.6665"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.9106",
      x2: "35.9106",
      y1: "33.5958",
      y2: "32.8",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.9106",
      x2: "35.9106",
      y1: "37.7333",
      y2: "36.9375",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10"
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
      x: "16",
      y: "26",
      width: "40",
      height: "34",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "22",
      width: "44",
      height: "4",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "19.5,26 22.5,26 22.5,60 19.5,60"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "24.9331,26 27.9331,26 27.9331,60 24.9331,60"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "47.0669,60 44.0669,60 44.0669,26 47.0669,26"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "52.5,60 49.5,60 49.5,26 52.5,26"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "36,12 19,21.7491 53,21.7491"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "31.5",
      y: "50",
      width: "9",
      height: "10",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36",
      x2: "36",
      y1: "60",
      y2: "50",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "35",
      r: "5",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      d: "M36.9482,34.2622 c-0.0977-0.3803-0.5204-0.6665-1.0269-0.6665l0,0c-0.5789,0-1.0483,0.3737-1.0483,0.8347c0,0.461,0.4693,0.8347,1.0483,0.8347 L35.9,35.2682c0.5789,0,1.0483,0.3737,1.0483,0.8347c0,0.461-0.4693,0.8347-1.0483,0.8347l0,0 c-0.5066,0-0.9293-0.2861-1.027-0.6665"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.9106",
      x2: "35.9106",
      y1: "33.5958",
      y2: "32.8",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.9106",
      x2: "35.9106",
      y1: "37.7333",
      y2: "36.9375",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10"
    })));
  }
};

export default Bank;