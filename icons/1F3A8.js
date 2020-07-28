import React from 'react';

const ArtistPalette = ({
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
      fill: "#A57939",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59,36c-0.25-0.75-0.71-2.1-2-3c-1.56-1.08-3.63-1.01-4-1c-0.76,0.03-1.18,0.16-2,0c-0.58-0.12-1.53-0.3-2-1 c-0.4-0.59-0.15-1.08,0-3c0.12-1.51,0.17-2.27,0-3c-0.37-1.58-1.49-2.56-2-3c-1.05-0.92-2.38-1.56-5-2c-1.82-0.31-4.75-0.6-9,0 c-2.15,0.3-5.46,0.87-8,1.72c-1.77,0.58-3.74,1.41-6,3c-0.02,0.01-0.04,0.02-0.05,0.03c-3.44,2.24-5.39,6.2-5.22,10.31 C14.64,57.13,54.56,59.91,59,41C59.09,40.4,59.79,38.35,59,36z M38.21,30.12c-1.53,0-2.76-1.24-2.76-2.76 c0-1.53,1.23-2.76,2.76-2.76h2.71c1.52,0,2.76,1.23,2.76,2.76c0,0.76-0.31,1.45-0.81,1.95s-1.19,0.81-1.95,0.81H38.21z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20",
      cy: "33",
      r: "3",
      fill: "#61B2E4",
      stroke: "none",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "25",
      cy: "42",
      r: "3",
      fill: "#5C9E31",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35",
      cy: "45",
      r: "3",
      fill: "#FCEA2B",
      stroke: "none",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "45",
      cy: "44",
      r: "3",
      fill: "#D22F27",
      stroke: "none",
      strokeMiterlimit: "10",
      strokeWidth: "2"
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
      d: "M59,36c-0.25-0.75-0.71-2.1-2-3c-1.56-1.08-3.63-1.01-4-1c-0.76,0.03-1.18,0.16-2,0c-0.58-0.12-1.53-0.3-2-1 c-0.4-0.59-0.15-1.08,0-3c0.12-1.51,0.17-2.27,0-3c-0.37-1.58-1.49-2.56-2-3c-1.05-0.92-2.38-1.56-5-2c-1.82-0.31-4.75-0.6-9,0 c-2.15,0.3-5.46,0.87-8,1.72c-1.77,0.58-3.74,1.41-6,3c-0.02,0.01-0.04,0.02-0.05,0.03c-3.44,2.24-5.39,6.2-5.22,10.31 C14.64,57.13,54.56,59.91,59,41C59.09,40.4,59.79,38.35,59,36z M38.21,30.12c-1.53,0-2.76-1.24-2.76-2.76 c0-1.53,1.23-2.76,2.76-2.76h2.71c1.52,0,2.76,1.23,2.76,2.76c0,0.76-0.31,1.45-0.81,1.95s-1.19,0.81-1.95,0.81H38.21z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20",
      cy: "33",
      r: "3",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "25",
      cy: "42",
      r: "3",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35",
      cy: "45",
      r: "3",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "45",
      cy: "44",
      r: "3",
      fill: "none",
      stroke: "#000000",
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59,36c-0.25-0.75-0.71-2.1-2-3c-1.56-1.08-3.63-1.01-4-1c-0.76,0.03-1.18,0.16-2,0c-0.58-0.12-1.53-0.3-2-1 c-0.4-0.59-0.15-1.08,0-3c0.12-1.51,0.17-2.27,0-3c-0.37-1.58-1.49-2.56-2-3c-1.05-0.92-2.38-1.56-5-2c-1.82-0.31-4.75-0.6-9,0 c-2.15,0.3-5.46,0.87-8,1.72c-1.77,0.58-3.74,1.41-6,3c-0.02,0.01-0.04,0.02-0.05,0.03c-3.44,2.24-5.39,6.2-5.22,10.31 C14.64,57.13,54.56,59.91,59,41C59.09,40.4,59.79,38.35,59,36z M38.21,30.12c-1.53,0-2.76-1.24-2.76-2.76 c0-1.53,1.23-2.76,2.76-2.76h2.71c1.52,0,2.76,1.23,2.76,2.76c0,0.76-0.31,1.45-0.81,1.95s-1.19,0.81-1.95,0.81H38.21z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20",
      cy: "33",
      r: "3",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "25",
      cy: "42",
      r: "3",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35",
      cy: "45",
      r: "3",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "45",
      cy: "44",
      r: "3",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default ArtistPalette;