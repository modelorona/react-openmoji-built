import React from 'react';

const RingedPlanet = ({
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
      cx: "35.5",
      cy: "35.9583",
      r: "21.5384",
      fill: "#ea5a47"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d22f27",
      d: "M39.9254,15.0779A21.5347,21.5347,0,0,1,23.2822,53.8857,21.5352,21.5352,0,1,0,39.9254,15.0779Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "35.5",
      cy: "35.9583",
      r: "21.5384",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M48.2147,14.6573c3.57-1.1173,6.428-1.0032,8.03.5984,4.2057,4.2056-1.8456,17.0756-13.5159,28.7459s-24.54,17.7216-28.746,13.516c-1.8391-1.8391-1.7168-5.3351-.0209-9.6632"
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
      cx: "35.5",
      cy: "35.9583",
      r: "21.5384",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M48.2147,14.6573c3.57-1.1173,6.428-1.0032,8.03.5984,4.2057,4.2056-1.8456,17.0756-13.5159,28.7459s-24.54,17.7216-28.746,13.516c-1.8391-1.8391-1.7168-5.3351-.0209-9.6632"
    })));
  }
};

export default RingedPlanet;