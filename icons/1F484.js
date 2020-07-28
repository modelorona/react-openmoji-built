import React from 'react';

const Lipstick = ({
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
      x: "22.7104",
      y: "47.8069",
      width: "27.2896",
      height: "19.1931",
      fill: "#d0cfce"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#9b9b9a",
      points: "41 42.609 41 67 50 67 50 43 41 42.609"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "22.7104",
      y: "42.6089",
      width: "27.2896",
      height: "5.198",
      fill: "#d0cfce"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ea5a47",
      d: "M26.9084,42.4109H44.802V15.3193s-1-10.396-17.8936-9.0965Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d22f27",
      d: "M41,37V10a7.69,7.69,0,0,1,5,5V42.4109H40.9976Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d22f27",
      d: "M44.0352,15.4425c-1.0629,1.6832-5.3483.8857-9.5717-1.7813S27.6781,7.4676,28.741,5.7844C29.0857,5.2385,30.09,6.0449,31,6a11.395,11.395,0,0,1,7.3128,1.5656C42.5361,10.2327,45.0982,13.7592,44.0352,15.4425Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32.5",
      x2: "32.5",
      y1: "18.5",
      y2: "31",
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "23.328 66 23.328 42.609 29.12 42.609 50 42.609 50 66"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M27.9084,38.5121V6.2228C43.33,4.3122,45,15.3193,45,15.3193L44.8967,38.386"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23.3285",
      x2: "50",
      y1: "48.3267",
      y2: "48.3267",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32,11a14.8428,14.8428,0,0,0,9,5"
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
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "23.328 66 23.328 42.609 29.12 42.609 50 42.609 50 66"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M27.9084,38.5121V6.2228C43.33,4.3122,45,15.3193,45,15.3193L44.8967,38.386"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23.3285",
      x2: "50",
      y1: "48.3267",
      y2: "48.3267",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32,11a14.8428,14.8428,0,0,0,9,5"
    })));
  }
};

export default Lipstick;