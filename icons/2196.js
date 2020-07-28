import React from 'react';

const UpLeftArrow = ({
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
      id: "_x2196__xFE0F__1_",
      fill: "#3F3F3F",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "37.8362,14.0387 13.6073,13.1416 14.5044,37.3705 20.0624,37.1647 19.5378,23.0048 55.4303,58.8973 59.3629,54.9646 23.4704,19.0721 37.6303,19.5967"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polygon", {
      id: "_x2196__xFE0F__1_",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "37.8362,14.0387 13.6073,13.1416 14.5044,37.3705 20.0624,37.1647 19.5378,23.0048 55.4303,58.8973 59.3629,54.9646 23.4704,19.0721 37.6303,19.5967"
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
      id: "_x2196__xFE0F__1_",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "37.8362,14.0387 13.6073,13.1416 14.5044,37.3705 20.0624,37.1647 19.5378,23.0048 55.4303,58.8973 59.3629,54.9646 23.4704,19.0721 37.6303,19.5967"
    })));
  }
};

export default UpLeftArrow;