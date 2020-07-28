import React from 'react';

const BustInSilhouette = ({
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      d: "M58,61c0,0,0-3-1-7c-1.2109-4.8457-4-8-10-8c-5,0-15,0-22,0c-6,0-8.7891,3.1543-10,8c-1,4-1,7-1,7H58z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      d: "M26,26c0,3.7246,0.5391,7.8086,2,10c1.8613,2.793,5.0176,4,8,4c3.0957,0,6.1367-1.207,8-4 c1.46-2.1914,2-6.2754,2-10c0-2.7935-1-12-10-12S26,21.3442,26,26z"
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
      strokeWidth: "2",
      d: "M58,60c0,0,0-2-1-6 c-1.2109-4.8457-4-8-10-8c-5,0-15,0-22,0c-6,0-8.7891,3.1543-10,8c-1,4-1,6-1,6"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26,26c0,3.7246,0.5391,7.8086,2,10 c1.8613,2.793,5.0176,4,8,4c3.0957,0,6.1367-1.207,8-4c1.46-2.1914,2-6.2754,2-10c0-2.7935-1-12-10-12S26,21.3442,26,26z"
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M58,60c0,0,0-2-1-6 c-1.2109-4.8457-4-8-10-8c-5,0-15,0-22,0c-6,0-8.7891,3.1543-10,8c-1,4-1,6-1,6"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26,26c0,3.7246,0.5391,7.8086,2,10 c1.8613,2.793,5.0176,4,8,4c3.0957,0,6.1367-1.207,8-4c1.46-2.1914,2-6.2754,2-10c0-2.7935-1-12-10-12S26,21.3442,26,26z"
    })));
  }
};

export default BustInSilhouette;