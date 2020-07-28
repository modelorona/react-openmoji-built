import React from 'react';

const SunWithFace = ({
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
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "#FCEA2B",
      stroke: "none",
      points: "36,10 31.4483,4.3216 28.6708,11.0465 22.7014,6.8864 21.9435,14.1231 15.0427,11.817 16.3488,18.9749 9.0779,18.6961 12.3422,25.1984 5.2887,26.9833 10.2616,32.295 4,36 10.2616,39.7051 5.2889,45.0172 12.3426,46.8026 9.0787,53.3052 16.3497,53.0261 15.044,60.1842 21.9445,57.8775 22.7026,65.1141 28.6713,60.9536 31.4484,67.6784 36,62 40.5517,67.6784 43.3292,60.9535 49.2986,65.1135 50.0565,57.8769 56.9573,60.183 55.6512,53.0251 62.9221,53.3039 59.6578,46.8016 66.7113,45.0167 61.7384,39.705 68,36 61.7384,32.2949 66.7111,26.9828 59.6573,25.1974 62.9213,18.6948 55.6503,18.9739 56.956,11.8158 50.0555,14.1225 49.2974,6.8859 43.3287,11.0464 40.5516,4.3216"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "36,10 31.4483,4.3216 28.6708,11.0465 22.7014,6.8864 21.9435,14.1231 15.0427,11.817 16.3488,18.9749 9.0779,18.6961 12.3422,25.1984 5.2887,26.9833 10.2616,32.295 4,36 10.2616,39.7051 5.2889,45.0172 12.3426,46.8026 9.0787,53.3052 16.3497,53.0261 15.044,60.1842 21.9445,57.8775 22.7026,65.1141 28.6713,60.9536 31.4484,67.6784 36,62 40.5517,67.6784 43.3292,60.9535 49.2986,65.1135 50.0565,57.8769 56.9573,60.183 55.6512,53.0251 62.9221,53.3039 59.6578,46.8016 66.7113,45.0167 61.7384,39.705 68,36 61.7384,32.2949 66.7111,26.9828 59.6573,25.1974 62.9213,18.6948 55.6503,18.9739 56.956,11.8158 50.0555,14.1225 49.2974,6.8859 43.3287,11.0464 40.5516,4.3216"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "27.8456",
      cy: "33.789",
      r: "3",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "44.1544",
      cy: "33.789",
      r: "3",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.6763,46.3816c-2.1347,1.5846-4.8139,2.5518-7.6766,2.5518c-2.9019,0-5.5262-0.9282-7.6759-2.5523"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.7748,23.0042c0,0-4.7748-2.6003-9.5496,1.6523"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.2252,23.0042c0,0,4.7748-2.6003,9.5496,1.6523"
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
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "36,10 31.4483,4.3216 28.6708,11.0465 22.7014,6.8864 21.9435,14.1231 15.0427,11.817 16.3488,18.9749 9.0779,18.6961 12.3422,25.1984 5.2887,26.9833 10.2616,32.295 4,36 10.2616,39.7051 5.2889,45.0172 12.3426,46.8026 9.0787,53.3052 16.3497,53.0261 15.044,60.1842 21.9445,57.8775 22.7026,65.1141 28.6713,60.9536 31.4484,67.6784 36,62 40.5517,67.6784 43.3292,60.9535 49.2986,65.1135 50.0565,57.8769 56.9573,60.183 55.6512,53.0251 62.9221,53.3039 59.6578,46.8016 66.7113,45.0167 61.7384,39.705 68,36 61.7384,32.2949 66.7111,26.9828 59.6573,25.1974 62.9213,18.6948 55.6503,18.9739 56.956,11.8158 50.0555,14.1225 49.2974,6.8859 43.3287,11.0464 40.5516,4.3216"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "27.8456",
      cy: "33.789",
      r: "3",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "44.1544",
      cy: "33.789",
      r: "3",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.6763,46.3816c-2.1347,1.5846-4.8139,2.5518-7.6766,2.5518c-2.9019,0-5.5262-0.9282-7.6759-2.5523"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.7748,23.0042c0,0-4.7748-2.6003-9.5496,1.6523"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.2252,23.0042c0,0,4.7748-2.6003,9.5496,1.6523"
    })));
  }
};

export default SunWithFace;