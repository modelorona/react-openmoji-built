import React from 'react';

const Flag_Philippines = ({
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
      fill: "#1e50a0"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "36",
      width: "62",
      height: "19",
      fill: "#d22f27"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#fff",
      points: "37 36 5 55 5 17 37 36"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "8",
      cy: "21",
      r: "1.0435",
      fill: "#f1b31c"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "33",
      cy: "36",
      r: "1.0435",
      fill: "#f1b31c"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "8",
      cy: "51",
      r: "1.0435",
      fill: "#f1b31c"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#f1b31c",
      stroke: "#f1b31c",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "17.907 35.086 20.04 33.59 18.434 35.642 21 36.092 18.414 36.407 19.91 38.54 17.859 36.934 17.408 39.5 17.093 36.914 14.96 38.41 16.566 36.359 14 35.908 16.586 35.593 15.09 33.46 17.142 35.066 17.592 32.5 17.907 35.086"
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

export default Flag_Philippines;