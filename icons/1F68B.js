import React from 'react';

const TramCar = ({
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
      x: "21.5264",
      y: "35.5642",
      width: "45.2778",
      height: "12.0246",
      fill: "#ea5a47"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "34.358",
      y: "32.2353",
      rx: "1.0578",
      ry: "1.0578",
      width: "6.3408",
      height: "10.6464",
      fill: "#92d3f5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "21.4024",
      y: "32.2353",
      rx: "1.0578",
      ry: "1.0578",
      width: "6.3408",
      height: "10.6464",
      fill: "#92d3f5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "47.3682",
      y: "32.2353",
      rx: "1.0578",
      ry: "1.0578",
      width: "6.3408",
      height: "10.6464",
      fill: "#92d3f5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "60.3785",
      y: "32.2353",
      rx: "1.0578",
      ry: "1.0578",
      width: "6.3408",
      height: "10.6464",
      fill: "#92d3f5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "M33.749,51.1115a4.2445,4.2445,0,0,1-8.4889,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "M62.7161,51.1115a4.2445,4.2445,0,0,1-8.4889,0"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "22.1962",
      y: "47.0487",
      width: "43.9381",
      height: "4.0628",
      fill: "#3f3f3f"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "3",
      x2: "67",
      y1: "56",
      y2: "56",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      x2: "67",
      y1: "16",
      y2: "16",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "34.358 26.392 40 21 34 16"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0737",
      d: "M23.149,50.1115H22.33a.891.891,0,0,1-.8884-.8884V28.2888a1.9023,1.9023,0,0,1,1.8968-1.8968H64.8225a1.9023,1.9023,0,0,1,1.8968,1.8968V49.2235a.8906.8906,0,0,1-.888.888h-.8291"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "51.9715",
      x2: "35.8454",
      y1: "50.1115",
      y2: "50.1115",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0737"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0737",
      d: "M33.749,51.3635a4.2445,4.2445,0,1,1-8.4889,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0737",
      d: "M62.7161,51.1115a4.2445,4.2445,0,0,1-8.4889,0"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "34.358",
      y: "32.2455",
      rx: "1.0578",
      ry: "1.0578",
      width: "6.3408",
      height: "10.6464",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0737"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "21.4024",
      y: "32.2455",
      rx: "1.0578",
      ry: "1.0578",
      width: "6.3408",
      height: "10.6464",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0737"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "47.1963",
      y: "32.3238",
      rx: "1.0578",
      ry: "1.0578",
      width: "6.3408",
      height: "10.6464",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0737"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "60.3785",
      y: "32.3238",
      rx: "1.0578",
      ry: "1.0578",
      width: "6.3408",
      height: "10.6464",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0737"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "20.3843",
      x2: "67.7524",
      y1: "47.0306",
      y2: "47.0306",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.9699"
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
    }, /*#__PURE__*/React.createElement("line", {
      x1: "3",
      x2: "67",
      y1: "56",
      y2: "56",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      x2: "67",
      y1: "16",
      y2: "16",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "34.358 26.392 40 21 34 16"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0737",
      d: "M23.149,50.1115H22.33a.891.891,0,0,1-.8884-.8884V28.2888a1.9023,1.9023,0,0,1,1.8968-1.8968H64.8225a1.9023,1.9023,0,0,1,1.8968,1.8968V49.2235a.8906.8906,0,0,1-.888.888h-.8291"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "51.9715",
      x2: "35.8454",
      y1: "50.1115",
      y2: "50.1115",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0737"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0737",
      d: "M33.749,51.3635a4.2445,4.2445,0,1,1-8.4889,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0737",
      d: "M62.7161,51.1115a4.2445,4.2445,0,0,1-8.4889,0"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "34.358",
      y: "32.2455",
      rx: "1.0578",
      ry: "1.0578",
      width: "6.3408",
      height: "10.6464",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0737"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "21.4024",
      y: "32.2455",
      rx: "1.0578",
      ry: "1.0578",
      width: "6.3408",
      height: "10.6464",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0737"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "47.1963",
      y: "32.3238",
      rx: "1.0578",
      ry: "1.0578",
      width: "6.3408",
      height: "10.6464",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0737"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "60.3785",
      y: "32.3238",
      rx: "1.0578",
      ry: "1.0578",
      width: "6.3408",
      height: "10.6464",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0737"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "20.3843",
      x2: "67.7524",
      y1: "47.0306",
      y2: "47.0306",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.9699"
    })));
  }
};

export default TramCar;