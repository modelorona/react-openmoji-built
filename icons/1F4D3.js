import React from 'react';

const Notebook = ({
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
      fill: "#FFFFFF",
      stroke: "none",
      points: "11,57.6968 60,57.6968 60,11.9092 15.9985,11.9092 11.9985,15.9092"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.0015,60.9092h-43.003c-0.5514,0-0.9985-0.447-0.9985-0.9985v-43.003c0-0.5514,0.447-0.9985,0.9985-0.9985h43.003 c0.5514,0,0.9985,0.447,0.9985,0.9985v43.003C56,60.4621,55.553,60.9092,55.0015,60.9092z"
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
      d: "M11,16.9092l4.9985-5h43.003c0.5514,0,0.9985,0.447,0.9985,0.9985v43.003c0,0.5514-0.447,0.9985-0.9985,0.9985"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.0015,60.9092h-43.003c-0.5514,0-0.9985-0.447-0.9985-0.9985v-43.003c0-0.5514,0.447-0.9985,0.9985-0.9985h43.003 c0.5514,0,0.9985,0.447,0.9985,0.9985v43.003C56,60.4621,55.553,60.9092,55.0015,60.9092z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "47.3583,29.7985 43.3583,29.7985 43.3583,36.7985 47.3583,36.7985"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "43.3583",
      x2: "46.3583",
      y1: "33.2985",
      y2: "33.2985",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "19.6417,36.7985 19.6417,29.7985 24.6417,36.7985 24.6417,29.7985"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30.8583,36.7985L30.8583,36.7985c-1.3807,0-2.5-1.1193-2.5-2.5v-2c0-1.3807,1.1193-2.5,2.5-2.5l0,0c1.3807,0,2.5,1.1193,2.5,2.5 v2C33.3583,35.6792,32.239,36.7985,30.8583,36.7985z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.3583",
      x2: "40.3583",
      y1: "29.8286",
      y2: "29.8286",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "38.3583",
      x2: "38.3583",
      y1: "29.8286",
      y2: "36.8286",
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
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M11,16.9092l4.9985-5h43.003c0.5514,0,0.9985,0.447,0.9985,0.9985v43.003c0,0.5514-0.447,0.9985-0.9985,0.9985"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.0015,60.9092h-43.003c-0.5514,0-0.9985-0.447-0.9985-0.9985v-43.003c0-0.5514,0.447-0.9985,0.9985-0.9985h43.003 c0.5514,0,0.9985,0.447,0.9985,0.9985v43.003C56,60.4621,55.553,60.9092,55.0015,60.9092z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "47.3583,29.7985 43.3583,29.7985 43.3583,36.7985 47.3583,36.7985"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "43.3583",
      x2: "46.3583",
      y1: "33.2985",
      y2: "33.2985",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "19.6417,36.7985 19.6417,29.7985 24.6417,36.7985 24.6417,29.7985"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30.8583,36.7985L30.8583,36.7985c-1.3807,0-2.5-1.1193-2.5-2.5v-2c0-1.3807,1.1193-2.5,2.5-2.5l0,0c1.3807,0,2.5,1.1193,2.5,2.5 v2C33.3583,35.6792,32.239,36.7985,30.8583,36.7985z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.3583",
      x2: "40.3583",
      y1: "29.8286",
      y2: "29.8286",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "38.3583",
      x2: "38.3583",
      y1: "29.8286",
      y2: "36.8286",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default Notebook;