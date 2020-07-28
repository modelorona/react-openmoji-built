import React from 'react';

const Flag_Scotland = ({
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
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      stroke: "#fff",
      strokeMiterlimit: "10",
      d: "m10.6 54.72c-5.599 0.3008-5.599 0.3008-5.645-3.774l56.15-33.69c4.468 0.132 6.208-0.8087 5.843 3.674z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      stroke: "#fff",
      strokeMiterlimit: "10",
      d: "m10.3 17.03c-5.301-0.03272-5.301-0.03272-5.432 3.904l56.9 34.13c5.235-0.06544 5.235-0.06544 5.202-4.018z"
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

export default Flag_Scotland;