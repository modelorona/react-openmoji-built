import React from 'react';

const UpRightArrow = ({
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
      id: "_x2197__xFE0F__1_",
      fill: "#3F3F3F",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "35.134,14.0387 59.3629,13.1416 58.4658,37.3705 52.9078,37.1647 53.4324,23.0048 17.5399,58.8973 13.6073,54.9646 49.4998,19.0721 35.3399,19.5967"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polygon", {
      id: "_x2197__xFE0F__1_",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "35.134,14.0387 59.3629,13.1416 58.4658,37.3705 52.9078,37.1647 53.4324,23.0048 17.5399,58.8973 13.6073,54.9646 49.4998,19.0721 35.3399,19.5967"
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
      id: "_x2197__xFE0F__1_",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "35.134,14.0387 59.3629,13.1416 58.4658,37.3705 52.9078,37.1647 53.4324,23.0048 17.5399,58.8973 13.6073,54.9646 49.4998,19.0721 35.3399,19.5967"
    })));
  }
};

export default UpRightArrow;