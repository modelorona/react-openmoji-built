import React from 'react';

const BentoBox = ({
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
      fill: "#FFFFFF",
      stroke: "none",
      d: "M5,19c0-1.1045,0.8955-2,2-2h58c1.1045,0,2,0.8955,2,2v34c0,1.1045-0.8955,2-2,2H7c-1.1045,0-2-0.8955-2-2 V19z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M44.0713,21c1.9521,1.9521,1.9521,5.1182,0,7.0713c-1.9522,1.9531-5.1182,1.9531-7.0713,0L44.0713,21z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M56.6074,21c1.9522,1.9521,1.9522,5.1182,0,7.0713c-1.9531,1.9531-5.1191,1.9531-7.0722,0L56.6074,21z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ea5a47",
      stroke: "none",
      d: "M39,40c0-1.1045-0.8955-2-2-2h-4c-1.1045,0-2,0.8955-2,2v9c0,1.1045,0.8955,2,2,2h4c1.1045,0,2-0.8955,2-2 V40z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ea5a47",
      stroke: "none",
      d: "M51,40c0-1.1045-0.8955-2-2-2h-4c-1.1045,0-2,0.8955-2,2v9c0,1.1045,0.8955,2,2,2h4c1.1045,0,2-0.8955,2-2 V40z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ea5a47",
      stroke: "none",
      d: "M63,40c0-1.1045-0.8955-2-2-2h-4c-1.1045,0-2,0.8955-2,2v9c0,1.1045,0.8955,2,2,2h4c1.1045,0,2-0.8955,2-2 V40z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#61b2e4",
      stroke: "none",
      points: "12.998,42.2129 11.998,51 15.998,47 15.998,47 19.998,51 18.6045,42.2129"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92d3f5",
      stroke: "none",
      d: "M17.6045,43.2129c5.8574-5.8574,5.8574-15.355,0-21.2129H13.998c-5.8574,5.8579-5.8574,15.3555,0,21.2129 H17.6045z"
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
      d: "M5,19c0-1.1045,0.8955-2,2-2h58c1.1045,0,2,0.8955,2,2v34c0,1.1045-0.8955,2-2,2H7c-1.1045,0-2-0.8955-2-2V19z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "27",
      x2: "27",
      y1: "17",
      y2: "55",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "27",
      x2: "67",
      y1: "34",
      y2: "34",
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
      d: "M17.6064,43.2129c5.8575-5.8574,5.8575-15.355,0-21.2129H14c-5.8574,5.8579-5.8574,15.3555,0,21.2129H17.6064z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11",
      x2: "21",
      y1: "28",
      y2: "28",
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
      points: "13,42.2129 12,51 16,47 16,47 20,51 18.6064,42.2129"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39,40c0-1.1045-0.8955-2-2-2h-4c-1.1045,0-2,0.8955-2,2v9c0,1.1045,0.8955,2,2,2h4c1.1045,0,2-0.8955,2-2V40z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51,40c0-1.1045-0.8955-2-2-2h-4c-1.1045,0-2,0.8955-2,2v9c0,1.1045,0.8955,2,2,2h4c1.1045,0,2-0.8955,2-2V40z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M63,40c0-1.1045-0.8955-2-2-2h-4c-1.1045,0-2,0.8955-2,2v9c0,1.1045,0.8955,2,2,2h4c1.1045,0,2-0.8955,2-2V40z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44,21c1.9521,1.9521,1.9521,5.1182,0,7.0713c-1.9521,1.9531-5.1182,1.9531-7.0713,0L44,21z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M56.5361,21c1.9522,1.9521,1.9522,5.1182,0,7.0713c-1.9531,1.9531-5.1191,1.9531-7.0722,0L56.5361,21z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39,44.334c0,1.1035-0.8955,2-2,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39,40c0,1.1045-0.8955,2-2,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51,44.334c0,1.1035-0.8955,2-2,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51,40c0,1.1045-0.8955,2-2,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M63,44.334c0,1.1035-0.8955,2-2,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M63,40c0,1.1045-0.8955,2-2,2"
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
      d: "M5,19c0-1.1045,0.8955-2,2-2h58c1.1045,0,2,0.8955,2,2v34c0,1.1045-0.8955,2-2,2H7c-1.1045,0-2-0.8955-2-2V19z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "27",
      x2: "27",
      y1: "17",
      y2: "55",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "27",
      x2: "67",
      y1: "34",
      y2: "34",
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
      d: "M17.6064,43.2129c5.8575-5.8574,5.8575-15.355,0-21.2129H14c-5.8574,5.8579-5.8574,15.3555,0,21.2129H17.6064z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11",
      x2: "21",
      y1: "28",
      y2: "28",
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
      points: "13,42.2129 12,51 16,47 16,47 20,51 18.6064,42.2129"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39,40c0-1.1045-0.8955-2-2-2h-4c-1.1045,0-2,0.8955-2,2v9c0,1.1045,0.8955,2,2,2h4c1.1045,0,2-0.8955,2-2V40z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51,40c0-1.1045-0.8955-2-2-2h-4c-1.1045,0-2,0.8955-2,2v9c0,1.1045,0.8955,2,2,2h4c1.1045,0,2-0.8955,2-2V40z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M63,40c0-1.1045-0.8955-2-2-2h-4c-1.1045,0-2,0.8955-2,2v9c0,1.1045,0.8955,2,2,2h4c1.1045,0,2-0.8955,2-2V40z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44,21c1.9521,1.9521,1.9521,5.1182,0,7.0713c-1.9521,1.9531-5.1182,1.9531-7.0713,0L44,21z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M56.5361,21c1.9522,1.9521,1.9522,5.1182,0,7.0713c-1.9531,1.9531-5.1191,1.9531-7.0722,0L56.5361,21z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39,44.334c0,1.1035-0.8955,2-2,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39,40c0,1.1045-0.8955,2-2,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51,44.334c0,1.1035-0.8955,2-2,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51,40c0,1.1045-0.8955,2-2,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M63,44.334c0,1.1035-0.8955,2-2,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M63,40c0,1.1045-0.8955,2-2,2"
    })));
  }
};

export default BentoBox;