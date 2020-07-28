import React from 'react';

const Flag_SintMaarten = ({
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
      y: "17",
      width: "62",
      height: "38",
      fill: "#d22f27"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "36",
      width: "62",
      height: "19",
      fill: "#1e50a0"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#fff",
      points: "26 36 5 55 5 17 26 36"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "13",
      cy: "31",
      r: "2.5",
      fill: "#fcea2b",
      stroke: "#fcea2b",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92d3f5",
      stroke: "#d22f27",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M18,31.7758v4.6121C18,39.847,13.0417,41,13.0417,41S8.0833,39.847,8.0833,36.3879V31.7758A16.6778,16.6778,0,0,1,18,31.7758Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fcea2b",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M19,39c0,1.933-2.6863,3.5-6,3.5S7,40.933,7,39"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "11",
      y: "34",
      width: "4",
      height: "3",
      fill: "#fff",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "17",
      width: "62",
      height: "38",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "17",
      width: "62",
      height: "38",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default Flag_SintMaarten;