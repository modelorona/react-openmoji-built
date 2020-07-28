import React from 'react';

const Cursor = ({
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
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "m47.11 59.48-10.75 4.57-6.435-14.44-11.74 4.993 0.04766-46.65 35.58 31.5-13.14 5.586z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "m44.61 43.87 9.207-4.416-35.58-31.5z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m18.21 7.95 35.64 31.5-13.16 5.586 6.445 14.44-10.77 4.57-6.445-14.44-11.76 4.993z"
    })));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m18.21 7.95 35.64 31.5-13.16 5.586 6.445 14.44-10.77 4.57-6.445-14.44-11.76 4.993z"
    })));
  }
};

export default Cursor;