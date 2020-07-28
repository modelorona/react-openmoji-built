import React from 'react';

const Bed = ({
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
      x: "5",
      y: "42.5",
      width: "62",
      height: "6.5",
      fill: "#a57939"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "m5 42v-4c0-1.65 1.35-3 3-3h56c1.65 0 3 1.35 3 3v4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92d3f5",
      d: "m5.125 30.44s6.387-2.767 12.27-2.721c2.296 0.01784 5.686 1.897 5.712 3.874l-1.104 2.16-15 1-0.8125 1.25-1.062-1.625-0.125-3.625z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92d3f5",
      d: "m22 41.6 0.4337-8.291c-3.052-4.924 32.48-2.528 44.6-2.638 0.8175 4.338 0.0439 6.264-0.0301 11.32"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "42",
      width: "62",
      height: "7",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m5 40.99v-4c0-1.65 1.35-3 3-3h13.83"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      x2: "5",
      y1: "55.03",
      y2: "16.97",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "67",
      x2: "67",
      y1: "27.04",
      y2: "55.04",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m20.42 29.73c-1.61-1.197-4.604-1.538-7.357-1.598-4.582 0.01116-8.882 1.329-7.933 5.274"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m67 41.99v-8.32c0-1.65-1.35-3-2.99-3.001l-38.81-0.001398c-1.65-5.9e-5 -3 1.35-3 3v8"
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
      x: "5",
      y: "42",
      width: "62",
      height: "7",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m5 40.99v-4c0-1.65 1.35-3 3-3h13.83"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      x2: "5",
      y1: "55.03",
      y2: "16.97",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "67",
      x2: "67",
      y1: "27.04",
      y2: "55.04",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m20.42 29.73c-1.61-1.197-4.604-1.538-7.357-1.598-4.582 0.01116-8.882 1.329-7.933 5.274"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m67 41.99v-8.32c0-1.65-1.35-3-2.99-3.001l-38.81-0.001398c-1.65-5.9e-5 -3 1.35-3 3v8"
    })));
  }
};

export default Bed;