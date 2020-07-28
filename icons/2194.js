import React from 'react';

const LeftRightArrow = ({
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
      id: "_x2194__xFE0F_",
      fill: "#3F3F3F",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "50.2632,20.2344 46.5538,24.269 55.7618,32.9375 16.2382,32.9375 25.4458,24.269 21.7368,20.2344 5,35.998 21.7368,51.7646 25.4458,47.7314 16.2449,39.0664 55.7551,39.0664 46.5538,47.7314 50.2632,51.7646 67,35.998"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polygon", {
      id: "_x2194__xFE0F_",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "50.2632,20.2344 46.5538,24.269 55.7618,32.9375 16.2382,32.9375 25.4458,24.269 21.7368,20.2344 5,35.998 21.7368,51.7646 25.4458,47.7314 16.2449,39.0664 55.7551,39.0664 46.5538,47.7314 50.2632,51.7646 67,35.998"
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
    }, /*#__PURE__*/React.createElement("polygon", {
      id: "_x2194__xFE0F_",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "50.2632,20.2344 46.5538,24.269 55.7618,32.9375 16.2382,32.9375 25.4458,24.269 21.7368,20.2344 5,35.998 21.7368,51.7646 25.4458,47.7314 16.2449,39.0664 55.7551,39.0664 46.5538,47.7314 50.2632,51.7646 67,35.998"
    })));
  }
};

export default LeftRightArrow;