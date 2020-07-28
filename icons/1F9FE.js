import React from 'react';

const Receipt = ({
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
      fill: "#d0cfce",
      points: "48.031 57.253 48.031 53.067 48.031 20.375 48.031 15.646 48.031 14.658 23.729 14.658 23.729 15.646 23.729 20.375 23.729 53.067 23.729 57.253 48.031 57.253"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "23.729 15.428 23.729 20.076 23.729 52.206 23.729 56.32"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "48.031 56.32 48.031 52.206 48.031 20.076 48.031 15.428"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "23.729 15.428 26.966 13.725 28.993 15.561 32.667 13.962 35.75 15.591 39.297 14.05 42.253 15.413 45.252 13.962 47.976 15.36"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "48.031 56.32 44.507 58.186 42.479 56.349 38.805 57.949 35.722 56.32 32.175 57.86 29.219 56.498 26.22 57.949 23.776 56.434"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "27.2749",
      x2: "35.6019",
      y1: "28.2126",
      y2: "28.2126",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.7287",
      x2: "44.3164",
      y1: "28.2154",
      y2: "28.2154",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "27.2749",
      x2: "34.9818",
      y1: "33.7471",
      y2: "33.7471",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.7287",
      x2: "44.3164",
      y1: "33.7519",
      y2: "33.7519",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "27.2749",
      x2: "34.0073",
      y1: "39.2615",
      y2: "39.2615",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.7287",
      x2: "44.3164",
      y1: "39.2885",
      y2: "39.2885",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.7287",
      x2: "44.3164",
      y1: "45.8216",
      y2: "45.8216",
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
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "23.729 15.428 23.729 20.076 23.729 52.206 23.729 56.32"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "48.031 56.32 48.031 52.206 48.031 20.076 48.031 15.428"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "23.729 15.428 26.966 13.725 28.993 15.561 32.667 13.962 35.75 15.591 39.297 14.05 42.253 15.413 45.252 13.962 47.976 15.36"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "48.031 56.32 44.507 58.186 42.479 56.349 38.805 57.949 35.722 56.32 32.175 57.86 29.219 56.498 26.22 57.949 23.776 56.434"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "27.2749",
      x2: "35.6019",
      y1: "28.2126",
      y2: "28.2126",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.7287",
      x2: "44.3164",
      y1: "28.2154",
      y2: "28.2154",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "27.2749",
      x2: "34.9818",
      y1: "33.7471",
      y2: "33.7471",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.7287",
      x2: "44.3164",
      y1: "33.7519",
      y2: "33.7519",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "27.2749",
      x2: "34.0073",
      y1: "39.2615",
      y2: "39.2615",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.7287",
      x2: "44.3164",
      y1: "39.2885",
      y2: "39.2885",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.7287",
      x2: "44.3164",
      y1: "45.8216",
      y2: "45.8216",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default Receipt;