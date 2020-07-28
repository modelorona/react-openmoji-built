import React from 'react';

const Flag_MarshallIslands = ({
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
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#f1b31c",
      points: "67 24 67 18 6 53 6 54 67 24"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#fff",
      points: "67 30 67 24 6 54 6 55 67 30"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#fff",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "16.725 26.966 17.852 23.78 17.081 27.059 19.043 24.257 17.4 27.236 20.062 25.01 17.659 27.485 20.84 25.985 17.841 27.789 21.324 27.118 17.933 28.127 23.119 28.315 17.93 28.476 21.302 29.541 17.831 28.813 20.797 30.665 17.644 29.113 20.001 31.628 17.38 29.358 18.968 32.364 17.059 29.53 17.769 32.821 16.701 29.617 16.511 35.29 16.331 29.614 15.204 32.8 15.975 29.521 14.014 32.323 15.657 29.344 12.995 31.57 15.398 29.095 12.217 30.595 15.216 28.791 11.732 29.462 15.123 28.453 9.119 28.273 15.127 28.104 11.755 27.039 15.225 27.768 12.26 25.915 15.413 27.467 13.056 24.952 15.677 27.222 14.089 24.217 15.998 27.05 15.288 23.759 16.356 26.963 16.546 21.29 16.725 26.966"
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

export default Flag_MarshallIslands;