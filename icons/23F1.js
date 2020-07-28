import React from 'react';

const Stopwatch = ({
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
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "#d0cfce",
      stroke: "#d0cfce",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "53.7559,19.7366 58.3424,16.187 61.4023,20.1407 57.1493,23.4322"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "31.3126",
      y: "7",
      width: "11.0083",
      height: "6.2941",
      fill: "#d0cfce",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36.8214",
      cy: "36.2941",
      r: "23",
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25.2945,46.5054"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36.8214",
      cy: "36.2941",
      r: "23",
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
      d: "M57.4424,22.4315"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M57.9904,22.0073"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58.5696,21.5591"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "56.366,17.7166 58.3424,16.187 61.4023,20.1407 59.5696,21.5591"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M54.6692,18.2559"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "32.3214,9.7271 32.3214,7 41.3214,7 41.3214,9.8931"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36.3475",
      cy: "16.9817",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36.3475",
      cy: "55.0239",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "49.7975",
      cy: "22.5528",
      rx: "0.9878",
      ry: "1.0121",
      transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -1.3619 41.8177)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "22.8975",
      cy: "49.4528",
      rx: "0.9878",
      ry: "1.0121",
      transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -28.2619 30.6754)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "55.3686",
      cy: "36.0028",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17.3264",
      cy: "36.0028",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.8399",
      x2: "21.4399",
      y1: "35.91",
      y2: "35.91",
      fill: "#000000",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.8846",
      x2: "25.9952",
      y1: "35.9253",
      y2: "46.8147",
      fill: "#000000",
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
      d: "M25.2945,46.5054"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "49.7975",
      cy: "49.4528",
      rx: "1.0121",
      ry: "0.9878",
      transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -20.3831 49.6965)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "22.8975",
      cy: "22.5528",
      rx: "1.0121",
      ry: "0.9878",
      transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -9.2407 22.7965)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M57.4425,22.4315"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M57.9905,22.0073"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58.5697,21.5591"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M54.6693,18.2559"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M57.4424,22.4315"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58.5696,21.5591"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M54.6692,18.2559"
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36.8214",
      cy: "36.2941",
      r: "23",
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
      d: "M57.4424,22.4315"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M57.9904,22.0073"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58.5696,21.5591"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "56.366,17.7166 58.3424,16.187 61.4023,20.1407 59.5696,21.5591"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M54.6692,18.2559"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "32.3214,9.7271 32.3214,7 41.3214,7 41.3214,9.8931"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36.3475",
      cy: "16.9817",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36.3475",
      cy: "55.0239",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "49.7975",
      cy: "22.5528",
      rx: "0.9878",
      ry: "1.0121",
      transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -1.3619 41.8177)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "22.8975",
      cy: "49.4528",
      rx: "0.9878",
      ry: "1.0121",
      transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -28.2619 30.6754)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "55.3686",
      cy: "36.0028",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17.3264",
      cy: "36.0028",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.8399",
      x2: "21.4399",
      y1: "35.91",
      y2: "35.91",
      fill: "#000000",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.8846",
      x2: "25.9952",
      y1: "35.9253",
      y2: "46.8147",
      fill: "#000000",
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
      d: "M25.2945,46.5054"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "49.7975",
      cy: "49.4528",
      rx: "1.0121",
      ry: "0.9878",
      transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -20.3831 49.6965)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "22.8975",
      cy: "22.5528",
      rx: "1.0121",
      ry: "0.9878",
      transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -9.2407 22.7965)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M57.4425,22.4315"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M57.9905,22.0073"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58.5697,21.5591"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M54.6693,18.2559"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M57.4424,22.4315"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58.5696,21.5591"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M54.6692,18.2559"
    })));
  }
};

export default Stopwatch;