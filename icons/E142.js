import React from 'react';

const Picture = ({
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
      x: "6",
      y: "41",
      width: "60",
      height: "13",
      fill: "#B1CC33",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#5C9E31",
      stroke: "none",
      points: "42,41 66,41 66,54 31,54"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "6",
      y: "18",
      width: "60",
      height: "23",
      fill: "#92D3F5",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#61B2E4",
      stroke: "none",
      points: "61,18 66,18 66,41 42,41"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#D0CFCE",
      stroke: "none",
      points: "22,43 33,32 44,43"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#D0CFCE",
      stroke: "none",
      points: "28.5464,43.0464 45.0464,26.5464 60.75,42.25"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      stroke: "#9b9b9a",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.3077,43"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "6",
      y: "18",
      width: "60",
      height: "36",
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
      points: "44,43 22,43 33,32 39.9976,38.9976"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "39.7969,33.2031 45,28 60,43 43.9995,43"
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
      x: "6",
      y: "18",
      width: "60",
      height: "36",
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
      points: "44,43 22,43 33,32 39.9976,38.9976"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "39.7969,33.2031 45,28 60,43 43.9995,43"
    })));
  }
};

export default Picture;