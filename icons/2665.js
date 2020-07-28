import React from 'react';

const HeartSuit = ({
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
      fill: "#EA5A47",
      d: "M60.7,26.2c0-7.2-5.9-13.1-13.1-13.1c-5,0-9.3,2.8-11.5,6.9c-2.2-4.1-6.6-6.9-11.5-6.9\tc-7.2,0-13.1,5.9-13.1,13.1c0,3.1,1.1,6,2.9,8.2l0,0l21.8,27l21.8-27l0,0C59.6,32.2,60.7,29.4,60.7,26.2z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M60.7,26.2 c0-7.2-5.9-13.1-13.1-13.1c-5,0-9.3,2.8-11.5,6.9c-2.2-4.1-6.6-6.9-11.5-6.9c-7.2,0-13.1,5.9-13.1,13.1c0,3.1,1.1,6,2.9,8.2l0,0 l21.8,27l21.8-27l0,0C59.6,32.2,60.7,29.4,60.7,26.2z"
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
      d: "M60.7,26.2 c0-7.2-5.9-13.1-13.1-13.1c-5,0-9.3,2.8-11.5,6.9c-2.2-4.1-6.6-6.9-11.5-6.9c-7.2,0-13.1,5.9-13.1,13.1c0,3.1,1.1,6,2.9,8.2l0,0 l21.8,27l21.8-27l0,0C59.6,32.2,60.7,29.4,60.7,26.2z"
    })));
  }
};

export default HeartSuit;