import React from 'react';

const Ambulance = ({
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
      fill: "#FFFFFF",
      stroke: "none",
      d: "M65,28.67v21.08c0,0.55-0.45,1.9583-1,1.9583h-6.67c0-2.76-1.24-5.9583-4-5.9583c-2.76,0-4,3.1983-4,5.9583 H32.17V27.67H64C64.55,27.67,65,28.11,65,28.67z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      d: "M32.17,27.67v24.08l-11.9318-0.0176c-0.12-2.65-2.1582-5.9824-4.8382-5.9824c-2.61,0-4.76,3.01-4.97,5.57 L7,51.25c0,0,0-2.75,0-5.67c0-0.12,0-0.23,0.01-0.34c0-0.11,0.01-0.21,0.02-0.31c0.05-0.62,0.18-1.11,0.34-1.48 c0.1-0.25,0.21-0.44,0.32-0.6c0-0.01,0-0.01,0-0.01c0.06-0.07,0.11-0.14,0.16-0.2c0.04-0.06,0.09-0.11,0.14-0.15 c0.03-0.02,0.05-0.05,0.07-0.07c0.02-0.02,0.04-0.03,0.06-0.05c0.03-0.03,0.05-0.03,0.05-0.03l4.5-3.13 c0.94-1.04,1.84-1.99,2.72-2.85c0.28-0.29,0.57-0.57,0.85-0.84c0.55-0.54,1.1-1.04,1.62-1.51c0.52-0.47,1.02-0.9,1.51-1.3 c1.45-1.2,2.74-2.12,3.85-2.81c0.38-0.24,0.73-0.44,1.06-0.63c0.33-0.19,0.65-0.35,0.94-0.5c0.29-0.15,0.56-0.27,0.82-0.38 c0.18-0.08,0.36-0.15,0.53-0.22c0.08-0.03,0.16-0.06,0.24-0.09c1-0.37,1.52-0.41,1.52-0.41H32.17z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "53.33",
      cy: "50.75",
      r: "3",
      fill: "#d0cfce",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M18.4,50.75c0,1.66-1.34,3-3,3s-3-1.34-3-3c0-0.13,0.01-0.26,0.03-0.39c0.18-1.47,1.44-2.61,2.97-2.61 c1.57,0,2.85,1.2,2.98,2.73C18.4,50.57,18.4,50.66,18.4,50.75z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "57.3333",
      x2: "57.3333",
      y1: "33.25",
      y2: "40.6667",
      fill: "none",
      stroke: "#ea5a47",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "61.0417",
      x2: "53.625",
      y1: "36.9583",
      y2: "36.9583",
      fill: "none",
      stroke: "#ea5a47",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92d3f5",
      stroke: "none",
      d: "M26.9434,33.1235l-0.1517,5.3559c0,0.1598-2.101,1.3501-2.2604,1.3607l-6.3812-0.0017 c-0.9195,0.0608-1.4213-1.0409-0.7717-1.6946l4.7033-5.0286c0.1877-0.1889,0.4431-0.2952,0.7094-0.2952h3.8488 C26.8075,32.82,26.9434,32.9559,26.9434,33.1235z"
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
      d: "M61.5,50.75H64c0.5523,0,1-0.4477,1-1V28.6667c0-0.5523-0.4477-1-1-1H28.3333c0,0-5.5833,0.4166-15.6666,11.5416l-4.5,3.125 c0,0-1.1667,0.7292-1.1667,3.25C7,48.5,7,50.25,7,50.25h0.9167"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.75",
      x2: "45.5833",
      y1: "50.75",
      y2: "50.75",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000000",
      stroke: "none",
      d: "M53.33,45.75c-2.76,0-5,2.24-5,5s2.24,5,5,5c2.76,0,5-2.24,5-5S56.09,45.75,53.33,45.75z M53.33,53.75c-1.66,0-3-1.34-3-3 s1.34-3,3-3c1.66,0,3,1.34,3,3S54.99,53.75,53.33,53.75z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000000",
      stroke: "none",
      d: "M20.39,50.52c-0.12-2.65-2.31-4.77-4.99-4.77c-2.61,0-4.76,2.01-4.97,4.57c-0.02,0.14-0.03,0.28-0.03,0.43 c0,2.76,2.24,5,5,5s5-2.24,5-5C20.4,50.67,20.4,50.59,20.39,50.52z M15.4,53.75c-1.66,0-3-1.34-3-3c0-0.13,0.01-0.26,0.03-0.39 c0.18-1.47,1.44-2.61,2.97-2.61c1.57,0,2.85,1.2,2.98,2.73c0.02,0.09,0.02,0.18,0.02,0.27C18.4,52.41,17.06,53.75,15.4,53.75z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.75,33.8333v2.1459c0,1.6569-1.3431,3-3,3H18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32.1667",
      x2: "32.1667",
      y1: "27.6667",
      y2: "50.75",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
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
      d: "M61.5,50.75H64c0.5523,0,1-0.4477,1-1V28.6667c0-0.5523-0.4477-1-1-1H28.3333c0,0-5.5833,0.4166-15.6666,11.5416l-4.5,3.125 c0,0-1.1667,0.7292-1.1667,3.25C7,48.5,7,50.25,7,50.25h0.9167"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.75",
      x2: "45.5833",
      y1: "50.75",
      y2: "50.75",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000000",
      stroke: "none",
      d: "M53.33,45.75c-2.76,0-5,2.24-5,5s2.24,5,5,5c2.76,0,5-2.24,5-5S56.09,45.75,53.33,45.75z M53.33,53.75c-1.66,0-3-1.34-3-3 s1.34-3,3-3c1.66,0,3,1.34,3,3S54.99,53.75,53.33,53.75z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000000",
      stroke: "none",
      d: "M20.39,50.52c-0.12-2.65-2.31-4.77-4.99-4.77c-2.61,0-4.76,2.01-4.97,4.57c-0.02,0.14-0.03,0.28-0.03,0.43 c0,2.76,2.24,5,5,5s5-2.24,5-5C20.4,50.67,20.4,50.59,20.39,50.52z M15.4,53.75c-1.66,0-3-1.34-3-3c0-0.13,0.01-0.26,0.03-0.39 c0.18-1.47,1.44-2.61,2.97-2.61c1.57,0,2.85,1.2,2.98,2.73c0.02,0.09,0.02,0.18,0.02,0.27C18.4,52.41,17.06,53.75,15.4,53.75z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.75,33.8333v2.1459c0,1.6569-1.3431,3-3,3H18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32.1667",
      x2: "32.1667",
      y1: "27.6667",
      y2: "50.75",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default Ambulance;