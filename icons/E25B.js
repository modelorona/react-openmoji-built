import React from 'react';

const Duplicate = ({
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "12.8019",
      y: "24.0856",
      width: "34.8816",
      height: "34.9435",
      fill: "#D0CFCE",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "24.8936",
      y: "12.0814",
      width: "34.9009",
      height: "34.7857",
      fill: "#FFFFFF",
      stroke: "none"
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
      d: "M46.8015,51.984v7.013c0,0.55-0.45,1-1,1h-33c-0.55,0-1-0.45-1-1v-33c0-0.5523,0.4477-1,1-1h7.0819"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58.8017,46.9968h-33c-0.55,0-1-0.45-1-1v-33c0-0.5523,0.4477-1,1-1h33c0.55,0,1,0.45,1,1v33 C59.8017,46.5468,59.3517,46.9968,58.8017,46.9968z"
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
      d: "M46.8015,51.984v7.013c0,0.55-0.45,1-1,1h-33c-0.55,0-1-0.45-1-1v-33c0-0.5523,0.4477-1,1-1h7.0819"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58.8017,46.9968h-33c-0.55,0-1-0.45-1-1v-33c0-0.5523,0.4477-1,1-1h33c0.55,0,1,0.45,1,1v33 C59.8017,46.5468,59.3517,46.9968,58.8017,46.9968z"
    })));
  }
};

export default Duplicate;