import React from 'react';

const ReverseButton = ({
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
    }), /*#__PURE__*/React.createElement("g", {
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
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52.6119,16.3937 c-0.4848-0.1782-1.0303-0.297-1.5758-0.297c-0.8485,0-1.697,0.297-2.4242,0.7722l-30,15.9793l-0.303,0.297 c-0.7879,0.7722-1.2121,1.7227-1.2121,2.7919c0,1.0692,0.4242,2.0791,1.2121,2.7919l0.303,0.297l30,16.0981 c1.0909,0.8316,2.6667,1.0098,4,0.4752c1.5152-0.594,2.4848-2.0791,2.4848-3.683V20.0767 C55.0967,18.4728,54.127,16.9878,52.6119,16.3937z"
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
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52.6119,16.3937 c-0.4848-0.1782-1.0303-0.297-1.5758-0.297c-0.8485,0-1.697,0.297-2.4242,0.7722l-30,15.9793l-0.303,0.297 c-0.7879,0.7722-1.2121,1.7227-1.2121,2.7919c0,1.0692,0.4242,2.0791,1.2121,2.7919l0.303,0.297l30,16.0981 c1.0909,0.8316,2.6667,1.0098,4,0.4752c1.5152-0.594,2.4848-2.0791,2.4848-3.683V20.0767 C55.0967,18.4728,54.127,16.9878,52.6119,16.3937z"
    })));
  }
};

export default ReverseButton;