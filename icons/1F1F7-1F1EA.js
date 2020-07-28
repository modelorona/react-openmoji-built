import React from 'react';

const Flag_Réunion = ({
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
      fill: "#1e50a0"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#f1b31c",
      stroke: "#f1b31c",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "15 17 5 17 36 36 36 36 15 17"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#f1b31c",
      stroke: "#f1b31c",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "57 17 67 17 36 36 36 36 57 17"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#f1b31c",
      stroke: "#f1b31c",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "67 39 67 33 36 36 36 36 67 39"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#f1b31c",
      stroke: "#f1b31c",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "5 39 5 33 36 36 36 36 5 39"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#f1b31c",
      stroke: "#f1b31c",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "33 17 39 17 36 36 36 36 33 17"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#d22f27",
      points: "36 36 67 55 5 55 36 36"
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

export default Flag_Réunion;