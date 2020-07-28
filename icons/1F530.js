import React from 'react';

const JapaneseSymbolForBeginner = ({
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
      fill: "#fcea2b",
      points: "17 12.007 16 48.007 35 64.007 35 24.007 17 12.007"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#5c9e31",
      points: "55 12.007 56 48.007 37 64.007 37 24.007 55 12.007"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M17.6769,12.0972c-.9223-.6-1.6769-.19-1.6769.91v34a4.7349,4.7349,0,0,0,1.56,3.2518L34.3788,63.7555a2.6239,2.6239,0,0,0,3.1235.0047L54.4364,50.2543A4.7148,4.7148,0,0,0,56,47.0072v-34c0-1.1-.7546-1.5095-1.6769-.91l-16.6462,10.82a3.3519,3.3519,0,0,1-3.3538,0Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36",
      x2: "36",
      y1: "24.0072",
      y2: "64.0072",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M17.6769,12.0972c-.9223-.6-1.6769-.19-1.6769.91v34a4.7349,4.7349,0,0,0,1.56,3.2518L34.3788,63.7555a2.6239,2.6239,0,0,0,3.1235.0047L54.4364,50.2543A4.7148,4.7148,0,0,0,56,47.0072v-34c0-1.1-.7546-1.5095-1.6769-.91l-16.6462,10.82a3.3519,3.3519,0,0,1-3.3538,0Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36",
      x2: "36",
      y1: "24.0072",
      y2: "64.0072",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default JapaneseSymbolForBeginner;