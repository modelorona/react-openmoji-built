import React from 'react';

const PoliceCar = ({
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
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M64.8,43.8l-1.1-0.6c-0.4-0.2-0.6-0.6-0.5-1c0.3-1.9,0.5-8.5-9.7-11.5c-0.2-0.1-0.4-0.1-0.6-0.1l-19.6,0.1 c-0.4,0-0.8,0.1-1.1,0.3l-10.3,6.9c-0.2,0.1-0.4,0.2-0.6,0.2c-1.9-0.1-3.7,0.1-5.6,0.4c-5.4,1.1-7.6,4-8.4,5.5 c-0.2,0.3-0.2,0.7-0.2,1c0.1,2.4-1.5,5.1,0.9,7.3l19.4-0.1l20.4-0.5l16.1-0.2c0.9-0.1,2.4-1.4,2.8-2.2C68.4,46.6,65,43.9,64.8,43.8 z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      d: "M17.3,46.2c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S19.5,46.2,17.3,46.2z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      d: "M57.1,46.2c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S59.3,46.2,57.1,46.2z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M56.1,39.1v-4.3c0-0.9-0.8-1.7-1.7-1.7l0,0H33.2c-0.1,0-0.2,0-0.2,0.1l-8,5.7c-0.2,0.1-0.2,0.4-0.1,0.6 c0.1,0.1,0.2,0.2,0.3,0.2c5.6,0,27.2-0.2,30.4-0.1C55.9,39.6,56.1,39.4,56.1,39.1C56.1,39.2,56.1,39.2,56.1,39.1z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#FCEA2B",
      points: "8.9,40.3 12.9,41.9 10.8,44.8 5.8,44.9"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      d: "M34.9,29.2c0,0-0.1-2.1,2.4-2.2c2.4-0.1,2.4,2.2,2.4,2.2"
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
      strokeWidth: "2",
      d: "M8.1,51.2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34.9,29.2c0,0-0.1-2.1,2.4-2.2c2.4-0.1,2.4,2.2,2.4,2.2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "47.6",
      x2: "27",
      y1: "50.8",
      y2: "51.2",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M8.1,51.2 c-0.9-0.2-1.7-0.5-1.8-1c-0.1-1-0.3-3.8-0.3-5.1c0-0.5,0.1-1.1,0.4-1.5c1.1-2,4.8-6.8,14.9-6.4l10.3-6.9c0.5-0.3,1.1-0.5,1.6-0.5 l19.6-0.1c0.3,0,0.6,0,0.9,0.1c2.2,0.6,11.7,4,10.4,12.6l1.1,0.6c0.5,0.2,0.9,0.7,1,1.2c0.4,1.4,0.3,2.9-0.2,4.3"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "24.9,39.7 55.1,39.5 55.1,35"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17.3",
      cy: "50.2",
      r: "5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "57.1",
      cy: "50.2",
      r: "5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "12.3,42.7 10.5,44.9 6.8,44.8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "24.1",
      x2: "50.1",
      y1: "43.2",
      y2: "43.2",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })), /*#__PURE__*/React.createElement("g", {
      id: "color-foreground"
    }, /*#__PURE__*/React.createElement("line", {
      id: "xx",
      x1: "24.1",
      x2: "50.1",
      y1: "43.2",
      y2: "43.2",
      fill: "none",
      stroke: "#61B2E4",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.1"
    })));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M8.1,51.2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34.9,29.2c0,0-0.1-2.1,2.4-2.2c2.4-0.1,2.4,2.2,2.4,2.2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "47.6",
      x2: "27",
      y1: "50.8",
      y2: "51.2",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M8.1,51.2 c-0.9-0.2-1.7-0.5-1.8-1c-0.1-1-0.3-3.8-0.3-5.1c0-0.5,0.1-1.1,0.4-1.5c1.1-2,4.8-6.8,14.9-6.4l10.3-6.9c0.5-0.3,1.1-0.5,1.6-0.5 l19.6-0.1c0.3,0,0.6,0,0.9,0.1c2.2,0.6,11.7,4,10.4,12.6l1.1,0.6c0.5,0.2,0.9,0.7,1,1.2c0.4,1.4,0.3,2.9-0.2,4.3"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "24.9,39.7 55.1,39.5 55.1,35"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17.3",
      cy: "50.2",
      r: "5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "57.1",
      cy: "50.2",
      r: "5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "12.3,42.7 10.5,44.9 6.8,44.8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "24.1",
      x2: "50.1",
      y1: "43.2",
      y2: "43.2",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default PoliceCar;