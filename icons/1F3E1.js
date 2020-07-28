import React from 'react';

const HouseWithGarden = ({
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "37.0753",
      y: "36.0532",
      width: "26.8836",
      height: "18.1139",
      fill: "#FFFFFF"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#EA5A47",
      stroke: "#EA5A47",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "50.2353,23.2 38.1,36 63.5,36"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      d: "M47.3,26l-6.4,6.0595v-8.5733c0-0.9313,0.7549-1.4162,1.6862-1.4162h3.0276 c0.9313,0,1.6862,0.4849,1.6862,1.4162C47.3,23.4862,47.3,26,47.3,26z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "43",
      y: "42",
      width: "6",
      height: "12",
      fill: "#A57939"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "54",
      y: "42",
      width: "6",
      height: "5",
      fill: "#92D3F5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B1CC33",
      d: "M41.0059,28.3393c0-3.3123-3.4447-6.0025-7.6937-6.0025c-0.3549,0.0029-0.7095,0.025-1.0622,0.0662 c-1.7995-3.4553-5.7065-5.8554-10.2499-5.8554c-6.2478,0-11.3122,4.5286-11.3122,10.1144c0.0012,0.3692,0.0247,0.738,0.0704,1.1043 C7.9656,28.6665,6,30.8102,6,33.3136c0,3.3123,3.4446,6.0025,7.6936,6.0025c1.6151,0.0139,3.2056-0.4022,4.6137-1.207 c1.8177,1.4766,4.7264,2.4385,8.0154,2.4385c5.5105,0,9.9776-2.6875,9.9776-6.0025c-0.0009-0.2191-0.0214-0.4377-0.0612-0.6531 C39.0357,32.9904,41.0059,30.8453,41.0059,28.3393z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "46,27 50.2353,23 64,35.0976 64,54 38,54 38,41.5482"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "43",
      y: "42",
      width: "6",
      height: "12",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "54",
      y: "42",
      width: "6",
      height: "5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "43.5,23 46.5,23 46.5,26"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.245,39.3396"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "22.5,54 22.5,46.8269 17.5,42"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23.0408",
      x2: "25.885",
      y1: "46.7265",
      y2: "43.7657",
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
      d: "M41.0059,28.3393 c0-3.3123-3.4447-6.0025-7.6937-6.0025c-0.3549,0.0029-0.7095,0.025-1.0622,0.0662c-1.7995-3.4553-5.7065-5.8554-10.2499-5.8554 c-6.2478,0-11.3122,4.5286-11.3122,10.1144c0.0012,0.3692,0.0247,0.738,0.0704,1.1043C7.9656,28.6665,6,30.8102,6,33.3136 c0,3.3123,3.4446,6.0025,7.6936,6.0025c1.6151,0.0139,3.2056-0.4022,4.6137-1.207c1.8177,1.4766,4.7264,2.4385,8.0154,2.4385 c5.5105,0,9.9776-2.6875,9.9776-6.0025c-0.0009-0.2191-0.0214-0.4377-0.0612-0.6531 C39.0357,32.9904,41.0059,30.8453,41.0059,28.3393z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "63.5",
      x2: "42.5",
      y1: "36",
      y2: "36",
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
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "46,27 50.2353,23 64,35.0976 64,54 38,54 38,41.5482"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "43",
      y: "42",
      width: "6",
      height: "12",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "54",
      y: "42",
      width: "6",
      height: "5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "43.5,23 46.5,23 46.5,26"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.245,39.3396"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "22.5,54 22.5,46.8269 17.5,42"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23.0408",
      x2: "25.885",
      y1: "46.7265",
      y2: "43.7657",
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
      d: "M41.0059,28.3393 c0-3.3123-3.4447-6.0025-7.6937-6.0025c-0.3549,0.0029-0.7095,0.025-1.0622,0.0662c-1.7995-3.4553-5.7065-5.8554-10.2499-5.8554 c-6.2478,0-11.3122,4.5286-11.3122,10.1144c0.0012,0.3692,0.0247,0.738,0.0704,1.1043C7.9656,28.6665,6,30.8102,6,33.3136 c0,3.3123,3.4446,6.0025,7.6936,6.0025c1.6151,0.0139,3.2056-0.4022,4.6137-1.207c1.8177,1.4766,4.7264,2.4385,8.0154,2.4385 c5.5105,0,9.9776-2.6875,9.9776-6.0025c-0.0009-0.2191-0.0214-0.4377-0.0612-0.6531 C39.0357,32.9904,41.0059,30.8453,41.0059,28.3393z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "63.5",
      x2: "42.5",
      y1: "36",
      y2: "36",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default HouseWithGarden;