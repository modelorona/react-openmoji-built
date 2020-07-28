import React from 'react';

const CrossMarkButton = ({
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
      fill: "none",
      stroke: "#FFFFFF",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25.9551,16.18"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#FFFFFF",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.1915,16.0582"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#FFFFFF",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,36.1661"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#FFFFFF",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,36.1661"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B1CC33",
      stroke: "none",
      d: "M59.04,60.1661H12.96c-0.5302,0-0.96-0.4298-0.96-0.96v-46.08c0-0.5302,0.4298-0.96,0.96-0.96h46.08 c0.5302,0,0.96,0.4298,0.96,0.96v46.08C60,59.7363,59.5702,60.1661,59.04,60.1661z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#D0CFCE",
      stroke: "none",
      points: "42.8365,35.5749 45.318,33.0537 53.9787,24.2428 47.299,17.4473 38.6332,26.2634 36.2747,28.6596 35.9704,28.9662 24.7089,17.5094 18.0292,24.305 29.0954,35.563 29.2876,35.7585 26.6393,38.4493 17.2324,48.0192 23.9121,54.8147 33.3207,45.243 35.7397,42.7853 35.9659,42.5527 48.0879,54.8849 54.7676,48.0894 42.6507,35.7624"
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
      d: "M59.04,60.1661H12.96c-0.5302,0-0.96-0.4298-0.96-0.96v-46.08c0-0.5302,0.4298-0.96,0.96-0.96h46.08 c0.5302,0,0.96,0.4298,0.96,0.96v46.08C60,59.7363,59.5702,60.1661,59.04,60.1661z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "42.8365,35.5749 45.318,33.0537 53.9787,24.2428 47.299,17.4473 38.6332,26.2634 36.2747,28.6596 35.9704,28.9662 24.7089,17.5094 18.0292,24.305 29.0954,35.563 29.2876,35.7585 26.6393,38.4493 17.2324,48.0192 23.9121,54.8147 33.3207,45.243 35.7397,42.7853 35.9659,42.5527 48.0879,54.8849 54.7676,48.0894 42.6507,35.7624"
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
      d: "M59.04,60.1661H12.96c-0.5302,0-0.96-0.4298-0.96-0.96v-46.08c0-0.5302,0.4298-0.96,0.96-0.96h46.08 c0.5302,0,0.96,0.4298,0.96,0.96v46.08C60,59.7363,59.5702,60.1661,59.04,60.1661z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "42.8365,35.5749 45.318,33.0537 53.9787,24.2428 47.299,17.4473 38.6332,26.2634 36.2747,28.6596 35.9704,28.9662 24.7089,17.5094 18.0292,24.305 29.0954,35.563 29.2876,35.7585 26.6393,38.4493 17.2324,48.0192 23.9121,54.8147 33.3207,45.243 35.7397,42.7853 35.9659,42.5527 48.0879,54.8849 54.7676,48.0894 42.6507,35.7624"
    })));
  }
};

export default CrossMarkButton;