import React from 'react';

const Flag_Honduras = ({
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
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "17",
      width: "62",
      height: "13",
      fill: "#61b2e4"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "42",
      width: "62",
      height: "13",
      fill: "#61b2e4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "1.5",
      fill: "#61b2e4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "43",
      cy: "39",
      r: "1.5",
      fill: "#61b2e4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "43",
      cy: "33",
      r: "1.5",
      fill: "#61b2e4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "29",
      cy: "39",
      r: "1.5",
      fill: "#61b2e4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "29",
      cy: "33",
      r: "1.5",
      fill: "#61b2e4"
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

export default Flag_Honduras;