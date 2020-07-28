import React from 'react';

const Keycap_0 = ({
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
      x: "11.875",
      y: "12.166",
      width: "48",
      height: "47.834",
      fill: "#d0cfce"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "12.125",
      y: "11.916",
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
      strokeWidth: "2",
      d: "M35.8749,44.7791h0A4.7593,4.7593,0,0,1,31.1156,40.02V32.1464a4.76,4.76,0,0,1,4.7593-4.7595h0a4.76,4.76,0,0,1,4.76,4.7595V40.02A4.7593,4.7593,0,0,1,35.8749,44.7791Z"
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "12.125",
      y: "11.916",
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
      strokeWidth: "2",
      d: "M35.8749,44.7791h0A4.7593,4.7593,0,0,1,31.1156,40.02V32.1464a4.76,4.76,0,0,1,4.7593-4.7595h0a4.76,4.76,0,0,1,4.76,4.7595V40.02A4.7593,4.7593,0,0,1,35.8749,44.7791Z"
    })));
  }
};

export default Keycap_0;