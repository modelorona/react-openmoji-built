import React from 'react';

const ReminderRibbon = ({
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
      fill: "#D22F27",
      d: "M21.8,62.4L33,66l20-42.7c2.9-6,0-13.4-5.7-15.3"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#EA5A47",
      points: "45,48.5 38.5,61.6 40.2,65 51.4,61.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      d: "M25,8c-5.8,1.9-8.6,9.2-5.8,15.3L28,42.2l6.4-13.8"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#D22F27",
      points: "41,20 46.9,7.2 25.3,7.2 31.3,20"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8125",
      d: "M21.8,62.4L33,66l20-42.7c2.9-6,0-13.4-5.7-15.3L21.8,62.4z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8125",
      points: "38.9,62.4 40.2,65 51.4,61.5 45.4,49.3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8125",
      d: "M34.2,27.6L25,8c-5.8,1.9-8.6,9.2-5.8,15.3l8.5,18.3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "33.7",
      x2: "38.3",
      y1: "19.1",
      y2: "19.1",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8125"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "43.7",
      x2: "28.6",
      y1: "8.1",
      y2: "8.1",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8125"
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8125",
      d: "M21.8,62.4L33,66l20-42.7c2.9-6,0-13.4-5.7-15.3L21.8,62.4z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8125",
      points: "38.9,62.4 40.2,65 51.4,61.5 45.4,49.3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8125",
      d: "M34.2,27.6L25,8c-5.8,1.9-8.6,9.2-5.8,15.3l8.5,18.3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "33.7",
      x2: "38.3",
      y1: "19.1",
      y2: "19.1",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8125"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "43.7",
      x2: "28.6",
      y1: "8.1",
      y2: "8.1",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8125"
    })));
  }
};

export default ReminderRibbon;