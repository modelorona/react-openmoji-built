import React from 'react';

const Flag_AntiguaBarbuda = ({
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
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "17",
      width: "62",
      height: "13"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#f1b31c",
      stroke: "#f1b31c",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "35.61 28.038 36 20 36.39 28.038 39.827 20.761 37.111 28.337 43.071 22.929 37.663 28.889 45.239 26.173 37.962 29.61 46 30 37.962 30.39 45.239 33.827 37.663 31.111 43.071 37.071 37.111 31.663 39.827 39.239 36.39 31.962 36 40 35.61 31.962 32.173 39.239 34.889 31.663 28.929 37.071 34.337 31.111 26.761 33.827 34.038 30.39 26 30 34.038 29.61 26.761 26.173 34.337 28.889 28.929 22.929 34.889 28.337 32.173 20.761 35.61 28.038"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "30",
      width: "62",
      height: "12",
      fill: "#1e50a0"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
      fill: "#d22f27",
      points: "5 55 36 55 5 17 5 55"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#d22f27",
      points: "36 55 67 55 67 17 36 55"
    }))), /*#__PURE__*/React.createElement("g", {
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

export default Flag_AntiguaBarbuda;