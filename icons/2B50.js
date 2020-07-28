import React from 'react';

const Star = ({
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
      fill: "#FCEA2B",
      stroke: "none",
      points: "35.9928,10.7363 27.7913,27.3699 9.4394,30.0436 22.7245,42.9838 19.5962,61.2637 36.0084,52.6276 52.427,61.2515 49.2851,42.9739 62.5606,30.0239 44.2067,27.3638"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "35.9928,10.7363 27.7913,27.3699 9.4394,30.0436 22.7245,42.9838 19.5962,61.2637 36.0084,52.6276 52.427,61.2515 49.2851,42.9739 62.5606,30.0239 44.2067,27.3638"
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
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "35.9928,10.7363 27.7913,27.3699 9.4394,30.0436 22.7245,42.9838 19.5962,61.2637 36.0084,52.6276 52.427,61.2515 49.2851,42.9739 62.5606,30.0239 44.2067,27.3638"
    })));
  }
};

export default Star;