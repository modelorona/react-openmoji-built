import React from 'react';

const Timer = ({
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "35.9047",
      cy: "36.0138",
      r: "27.0345",
      fill: "#fcea2b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36.0058",
      cy: "36.0369",
      r: "21.8709",
      fill: "#fff"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M55.1092,25.38a21.8626,21.8626,0,1,1-8.0938-8.2451"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M62.9392,35.9973a27.0463,27.0463,0,1,1-5.265-16.0382"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "47.394 21.578 58.432 20.418 57.272 9.38"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "49.975 36.354 35.987 36.354 35.891 36.354 35.891 18.52"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.8906",
      x2: "35.8906",
      y1: "53.9106",
      y2: "50.0661",
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
      points: "21.143 36.354 18.086 36.354 18.086 36.354"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.8906",
      cy: "36.3538",
      r: "3.7371"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "48.6938",
      cy: "47.9371",
      r: "1.4802"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "23.0873",
      cy: "24.7172",
      r: "1.4802"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "23.0873",
      cy: "47.9371",
      r: "1.4802"
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
      d: "M55.1092,25.38a21.8626,21.8626,0,1,1-8.0938-8.2451"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M62.9392,35.9973a27.0463,27.0463,0,1,1-5.265-16.0382"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "47.394 21.578 58.432 20.418 57.272 9.38"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "49.975 36.354 35.987 36.354 35.891 36.354 35.891 18.52"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.8906",
      x2: "35.8906",
      y1: "53.9106",
      y2: "50.0661",
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
      points: "21.143 36.354 18.086 36.354 18.086 36.354"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.8906",
      cy: "36.3538",
      r: "3.7371"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "48.6938",
      cy: "47.9371",
      r: "1.4802"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "23.0873",
      cy: "24.7172",
      r: "1.4802"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "23.0873",
      cy: "47.9371",
      r: "1.4802"
    })));
  }
};

export default Timer;