import React from 'react';

const Hammer = ({
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
      fill: "#a57939",
      points: "37.877 21.43 37.848 43.552 39.05 47.175 39.025 62.881 37.817 62.883 34.193 62.889 32.984 62.891 33.009 47.185 34.223 43.558 34.252 21.436 37.877 21.43"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      d: "M29.7035,11.6v9.9H42.4314V15.8424s8.4853,0,11.3137,2.8284A15.1442,15.1442,0,0,0,42.4314,11.6,60.523,60.523,0,0,0,29.7035,11.6Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "M25.89,12.4785l-.0319,8.02h0a3.3363,3.3363,0,0,1-3.7013.0147h0l.0319-8.0195h0a2.6172,2.6172,0,0,1,3.7013-.0147Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "37.877 21.5 37.848 43.552 39.05 47.175 39.025 62.881 37.817 62.883 34.193 62.889 32.984 62.891 33.009 47.185 34.223 43.558 34.252 21.5 37.877 21.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M29.7035,11.6v9.9H42.4314V15.8424s8.4853,0,11.3137,2.8284A15.1442,15.1442,0,0,0,42.4314,11.6,60.523,60.523,0,0,0,29.7035,11.6Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M25.89,12.4785l-.0319,8.02h0a3.3363,3.3363,0,0,1-3.7013.0147h0l.0319-8.0195h0a2.6172,2.6172,0,0,1,3.7013-.0147Z"
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
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "37.877 21.5 37.848 43.552 39.05 47.175 39.025 62.881 37.817 62.883 34.193 62.889 32.984 62.891 33.009 47.185 34.223 43.558 34.252 21.5 37.877 21.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M29.7035,11.6v9.9H42.4314V15.8424s8.4853,0,11.3137,2.8284A15.1442,15.1442,0,0,0,42.4314,11.6,60.523,60.523,0,0,0,29.7035,11.6Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M25.89,12.4785l-.0319,8.02h0a3.3363,3.3363,0,0,1-3.7013.0147h0l.0319-8.0195h0a2.6172,2.6172,0,0,1,3.7013-.0147Z"
    })));
  }
};

export default Hammer;