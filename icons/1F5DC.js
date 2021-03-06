import React from 'react';

const Clamp = ({
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
      x: "43.0002",
      y: "36.1661",
      width: "3.0001",
      height: "3.3833",
      fill: "#9B9B9A",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "43.0013",
      y: "46.1665",
      width: "3.0001",
      height: "12",
      fill: "#9B9B9A",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "41",
      y: "22.1661",
      width: "8",
      height: "3.0001",
      fill: "#9B9B9A",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      d: "M47,45.7774H22.6774C20.0942,45.7774,18,43.6833,18,41.1V22.3904c0-5.1665,4.1883-9.3548,9.3548-9.3548 h13.0968h1.871c2.5833,0,4.6774,2.0942,4.6774,4.6774v4.0092h-4.9714c0-1.6976-1.3762-3.0737-3.0737-3.0737h-1.2295h-8.6065 c-3.3952,0-6.1475,2.7523-6.1475,6.1475v12.2949c0,1.6976,1.3762,3.0737,3.0737,3.0737h15.9834H47V45.7774z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      d: "M65.7251,28.3957"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42,61.9065"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50,25.9065"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.0848,62.1661"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47,45.7774H22.6774C20.0942,45.7774,18,43.6833,18,41.1V22.3904c0-5.1665,4.1883-9.3548,9.3548-9.3548h13.0968h1.871 c2.5833,0,4.6774,2.0942,4.6774,4.6774v4.0092h-4.9714c0-1.6976-1.3762-3.0737-3.0737-3.0737h-1.2295h-8.6065 c-3.3952,0-6.1475,2.7523-6.1475,6.1475v12.2949c0,1.6976,1.3762,3.0737,3.0737,3.0737h15.9834H47V45.7774z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "42",
      y: "45.9065",
      width: "5",
      height: "13",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "39.9999",
      y: "21.9065",
      width: "10",
      height: "3.6429",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42,36.7186v3.1878h5v-3.1878c0-0.4485-0.4545-0.8122-1.0152-0.8122h-2.9696C42.4545,35.9065,42,36.2701,42,36.7186z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "41",
      x2: "37",
      y1: "52.1661",
      y2: "52.1661",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "52",
      x2: "48",
      y1: "52.1661",
      y2: "52.1661",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      d: "M65.7251,28.3957"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42,61.9065"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50,25.9065"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.0848,62.1661"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47,45.7774H22.6774C20.0942,45.7774,18,43.6833,18,41.1V22.3904c0-5.1665,4.1883-9.3548,9.3548-9.3548h13.0968h1.871 c2.5833,0,4.6774,2.0942,4.6774,4.6774v4.0092h-4.9714c0-1.6976-1.3762-3.0737-3.0737-3.0737h-1.2295h-8.6065 c-3.3952,0-6.1475,2.7523-6.1475,6.1475v12.2949c0,1.6976,1.3762,3.0737,3.0737,3.0737h15.9834H47V45.7774z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "42",
      y: "45.9065",
      width: "5",
      height: "13",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "39.9999",
      y: "21.9065",
      width: "10",
      height: "3.6429",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42,36.7186v3.1878h5v-3.1878c0-0.4485-0.4545-0.8122-1.0152-0.8122h-2.9696C42.4545,35.9065,42,36.2701,42,36.7186z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "41",
      x2: "37",
      y1: "52.1661",
      y2: "52.1661",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "52",
      x2: "48",
      y1: "52.1661",
      y2: "52.1661",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default Clamp;