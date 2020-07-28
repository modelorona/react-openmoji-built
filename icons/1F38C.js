import React from 'react';

const CrossedFlags = ({
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
      x: "9",
      y: "20",
      width: "22",
      height: "15",
      transform: "translate(-9.9052 11.3157) rotate(-25.551)",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "40.8409",
      y: "20",
      width: "22",
      height: "15",
      transform: "translate(86.7507 74.6703) rotate(-154.449)",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20",
      cy: "27.5",
      r: "2.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "51.841",
      cy: "27.5",
      r: "2.5"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("g", {
      id: "Flag"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "46",
      x2: "27",
      y1: "56",
      y2: "16",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "20",
      width: "22",
      height: "15",
      transform: "translate(-9.9052 11.3157) rotate(-25.551)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "25.8409",
      x2: "44.8409",
      y1: "56",
      y2: "16",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "40.8409",
      y: "20",
      width: "22",
      height: "15",
      transform: "translate(86.7507 74.6703) rotate(-154.449)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }))), /*#__PURE__*/React.createElement("g", {
      id: "color-foreground"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "20",
      cy: "27.5",
      r: "2.5",
      fill: "#d22f27"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "51.8409",
      cy: "27.5",
      r: "2.5",
      fill: "#d22f27"
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
    }, /*#__PURE__*/React.createElement("g", {
      id: "Flag"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "46",
      x2: "27",
      y1: "56",
      y2: "16",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "9",
      y: "20",
      width: "22",
      height: "15",
      transform: "translate(-9.9052 11.3157) rotate(-25.551)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "25.8409",
      x2: "44.8409",
      y1: "56",
      y2: "16",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "40.8409",
      y: "20",
      width: "22",
      height: "15",
      transform: "translate(86.7507 74.6703) rotate(-154.449)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }))));
  }
};

export default CrossedFlags;