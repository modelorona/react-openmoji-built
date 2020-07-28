import React from 'react';

const Motorcycle = ({
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
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: "12.0313",
      cy: "48",
      rx: "7.0312",
      ry: "7",
      fill: "#9B9B9A",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "53.0313",
      cy: "48",
      rx: "8.0312",
      ry: "7.9951",
      fill: "#9B9B9A",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      stroke: "none",
      d: "M12.1152,35.1201c-1.1953-0.6806-2-1.1201-2-1.1201s3.7842-6.3921,9-9c4-2,11-3,11-3v3l-6,4l4,3l8-2l7,6 c0,0,7-3,10-6v-2l14-3l-1,3c0,0-22,16-28,16l5,6h-20c0,0,0-6-1-8c-0.5361-1.0723-3.9502-3.1689-7-5"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#FCEA2B",
      stroke: "none",
      points: "65.1152,30 67.1152,32 65.417,33.668 62.875,31.126"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      stroke: "none",
      d: "M15,38l-3-2c0,0,4-5,5-5S15,38,15,38z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D22F27",
      stroke: "none",
      d: "M28.1152,32c0,4.834,4.8848,7.667,8.5518,7.667c3.0644,0,10.1143-4.8565,12.5-5.334 c1.7148-0.3428,1.5273-1.8935,4.083-2.708c1.585-0.5059,10.25-4.5,12.75-4.25c1.6338,0.1636-2.4717,2.251-1.333,1.625 c6.667-3.666-25,14.667-25,14.667L37,44l-7.833-3.666l-5.667-5.5v-5.5L28.1152,32z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#3F3F3F",
      stroke: "none",
      points: "39.5,32.5 42,36 50.5,33 53.1152,30 53.1152,28"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#D0CFCE",
      stroke: "none",
      points: "40.1504,45.3877 45.75,45.9688 48.5938,45 52.7188,42.875 59.625,39.7813 59.8438,38.4688 56,34.9492 47.9688,40.3125 40.2754,43.3145 38.8701,44 39.5,45"
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
      d: "M45.1152,44"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M15.1152,37c0,0,3-4,2-5"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "12.0313",
      cy: "48",
      rx: "7.0312",
      ry: "7",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.1152,44"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M15.1152,37c3.0498,1.8311,6.4639,3.9277,7,5c1,2,1,9,1,9h20c0,0-0.4863-6.0371-12.2812-10 c-1.9756-0.6631-11.4951-7.2236-6.7188-12"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M12.1152,35.1201c-1.1953-0.6806-2-1.1201-2-1.1201s3.7842-6.3921,9-9c4-2,11-3,11-3v3l-6,4l4,3c0,0,6.7149-3.6279,10-1 c1.875,1.5,4,5,4,5s8-2,11-5v-3l14-3l-1,3c0,0-22.4902,16.167-28.4902,16.167"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M15.1152,37c0,0,3-4,2-5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18.1152",
      x2: "12.0313",
      y1: "40",
      y2: "48",
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
      points: "65.1152,30 67.1152,32 66.1152,33"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "59,39 48.1152,45 46,45"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53.1152,28c-5.2802,2.8496-10.2822,4-14,4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.2666,49.916 C47.1045,52.8506,49.8164,55,53.0313,55c3.8828,0,7.0312-3.1338,7.0312-7c0-1.6602-0.5801-3.1846-1.5508-4.3848"
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
      d: "M45.1152,44"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M15.1152,37c0,0,3-4,2-5"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "12.0313",
      cy: "48",
      rx: "7.0312",
      ry: "7",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.1152,44"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M15.1152,37c3.0498,1.8311,6.4639,3.9277,7,5c1,2,1,9,1,9h20c0,0-0.4863-6.0371-12.2812-10 c-1.9756-0.6631-11.4951-7.2236-6.7188-12"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M12.1152,35.1201c-1.1953-0.6806-2-1.1201-2-1.1201s3.7842-6.3921,9-9c4-2,11-3,11-3v3l-6,4l4,3c0,0,6.7149-3.6279,10-1 c1.875,1.5,4,5,4,5s8-2,11-5v-3l14-3l-1,3c0,0-22.4902,16.167-28.4902,16.167"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M15.1152,37c0,0,3-4,2-5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18.1152",
      x2: "12.0313",
      y1: "40",
      y2: "48",
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
      points: "65.1152,30 67.1152,32 66.1152,33"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "59,39 48.1152,45 46,45"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53.1152,28c-5.2802,2.8496-10.2822,4-14,4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.2666,49.916 C47.1045,52.8506,49.8164,55,53.0313,55c3.8828,0,7.0312-3.1338,7.0312-7c0-1.6602-0.5801-3.1846-1.5508-4.3848"
    })));
  }
};

export default Motorcycle;