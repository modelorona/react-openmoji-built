import React from 'react';

const LeftRightBlackArrow = ({
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
      id: "_",
      fill: "#3f3f3f",
      points: "48.341 19.828 44.641 23.928 53.841 32.528 17.54 32.528 26.74 23.928 23.04 19.828 6.34 35.628 23.04 51.428 26.74 47.328 17.54 38.728 53.841 38.728 44.641 47.328 48.341 51.428 65.041 35.628 48.341 19.828"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polygon", {
      id: "_2",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "48.341 19.828 44.641 23.928 53.841 32.528 17.54 32.528 26.74 23.928 23.04 19.828 6.34 35.628 23.04 51.428 26.74 47.328 17.54 38.728 53.841 38.728 44.641 47.328 48.341 51.428 65.041 35.628 48.341 19.828"
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
    }, /*#__PURE__*/React.createElement("polygon", {
      id: "_2",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "48.341 19.828 44.641 23.928 53.841 32.528 17.54 32.528 26.74 23.928 23.04 19.828 6.34 35.628 23.04 51.428 26.74 47.328 17.54 38.728 53.841 38.728 44.641 47.328 48.341 51.428 65.041 35.628 48.341 19.828"
    })));
  }
};

export default LeftRightBlackArrow;