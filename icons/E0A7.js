import React from 'react';

const ArrowTurnRight = ({
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
      fill: "#3f3f3f",
      d: "M31.6687,28.2991c-8.1155,0-13.92,5.3219-13.92,15.52V62.69h-6.14V43.4894c0-13.5,7.7484-20.793,20.2484-20.793H51.8389l-10.4-9.6,3.8-4.1,17.8,16.5-17.8,16.5-3.8-4.1,10.4-9.6Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M31.6687,28.2991c-8.1155,0-13.92,5.3219-13.92,15.52V62.69h-6.14V43.4894c0-13.5,7.7484-20.793,20.2484-20.793H51.8389l-10.4-9.6,3.8-4.1,17.8,16.5-17.8,16.5-3.8-4.1,10.4-9.6Z"
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
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M31.6687,28.2991c-8.1155,0-13.92,5.3219-13.92,15.52V62.69h-6.14V43.4894c0-13.5,7.7484-20.793,20.2484-20.793H51.8389l-10.4-9.6,3.8-4.1,17.8,16.5-17.8,16.5-3.8-4.1,10.4-9.6Z"
    })));
  }
};

export default ArrowTurnRight;