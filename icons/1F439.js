import React from 'react';

const Hamster = ({
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
      fill: "#F4AA41",
      stroke: "none",
      d: "M19.5877,25.3355c0,0-12.5,3.25-8.75,19.75s16,13.5,16,13.5l4.75-1.25l9.5-0.25c0,0,9,2.75,14.25-0.25 s7.75-12.25,7.75-12.25v-7l-2.5-5.5l-4.25-4.25l-2.5-2c0,0,7.5-7,5-11.5s-4.25-5.75-11.5,0.25l-1.25,1c0,0-9.75-4.75-19.5-0.25 c0,0-5-8-11.75-3l-0.5,5C14.3377,17.3355,16.0877,25.3355,19.5877,25.3355z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      d: "M9.921,40.7521c0,0,9.5833,10.3333,22.1667,2.1667c0,0,1.1667,4.4167,3.8333,3.75 c2.6667-0.6667,4.9167-3.4167,4.9167-3.4167s15.0833,5.5833,22.9167-2.5833c0,0,0.5417,9.3333-8.2917,16.6667 c0,0-8.125,2.9167-14.375-0.25l-9.8333,0.25c0,0-7.5833,2.6667-12.8333-0.1667C13.171,54.3355,8.7544,44.3355,9.921,40.7521z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      stroke: "none",
      d: "M32.0877,42.9188l8.375-0.0833c0,0-0.6875,3.9375-3.8125,3.9375S32.0877,42.9188,32.0877,42.9188z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "27.8144",
      cy: "32.0855",
      r: "3",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "44.4394",
      cy: "32.0855",
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
      d: "M32.3769,43.7564c0,0,0.75,2.5833,3.75,2.9167c3,0.3333,4-2.9167,4-2.9167"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36.1269,46.673l0.125,4.3334c1.6287,1.0459,2.5723,1.5093,5.0416,1"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.3769,52.0064c1.9583,0.3334,2.9167,0,4.875-1"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.8823,56.673c5.397,2.7745,9.6846,1.7224,12.7521-0.243"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M11.0307,44.478c-3.7861-13.5237,9.0129-18.7216,9.0129-18.7216c-3-1-8.3333-9.5833-3.9167-13.5833s10.5,3.3333,10.5,3.3333 s9.8443-4.1667,20.0055,0c0,0,6.0833-7.3333,10.5-3.3333s-0.9167,12.5833-3.9167,13.5833c0,0,12.5816,5.0927,9.1061,18.3773"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19.2213,56.7912c3.0177,1.722,7.0999,2.4809,12.1556-0.1181"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.6269,43.5064c0,0-17,2.6667-19.75,11.75"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.3769,47.2267c0,0-12.2519,2.2168-14.5,13.2797"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.6324,43.5064c0,0,17,2.6667,19.75,11.75"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.8824,47.2267c0,0,11.7426,3.7797,14.5,13.2797"
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
      cx: "27.8144",
      cy: "32.0855",
      r: "3",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "44.4394",
      cy: "32.0855",
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
      d: "M32.3769,43.7564c0,0,0.75,2.5833,3.75,2.9167c3,0.3333,4-2.9167,4-2.9167"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36.1269,46.673l0.125,4.3334c1.6287,1.0459,2.5723,1.5093,5.0416,1"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.3769,52.0064c1.9583,0.3334,2.9167,0,4.875-1"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.8823,56.673c5.397,2.7745,9.6846,1.7224,12.7521-0.243"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M11.0307,44.478c-3.7861-13.5237,9.0129-18.7216,9.0129-18.7216c-3-1-8.3333-9.5833-3.9167-13.5833s10.5,3.3333,10.5,3.3333 s9.8443-4.1667,20.0055,0c0,0,6.0833-7.3333,10.5-3.3333s-0.9167,12.5833-3.9167,13.5833c0,0,12.5816,5.0927,9.1061,18.3773"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19.2213,56.7912c3.0177,1.722,7.0999,2.4809,12.1556-0.1181"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.6269,43.5064c0,0-17,2.6667-19.75,11.75"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.3769,47.2267c0,0-12.2519,2.2168-14.5,13.2797"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.6324,43.5064c0,0,17,2.6667,19.75,11.75"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.8824,47.2267c0,0,11.7426,3.7797,14.5,13.2797"
    })));
  }
};

export default Hamster;