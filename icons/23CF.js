import React from 'react';

const EjectButton = ({
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
    }, /*#__PURE__*/React.createElement("g", {
      transform: "matrix(0 -.9544 .9545 0 1.727 66.7)"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m19.06 55.61c0.4848 0.1782 1.03 0.297 1.576 0.297 0.8485 0 1.697-0.297 2.424-0.7722l30-15.98 0.303-0.297c0.7879-0.7722 1.212-1.723 1.212-2.792s-0.4242-2.079-1.212-2.792l-0.303-0.297-30-16.1c-1.091-0.8316-2.667-1.01-4-0.4752-1.515 0.594-2.485 2.079-2.485 3.683v31.84c-1e-4 1.604 0.9696 3.089 2.485 3.683z"
    })), /*#__PURE__*/React.createElement("line", {
      x1: "17",
      x2: "55",
      y1: "57.38",
      y2: "57.38",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
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
    }, /*#__PURE__*/React.createElement("g", {
      transform: "matrix(0 -.9544 .9545 0 1.727 66.7)"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m19.06 55.61c0.4848 0.1782 1.03 0.297 1.576 0.297 0.8485 0 1.697-0.297 2.424-0.7722l30-15.98 0.303-0.297c0.7879-0.7722 1.212-1.723 1.212-2.792s-0.4242-2.079-1.212-2.792l-0.303-0.297-30-16.1c-1.091-0.8316-2.667-1.01-4-0.4752-1.515 0.594-2.485 2.079-2.485 3.683v31.84c-1e-4 1.604 0.9696 3.089 2.485 3.683z"
    })), /*#__PURE__*/React.createElement("line", {
      x1: "17",
      x2: "55",
      y1: "57.38",
      y2: "57.38",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default EjectButton;