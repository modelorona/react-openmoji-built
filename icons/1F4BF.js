import React from 'react';

const OpticalDisk = ({
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
      strokeMiterlimit: "10",
      d: "M37,6.96c-0.08,0-0.17,0-0.25,0.01 c-5.46,0.04-10.56,1.59-14.9,4.25c-5.28,3.24-9.44,8.12-11.7599,13.94C8.74,28.49,8,32.14,8,35.96C8,51.89,20.84,64.82,36.75,64.95 c0.02,0.0099,0.03,0.0099,0.04,0C36.86,64.96,36.93,64.96,37,64.96c16.02,0,29-12.99,29-29C66,19.94,53.02,6.96,37,6.96z M41.5,35.96c0,2.76-2.24,5-5,5s-5-2.24-5-5c0-2.7599,2.24-5,5-5S41.5,33.2,41.5,35.96z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      d: "M9.7201,24.8379C8.2918,28.2645,7.4995,32.02,7.4995,35.958c0,15.991,13.0095,29.001,29.0005,29.001 c5.288,0,10.2454-1.4296,14.5186-3.9123L9.7201,24.8379z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      d: "M63.1362,47.415C64.6546,43.8983,65.5,40.0256,65.5,35.958c0-15.9905-13.009-29-29-29 c-5.4189,0-10.4929,1.4977-14.8368,4.0953L63.1362,47.415z"
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
      strokeMiterlimit: "10",
      d: "M37,6.96c-0.08,0-0.17,0-0.25,0.01 c-5.46,0.04-10.56,1.59-14.9,4.25c-5.28,3.24-9.44,8.12-11.7599,13.94C8.74,28.49,8,32.14,8,35.96C8,51.89,20.84,64.82,36.75,64.95 c0.02,0.0099,0.03,0.0099,0.04,0C36.86,64.96,36.93,64.96,37,64.96c16.02,0,29-12.99,29-29C66,19.94,53.02,6.96,37,6.96z M41.5,35.96c0,2.76-2.24,5-5,5s-5-2.24-5-5c0-2.7599,2.24-5,5-5S41.5,33.2,41.5,35.96z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M64.59,28.71c-0.2401-0.92-0.52-1.83-0.85-2.71c-0.32-0.89-0.69-1.77-1.1-2.61c-2.85-5.92-7.65-10.72-13.57-13.57 c-0.84-0.41-1.72-0.78-2.61-1.1c-0.88-0.33-1.79-0.61-2.71-0.85c-2.24-0.57-4.58-0.89-7-0.9c-0.08-0.01-0.17-0.01-0.25-0.01 c-0.44,0-0.88,0.01-1.32,0.04c-0.11-0.01-0.22,0-0.32,0.01C34.54,7.02,34.22,7.05,33.91,7.08c-0.14,0.01-0.28,0.02-0.42,0.04 c-0.33,0.03-0.65,0.07-0.98,0.12c-0.33,0.04-0.65,0.09-0.98,0.15c-0.64,0.11-1.28,0.24-1.91,0.4c-0.3,0.07-0.6,0.15-0.9,0.23 c-0.03,0-0.0699,0.01-0.1,0.03c-0.6,0.16-1.2,0.35-1.78,0.57c-0.27,0.09-0.54,0.19-0.81,0.3C25.96,8.93,25.9,8.96,25.83,9 c-0.56,0.2-1.11,0.44-1.65,0.71c-0.29,0.14-0.57,0.28-0.85,0.42c-0.57,0.29-1.13,0.6-1.67,0.92l0.0168,0.0151 C16.3436,14.2343,12.1157,19.0502,9.72,24.84c-0.18,0.43-0.35,0.86-0.5099,1.3c-0.32,0.87-0.6,1.77-0.82,2.68 c-0.15,0.56-0.27,1.12-0.37,1.69c-0.17,0.83-0.29,1.68-0.37,2.53C7.55,34,7.5,34.98,7.5,35.96c0,2.5,0.32,4.9301,0.91,7.2401 c0.2401,0.93,0.52,1.83,0.85,2.72c0.48,1.33,1.07,2.62,1.74,3.86c1.34,2.47,3.03,4.72,5,6.68c0.99,1,2.04,1.91,3.16,2.73 c0.7401,0.57,1.51,1.09,2.3,1.57H21.47c0.79,0.49,1.61,0.93,2.46,1.34c3.8,1.83,8.06,2.86,12.57,2.86c0.08,0,0.17,0,0.25-0.0099 c0.02,0.0099,0.03,0.0099,0.04,0c0.33,0.0099,0.65,0,0.97-0.02c0.15,0,0.31-0.01,0.47-0.03c0.32-0.0099,0.63-0.03,0.94-0.07 c0.47-0.03,0.93-0.09,1.39-0.16c0.26-0.03,0.53-0.07,0.79-0.12c0.63-0.1,1.25-0.23,1.87-0.38c0.28-0.06,0.5601-0.13,0.84-0.21 c0.66-0.17,1.31-0.37,1.95-0.61c0.28-0.09,0.55-0.19,0.81-0.29c0.59-0.21,1.16-0.46,1.73-0.73c0.28-0.1299,0.56-0.2599,0.84-0.4 c0.55-0.28,1.09-0.57,1.63-0.88l-0.0128-0.0112c5.3691-3.0992,9.6674-7.8692,12.1328-13.6188c0.01-0.01,0.01-0.01,0.01-0.02 c0.38-0.87,0.71-1.77,1-2.68c0.14-0.46,0.28-0.93,0.4-1.4c0.1-0.38,0.19-0.77,0.28-1.16c0.13-0.56,0.23-1.13,0.32-1.71 c0.08-0.4901,0.14-0.98,0.19-1.48c0.04-0.36,0.0699-0.73,0.09-1.1c0.05-0.63,0.07-1.27,0.07-1.91 C65.5,33.46,65.18,31.03,64.59,28.71z M31.5,35.96c0-2.7599,2.24-5,5-5s5,2.2401,5,5c0,2.76-2.24,5-5,5S31.5,38.72,31.5,35.96z"
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
      strokeMiterlimit: "10",
      d: "M37,6.96c-0.08,0-0.17,0-0.25,0.01 c-5.46,0.04-10.56,1.59-14.9,4.25c-5.28,3.24-9.44,8.12-11.7599,13.94C8.74,28.49,8,32.14,8,35.96C8,51.89,20.84,64.82,36.75,64.95 c0.02,0.0099,0.03,0.0099,0.04,0C36.86,64.96,36.93,64.96,37,64.96c16.02,0,29-12.99,29-29C66,19.94,53.02,6.96,37,6.96z M41.5,35.96c0,2.76-2.24,5-5,5s-5-2.24-5-5c0-2.7599,2.24-5,5-5S41.5,33.2,41.5,35.96z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M64.59,28.71c-0.2401-0.92-0.52-1.83-0.85-2.71c-0.32-0.89-0.69-1.77-1.1-2.61c-2.85-5.92-7.65-10.72-13.57-13.57 c-0.84-0.41-1.72-0.78-2.61-1.1c-0.88-0.33-1.79-0.61-2.71-0.85c-2.24-0.57-4.58-0.89-7-0.9c-0.08-0.01-0.17-0.01-0.25-0.01 c-0.44,0-0.88,0.01-1.32,0.04c-0.11-0.01-0.22,0-0.32,0.01C34.54,7.02,34.22,7.05,33.91,7.08c-0.14,0.01-0.28,0.02-0.42,0.04 c-0.33,0.03-0.65,0.07-0.98,0.12c-0.33,0.04-0.65,0.09-0.98,0.15c-0.64,0.11-1.28,0.24-1.91,0.4c-0.3,0.07-0.6,0.15-0.9,0.23 c-0.03,0-0.0699,0.01-0.1,0.03c-0.6,0.16-1.2,0.35-1.78,0.57c-0.27,0.09-0.54,0.19-0.81,0.3C25.96,8.93,25.9,8.96,25.83,9 c-0.56,0.2-1.11,0.44-1.65,0.71c-0.29,0.14-0.57,0.28-0.85,0.42c-0.57,0.29-1.13,0.6-1.67,0.92l0.0168,0.0151 C16.3436,14.2343,12.1157,19.0502,9.72,24.84c-0.18,0.43-0.35,0.86-0.5099,1.3c-0.32,0.87-0.6,1.77-0.82,2.68 c-0.15,0.56-0.27,1.12-0.37,1.69c-0.17,0.83-0.29,1.68-0.37,2.53C7.55,34,7.5,34.98,7.5,35.96c0,2.5,0.32,4.9301,0.91,7.2401 c0.2401,0.93,0.52,1.83,0.85,2.72c0.48,1.33,1.07,2.62,1.74,3.86c1.34,2.47,3.03,4.72,5,6.68c0.99,1,2.04,1.91,3.16,2.73 c0.7401,0.57,1.51,1.09,2.3,1.57H21.47c0.79,0.49,1.61,0.93,2.46,1.34c3.8,1.83,8.06,2.86,12.57,2.86c0.08,0,0.17,0,0.25-0.0099 c0.02,0.0099,0.03,0.0099,0.04,0c0.33,0.0099,0.65,0,0.97-0.02c0.15,0,0.31-0.01,0.47-0.03c0.32-0.0099,0.63-0.03,0.94-0.07 c0.47-0.03,0.93-0.09,1.39-0.16c0.26-0.03,0.53-0.07,0.79-0.12c0.63-0.1,1.25-0.23,1.87-0.38c0.28-0.06,0.5601-0.13,0.84-0.21 c0.66-0.17,1.31-0.37,1.95-0.61c0.28-0.09,0.55-0.19,0.81-0.29c0.59-0.21,1.16-0.46,1.73-0.73c0.28-0.1299,0.56-0.2599,0.84-0.4 c0.55-0.28,1.09-0.57,1.63-0.88l-0.0128-0.0112c5.3691-3.0992,9.6674-7.8692,12.1328-13.6188c0.01-0.01,0.01-0.01,0.01-0.02 c0.38-0.87,0.71-1.77,1-2.68c0.14-0.46,0.28-0.93,0.4-1.4c0.1-0.38,0.19-0.77,0.28-1.16c0.13-0.56,0.23-1.13,0.32-1.71 c0.08-0.4901,0.14-0.98,0.19-1.48c0.04-0.36,0.0699-0.73,0.09-1.1c0.05-0.63,0.07-1.27,0.07-1.91 C65.5,33.46,65.18,31.03,64.59,28.71z M31.5,35.96c0-2.7599,2.24-5,5-5s5,2.2401,5,5c0,2.76-2.24,5-5,5S31.5,38.72,31.5,35.96z"
    })));
  }
};

export default OpticalDisk;