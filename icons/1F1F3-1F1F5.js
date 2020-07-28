import React from 'react';

const Flag_Nepal = ({
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
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "#d22f27",
      stroke: "#1e50a0",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "50 55 22 55 22 17 50 37 33 37 50 55"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#fff",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "30 42.773 31.206 42 31.864 43.272 33.294 43.206 33.228 44.637 34.5 45.294 33.727 46.5 34.5 47.706 33.228 48.363 33.294 49.794 31.864 49.728 31.206 51 30 50.227 28.794 51 28.137 49.728 26.706 49.794 26.772 48.363 25.5 47.706 26.273 46.5 25.5 45.294 26.772 44.637 26.706 43.206 28.137 43.272 28.794 42 30 42.773"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "30",
      cy: "30",
      r: "2",
      fill: "#fff",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "M34,31c-.45,1-1.7187,2-4,2s-3.55-1-4-2"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line"
    }));
  }
};

export default Flag_Nepal;