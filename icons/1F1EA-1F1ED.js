import React from 'react';

const Flag_WesternSahara = ({
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
      fill: "#5c9e31"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "30",
      width: "62",
      height: "12",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "17",
      width: "62",
      height: "13"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#d22f27",
      points: "26 36 5 55 5 17 26 36"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d22f27",
      stroke: "#d22f27",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M35.1216,36A4.0529,4.0529,0,0,1,38.5,32.0764,4.3955,4.3955,0,0,0,37.6892,32a4.0043,4.0043,0,1,0,0,8,4.3955,4.3955,0,0,0,.8108-.0764A4.0529,4.0529,0,0,1,35.1216,36Z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#d22f27",
      stroke: "#d22f27",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "38.707 38 40.035 34 41.18 37.939 38 35.565 42 35.467 38.707 38"
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

export default Flag_WesternSahara;