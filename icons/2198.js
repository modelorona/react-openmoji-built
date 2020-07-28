import React from 'react';

const DownRightArrow = ({
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
      id: "_x2198__xFE0F__1_",
      fill: "#3F3F3F",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "57.4658,34.702 58.3629,58.9309 34.134,58.0338 34.3399,52.4758 48.4998,53.0004 12.6073,17.1079 16.5399,13.1753 52.4325,49.0678 51.9078,34.9079"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polygon", {
      id: "_x2198__xFE0F__1_",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "57.4658,34.702 58.3629,58.9309 34.134,58.0338 34.3399,52.4758 48.4998,53.0004 12.6073,17.1079 16.5399,13.1753 52.4325,49.0678 51.9078,34.9079"
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
      id: "_x2198__xFE0F__1_",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "57.4658,34.702 58.3629,58.9309 34.134,58.0338 34.3399,52.4758 48.4998,53.0004 12.6073,17.1079 16.5399,13.1753 52.4325,49.0678 51.9078,34.9079"
    })));
  }
};

export default DownRightArrow;