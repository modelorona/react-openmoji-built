import React from 'react';

const Helicopter = ({
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
      fill: "#92D3F5",
      d: "M60.6061,44.0399c-0.1148,0.5893-0.362,1.1122-0.7238,1.5687H39.8015c-0.6443,0-1.1651-0.4482-1.1651-0.996 v-13.404c1.474-0.3485,3.0452-0.5394,4.6428-0.5394c8.6325,0,15.7998,5.3865,17.1768,12.4495 C60.5178,43.4258,60.5707,43.7329,60.6061,44.0399z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      d: "M39.4328,43.851h-3.0209c-0.4984,0-0.9062-0.4078-0.9062-0.9062v-8.733 c0-0.4984,0.4078-0.9062,0.9062-0.9062h3.0209c0.4984,0,0.9062,0.4078,0.9062,0.9062v8.733 C40.339,43.4432,39.9312,43.851,39.4328,43.851z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      d: "M60.58,43.8498H44.79c-0.49,0-0.88-0.39-0.88-0.88v-12.4c0-0.43-0.4-0.78-0.8799-0.78 c0,0-1.36-0.05-3.54-0.1c-0.53,0-1.1-0.01-1.72-0.02c-7.02-0.08-19.31,0.03-25.68,1.6801c-0.41,0.11-0.83-0.07-1.02-0.45 l-2.31-3.75c0,0-1.76-2.63-1.76,0l1.66,11.54c0.05,0.44,0.4301,0.77,0.8701,0.77h0.99c0.48,0,0.87-0.4,0.87-0.88v-1.86 c0-0.45,0.34-0.82,0.78-0.87c3.07-0.35,14.25-1.29,16.28,2.9399c0.01,0.02,0.02,0.04,0.03,0.0601l-0.28,3.48l-0.04,0.58 l-0.0699,0.94c0,2.39,2.15,4,5.56,4.97c2.86,0.81,6.6,1.18,10.7,1.18c2.7401,0,5.33-0.08,7.59-0.34 c3.69-0.4301,6.53-1.34,7.85-3.17c0.36-0.49,0.61-1.04,0.72-1.66c0.05-0.23,0.08-0.48,0.09-0.73c0-0.03,0.01-0.07,0-0.11 C60.6,43.9398,60.59,43.8998,60.58,43.8498z M40.34,42.9498c0,0.49-0.41,0.9-0.91,0.9h-3.02c-0.5,0-0.9-0.41-0.9-0.9v-8.74 c0-0.5,0.4-0.9,0.9-0.9h3.02c0.5,0,0.91,0.4,0.91,0.9V42.9498z"
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
      d: "M60.46,43.1198c0.05,0.25,0.09,0.49,0.12,0.73H44.79c-0.49,0-0.88-0.39-0.88-0.88v-12.28 C52.26,30.9297,59.11,36.2297,60.46,43.1198z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.58,43.8498H44.79c-0.49,0-0.88-0.39-0.88-0.88v-12.4c0-0.43-0.4-0.78-0.8799-0.78c0,0-1.36-0.05-3.54-0.1 c-0.53,0-1.1-0.01-1.72-0.02c-7.02-0.08-19.31,0.03-25.68,1.6801c-0.41,0.11-0.83-0.07-1.02-0.45l-2.31-3.75c0,0-1.76-2.63-1.76,0 l1.66,11.54c0.05,0.44,0.4301,0.77,0.8701,0.77h0.99c0.48,0,0.87-0.4,0.87-0.88v-1.86c0-0.45,0.34-0.82,0.78-0.87 c3.07-0.35,14.25-1.29,16.28,2.9399c0.01,0.02,0.02,0.04,0.03,0.0601l-0.28,3.48l-0.04,0.58l-0.0699,0.94c0,2.39,2.15,4,5.56,4.97 c2.86,0.81,6.6,1.18,10.7,1.18c2.7401,0,5.33-0.08,7.59-0.34c3.69-0.4301,6.53-1.34,7.85-3.17c0.36-0.49,0.61-1.04,0.72-1.66 c0.05-0.23,0.08-0.48,0.09-0.73c0-0.03,0.01-0.07,0-0.11C60.6,43.9398,60.59,43.8998,60.58,43.8498z M40.34,42.9498 c0,0.49-0.41,0.9-0.91,0.9h-3.02c-0.5,0-0.9-0.41-0.9-0.9v-8.74c0-0.5,0.4-0.9,0.9-0.9h3.02c0.5,0,0.91,0.4,0.91,0.9V42.9498z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.34,34.2098v8.74c0,0.49-0.41,0.9-0.91,0.9h-3.02c-0.5,0-0.9-0.41-0.9-0.9v-8.74c0-0.5,0.4-0.9,0.9-0.9h3.02 C39.93,33.3098,40.34,33.7098,40.34,34.2098z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M39.73,20.3298v8.73c0,0.24-0.09,0.46-0.24,0.63c-0.53,0-1.1-0.01-1.72-0.02c-0.15-0.17-0.23-0.38-0.23-0.61v-8.73 c0-0.52,0.42-0.94,0.94-0.94h0.32C39.31,19.3898,39.73,19.8098,39.73,20.3298z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.1212,47.3662c0,0-2.6364,0.8787-2.6364,7.0303"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.0606,47.3662c0,0,2.6364,0.8787,2.6364,7.0303"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.2121,55.2753h28.1212c0,0,5.2728,0,6.1515-2.6364"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12.2727",
      x2: "65",
      y1: "21.5884",
      y2: "21.5884",
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
      version: "1.1",
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
      d: "M60.46,43.1198c0.05,0.25,0.09,0.49,0.12,0.73H44.79c-0.49,0-0.88-0.39-0.88-0.88v-12.28 C52.26,30.9297,59.11,36.2297,60.46,43.1198z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.58,43.8498H44.79c-0.49,0-0.88-0.39-0.88-0.88v-12.4c0-0.43-0.4-0.78-0.8799-0.78c0,0-1.36-0.05-3.54-0.1 c-0.53,0-1.1-0.01-1.72-0.02c-7.02-0.08-19.31,0.03-25.68,1.6801c-0.41,0.11-0.83-0.07-1.02-0.45l-2.31-3.75c0,0-1.76-2.63-1.76,0 l1.66,11.54c0.05,0.44,0.4301,0.77,0.8701,0.77h0.99c0.48,0,0.87-0.4,0.87-0.88v-1.86c0-0.45,0.34-0.82,0.78-0.87 c3.07-0.35,14.25-1.29,16.28,2.9399c0.01,0.02,0.02,0.04,0.03,0.0601l-0.28,3.48l-0.04,0.58l-0.0699,0.94c0,2.39,2.15,4,5.56,4.97 c2.86,0.81,6.6,1.18,10.7,1.18c2.7401,0,5.33-0.08,7.59-0.34c3.69-0.4301,6.53-1.34,7.85-3.17c0.36-0.49,0.61-1.04,0.72-1.66 c0.05-0.23,0.08-0.48,0.09-0.73c0-0.03,0.01-0.07,0-0.11C60.6,43.9398,60.59,43.8998,60.58,43.8498z M40.34,42.9498 c0,0.49-0.41,0.9-0.91,0.9h-3.02c-0.5,0-0.9-0.41-0.9-0.9v-8.74c0-0.5,0.4-0.9,0.9-0.9h3.02c0.5,0,0.91,0.4,0.91,0.9V42.9498z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.34,34.2098v8.74c0,0.49-0.41,0.9-0.91,0.9h-3.02c-0.5,0-0.9-0.41-0.9-0.9v-8.74c0-0.5,0.4-0.9,0.9-0.9h3.02 C39.93,33.3098,40.34,33.7098,40.34,34.2098z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M39.73,20.3298v8.73c0,0.24-0.09,0.46-0.24,0.63c-0.53,0-1.1-0.01-1.72-0.02c-0.15-0.17-0.23-0.38-0.23-0.61v-8.73 c0-0.52,0.42-0.94,0.94-0.94h0.32C39.31,19.3898,39.73,19.8098,39.73,20.3298z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.1212,47.3662c0,0-2.6364,0.8787-2.6364,7.0303"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.0606,47.3662c0,0,2.6364,0.8787,2.6364,7.0303"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.2121,55.2753h28.1212c0,0,5.2728,0,6.1515-2.6364"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12.2727",
      x2: "65",
      y1: "21.5884",
      y2: "21.5884",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default Helicopter;