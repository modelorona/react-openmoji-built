import React from 'react';

const Ophiuchus = ({
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "12",
      y: "12",
      width: "48",
      height: "47.83",
      fill: "#b399c8"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "12",
      y: "12",
      width: "48",
      height: "48",
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
      strokeWidth: "3",
      d: "m43.34 21.8 0.18 19.62c-0.01394 4.962-3.336 8.807-7.43 8.807-4.093 0-7.416-3.845-7.43-8.807l-0.1791-19.62"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "3",
      d: "m52.4 35.85c-4.797 6.036-13.14 5.607-16.4 0.1499s-11.6-5.886-16.4 0.1499"
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "12",
      y: "12",
      width: "48",
      height: "48",
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
      strokeWidth: "3",
      d: "m43.34 21.8 0.18 19.62c-0.01394 4.962-3.336 8.807-7.43 8.807-4.093 0-7.416-3.845-7.43-8.807l-0.1791-19.62"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "3",
      d: "m52.4 35.85c-4.797 6.036-13.14 5.607-16.4 0.1499s-11.6-5.886-16.4 0.1499"
    })));
  }
};

export default Ophiuchus;