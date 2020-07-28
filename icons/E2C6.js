import React from 'react';

const IceShelf = ({
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
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "#fff",
      points: "67 19.671 62.639 18.921 59.038 18.067 53.139 18.421 37.514 16.046 24.931 19.505 24.931 36.005 27.598 33.755 28.598 39.13 30.598 41.005 31.723 43.671 31.723 48.213 35.264 51.13 35.681 56.671 67 57"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "57",
      width: "64",
      height: "11",
      fill: "#92d3f5"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "37.889 22.838 39.389 28.796 37.889 34.015 39.389 36.921 40.389 43.171"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "67 34.432 56.889 33.005 51.639 34.671 51.639 39.546 53.139 44.296 52.889 48.421 51.639 53.796 52.889 56.671"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      x2: "67",
      y1: "57",
      y2: "57",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "60.264 39.296 61.389 44.046 60.444 49.057"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "35.681 56.671 35.264 51.13 31.723 48.213 31.723 43.671 30.598 41.005 28.598 39.13 27.598 33.755 24.931 36.005 24.931 19.505 37.514 16.046 53.139 18.421 59.038 18.067 62.639 18.921 67 19.671"
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
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "37.889 22.838 39.389 28.796 37.889 34.015 39.389 36.921 40.389 43.171"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "67 34.432 56.889 33.005 51.639 34.671 51.639 39.546 53.139 44.296 52.889 48.421 51.639 53.796 52.889 56.671"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      x2: "67",
      y1: "57",
      y2: "57",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "60.264 39.296 61.389 44.046 60.444 49.057"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "35.681 56.671 35.264 51.13 31.723 48.213 31.723 43.671 30.598 41.005 28.598 39.13 27.598 33.755 24.931 36.005 24.931 19.505 37.514 16.046 53.139 18.421 59.038 18.067 62.639 18.921 67 19.671"
    })));
  }
};

export default IceShelf;