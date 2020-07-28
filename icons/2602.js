import React from 'react';

const Umbrella = ({
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
      fill: "#B399C8",
      d: "M46.97,36.9698c-0.25,0.13-0.53,0.15-0.79,0.05c-8.98-3.39-19.17-0.56-21.16,0.05 c-0.23,0.07-0.47,0.04-0.68-0.08c-5.65-3-11.21-0.87-12.92-0.08c-0.31,0.15-0.66,0.12-0.93-0.09c-2.61-2.03-6.49,0.36-6.49,0.36 c0-17.02,14.11-30.82,31.51-30.82C35.51,6.3597,43.04,9.3698,46.97,36.9698z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B399C8",
      d: "M59.97,36.9398c-0.05-0.01-0.09-0.01-0.14-0.03c-0.04-0.02-0.08-0.04-0.13-0.06 C59.81,36.8898,59.9,36.9197,59.97,36.9398z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B399C8",
      d: "M67.99,36.9897v0.05c0,0.01,0,0.02-0.01,0.03C67.99,37.0198,67.99,36.9897,67.99,36.9897z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#8967AA",
      d: "M67.99,36.9897c0,0,0,0.03-0.01,0.08c0,0.02,0,0.03-0.01,0.05c0,0.02-0.0099,0.05-0.02,0.07 c-0.02,0.04-0.04,0.08-0.07,0.11c-0.03,0.03-0.06,0.05-0.1,0.06c-0.03,0.02-0.08,0.03-0.13,0.03c-0.05,0-0.09-0.01-0.14-0.03 c-0.11-0.05-0.23-0.1-0.36-0.16c-0.06-0.03-0.14-0.06-0.22-0.09c-1.54-0.54-6.14-0.31-6.14-0.31c-0.14,0.11-0.29,0.17-0.45,0.19 c0,0-0.02,0-0.06,0c-0.03,0-0.09-0.01-0.17-0.02h-0.04c-0.01-0.01-0.02-0.01-0.03-0.01c0,0-0.0099,0-0.0099-0.01 c-0.02,0-0.03-0.01-0.05-0.01h-0.01c-0.0699-0.02-0.16-0.05-0.27-0.09c-0.02,0-0.04-0.01-0.06-0.02c-0.06-0.03-0.12-0.06-0.19-0.08 c-0.07-0.04-0.15-0.07-0.23-0.11c-0.04-0.02-0.08-0.03-0.14-0.05c-1.72-0.49-12.11,0.38-12.11,0.38 c-3.93-27.6-11.46-30.61-11.46-30.61c10.08,0,19.49,4.31,25.56,11.52c0.09,0.1,0.18,0.2,0.26,0.31c0.26,0.32,0.51,0.64,0.76,0.96 C68.57,27.5898,67.99,36.9897,67.99,36.9897z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#8967AA",
      d: "M60.04,36.9598c-0.02,0-0.04-0.01-0.06-0.02c0.02,0,0.03,0.01,0.05,0.01 C60.03,36.9598,60.04,36.9598,60.04,36.9598z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#8967AA",
      d: "M67.51,37.3597c-0.08-0.02-0.19-0.06-0.31-0.13c-0.01-0.0099-0.03-0.02-0.05-0.03 C67.28,37.2598,67.4,37.3098,67.51,37.3597z"
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
      d: "M66.6662,32.4528C64.4014,17.6281,51.3136,6.3579,35.5066,6.3579C18.106,6.3579,4,20.1569,4,37.1789 c0,0,3.8776-2.3879,6.4822-0.3669c0.2721,0.2111,0.6336,0.2434,0.9442,0.0987c1.7106-0.7967,7.2706-2.9137,12.907,0.0798 c0.2158,0.1146,0.4613,0.1477,0.6941,0.076c2.0005-0.616,12.1825-3.4346,21.1545-0.0438c0.2561,0.0968,0.539,0.0757,0.7817-0.0522 c5.6159-2.96,11.1503-0.8605,12.8662-0.0631c0.3165,0.1471,0.6843,0.1111,0.9606-0.1051c2.5808-2.0191,6.2224,0.2349,6.2224,0.2349"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.3523,62.5394c0,3.0158-2.2041,5.4606-4.9229,5.4606s-4.9229-2.4448-4.9229-5.4606V35.3941"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.5066",
      x2: "35.5066",
      y1: "6.3579",
      y2: "4",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M10.925,36.992C16.5864,4.6552,35.5066,6.3579,35.5066,6.3579s-9.594,0.9306-10.8247,30.7412"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.3383,36.9896C54.6769,4.6528,35.5066,6.3579,35.5066,6.3579S45.3483,7.27,46.5791,37.0805"
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
      d: "M66.6662,32.4528C64.4014,17.6281,51.3136,6.3579,35.5066,6.3579C18.106,6.3579,4,20.1569,4,37.1789 c0,0,3.8776-2.3879,6.4822-0.3669c0.2721,0.2111,0.6336,0.2434,0.9442,0.0987c1.7106-0.7967,7.2706-2.9137,12.907,0.0798 c0.2158,0.1146,0.4613,0.1477,0.6941,0.076c2.0005-0.616,12.1825-3.4346,21.1545-0.0438c0.2561,0.0968,0.539,0.0757,0.7817-0.0522 c5.6159-2.96,11.1503-0.8605,12.8662-0.0631c0.3165,0.1471,0.6843,0.1111,0.9606-0.1051c2.5808-2.0191,6.2224,0.2349,6.2224,0.2349"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.3523,62.5394c0,3.0158-2.2041,5.4606-4.9229,5.4606s-4.9229-2.4448-4.9229-5.4606V35.3941"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.5066",
      x2: "35.5066",
      y1: "6.3579",
      y2: "4",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M10.925,36.992C16.5864,4.6552,35.5066,6.3579,35.5066,6.3579s-9.594,0.9306-10.8247,30.7412"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.3383,36.9896C54.6769,4.6528,35.5066,6.3579,35.5066,6.3579S45.3483,7.27,46.5791,37.0805"
    })));
  }
};

export default Umbrella;