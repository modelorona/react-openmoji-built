import React from 'react';

const Circuit = ({
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
      fill: "#9B9B9A",
      stroke: "#9B9B9A",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52,38v14H20v-8h-4v8v3.0352 C16,55.5681,16.4319,56,16.9648,56h38.0705C55.5681,56,56,55.5681,56,55.0352V52V38H52z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      stroke: "#EA5A47",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M17.1547,16C16.517,16,16,16.517,16,17.1547V20 v8h4v-8h32v14h4V20v-2.8453C56,16.517,55.483,16,54.8453,16H17.1547z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "36",
      r: "8",
      fill: "#FFFFFF"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "16,28.2498 16,15.9998 56,15.9998 56,30.4998"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "56,37.9998 56,55.9998 16,55.9998 16,43.7498"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "20,28.2498 20,19.9998 52,19.9998 52,33.9998"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "52,41.4998 52,51.9998 20,51.9998 20,43.7498"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "36",
      r: "8",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23.6569",
      x2: "12.3431",
      y1: "30.3431",
      y2: "41.6569",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12.3431",
      x2: "23.6569",
      y1: "30.3431",
      y2: "41.6569",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "49",
      x2: "59",
      y1: "34",
      y2: "34",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "44",
      x2: "64",
      y1: "38",
      y2: "38",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
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
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "16,28.2498 16,15.9998 56,15.9998 56,30.4998"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "56,37.9998 56,55.9998 16,55.9998 16,43.7498"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "20,28.2498 20,19.9998 52,19.9998 52,33.9998"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "52,41.4998 52,51.9998 20,51.9998 20,43.7498"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "36",
      r: "8",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23.6569",
      x2: "12.3431",
      y1: "30.3431",
      y2: "41.6569",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12.3431",
      x2: "23.6569",
      y1: "30.3431",
      y2: "41.6569",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "49",
      x2: "59",
      y1: "34",
      y2: "34",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "44",
      x2: "64",
      y1: "38",
      y2: "38",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default Circuit;