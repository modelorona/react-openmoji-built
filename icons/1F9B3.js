import React from 'react';

const WhiteHair = ({
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
      fill: "#d0cfce",
      stroke: "#d0cfce",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16,53.86H53.82C54,51,56,48.11,56,45.19c0-13.57-11.31-27.14-31.66-27.14-3,0-5.75,2.14-8.34,2.68Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      stroke: "#fcea2b",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16,53.89H46.34c-1.63-9-3.77-16.69-3.77-16.69C29.46,37.2,23.47,41.77,16,42Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M55.75,54c.17-2.85.25-5.81.25-8.76C56,31.67,44.69,18.1,24.34,18.1a40.5956,40.5956,0,0,0-8.34.86"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M48.48,54a78.845,78.845,0,0,0-6-17.81c-13,0-19,3.5-26.43,3.78"
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
      d: "M55.75,54c.17-2.85.25-5.81.25-8.76C56,31.67,44.69,18.1,24.34,18.1a40.5956,40.5956,0,0,0-8.34.86"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M48.48,54a78.845,78.845,0,0,0-6-17.81c-13,0-19,3.5-26.43,3.78"
    })));
  }
};

export default WhiteHair;