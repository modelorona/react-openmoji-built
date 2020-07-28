import React from 'react';

const LitterInBinSign = ({
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
      fill: "#61b2e4",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60,61H12c-0.5523,0-1-0.4477-1-1V12c0-0.5523,0.4477-1,1-1h48c0.5523,0,1,0.4477,1,1v48C61,60.5523,60.5523,61,60,61z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#FFFFFF",
      stroke: "none",
      points: "33.9633,43.4587 32.8958,58.4031 24.8958,58.4031 23.8284,43.4587"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8266",
      d: "M31.231,41.1948c0,0-5.6067,0.3386-5.7333,0.411c-0.1267,0.0725,1.1619-1.6144,0.9723-3.4846c0,0,3.0416,1.0383,5.8834-0.5198 L31.231,41.1948z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      d: "M40.287,29.6215"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      d: "M42.6258,25.6433c0,0-0.5443,3.9503-2.9983,6.9077c-0.5911,0.7122-2.7561,2.0885-3.3567,2.34 c-2.25,0.9423-4.4827-0.1479-4.4827-0.1479l5.9378-3.6298l1.8399-5.32L42.6258,25.6433z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      d: "M52.6764,41.2839l-0.6535-16.0414c-0.0946-1.8972-1.6166-3.3911-3.4733-3.4092h-4.9512 c-1.8567,0.0181-3.3787,1.512-3.4733,3.4092l1.1038,2.0442c-0.0048,0.1074,0.1508,0.6019,0.1076,0.6998l0.4657,11.9296 l-0.7693,18.2453c-0.0269,0.2599,0.2184,0.5377,0.377,0.7427c0.0313,0.0399,0.076,0.0664,0.1255,0.0743 c0.1765,0,0.5421-0.3529,0.6073-0.9287l2.0977-18.5953c0.0442-0.3814,0.1421-0.7542,0.2904-1.1069l0.812-0.5142h1.341 l0.5979,0.6645c0.1269,0.325,0.2916,0.6363,0.3324,0.9838l2.3919,18.5698c0.0652,0.5766,0.43,0.9287,0.6065,0.9287 c0.0494-0.0079,0.0942-0.0344,0.1255-0.0743c0.1587-0.2049,0.2328-0.4652,0.2063-0.7253l-0.5889-18.2644l2.4208,1.7283 C52.7164,41.5337,52.6822,41.4103,52.6764,41.2839z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "45.9925",
      cy: "16.5102",
      r: "2.3752",
      fill: "#FFFFFF",
      stroke: "none"
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
      d: "M60,61H12c-0.5523,0-1-0.4477-1-1V12c0-0.5523,0.4477-1,1-1h48c0.5523,0,1,0.4477,1,1v48C61,60.5523,60.5523,61,60,61z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "33.8958,44.4031 32.8958,58.4031 24.8958,58.4031 23.8958,44.4031"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8266",
      d: "M31.231,41.1948c0,0-5.6067,0.3386-5.7333,0.411c-0.1267,0.0725,1.1619-1.6144,0.9723-3.4846c0,0,3.0416,1.0383,5.8834-0.5198 L31.231,41.1948z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "45.9925",
      cy: "16.5102",
      r: "2.3752",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M50.0173,26.8606 l1.52,30.4c0.044,0.88-0.46,1.6-1.12,1.6c-0.7812-0.1321-1.3603-0.7976-1.3832-1.5896l-2.0312-17.6248 c-0.1008-0.8744-0.5431-1.5896-0.9832-1.5896c-0.44,0-0.88,0.7152-0.9832,1.5896L43.0029,57.271 c-0.0228,0.792-0.602,1.4575-1.3832,1.5896c-0.66,0-1.1639-0.72-1.12-1.6l1.52-30.4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32.1458,33.8333 c0,0,3.9208-1.4164,5-3c1.0447-1.5328,4.2447-8.9751,6.4715-9h4.8c2.2268,0.0249,4.0509,1.7761,4.1664,4l0.6336,15.2"
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
      d: "M60,61H12c-0.5523,0-1-0.4477-1-1V12c0-0.5523,0.4477-1,1-1h48c0.5523,0,1,0.4477,1,1v48C61,60.5523,60.5523,61,60,61z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "33.8958,44.4031 32.8958,58.4031 24.8958,58.4031 23.8958,44.4031"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8266",
      d: "M31.231,41.1948c0,0-5.6067,0.3386-5.7333,0.411c-0.1267,0.0725,1.1619-1.6144,0.9723-3.4846c0,0,3.0416,1.0383,5.8834-0.5198 L31.231,41.1948z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "45.9925",
      cy: "16.5102",
      r: "2.3752",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M50.0173,26.8606 l1.52,30.4c0.044,0.88-0.46,1.6-1.12,1.6c-0.7812-0.1321-1.3603-0.7976-1.3832-1.5896l-2.0312-17.6248 c-0.1008-0.8744-0.5431-1.5896-0.9832-1.5896c-0.44,0-0.88,0.7152-0.9832,1.5896L43.0029,57.271 c-0.0228,0.792-0.602,1.4575-1.3832,1.5896c-0.66,0-1.1639-0.72-1.12-1.6l1.52-30.4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32.1458,33.8333 c0,0,3.9208-1.4164,5-3c1.0447-1.5328,4.2447-8.9751,6.4715-9h4.8c2.2268,0.0249,4.0509,1.7761,4.1664,4l0.6336,15.2"
    })));
  }
};

export default LitterInBinSign;