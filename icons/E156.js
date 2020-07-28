import React from 'react';

const CoffeeGrinder = ({
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
      fill: "#fff",
      d: "M38 54V41H55V50L38 54Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#A57939",
      d: "M38 19H55V42H38V19Z"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      "fill-rule": "evenodd",
      d: "M38 54.5V58C38 59.1046 38.8954 60 40 60H53C54.1046 60 55 59.1046 55 58V54.5V50.5L38 54.5Z",
      "clip-rule": "evenodd"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      d: "M38 54.5L37.771 53.5266C37.3192 53.6329 37 54.0359 37 54.5H38ZM55 50.5H56C56 50.1945 55.8604 49.9058 55.6209 49.7161C55.3814 49.5264 55.0683 49.4566 54.771 49.5266L55 50.5ZM39 58V54.5H37V58H39ZM40 59C39.4477 59 39 58.5523 39 58H37C37 59.6569 38.3431 61 40 61V59ZM53 59H40V61H53V59ZM54 58C54 58.5523 53.5523 59 53 59V61C54.6569 61 56 59.6569 56 58H54ZM54 54.5V58H56V54.5H54ZM54 50.5V54.5H56V50.5H54ZM38.229 55.4734L55.229 51.4734L54.771 49.5266L37.771 53.5266L38.229 55.4734Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      d: "M38 54.5L37.771 53.5266C37.3192 53.6329 37 54.0359 37 54.5H38ZM55 50.5H56C56 50.1945 55.8604 49.9058 55.6209 49.7161C55.3814 49.5264 55.0683 49.4566 54.771 49.5266L55 50.5ZM39 58V54.5H37V58H39ZM40 59C39.4477 59 39 58.5523 39 58H37C37 59.6569 38.3431 61 40 61V59ZM53 59H40V61H53V59ZM54 58C54 58.5523 53.5523 59 53 59V61C54.6569 61 56 59.6569 56 58H54ZM54 54.5V58H56V54.5H54ZM54 50.5V54.5H56V50.5H54ZM38.229 55.4734L55.229 51.4734L54.771 49.5266L37.771 53.5266L38.229 55.4734Z"
    })), /*#__PURE__*/React.createElement("path", {
      fill: "#A57939",
      d: "M22 13.5283C22 16.5557 19.7614 22 17 22C14.2386 22 12 16.5557 12 13.5283C12 10.5008 14.2386 11.0366 17 11.0366C19.7614 11.0366 22 10.5008 22 13.5283Z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "44",
      y: "14",
      width: "5",
      height: "5",
      fill: "#d0cfce"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M41 53.7941L52 51.2059"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M38 21C38 19.8954 38.8954 19 40 19H53C54.1046 19 55 19.8954 55 21V58C55 59.1046 54.1046 60 53 60H40C38.8954 60 38 59.1046 38 58V21Z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "44",
      y: "14",
      width: "5",
      height: "5",
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44 16H38L23 25H17V22"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M22 13.5283C22 16.5557 19.7614 22 17 22C14.2386 22 12 16.5557 12 13.5283C12 10.5008 14.2386 11.0366 17 11.0366C19.7614 11.0366 22 10.5008 22 13.5283Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "39",
      x2: "52",
      y1: "41",
      y2: "41",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2"
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
      d: "M41 53.7941L52 51.2059"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M38 21C38 19.8954 38.8954 19 40 19H53C54.1046 19 55 19.8954 55 21V58C55 59.1046 54.1046 60 53 60H40C38.8954 60 38 59.1046 38 58V21Z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "44",
      y: "14",
      width: "5",
      height: "5",
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44 16H38L23 25H17V22"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M22 13.5283C22 16.5557 19.7614 22 17 22C14.2386 22 12 16.5557 12 13.5283C12 10.5008 14.2386 11.0366 17 11.0366C19.7614 11.0366 22 10.5008 22 13.5283Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "39",
      x2: "52",
      y1: "41",
      y2: "41",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2"
    })));
  }
};

export default CoffeeGrinder;