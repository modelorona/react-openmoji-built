import React from 'react';

const Coat = ({
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
      fill: "#a57939",
      d: "M54,17,39,8H33L18,17H17V37h5V26h1l3.9311,7.62Q25.4655,46.81,24,60H48q-1.4656-13.19-2.9311-26.38L49,26h1V37h5V17Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6a462f",
      d: "M30,10c-.7039,1.9925,2.3578,6.0016,6,6,3.6255-.0016,6.6992-3.977,6-6-.7541-2.1817-5.8732-2.0252-6.5-2C34.3643,8.0456,30.6376,8.1953,30,10Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "35.9",
      cy: "39.9",
      r: "0.9",
      fill: "#000000"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.9",
      cy: "43.9",
      r: "0.9",
      fill: "#000000"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.9",
      cy: "47.9",
      r: "0.9",
      fill: "#000000"
    }), /*#__PURE__*/React.createElement("g", {
      id: "_"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "26.944 35 24 60 36.079 60 48.158 60 45.214 35"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M22.4461,26.3725V36.9412H17.1673v-18.95a1.4518,1.4518,0,0,1,.8427-1.2783L27,11"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "30",
      x2: "42",
      y1: "35",
      y2: "35",
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
      d: "M45.1673,11l8.99,5.7132A1.4518,1.4518,0,0,1,55,17.9915v18.95H49.7212V26.3725"
    })), /*#__PURE__*/React.createElement("g", {
      id: "_2"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M29,10.5385,34.376,15.22,31.6271,17C25.528,10.5308,27.59,10.7137,27.59,10.7137a14.6763,14.6763,0,0,1,16.923,0s2.1475-.2556-4.0375,6.2136l-2.7489-1.78L43,10.5385"
    })), /*#__PURE__*/React.createElement("circle", {
      cx: "35.9",
      cy: "21.9",
      r: "0.9",
      fill: "#000000"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.9",
      cy: "25.9",
      r: "0.9",
      fill: "#000000"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.9",
      cy: "29.9",
      r: "0.9",
      fill: "#000000"
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
      cx: "35.9",
      cy: "39.9",
      r: "0.9",
      fill: "#000000"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.9",
      cy: "43.9",
      r: "0.9",
      fill: "#000000"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.9",
      cy: "47.9",
      r: "0.9",
      fill: "#000000"
    }), /*#__PURE__*/React.createElement("g", {
      id: "_"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "26.944 35 24 60 36.079 60 48.158 60 45.214 35"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M22.4461,26.3725V36.9412H17.1673v-18.95a1.4518,1.4518,0,0,1,.8427-1.2783L27,11"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "30",
      x2: "42",
      y1: "35",
      y2: "35",
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
      d: "M45.1673,11l8.99,5.7132A1.4518,1.4518,0,0,1,55,17.9915v18.95H49.7212V26.3725"
    })), /*#__PURE__*/React.createElement("g", {
      id: "_2"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M29,10.5385,34.376,15.22,31.6271,17C25.528,10.5308,27.59,10.7137,27.59,10.7137a14.6763,14.6763,0,0,1,16.923,0s2.1475-.2556-4.0375,6.2136l-2.7489-1.78L43,10.5385"
    })), /*#__PURE__*/React.createElement("circle", {
      cx: "35.9",
      cy: "21.9",
      r: "0.9",
      fill: "#000000"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.9",
      cy: "25.9",
      r: "0.9",
      fill: "#000000"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.9",
      cy: "29.9",
      r: "0.9",
      fill: "#000000"
    })));
  }
};

export default Coat;