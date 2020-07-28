import React from 'react';

const BavariaFlag = ({
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
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line-supplement"
    }, /*#__PURE__*/React.createElement("path", {
      transform: "translate(6,18)",
      fill: "#000",
      d: "M 57.81375,0 L 44.5425,0 60,34.2 60,36 47.5425,36 31.27125,0 18,0 34.27125,36 21,36 9,9.45 0,7.155 0,18.9 7.72875,36 21,36 0,30.645 0,18.9 60,34.2 60,22.455 9,9.45 4.72875,0 18,0 60,10.71 60,4.8375 z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "17",
      width: "62",
      height: "38",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      transform: "translate(6,18)",
      fill: "#61B2E4",
      d: "M 57.81375,0 L 44.5425,0 60,34.2 60,36 47.5425,36 31.27125,0 18,0 34.27125,36 21,36 9,9.45 0,7.155 0,18.9 7.72875,36 21,36 0,30.645 0,18.9 60,34.2 60,22.455 9,9.45 4.72875,0 18,0 60,10.71 60,4.8375 z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M67 17H5V55H67V17Z"
    })));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line-supplement"
    }, /*#__PURE__*/React.createElement("path", {
      transform: "translate(6,18)",
      fill: "#000",
      d: "M 57.81375,0 L 44.5425,0 60,34.2 60,36 47.5425,36 31.27125,0 18,0 34.27125,36 21,36 9,9.45 0,7.155 0,18.9 7.72875,36 21,36 0,30.645 0,18.9 60,34.2 60,22.455 9,9.45 4.72875,0 18,0 60,10.71 60,4.8375 z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M67 17H5V55H67V17Z"
    })));
  }
};

export default BavariaFlag;