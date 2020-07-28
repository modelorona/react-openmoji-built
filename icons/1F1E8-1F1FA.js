import React from 'react';

const Flag_Cuba = ({
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
      y: "32",
      width: "62",
      height: "8",
      fill: "#1e50a0"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "47",
      width: "62",
      height: "8",
      fill: "#1e50a0"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "17",
      width: "62",
      height: "8",
      fill: "#1e50a0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d22f27",
      d: "m5 55-1e-6 -19 1e-6 -19 32.91 19-16.45 9.5z"
    }), /*#__PURE__*/React.createElement("path", {
      transform: "rotate(-120 15.368 32.9) scale(.8682)",
      fill: "#fff",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "m19.5 39.74-4.253-0.8137-2.241 3.705-0.5402-4.296-4.216-0.9863 3.919-1.841-0.3648-4.314 2.962 3.158 3.991-1.68-2.088 3.793z"
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

export default Flag_Cuba;