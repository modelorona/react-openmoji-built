import React from 'react';

const UpsideDownFace = ({
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "23",
      fill: "#FCEA2B"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "23",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26.1851,27.0707 c2.8995-1.6362,6.2482-2.5699,9.8149-2.5699s6.9153,0.9336,9.8149,2.5699"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M42,41c0-1.6568,1.3448-3,3-3c1.6553,0,3,1.3433,3,3c0,1.6552-1.3447,3-3,3C43.3448,44,42,42.6552,42,41"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M24,41c0-1.6568,1.3447-3,3-3s3,1.3433,3,3c0,1.6552-1.3447,3-3,3S24,42.6552,24,41"
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "23",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26.1851,27.0707 c2.8995-1.6362,6.2482-2.5699,9.8149-2.5699s6.9153,0.9336,9.8149,2.5699"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M42,41c0-1.6568,1.3448-3,3-3c1.6553,0,3,1.3433,3,3c0,1.6552-1.3447,3-3,3C43.3448,44,42,42.6552,42,41"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M24,41c0-1.6568,1.3447-3,3-3s3,1.3433,3,3c0,1.6552-1.3447,3-3,3S24,42.6552,24,41"
    })));
  }
};

export default UpsideDownFace;