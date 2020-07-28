import React from 'react';

const TransgenderFlag = ({
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
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "6",
      y: "46.8",
      width: "60",
      height: "7.2",
      fill: "#92d3f5",
      strokeWidth: "0"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "6",
      y: "39.6",
      width: "60",
      height: "7.2",
      fill: "#ffa7c0",
      strokeWidth: "0"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "6",
      y: "32.4",
      width: "60",
      height: "7.2",
      fill: "#fff",
      strokeWidth: "0"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "6",
      y: "25.2",
      width: "60",
      height: "7.2",
      fill: "#ffa7c0",
      strokeWidth: "0"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "6",
      y: "18",
      width: "60",
      height: "7.2",
      fill: "#92d3f5",
      strokeWidth: "0"
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
      version: "1.1",
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

export default TransgenderFlag;