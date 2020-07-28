import React from 'react';

const BusStop = ({
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
      x: "34.1",
      y: "3.9",
      width: "4",
      height: "64.1",
      fill: "#D0CFCE"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      d: "M48.9,38.5H23.4c-1.1,0-2-0.9-2-2V10.9c0-1.1,0.9-2,2-2h25.5c1.1,0,2,0.9,2,2v25.6 C50.9,37.6,50,38.5,48.9,38.5z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36.1",
      cy: "23.6",
      r: "10",
      fill: "#FCEA2B",
      stroke: "#5C9E31",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
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
      points: "34.1,8.5 34.1,3.9 38.1,3.9 38.1,8.5"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "38.1,39 38.1,68 34.1,68 34.1,38.9"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.9,38.5H23.4c-1.1,0-2-0.9-2-2V10.9c0-1.1,0.9-2,2-2h25.5c1.1,0,2,0.9,2,2v25.6C50.9,37.6,50,38.5,48.9,38.5z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36.1",
      cy: "23.6",
      r: "10",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32.7",
      x2: "32.7",
      y1: "18",
      y2: "28.9",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "39",
      x2: "39",
      y1: "18",
      y2: "28.9",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "39",
      x2: "32.7",
      y1: "23.4",
      y2: "23.4",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })), /*#__PURE__*/React.createElement("g", {
      id: "color-foreground"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36.1",
      cy: "23.6",
      r: "10",
      fill: "none",
      stroke: "#5C9E31",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32.7",
      x2: "32.7",
      y1: "18",
      y2: "28.9",
      fill: "none",
      stroke: "#5C9E31",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "39",
      x2: "39",
      y1: "18",
      y2: "28.9",
      fill: "none",
      stroke: "#5C9E31",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "39",
      x2: "32.7",
      y1: "23.4",
      y2: "23.4",
      fill: "none",
      stroke: "#5C9E31",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.1"
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
      points: "34.1,8.5 34.1,3.9 38.1,3.9 38.1,8.5"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "38.1,39 38.1,68 34.1,68 34.1,38.9"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.9,38.5H23.4c-1.1,0-2-0.9-2-2V10.9c0-1.1,0.9-2,2-2h25.5c1.1,0,2,0.9,2,2v25.6C50.9,37.6,50,38.5,48.9,38.5z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36.1",
      cy: "23.6",
      r: "10",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32.7",
      x2: "32.7",
      y1: "18",
      y2: "28.9",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "39",
      x2: "39",
      y1: "18",
      y2: "28.9",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "39",
      x2: "32.7",
      y1: "23.4",
      y2: "23.4",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default BusStop;