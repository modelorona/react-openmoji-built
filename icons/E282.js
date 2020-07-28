import React from 'react';

const DejectedFace = ({
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "m36.2 13.32c-12.57 0-22.8 10.23-22.8 22.8 0 12.57 10.23 22.8 22.8 22.8 12.57 0 22.8-10.23 22.8-22.8 0-12.57-10.23-22.8-22.8-22.8z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "23",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "28.99",
      x2: "43.01",
      y1: "51",
      y2: "51",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m29.2 42c0 1.657-1.345 3-3 3-1.655 0-3-1.343-3-3 0-1.655 1.345-3 3-3 1.655 0 3 1.345 3 3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m48.8 42c0 1.657-1.345 3-3 3s-3-1.343-3-3c0-1.655 1.345-3 3-3s3 1.345 3 3"
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "23",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "28.99",
      x2: "43.01",
      y1: "51",
      y2: "51",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m29.2 42c0 1.657-1.345 3-3 3-1.655 0-3-1.343-3-3 0-1.655 1.345-3 3-3 1.655 0 3 1.345 3 3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m48.8 42c0 1.657-1.345 3-3 3s-3-1.343-3-3c0-1.655 1.345-3 3-3s3 1.345 3 3"
    })));
  }
};

export default DejectedFace;