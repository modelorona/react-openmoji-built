import React from 'react';

const Ogre = ({
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
      d: "M51.7592,19.365c-0.623,0.2558-1.2909,0.3844-1.9644,0.3781c-4.3286,0.0022-8.078,1.8283-12.3377,2.1357 c-5.0235,0.3625-9.3729-1.7156-14.2656-2.062c-0.568-0.037-1.1264-0.1647-1.6541-0.3781 c-0.4062,0.1384-0.8275,0.2274-1.2549,0.2651c-8.8148,8.7879-8.8367,23.0578-0.0487,31.8727s23.0578,8.8367,31.8727,0.0487 s8.8367-23.0578,0.0487-31.8727C52.0247,19.6217,51.8927,19.4925,51.7592,19.365z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      d: "M57.7435,27.4528c2.0194-0.5984,4.1984-0.3024,5.985,0.813c0,0,0.9579-6.6034-8.62-11.32l5.6-1.3534 l-6.43-4.2878c-1.8164-0.4281-3.7106-0.5449-5.943-0.4239V16c0,0-4,0-5-1l0.9712-4.4568C38.4888,8.6781,33.1665,8.3444,28.45,10.6 L28.3357,14c0,1-4,2-4,2l-1.9561-5.8942c-2.5773,0-4.179,0.6578-4.179,0.6578l-5.9226,4.8286 c1.9768-0.9884,6.4331,0.41,6.4331,0.41s-8.6206,0.9434-10.5361,13.207c0,0,3.8313-2.83,6.7047-2.83 c0,0-10.536,3.7734-6.7047,20.7538c0,0,1.9155-4.7168,4.789-5.66c0,0-3.8313,8.49,5.7471,17.9237c0,0,1.5046-4.3139,2.4624-5.2572 c0,0,1.3383,8.0873,7.0852,9.0306c0,0-0.9272-1.8866,0.9885-4.7168C31.279,62.5699,35.2313,65.4009,39.7828,66 c0,0-1.6543-6.9638,3.1349-7.9071c0,0,1.6543,0.36,1.6543,4.1337c0,0,5.2644-4.3139,5.2644-8.0873 c2.1524,0.4806,3.8333,2.1614,4.314,4.3138c0,0,4.551-4.8542,3.5931-16.1745c0,0,4.0695-1.7492,6.9429,3.911 C64.6864,46.19,67.3218,35.943,57.7435,27.4528z M58.3357,40c-3,10-11,18-20,18s-23-5-24-15s-2-14,5-23c0,0,13,1,18,2 c0,0,13-4,16-2C53.3357,20,61.3357,30,58.3357,40z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D22F27",
      d: "M28.9889,12.2111C26.5852,10.6086,25.7841,8.2049,26.5857,5c-5.6086,1.6025-4.8074,8.0123-2.4037,12.0185 C28.4286,17.82,28.9889,12.2111,28.9889,12.2111z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D22F27",
      d: "M47.1557,17.0185C49.5592,13.0123,50.3604,6.6025,44.7518,5c0.8012,3.2049,0,5.6086-2.4037,7.2111 C38.7426,14.6149,42.9084,17.82,47.1557,17.0185z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "49.2105",
      x2: "41.5669",
      y1: "24.6463",
      y2: "26.8989",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M18.208,11.6386 c-4.9423,1.9768-6.2023,4.3636-6.2023,4.3636s3.8313-0.9433,6.7048,0c0,0-8.62,0.9434-10.5361,13.207c0,0,3.8313-2.83,6.7048-2.83 c0,0-10.5361,3.7735-6.7048,20.7538c0,0,1.9157-4.7167,4.7892-5.66c0,0-3.8314,8.49,5.7469,17.9237 c0,0,1.5047-4.3138,2.4625-5.2572c0,0,1.3383,8.0873,7.0853,9.0306c0,0-0.9273-1.8867,0.9883-4.7167 c2.032,4.1168,5.9846,6.9478,10.5363,7.5466c0,0-1.6543-6.9638,3.1348-7.9071c0,0,1.6543,0.36,1.6543,4.1337 c0,0,5.2644-4.3139,5.2644-8.0873c2.1524,0.4806,3.8333,2.1615,4.3139,4.3139c0,0,4.5511-4.8543,3.5932-16.1745 c0,0,4.0694-1.7493,6.9429,3.9109c0,0,2.6354-10.2466-6.9429-18.7368c2.0194-0.5984,4.1985-0.3024,5.9851,0.813 c0,0,0.9578-6.6034-8.62-11.32c0,0,3.8313-1.8867,5.747-0.9434c0,0-4.7318-3.3282-6.8869-3.8459"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "31.3034",
      x2: "30.8127",
      y1: "43.2228",
      y2: "46.7047",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "2",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.6966",
      x2: "41.1873",
      y1: "43.2228",
      y2: "46.7047",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "2",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "30.4311",
      x2: "22.7875",
      y1: "26.8989",
      y2: "24.6463",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M31.7316,10.4305 c2.6719-0.8657,5.549-0.8657,8.2209,0"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "27.5987",
      x2: "44.4013",
      y1: "42.2787",
      y2: "42.2787",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53.3796,20.8053 c8.0928,9.599,6.8718,23.9409-2.7272,32.0337s-23.9409,6.8718-32.0337-2.7272c-7.2418-8.5896-7.1228-21.1812,0.2801-29.6325"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M18.9034,20.4834 c0,0,4.9777-1.2939,9.1885,0.0507c2.5313,0.8443,5.1933,1.2283,7.86,1.1339"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M52.7543,20.4834 c0,0-4.9778-1.2939-9.1885,0.0507c-2.5313,0.8443-5.1933,1.2283-7.86,1.1339"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M28.9889,12.2111 C26.5852,10.6086,25.7841,8.2049,26.5857,5c-5.6086,1.6025-4.8074,8.0123-2.4037,12.0185 C28.4286,17.82,28.9889,12.2111,28.9889,12.2111z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M47.1557,17.0185 C49.5592,13.0123,50.3604,6.6025,44.7518,5c0.8012,3.2049,0,5.6086-2.4037,7.2111C38.7426,14.6149,42.9084,17.82,47.1557,17.0185z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30,32c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,29,30,30.3448,30,32"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M48,32c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,30.3448,48,32"
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
    }, /*#__PURE__*/React.createElement("line", {
      x1: "49.2105",
      x2: "41.5669",
      y1: "24.6463",
      y2: "26.8989",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M18.208,11.6386 c-4.9423,1.9768-6.2023,4.3636-6.2023,4.3636s3.8313-0.9433,6.7048,0c0,0-8.62,0.9434-10.5361,13.207c0,0,3.8313-2.83,6.7048-2.83 c0,0-10.5361,3.7735-6.7048,20.7538c0,0,1.9157-4.7167,4.7892-5.66c0,0-3.8314,8.49,5.7469,17.9237 c0,0,1.5047-4.3138,2.4625-5.2572c0,0,1.3383,8.0873,7.0853,9.0306c0,0-0.9273-1.8867,0.9883-4.7167 c2.032,4.1168,5.9846,6.9478,10.5363,7.5466c0,0-1.6543-6.9638,3.1348-7.9071c0,0,1.6543,0.36,1.6543,4.1337 c0,0,5.2644-4.3139,5.2644-8.0873c2.1524,0.4806,3.8333,2.1615,4.3139,4.3139c0,0,4.5511-4.8543,3.5932-16.1745 c0,0,4.0694-1.7493,6.9429,3.9109c0,0,2.6354-10.2466-6.9429-18.7368c2.0194-0.5984,4.1985-0.3024,5.9851,0.813 c0,0,0.9578-6.6034-8.62-11.32c0,0,3.8313-1.8867,5.747-0.9434c0,0-4.7318-3.3282-6.8869-3.8459"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "31.3034",
      x2: "30.8127",
      y1: "43.2228",
      y2: "46.7047",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "2",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.6966",
      x2: "41.1873",
      y1: "43.2228",
      y2: "46.7047",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "2",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "30.4311",
      x2: "22.7875",
      y1: "26.8989",
      y2: "24.6463",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M31.7316,10.4305 c2.6719-0.8657,5.549-0.8657,8.2209,0"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "27.5987",
      x2: "44.4013",
      y1: "42.2787",
      y2: "42.2787",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53.3796,20.8053 c8.0928,9.599,6.8718,23.9409-2.7272,32.0337s-23.9409,6.8718-32.0337-2.7272c-7.2418-8.5896-7.1228-21.1812,0.2801-29.6325"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M18.9034,20.4834 c0,0,4.9777-1.2939,9.1885,0.0507c2.5313,0.8443,5.1933,1.2283,7.86,1.1339"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M52.7543,20.4834 c0,0-4.9778-1.2939-9.1885,0.0507c-2.5313,0.8443-5.1933,1.2283-7.86,1.1339"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M28.9889,12.2111 C26.5852,10.6086,25.7841,8.2049,26.5857,5c-5.6086,1.6025-4.8074,8.0123-2.4037,12.0185 C28.4286,17.82,28.9889,12.2111,28.9889,12.2111z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M47.1557,17.0185 C49.5592,13.0123,50.3604,6.6025,44.7518,5c0.8012,3.2049,0,5.6086-2.4037,7.2111C38.7426,14.6149,42.9084,17.82,47.1557,17.0185z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30,32c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,29,30,30.3448,30,32"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M48,32c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,30.3448,48,32"
    })));
  }
};

export default Ogre;