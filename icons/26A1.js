import React from 'react';

const HighVoltage = ({
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
      fill: "#FCEA2B",
      stroke: "none",
      d: "M48.143,3.7261L16.316,37.8507c-0.6029,0.6465-0.1141,1.6589,0.801,1.6589h19.1066L19.1503,67.0482 c-0.1662,0.2681,0.215,0.5364,0.4424,0.3114l36.0628-35.704c0.6436-0.6372,0.1626-1.6882-0.7725-1.6882H36.3826L48.143,3.7261z"
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
      d: "M48.1628,4.4406L16.3224,37.7817c-0.6174,0.6465-0.1168,1.6589,0.8201,1.6589h19.0829l-18.304,28.8333l37.7269-36.4785 c0.659-0.6372,0.1665-1.6882-0.791-1.6882H36.3846L48.1628,4.4406z"
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
      d: "M48.1628,4.4406L16.3224,37.7817c-0.6174,0.6465-0.1168,1.6589,0.8201,1.6589h19.0829l-18.304,28.8333l37.7269-36.4785 c0.659-0.6372,0.1665-1.6882-0.791-1.6882H36.3846L48.1628,4.4406z"
    })));
  }
};

export default HighVoltage;