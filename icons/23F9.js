import React from 'react';

const StopButton = ({
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
      fill: "#000000",
      stroke: "none",
      d: "M49.2614,18C51.8743,18,54,20.1257,54,22.7386v26.5229C54,51.8743,51.8743,54,49.2614,54H22.7386 C20.1257,54,18,51.8743,18,49.2614V22.7386C18,20.1257,20.1257,18,22.7386,18H49.2614 M49.2614,16H22.7386 C19.017,16,16,19.017,16,22.7386v26.5229C16,52.983,19.017,56,22.7386,56h26.5229C52.983,56,56,52.983,56,49.2614V22.7386 C56,19.017,52.983,16,49.2614,16L49.2614,16z"
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
      fill: "#000000",
      stroke: "none",
      d: "M49.2614,18C51.8743,18,54,20.1257,54,22.7386v26.5229C54,51.8743,51.8743,54,49.2614,54H22.7386 C20.1257,54,18,51.8743,18,49.2614V22.7386C18,20.1257,20.1257,18,22.7386,18H49.2614 M49.2614,16H22.7386 C19.017,16,16,19.017,16,22.7386v26.5229C16,52.983,19.017,56,22.7386,56h26.5229C52.983,56,56,52.983,56,49.2614V22.7386 C56,19.017,52.983,16,49.2614,16L49.2614,16z"
    })));
  }
};

export default StopButton;