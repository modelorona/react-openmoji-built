import React from 'react';

const ClinicalThermometer = ({
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
      fill: "#92d3f5",
      d: "M48.8521,24.6873h0a4.7576,4.7576,0,0,0-6.7234-.2545L26.1505,39.2452c-1.336,1.2384-1.5632,4.9386-1.7681,5.1272l-3.1005,2.8552a2.3555,2.3555,0,0,0-.1371,3.3284l.1148.1246a2.3555,2.3555,0,0,0,3.3283.1371l3.1005-2.8552c.2642-.2432,3.7053-.6033,4.9309-1.7394L48.5976,31.4105A4.7574,4.7574,0,0,0,48.8521,24.6873Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M48.8521,24.6873h0a4.7576,4.7576,0,0,0-6.7234-.2545L26.1505,39.2452c-1.336,1.2384-1.5632,4.9386-1.7681,5.1272l-3.1005,2.8552a2.3555,2.3555,0,0,0-.1371,3.3284l.1148.1246a2.3555,2.3555,0,0,0,3.3283.1371l3.1005-2.8552c.2642-.2432,3.7053-.6033,4.9309-1.7394L48.5976,31.4105A4.7574,4.7574,0,0,0,48.8521,24.6873Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23.4629",
      x2: "46.253",
      y1: "48.5753",
      y2: "27.4172",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "27.9053",
      y: "37.732",
      rx: "0.5234",
      width: "2.8932",
      height: "1.5706",
      transform: "translate(35.8328 -9.4735) rotate(45)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "31.0862",
      y: "34.3308",
      rx: "0.5234",
      width: "2.1258",
      height: "1.5706",
      transform: "translate(34.2471 -12.4476) rotate(45)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "33.6025",
      y: "32.2029",
      rx: "0.5234",
      width: "3.3898",
      height: "1.5706",
      transform: "translate(33.6646 -15.297) rotate(45)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "36.8144",
      y: "29.0347",
      rx: "0.5234",
      width: "2.7857",
      height: "1.5706",
      transform: "translate(32.2766 -18.2825) rotate(45)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "39.7268",
      y: "26.2489",
      rx: "0.5234",
      width: "2.7857",
      height: "1.5706",
      transform: "translate(31.1598 -21.1579) rotate(45)"
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
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M48.8521,24.6873h0a4.7576,4.7576,0,0,0-6.7234-.2545L26.1505,39.2452c-1.336,1.2384-1.5632,4.9386-1.7681,5.1272l-3.1005,2.8552a2.3555,2.3555,0,0,0-.1371,3.3284l.1148.1246a2.3555,2.3555,0,0,0,3.3283.1371l3.1005-2.8552c.2642-.2432,3.7053-.6033,4.9309-1.7394L48.5976,31.4105A4.7574,4.7574,0,0,0,48.8521,24.6873Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23.4629",
      x2: "46.253",
      y1: "48.5753",
      y2: "27.4172",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "27.9053",
      y: "37.732",
      rx: "0.5234",
      width: "2.8932",
      height: "1.5706",
      transform: "translate(35.8328 -9.4735) rotate(45)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "31.0862",
      y: "34.3308",
      rx: "0.5234",
      width: "2.1258",
      height: "1.5706",
      transform: "translate(34.2471 -12.4476) rotate(45)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "33.6025",
      y: "32.2029",
      rx: "0.5234",
      width: "3.3898",
      height: "1.5706",
      transform: "translate(33.6646 -15.297) rotate(45)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "36.8144",
      y: "29.0347",
      rx: "0.5234",
      width: "2.7857",
      height: "1.5706",
      transform: "translate(32.2766 -18.2825) rotate(45)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "39.7268",
      y: "26.2489",
      rx: "0.5234",
      width: "2.7857",
      height: "1.5706",
      transform: "translate(31.1598 -21.1579) rotate(45)"
    })));
  }
};

export default ClinicalThermometer;