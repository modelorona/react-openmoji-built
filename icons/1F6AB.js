import React from 'react';

const Prohibited = ({
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "26",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ea5a47",
      strokeMiterlimit: "10",
      d: "m36 7c-16.02 0-29 12.98-29 29s12.98 29 29 29 29-12.98 29-29-12.98-29-29-29zm-25.21 29.27c0-5.075 3.417-12.69 6.202-16.49l35.2 35.27c-3.805 2.784-10.93 5.904-16.01 5.904-12.7 0-25.39-11.98-25.39-24.68zm44.87 15.18-35.06-35.13c3.805-2.784 10.77-5.441 15.84-5.441 12.7 0 24.68 12.25 24.68 24.95 0 5.075-2.686 11.81-5.47 15.62z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "30",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m55.66 51.44a24.99 24.99 0 0 0-35.06-35.13z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m16.99 19.77a24.99 24.99 0 0 0 35.2 35.27z"
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "30",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m55.66 51.44a24.99 24.99 0 0 0-35.06-35.13z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m16.99 19.77a24.99 24.99 0 0 0 35.2 35.27z"
    })));
  }
};

export default Prohibited;