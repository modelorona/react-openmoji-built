import React from 'react';

const CurlingStone = ({
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "30",
      y: "17",
      width: "16",
      height: "3",
      fill: "#d22f27"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d22f27",
      d: "M28,17h2a0,0,0,0,1,0,0v6a0,0,0,0,1,0,0H26a0,0,0,0,1,0,0V19A2,2,0,0,1,28,17Z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "24",
      y: "25",
      width: "25",
      height: "3",
      fill: "#d22f27"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      d: "M15.0235,45.3165l43.7822-.014A5.12,5.12,0,0,1,59,47.9306,6.665,6.665,0,0,1,56,51.83a12.842,12.842,0,0,1-4.46,2.1093c-6.4185,1.5916-14.5788.9581-22.54.815-1.5659-.0281-3.9957-.053-7,0A11.7664,11.7664,0,0,1,16,51.83c-1.9575-1.84-3.823-5.0163-2.8989-6.1266C13.515,45.2058,14.3976,45.2329,15.0235,45.3165Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      d: "M59,40H13a5.281,5.281,0,0,1-1-3.3854c.2236-2.9774,3.4077-5.7207,8-6.7707,4.2214-.4553,8.91-.7783,14-.8463a149.3349,149.3349,0,0,1,18,.8463c4.98,1.5891,8.1729,4.6559,8,7.6171A4.6653,4.6653,0,0,1,59,40Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3f3f3f",
      d: "M47.1538,28A14.0551,14.0551,0,0,0,41,29.42a13.3317,13.3317,0,0,1,0,24.16A14.0551,14.0551,0,0,0,47.1538,55a13.5043,13.5043,0,1,0,0-27Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      d: "M60,42.5a14.3243,14.3243,0,0,0-.2271-2.5H48.446a13.8981,13.8981,0,0,1,0,5H59.7729A14.3252,14.3252,0,0,0,60,42.5Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "26",
      y: "17",
      width: "4",
      height: "7",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "12",
      y: "29.0667",
      rx: "12",
      width: "48",
      height: "25.6",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "12",
      y: "40",
      rx: "2.5",
      width: "48",
      height: "5",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "23",
      y: "25",
      rx: "2",
      width: "26",
      height: "4",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.5,20H30V17H44.5a1.5,1.5,0,0,1,0,3Z"
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "26",
      y: "17",
      width: "4",
      height: "7",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "12",
      y: "29.0667",
      rx: "12",
      width: "48",
      height: "25.6",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "12",
      y: "40",
      rx: "2.5",
      width: "48",
      height: "5",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "23",
      y: "25",
      rx: "2",
      width: "26",
      height: "4",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.5,20H30V17H44.5a1.5,1.5,0,0,1,0,3Z"
    })));
  }
};

export default CurlingStone;