import React from 'react';

const SpiralShell = ({
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
      fill: "#FFA7C0",
      stroke: "none",
      d: "M30,31c0,0-2,23,7,26s14-34,6-34c-6.2075,0-7-1-11.7099-0.3422C29.9197,22.8491,27.9837,22.7602,26,24 c-8,5,5,29,8,31"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#E67A94",
      stroke: "none",
      d: "M42,22c0,0,1-3-2-3s-7,0-7,0s-2.1402-0.4205-1,3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFA7C0",
      stroke: "none",
      d: "M34,18c3.2-5.3333,5.1333,0.3333,5,0"
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
      d: "M30,31c0,0-2,23,7,26s14-34,6-34c-6.2075,0-7-1-11.7099-0.3422C29.9197,22.8491,27.9837,22.7602,26,24c-8,5,5,29,8,31"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42,22c0,0,1-3-2-3s-7,0-7,0s-2.1402-0.4205-1,3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34,18c3.2-5.3333,5.1333,0.3333,5,0"
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
      d: "M30,31c0,0-2,23,7,26s14-34,6-34c-6.2075,0-7-1-11.7099-0.3422C29.9197,22.8491,27.9837,22.7602,26,24c-8,5,5,29,8,31"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42,22c0,0,1-3-2-3s-7,0-7,0s-2.1402-0.4205-1,3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34,18c3.2-5.3333,5.1333,0.3333,5,0"
    })));
  }
};

export default SpiralShell;