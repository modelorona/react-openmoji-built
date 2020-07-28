import React from 'react';

const HuggingFace = ({
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
      r: "23.8",
      fill: "#FCEA2B"
    }), /*#__PURE__*/React.createElement("g", {
      transform: "translate(.3 .5)"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "m28.2 61.6-5.1 5.2c-4.472-3.459-10.46-4.395-14.25-8.76-0.5117-2.736-1.312-10.01 1.854-7.34 4.956-3.31 4.378 1.379 10.1 2.8h0.2c-0.6342-2.772-1.709-2.625 0.4-4.7 3.594 3.941 3.542 9.586 6.8 12.8z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "m49.7 49.1c1.591 0.8541 0.486 3.626 0.5 4.7 1.7-0.5 4.9-2.4 6.9-4 1.595 0.04685 7.958 1.281 5.8 3.4 0 0 1.2 0.4 0 3-0.7 0.5-0.2 2.4-1 3.4-4.136 4.135-11.06 3.117-13.4 7.3l-5.2-5.2c3.69-3.36 1.958-9.959 6.4-12.6z"
    }))), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M56.2,47C58,43.6,59,39.8,59,36c0-12.7-10.3-23-23-23S13,23.3,13,36c0,3.7,0.9,7.4,2.7,10.7 c0,0.1,0,0.1,0.1,0.2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m29.6 58.1c2.1 0.6 4.2 0.9 6.4 0.9 2.1 0 4.2-0.3 6.2-0.8"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m45.8 45.2c-5.7 4.7-13.9 4.7-19.6 0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m31.7 33.4c-1-2.4-3.8-3.5-6.2-2.4-1.1 0.5-1.9 1.3-2.4 2.4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m48.9 33.4c-1-2.4-3.8-3.5-6.2-2.4-1.1 0.5-1.9 1.3-2.4 2.4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m28.3 61.7c-0.8965-0.7643-1.554-1.366-1.8-2.4-0.2426-2.983-1.549-5.769-2.8-8.1-0.3-0.5-0.9-2-1.5-2.2-0.9-0.3-1.5 0-1.7 1.1s0.6 3.3 0.8 3.9c-2.357-1.253-4.571-2.707-6.4-4.1-1.2-0.7-2.2-0.4-2.7 0.4-0.2 0.3-0.2 0.5-0.3 0.7-1.5-1.1-2.6-0.7-3.1 0-0.5 0.6-0.5 1.5-0.1 2.1-0.2 0.1-0.4 0.3-0.5 0.5-0.6 1-0.3 2.3 0.7 2.9 0.2 0.1 0.5 0.4 0.9 0.6-0.1 0.1-0.2 0.1-0.2 0.2-0.5 0.6-0.5 1.6 0 2.2 1.6 2.8 9 4.9 11.5 5.5l1.8 1.8"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m48.6 66.8 1.8-1.8c2.5-0.6 9.9-2.8 11.5-5.5 0.5-0.6 0.5-1.6-0.1-2.1-0.1-0.1-0.1-0.2-0.2-0.2 0.5-0.3 0.8-0.6 0.9-0.6 1-0.6 1.3-1.9 0.7-2.9-0.1-0.2-0.3-0.4-0.5-0.5 0.4-0.6 0.4-1.5-0.1-2.1s-1.6-1.1-3.1 0c0-0.3-0.1-0.6-0.3-0.7-0.5-0.7-1.4-1.1-2.7-0.4 0 0-0.1 0-0.1 0.1-1.9 1.6-4.1 2.9-6.3 4 0.5026-1.286 1.69-5.814-0.6-5.1-0.6 0.2-1.2 1.7-1.5 2.2-1.738 2.511-2.258 5.218-2.8 8.1 0.03102 1.077-1.076 1.676-1.8 2.4"
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
      d: "M56.2,47C58,43.6,59,39.8,59,36c0-12.7-10.3-23-23-23S13,23.3,13,36c0,3.7,0.9,7.4,2.7,10.7 c0,0.1,0,0.1,0.1,0.2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m29.6 58.1c2.1 0.6 4.2 0.9 6.4 0.9 2.1 0 4.2-0.3 6.2-0.8"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m45.8 45.2c-5.7 4.7-13.9 4.7-19.6 0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m31.7 33.4c-1-2.4-3.8-3.5-6.2-2.4-1.1 0.5-1.9 1.3-2.4 2.4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m48.9 33.4c-1-2.4-3.8-3.5-6.2-2.4-1.1 0.5-1.9 1.3-2.4 2.4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m28.3 61.7c-0.8965-0.7643-1.554-1.366-1.8-2.4-0.2426-2.983-1.549-5.769-2.8-8.1-0.3-0.5-0.9-2-1.5-2.2-0.9-0.3-1.5 0-1.7 1.1s0.6 3.3 0.8 3.9c-2.357-1.253-4.571-2.707-6.4-4.1-1.2-0.7-2.2-0.4-2.7 0.4-0.2 0.3-0.2 0.5-0.3 0.7-1.5-1.1-2.6-0.7-3.1 0-0.5 0.6-0.5 1.5-0.1 2.1-0.2 0.1-0.4 0.3-0.5 0.5-0.6 1-0.3 2.3 0.7 2.9 0.2 0.1 0.5 0.4 0.9 0.6-0.1 0.1-0.2 0.1-0.2 0.2-0.5 0.6-0.5 1.6 0 2.2 1.6 2.8 9 4.9 11.5 5.5l1.8 1.8"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m48.6 66.8 1.8-1.8c2.5-0.6 9.9-2.8 11.5-5.5 0.5-0.6 0.5-1.6-0.1-2.1-0.1-0.1-0.1-0.2-0.2-0.2 0.5-0.3 0.8-0.6 0.9-0.6 1-0.6 1.3-1.9 0.7-2.9-0.1-0.2-0.3-0.4-0.5-0.5 0.4-0.6 0.4-1.5-0.1-2.1s-1.6-1.1-3.1 0c0-0.3-0.1-0.6-0.3-0.7-0.5-0.7-1.4-1.1-2.7-0.4 0 0-0.1 0-0.1 0.1-1.9 1.6-4.1 2.9-6.3 4 0.5026-1.286 1.69-5.814-0.6-5.1-0.6 0.2-1.2 1.7-1.5 2.2-1.738 2.511-2.258 5.218-2.8 8.1 0.03102 1.077-1.076 1.676-1.8 2.4"
    })));
  }
};

export default HuggingFace;