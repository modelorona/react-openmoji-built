import React from 'react';

const FlaggedBuilding = ({
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
      x: "13.0463",
      y: "40.7795",
      width: "45.606",
      height: "20.6526",
      fill: "#92d3f5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "18.355",
      y: "46.0122",
      width: "12.2734",
      height: "15.4199",
      fill: "#a57939"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "35.927",
      y: "44.8695",
      width: "6.4666",
      height: "12.5623",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "47.0129",
      y: "44.8695",
      width: "6.4666",
      height: "12.5623",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "M27.9173,18.74A13.5224,13.5224,0,0,1,34.85,16.9228c4.5419,0,8.4377,6.247,14.3339,6.247.8691,0,1.3042-.3913,2.1813-.3913.7275,0,1.018.52,1.018,1.4385v1.5653c0,.7168-.783,1.531-3.0816,1.531-6.91,0-10.8056-3.9084-14.8143-3.9084a11.7385,11.7385,0,0,0-6.6492,2.219V21.3567Z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "8.8314",
      y: "61.4321",
      width: "54.0357",
      height: "3.4194",
      fill: "#d0cfce"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "13.0463",
      x2: "13.0463",
      y1: "61.4321",
      y2: "45.3988",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8.8314",
      x2: "62.8671",
      y1: "64.8515",
      y2: "64.8515",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "62.8671",
      x2: "8.8314",
      y1: "61.4321",
      y2: "61.4321",
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
      points: "19.991 33.303 12.461 33.303 8.831 40.779 62.867 40.779 59.238 33.303 28.828 33.303"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "58.6523",
      x2: "58.6523",
      y1: "61.4321",
      y2: "45.3988",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "26.4521",
      x2: "26.4521",
      y1: "55.1141",
      y2: "52.3302",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.5337",
      x2: "22.5337",
      y1: "55.1141",
      y2: "52.3302",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "18.3562",
      y: "46.0122",
      width: "12.2734",
      height: "15.4199",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M27.9173,9.34A13.4159,13.4159,0,0,1,34.85,7.1922c4.5419,0,8.4377,3.9373,14.3339,3.9373.8691,0,1.3042-.3912,2.1813-.3912.7275,0,1.018.52,1.018,1.4384V25.7823c0,.7168-.783,1.531-3.0816,1.531-6.91,0-10.8056-3.9084-14.8143-3.9084a11.7385,11.7385,0,0,0-6.6492,2.219V21.3567"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "24.5786",
      x2: "24.5786",
      y1: "7.3472",
      y2: "40.7795",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "35.927",
      y: "44.8695",
      width: "6.4666",
      height: "12.5623",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "47.0129",
      y: "44.8695",
      width: "6.4666",
      height: "12.5623",
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
    }, /*#__PURE__*/React.createElement("line", {
      x1: "13.0463",
      x2: "13.0463",
      y1: "61.4321",
      y2: "45.3988",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8.8314",
      x2: "62.8671",
      y1: "64.8515",
      y2: "64.8515",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "62.8671",
      x2: "8.8314",
      y1: "61.4321",
      y2: "61.4321",
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
      points: "19.991 33.303 12.461 33.303 8.831 40.779 62.867 40.779 59.238 33.303 28.828 33.303"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "58.6523",
      x2: "58.6523",
      y1: "61.4321",
      y2: "45.3988",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "26.4521",
      x2: "26.4521",
      y1: "55.1141",
      y2: "52.3302",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.5337",
      x2: "22.5337",
      y1: "55.1141",
      y2: "52.3302",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "18.3562",
      y: "46.0122",
      width: "12.2734",
      height: "15.4199",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M27.9173,9.34A13.4159,13.4159,0,0,1,34.85,7.1922c4.5419,0,8.4377,3.9373,14.3339,3.9373.8691,0,1.3042-.3912,2.1813-.3912.7275,0,1.018.52,1.018,1.4384V25.7823c0,.7168-.783,1.531-3.0816,1.531-6.91,0-10.8056-3.9084-14.8143-3.9084a11.7385,11.7385,0,0,0-6.6492,2.219V21.3567"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "24.5786",
      x2: "24.5786",
      y1: "7.3472",
      y2: "40.7795",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "35.927",
      y: "44.8695",
      width: "6.4666",
      height: "12.5623",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "47.0129",
      y: "44.8695",
      width: "6.4666",
      height: "12.5623",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default FlaggedBuilding;