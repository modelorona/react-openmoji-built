import React from 'react';

const SquareWithLowerRightDiagonalBlack = ({
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#ffffff",
      d: "M12,12 h48 l-48,48 Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M60,12 v48 h-48 Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M59.0349,60h-46.07A.9679.9679,0,0,1,12,59.0349v-46.07A.9679.9679,0,0,1,12.9651,12h46.07A.9679.9679,0,0,1,60,12.9651v46.07A.9679.9679,0,0,1,59.0349,60Z"
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
      d: "M60,12 v48 h-48 Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M59.0349,60h-46.07A.9679.9679,0,0,1,12,59.0349v-46.07A.9679.9679,0,0,1,12.9651,12h46.07A.9679.9679,0,0,1,60,12.9651v46.07A.9679.9679,0,0,1,59.0349,60Z"
    })));
  }
};

export default SquareWithLowerRightDiagonalBlack;