import React from 'react';

const Pick = ({
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
      fill: "#a57939",
      points: "37.5 11.5 37.4 42.6 38.6 46.2 38.6 61.9 37.4 61.9 33.8 61.9 32.6 61.9 32.6 46.2 33.8 42.6 33.8 11.5 37.5 11.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "M58.6,23.3c-2-4.7-11.3-8.2-22.6-8.2-11.4,0-20.8,3.6-22.7,8.3l8-1.5a80.71,80.71,0,0,1,29.4-.1Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "37.5 20.4 37.4 42.3 38.6 46 38.6 61.7 37.4 61.7 33.8 61.7 32.6 61.7 32.6 46 33.8 42.3 33.8 20.4 37.5 20.4"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "37.5 11.7 37.4 14.9 33.8 14.9 33.8 11.7 37.5 11.7"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M58.6,23.1c-2-4.7-11.3-8.2-22.6-8.2-11.4,0-20.8,3.6-22.7,8.3l8-1.5a80.71,80.71,0,0,1,29.4-.1Z"
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
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "37.5 20.4 37.4 42.3 38.6 46 38.6 61.7 37.4 61.7 33.8 61.7 32.6 61.7 32.6 46 33.8 42.3 33.8 20.4 37.5 20.4"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "37.5 11.7 37.4 14.9 33.8 14.9 33.8 11.7 37.5 11.7"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M58.6,23.1c-2-4.7-11.3-8.2-22.6-8.2-11.4,0-20.8,3.6-22.7,8.3l8-1.5a80.71,80.71,0,0,1,29.4-.1Z"
    })));
  }
};

export default Pick;