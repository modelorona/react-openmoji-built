import React from 'react';

const Flag_Taiwan = ({
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
      fill: "#d22f27"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5.0009",
      y: "17.0014",
      width: "31.9982",
      height: "19.9971",
      fill: "#1e50a0"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#fff",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "19.523 25.523 18.324 21.999 20.776 24.8 21.5 21.148 22.223 24.8 24.675 21.999 23.476 25.523 27 24.323 24.199 26.776 27.851 27.499 24.199 28.223 27 30.675 23.476 29.475 24.675 33 22.223 30.199 21.5 33.851 20.776 30.199 18.324 33 19.523 29.475 15.999 30.675 18.8 28.223 15.148 27.499 18.8 26.776 15.999 24.323 19.523 25.523"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "21.4995",
      cy: "27.4992",
      r: "4.0888",
      fill: "none",
      stroke: "#1e50a0",
      strokeMiterlimit: "10"
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

export default Flag_Taiwan;