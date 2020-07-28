import React from 'react';

const HotPepper = ({
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
      fill: "#EA5A47",
      stroke: "#EA5A47",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M61.02,29.52c0,0.3701-0.02,0.7401-0.05,1.11c-0.4075,8.0575-5.22,24.1-29.95,27.07c-6.26-0.16-12.03-2.28-16.71-5.79 c-0.98-0.66-3.61-2.05-2.77-3.69c0.84-1.64,4.07-0.33,4.25-0.29c0.1,0.03,0.2,0.06,0.29,0.11c5.54,1.88,11.54,1.95,15.73,1.95 c4.18,0,17.4-3.26,17.44-19.74v-0.07c0-0.08,0-0.17,0.02-0.25c0.16-2.92,2.41-5.27,5.29-5.56c0.19-0.02,0.39-0.03,0.6-0.03 c0.19,0,0.38,0.01,0.56,0.03C58.48,24.63,60.69,26.78,61.02,29.52z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D22F27",
      stroke: "#D22F27",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.97,30.63c-0.02,0.4-0.06,0.79-0.11,1.18C59.2,46.39,46.83,57.72,31.81,57.72c-0.27,0-10.3-1.8875-10.56-1.9075 c23.3441,3.5725,38.1872-12.2053,35.5547-24.0153C58.4647,32.2472,59.61,31.22,60.97,30.63z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B1CC33",
      stroke: "none",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.6055,28.4323 c-0.4282,0.8332,0.3404,1.7472,1.2376,1.4778c1.5002-0.4505,3.4108-0.6393,4.297,0.8565c1.2368,2.0876,5.3387,0.5293,7.0383-0.2337 c0.4606-0.2067,0.7127-0.708,0.5864-1.1968c-0.4177-1.6163-1.8591-5.0003-6.6064-5.0003 C51.464,24.3359,49.5511,26.5926,48.6055,28.4323z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5C9E31",
      stroke: "#5C9E31",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M61.18,30.53c-1.3,0.59-4,1.63-5.75,1.16c6.14-2.85-0.27-7.35-0.27-7.35c4.75,0,6.19,3.38,6.6,5 C61.89,29.82,61.64,30.33,61.18,30.53z"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.2323,24.3359 c0,0,2.1769-13.0859-9.9082-13.0859"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.02,57.7 c-0.05,0.01-0.09,0.01-0.14,0.02"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.1362,35.7529C56.9018,48.383,45.4488,57.7213,31.8078,57.7213c-6.5624,0-12.6151-2.1556-17.4997-5.8085 c-0.9807-0.6664-3.6104-2.0547-2.7698-3.6962c0.8407-1.6414,4.0758-0.3283,4.2563-0.2859 c0.0956,0.0319,0.1911,0.0637,0.2867,0.1062c5.543,1.8795,11.5426,1.9538,15.7264,1.9538c3.8212,0,15.1805-2.7194,17.1531-15.7467"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.6055,28.4323 c-0.4282,0.8332,0.3404,1.7472,1.2376,1.4778c1.5002-0.4505,3.4108-0.6393,4.297,0.8565c1.2368,2.0876,5.3387,0.5293,7.0383-0.2337 c0.4606-0.2067,0.7127-0.708,0.5864-1.1968c-0.4177-1.6163-1.8591-5.0003-6.6064-5.0003 C51.464,24.3359,49.5511,26.5926,48.6055,28.4323z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M61.18,30.53 c-0.07,0.03-0.14,0.06-0.21,0.1c-1.36,0.59-3.8799,1.51-5.54,1.06c-0.54-0.14-1-0.43-1.29-0.92c-0.89-1.5-2.8-1.31-4.3-0.86 c-0.2,0.06-0.4,0.06-0.57,0.02c-0.61-0.16-0.99-0.85-0.66-1.5c0.89-1.74,2.64-3.84,5.95-4.06c0.19-0.02,0.39-0.03,0.6-0.03 c0.19,0,0.38,0.01,0.56,0.03c4.3,0.24,5.65,3.42,6.04,4.97C61.89,29.82,61.64,30.33,61.18,30.53z"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.2323,24.3359 c0,0,2.1769-13.0859-9.9082-13.0859"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.02,57.7 c-0.05,0.01-0.09,0.01-0.14,0.02"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.1362,35.7529C56.9018,48.383,45.4488,57.7213,31.8078,57.7213c-6.5624,0-12.6151-2.1556-17.4997-5.8085 c-0.9807-0.6664-3.6104-2.0547-2.7698-3.6962c0.8407-1.6414,4.0758-0.3283,4.2563-0.2859 c0.0956,0.0319,0.1911,0.0637,0.2867,0.1062c5.543,1.8795,11.5426,1.9538,15.7264,1.9538c3.8212,0,15.1805-2.7194,17.1531-15.7467"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.6055,28.4323 c-0.4282,0.8332,0.3404,1.7472,1.2376,1.4778c1.5002-0.4505,3.4108-0.6393,4.297,0.8565c1.2368,2.0876,5.3387,0.5293,7.0383-0.2337 c0.4606-0.2067,0.7127-0.708,0.5864-1.1968c-0.4177-1.6163-1.8591-5.0003-6.6064-5.0003 C51.464,24.3359,49.5511,26.5926,48.6055,28.4323z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M61.18,30.53 c-0.07,0.03-0.14,0.06-0.21,0.1c-1.36,0.59-3.8799,1.51-5.54,1.06c-0.54-0.14-1-0.43-1.29-0.92c-0.89-1.5-2.8-1.31-4.3-0.86 c-0.2,0.06-0.4,0.06-0.57,0.02c-0.61-0.16-0.99-0.85-0.66-1.5c0.89-1.74,2.64-3.84,5.95-4.06c0.19-0.02,0.39-0.03,0.6-0.03 c0.19,0,0.38,0.01,0.56,0.03c4.3,0.24,5.65,3.42,6.04,4.97C61.89,29.82,61.64,30.33,61.18,30.53z"
    })));
  }
};

export default HotPepper;