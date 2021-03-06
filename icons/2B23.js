import React from 'react';

const HorizontalBlackHexagon = ({
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
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#000000",
      stroke: "#000000",
      strokeWidth: "2",
      d: "M7.577,37 C7.22,36.381 7.22,35.619 7.577,35 L20.923,11.885 C21.28,11.266 21.94,10.885 22.655,10.885 L49.345,10.885 C50.06,10.885 50.72,11.266 51.077,11.885 L64.423,35 C64.78,35.619 64.78,36.381 64.423,37 L51.077,60.115 C50.72,60.734 50.06,61.115 49.345,61.115 L22.655,61.115 C21.94,61.115 21.28,60.734 20.923,60.115 L7.577,37 z"
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
      fill: "#000000",
      stroke: "#000000",
      strokeWidth: "2",
      d: "M7.577,37 C7.22,36.381 7.22,35.619 7.577,35 L20.923,11.885 C21.28,11.266 21.94,10.885 22.655,10.885 L49.345,10.885 C50.06,10.885 50.72,11.266 51.077,11.885 L64.423,35 C64.78,35.619 64.78,36.381 64.423,37 L51.077,60.115 C50.72,60.734 50.06,61.115 49.345,61.115 L22.655,61.115 C21.94,61.115 21.28,60.734 20.923,60.115 L7.577,37 z"
    })));
  }
};

export default HorizontalBlackHexagon;