import React from 'react';

const CircledM = ({
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
      id: "line-supplement"
    }, /*#__PURE__*/React.createElement("g", {
      id: "M_Button"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "35.9583",
      r: "28",
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "45.429 46.458 45.429 24.458 36 43.315 26.571 24.458 26.571 46.458"
    }))), /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "28",
      fill: "#1e50a0"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }), /*#__PURE__*/React.createElement("g", {
      id: "color-foreground"
    }, /*#__PURE__*/React.createElement("g", {
      id: "M_Button-2"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "28",
      fill: "none",
      stroke: "#fff",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "45.429 46.5 45.429 24.5 36 43.357 26.571 24.5 26.571 46.5"
    }))));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line-supplement"
    }, /*#__PURE__*/React.createElement("g", {
      id: "M_Button"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "35.9583",
      r: "28",
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "45.429 46.458 45.429 24.458 36 43.315 26.571 24.458 26.571 46.458"
    }))), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }));
  }
};

export default CircledM;