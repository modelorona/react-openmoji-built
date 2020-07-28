import React from 'react';

const Amphora = ({
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
      fill: "#f4aa41",
      points: "43 13 36 13 36 22 42 22 43 13"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#e27022",
      points: "29 13 36 13 36 22 30 22 29 13"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#f4aa41",
      points: "36 13 29 13 28 7 36 7 36 13"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#e27022",
      points: "36 13 43 13 44 7 36 7 36 13"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      d: "M44.7465,65H27.2545A2.6845,2.6845,0,0,1,24.61,62.78l-5.3379-30.42a8.6095,8.6095,0,0,1,4.5965-9.4365,10.1581,10.1581,0,0,1,4.7253-1.0773H44s7.3568.147,8.7518,6.8647a9.7,9.7,0,0,1-.01,3.6469L47.39,62.7806A2.6845,2.6845,0,0,1,44.7465,65Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#e27022",
      d: "M36,21.8453h8s7.3568.147,8.7518,6.8647a9.7,9.7,0,0,1-.01,3.6469L47.2488,63.5857A1.7107,1.7107,0,0,1,45.564,65H35.9888"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#fcea2b",
      points: "36.006 51.003 49.462 51.003 51.866 37.338 35.989 37.338"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#d0cfce",
      points: "36.006 51.003 22.544 51.003 20.146 37.338 35.989 37.338"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "27",
      y: "41",
      width: "4",
      height: "6",
      fill: "#fcea2b"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "41",
      y: "41",
      width: "4",
      height: "6",
      fill: "#d0cfce"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M22.3168,23.9538A7.0017,7.0017,0,0,1,28.7247,11.55"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M50,24a6.8749,6.8749,0,0,0,3-6,7.0048,7.0048,0,0,0-9.438-6.5638"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "42 21 43 13 36 13 36 21"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "30 21 29 13 36 13 36 21"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "36 13 29 13 28 7 36 7 36 13"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "36 13 43 13 44 7 36 7 36 13"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.7465,65H27.2545A2.6845,2.6845,0,0,1,24.61,62.78l-5.3379-30.42a8.6095,8.6095,0,0,1,4.5965-9.4365,10.1581,10.1581,0,0,1,4.7253-1.0773H44s7.3568.147,8.7518,6.8647a9.7,9.7,0,0,1-.01,3.6469L47.39,62.7806A2.6845,2.6845,0,0,1,44.7465,65Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36,21.8453h8s7.3568.147,8.7518,6.8647a9.7,9.7,0,0,1-.01,3.6469L47.2488,63.5857A1.7107,1.7107,0,0,1,45.564,65H35.9888"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "36.006 51.003 49.462 51.003 51.866 37.338 35.989 37.338"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "36.006 51.003 22.544 51.003 20.146 37.338 35.989 37.338"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "43 13 36 13 36 21"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "30 21 29 13 36 13 36 21"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "28 7 36 7 36 13 29 13 28 7"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "44 7 36 7 36 13 43 13"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M22.3168,23.9538A7.0017,7.0017,0,0,1,28.7247,11.55"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M50,24a6.8749,6.8749,0,0,0,3-6,7.0048,7.0048,0,0,0-9.438-6.5638"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "27",
      y: "41",
      width: "4",
      height: "6",
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "41",
      y: "41",
      width: "4",
      height: "6",
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round"
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M22.3168,23.9538A7.0017,7.0017,0,0,1,28.7247,11.55"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M50,24a6.8749,6.8749,0,0,0,3-6,7.0048,7.0048,0,0,0-9.438-6.5638"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "42 21 43 13 36 13 36 21"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "30 21 29 13 36 13 36 21"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "36 13 29 13 28 7 36 7 36 13"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "36 13 43 13 44 7 36 7 36 13"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.7465,65H27.2545A2.6845,2.6845,0,0,1,24.61,62.78l-5.3379-30.42a8.6095,8.6095,0,0,1,4.5965-9.4365,10.1581,10.1581,0,0,1,4.7253-1.0773H44s7.3568.147,8.7518,6.8647a9.7,9.7,0,0,1-.01,3.6469L47.39,62.7806A2.6845,2.6845,0,0,1,44.7465,65Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36,21.8453h8s7.3568.147,8.7518,6.8647a9.7,9.7,0,0,1-.01,3.6469L47.2488,63.5857A1.7107,1.7107,0,0,1,45.564,65H35.9888"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "36.006 51.003 49.462 51.003 51.866 37.338 35.989 37.338"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "36.006 51.003 22.544 51.003 20.146 37.338 35.989 37.338"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "43 13 36 13 36 21"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "30 21 29 13 36 13 36 21"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "28 7 36 7 36 13 29 13 28 7"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "44 7 36 7 36 13 43 13"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M22.3168,23.9538A7.0017,7.0017,0,0,1,28.7247,11.55"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M50,24a6.8749,6.8749,0,0,0,3-6,7.0048,7.0048,0,0,0-9.438-6.5638"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "27",
      y: "41",
      width: "4",
      height: "6",
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "41",
      y: "41",
      width: "4",
      height: "6",
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round"
    })));
  }
};

export default Amphora;