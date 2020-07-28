import React from 'react';

const LeftSpeechBubble = ({
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
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M54.8808,49.1283C57.4746,45.405,59,40.8818,59,36c0-12.7026-10.2974-23-23-23S13,23.2974,13,36c0,12.7025,10.2974,23,23,23 c3.7581,0,7.3021-0.9071,10.4348-2.5054l4.8138,2.0528l5.7283,2.4428l-1.0836-6.1324L54.8808,49.1283z"
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
      strokeWidth: "2",
      d: "M54.8808,49.1283C57.4746,45.405,59,40.8818,59,36c0-12.7026-10.2974-23-23-23S13,23.2974,13,36c0,12.7025,10.2974,23,23,23 c3.7581,0,7.3021-0.9071,10.4348-2.5054l4.8138,2.0528l5.7283,2.4428l-1.0836-6.1324L54.8808,49.1283z"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M54.8808,49.1283C57.4746,45.405,59,40.8818,59,36c0-12.7026-10.2974-23-23-23S13,23.2974,13,36c0,12.7025,10.2974,23,23,23 c3.7581,0,7.3021-0.9071,10.4348-2.5054l4.8138,2.0528l5.7283,2.4428l-1.0836-6.1324L54.8808,49.1283z"
    })));
  }
};

export default LeftSpeechBubble;