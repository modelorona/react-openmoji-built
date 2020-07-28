import React from 'react';

const Flag_Vanuatu = ({
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
      fill: "#5c9e31"
    }), /*#__PURE__*/React.createElement("polygon", {
      points: "26 36 5 55 5 17 26 36"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#f1b31c",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "26 34 5 17 5 21 23.529 36 5 51 5 55 26 38 67 38 67 34 26 34"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#f1b31c",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M12.3334,39.2727A3.9286,3.9286,0,0,0,16.5,35.6364a3.1429,3.1429,0,0,0-3.3333-2.9091A2.5143,2.5143,0,0,0,10.5,35.0545a2.0116,2.0116,0,0,0,2.1334,1.8619"
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

export default Flag_Vanuatu;