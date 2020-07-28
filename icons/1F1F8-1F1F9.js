import React from 'react';

const Flag_SãoToméPríncipe = ({
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "17",
      width: "62",
      height: "38",
      fill: "#b1cc33"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "30",
      width: "62",
      height: "12",
      fill: "#fcea2b"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#d22f27",
      points: "26 36 5 55 5 17 26 36"
    }), /*#__PURE__*/React.createElement("polygon", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "38.5 33.59 40.045 38.59 36 35.5 41 35.5 36.955 38.59 38.5 33.59"
    }), /*#__PURE__*/React.createElement("polygon", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "53.5 33.59 55.045 38.59 51 35.5 56 35.5 51.955 38.59 53.5 33.59"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "17",
      width: "62",
      height: "38",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "17",
      width: "62",
      height: "38",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default Flag_SãoToméPríncipe;