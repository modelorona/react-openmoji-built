import React from 'react';

const Tram = ({
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
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "#3f3f3f",
      points: "21 50 11 61 61 61 51 50 21 50"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "21.6",
      y: "15",
      rx: "3.0558",
      ry: "3.0558",
      width: "28.8",
      height: "33",
      fill: "#d0cfce"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "25",
      y: "19",
      width: "22",
      height: "14",
      fill: "#61b2e4"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#92d3f5",
      points: "47 19 25 19 25 33"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "25",
      y: "37",
      width: "5",
      height: "5",
      fill: "#fcea2b"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "42",
      y: "37",
      width: "5",
      height: "5",
      fill: "#fcea2b"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "21.6",
      y: "15",
      rx: "3.0558",
      ry: "3.0558",
      width: "28.8",
      height: "33",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "24",
      x2: "16",
      y1: "51",
      y2: "60",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "48",
      x2: "56",
      y1: "51",
      y2: "60",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "35.166 15 27 8 44 8 35.166 15"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M47,20V33H26"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "26 42 30 42 30 38"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "43 42 47 42 47 38"
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
      x: "21.6",
      y: "15",
      rx: "3.0558",
      ry: "3.0558",
      width: "28.8",
      height: "33",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "24",
      x2: "16",
      y1: "51",
      y2: "60",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "48",
      x2: "56",
      y1: "51",
      y2: "60",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "35.166 15 27 8 44 8 35.166 15"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M47,20V33H26"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "26 42 30 42 30 38"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "43 42 47 42 47 38"
    })));
  }
};

export default Tram;