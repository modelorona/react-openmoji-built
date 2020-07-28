import React from 'react';

const DownLeftArrow = ({
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
      id: "_x2199__xFE0F__1_",
      fill: "#3F3F3F",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "14.5044,34.702 13.6073,58.9309 37.8362,58.0338 37.6303,52.4758 23.4704,53.0004 59.3629,17.1079 55.4303,13.1753 19.5378,49.0678 20.0624,34.9079"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polygon", {
      id: "_x2199__xFE0F__1_",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "14.5044,34.702 13.6073,58.9309 37.8362,58.0338 37.6303,52.4758 23.4704,53.0004 59.3629,17.1079 55.4303,13.1753 19.5378,49.0678 20.0624,34.9079"
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
      id: "_x2199__xFE0F__1_",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "14.5044,34.702 13.6073,58.9309 37.8362,58.0338 37.6303,52.4758 23.4704,53.0004 59.3629,17.1079 55.4303,13.1753 19.5378,49.0678 20.0624,34.9079"
    })));
  }
};

export default DownLeftArrow;