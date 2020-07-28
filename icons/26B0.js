import React from 'react';

const Coffin = ({
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
      fill: "#A57939",
      stroke: "#A57939",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.6322,67.6h9.0635 c1.3055,0,2.4611-0.8442,2.858-2.0879L55.9064,26.807c0.271-0.8492,0.1504-1.7749-0.3292-2.5262L43.772,5.7859 C43.2209,4.9225,42.2675,4.4,41.2432,4.4H31.0847c-1.0242,0-1.9777,0.5225-2.5288,1.3859L16.7507,24.2807 c-0.4796,0.7514-0.6002,1.6771-0.3292,2.5262l12.3527,38.7051C29.1711,66.7558,30.3267,67.6,31.6322,67.6z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.3342",
      x2: "36.3342",
      y1: "22",
      y2: "38",
      fill: "#f4aa41",
      stroke: "none",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "31.5342",
      x2: "41.1342",
      y1: "26.6333",
      y2: "26.6333",
      fill: "#f4aa41",
      stroke: "none",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#6A462F",
      stroke: "#6A462F",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      points: "39.25,4.4 47.5,26.5 39.25,67.6 41.5,67.5 56,25.382 41.5,4.5"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "36.3342",
      x2: "36.3342",
      y1: "22",
      y2: "38",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "31.5342",
      x2: "41.1342",
      y1: "26.6333",
      y2: "26.6333",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.6322,67.6h9.0635 c1.3055,0,2.4611-0.8442,2.858-2.0879L55.9064,26.807c0.271-0.8492,0.1504-1.7749-0.3292-2.5262L43.772,5.7859 C43.2209,4.9225,42.2675,4.4,41.2432,4.4H31.0847c-1.0242,0-1.9777,0.5225-2.5288,1.3859L16.7507,24.2807 c-0.4796,0.7514-0.6002,1.6771-0.3292,2.5262l12.3527,38.7051C29.1711,66.7558,30.3267,67.6,31.6322,67.6z"
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
    }, /*#__PURE__*/React.createElement("line", {
      x1: "36.3342",
      x2: "36.3342",
      y1: "22",
      y2: "38",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "31.5342",
      x2: "41.1342",
      y1: "26.6333",
      y2: "26.6333",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.6322,67.6h9.0635 c1.3055,0,2.4611-0.8442,2.858-2.0879L55.9064,26.807c0.271-0.8492,0.1504-1.7749-0.3292-2.5262L43.772,5.7859 C43.2209,4.9225,42.2675,4.4,41.2432,4.4H31.0847c-1.0242,0-1.9777,0.5225-2.5288,1.3859L16.7507,24.2807 c-0.4796,0.7514-0.6002,1.6771-0.3292,2.5262l12.3527,38.7051C29.1711,66.7558,30.3267,67.6,31.6322,67.6z"
    })));
  }
};

export default Coffin;