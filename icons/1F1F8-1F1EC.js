import React from 'react';

const Flag_Singapore = ({
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
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20",
      cy: "22",
      r: "1",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "27",
      r: "1",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "22",
      cy: "27",
      r: "1",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17",
      cy: "24",
      r: "1",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "23",
      cy: "24",
      r: "1",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M11.1987,24.9227A4.873,4.873,0,0,1,15,20.094,4.539,4.539,0,0,0,14.0877,20a4.9273,4.9273,0,0,0,0,9.8454A4.539,4.539,0,0,0,15,29.7514,4.873,4.873,0,0,1,11.1987,24.9227Z"
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

export default Flag_Singapore;