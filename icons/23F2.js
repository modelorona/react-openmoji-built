import React from 'react';

const TimerClock = ({
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M12.6048,57.6825v-23c0-12.7025,10.2975-23,23-23s23,10.2975,23,23v23H12.6048z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.6048",
      cy: "34.6825",
      r: "15",
      fill: "#d0cfce",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.6048",
      cy: "34.6825",
      r: "15",
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.4172",
      x2: "28.6048",
      y1: "35.0875",
      y2: "35.0875",
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.7585"
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
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M12.6048,57.6825v-23c0-12.7025,10.2975-23,23-23s23,10.2975,23,23v23H12.6048z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.6048",
      cy: "34.6825",
      r: "15",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.6048",
      cy: "34.6825",
      r: "15",
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
      d: "M12.6048,57.6825v-23c0-12.7025,10.2975-23,23-23s23,10.2975,23,23v23H12.6048z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.6048",
      cy: "34.6825",
      r: "15",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.4172",
      x2: "28.6048",
      y1: "35.0875",
      y2: "35.0875",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.7585"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "24.4069",
      cy: "34.9878",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "46.6779",
      cy: "34.9878",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "27.6684",
      cy: "42.8618",
      rx: "1",
      ry: "1",
      transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -22.204 32.1184)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "43.4164",
      cy: "27.1138",
      rx: "1",
      ry: "1",
      transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -6.456 38.6415)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.5424",
      cy: "46.1233",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.5424",
      cy: "23.8523",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "43.4164",
      cy: "42.8618",
      rx: "1",
      ry: "1",
      transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -17.5915 43.254)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "27.6684",
      cy: "27.1138",
      rx: "1",
      ry: "1",
      transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -11.0685 27.506)",
      fill: "#000000",
      stroke: "none"
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
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M12.6048,57.6825v-23c0-12.7025,10.2975-23,23-23s23,10.2975,23,23v23H12.6048z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.6048",
      cy: "34.6825",
      r: "15",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.6048",
      cy: "34.6825",
      r: "15",
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
      d: "M12.6048,57.6825v-23c0-12.7025,10.2975-23,23-23s23,10.2975,23,23v23H12.6048z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.6048",
      cy: "34.6825",
      r: "15",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.4172",
      x2: "28.6048",
      y1: "35.0875",
      y2: "35.0875",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.7585"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "24.4069",
      cy: "34.9878",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "46.6779",
      cy: "34.9878",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "27.6684",
      cy: "42.8618",
      rx: "1",
      ry: "1",
      transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -22.204 32.1184)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "43.4164",
      cy: "27.1138",
      rx: "1",
      ry: "1",
      transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -6.456 38.6415)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.5424",
      cy: "46.1233",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.5424",
      cy: "23.8523",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "43.4164",
      cy: "42.8618",
      rx: "1",
      ry: "1",
      transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -17.5915 43.254)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "27.6684",
      cy: "27.1138",
      rx: "1",
      ry: "1",
      transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -11.0685 27.506)",
      fill: "#000000",
      stroke: "none"
    })));
  }
};

export default TimerClock;