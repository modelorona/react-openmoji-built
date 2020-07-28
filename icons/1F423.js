import React from 'react';

const HatchingChick = ({
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
      fill: "#FCEA2B",
      stroke: "#FCEA2B",
      strokeMiterlimit: "10",
      strokeWidth: "1.8",
      d: "M36.1089,44.1242 c0,0,21.3368-0.7112,10.6684-20.6256c0,0-2.8449-7.8235-10.6684-7.8235c-2.2075,0-4.0187,0.5096-5.4973,1.2733 c-3.7618,1.9427-5.3718,5.5292-5.8823,6.5502C24.018,24.9211,13.3496,42.7018,36.1089,44.1242z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#F1B31C",
      stroke: "none",
      d: "M35.3719,30.6032c0,0,5.9251-0.2907,0,5.2324C35.3719,35.8356,29.4468,30.6032,35.3719,30.6032z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      d: "M61.6942,37.9501C61.6942,52.3371,50.0313,64,35.6443,64S9.5944,52.3371,9.5944,37.9501l7.4428,3.7214 l6.5125-4.6518l8.3732,5.5821l6.2024-5.5821l8.1758,4.7364l7.0199-5.6667L61.6942,37.9501z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      d: "M53.321,36.0894C51.3406,47.7279,46.2215,57.4929,35.6443,64c14.387,0,26.0499-11.663,26.0499-26.0499 L53.321,36.0894z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "30.908",
      cy: "26.3629",
      r: "2.3682",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40.3807",
      cy: "26.3629",
      r: "2.3682",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "34.7963",
      x2: "33.4334",
      y1: "14.9035",
      y2: "9.7857",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.8284",
      x2: "36.8284",
      y1: "15.7062",
      y2: "12.1539",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "38.9992",
      x2: "40.3807",
      y1: "15.9035",
      y2: "9.7857",
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
      d: "M35.3719,30.6032c0,0,5.9251-0.2907,0,5.2324C35.3719,35.8356,29.4468,30.6032,35.3719,30.6032z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.7637,33.4191c0.0286-2.6167-0.8175-5.8717-2.9865-9.9204c0,0-2.8449-7.8235-10.6684-7.8235 c-2.2075,0-4.0187,0.5096-5.4973,1.2733c-3.7618,1.9427-5.3718,5.5292-5.8823,6.5502c-0.3479,0.6959-3.0787,5.3065-3.1133,10.0017"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M61.6942,37.9501C61.6942,52.3371,50.0313,64,35.6443,64S9.5944,52.3371,9.5944,37.9501l7.4428,3.7214l6.5125-4.6518l8.3732,5.5821 l6.2024-5.5821l8.1758,4.7364l7.0199-5.6667L61.6942,37.9501z"
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "30.908",
      cy: "26.3629",
      r: "2.3682",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40.3807",
      cy: "26.3629",
      r: "2.3682",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "34.7963",
      x2: "33.4334",
      y1: "14.9035",
      y2: "9.7857",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.8284",
      x2: "36.8284",
      y1: "15.7062",
      y2: "12.1539",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "38.9992",
      x2: "40.3807",
      y1: "15.9035",
      y2: "9.7857",
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
      d: "M35.3719,30.6032c0,0,5.9251-0.2907,0,5.2324C35.3719,35.8356,29.4468,30.6032,35.3719,30.6032z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.7637,33.4191c0.0286-2.6167-0.8175-5.8717-2.9865-9.9204c0,0-2.8449-7.8235-10.6684-7.8235 c-2.2075,0-4.0187,0.5096-5.4973,1.2733c-3.7618,1.9427-5.3718,5.5292-5.8823,6.5502c-0.3479,0.6959-3.0787,5.3065-3.1133,10.0017"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M61.6942,37.9501C61.6942,52.3371,50.0313,64,35.6443,64S9.5944,52.3371,9.5944,37.9501l7.4428,3.7214l6.5125-4.6518l8.3732,5.5821 l6.2024-5.5821l8.1758,4.7364l7.0199-5.6667L61.6942,37.9501z"
    })));
  }
};

export default HatchingChick;