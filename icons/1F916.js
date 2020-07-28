import React from 'react';

const Robot = ({
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
      fill: "#D22F27",
      d: "M34,16.1123v-2.5109c0-1.3807,1.1193-2.5,2.5-2.5l0,0c1.3807,0,2.5,1.1193,2.5,2.5v2.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M13.5,41.1014L13.5,41.1014c-1.3807,0-2.5-1.1193-2.5-2.5v-8c0-1.3807,1.1193-2.5,2.5-2.5l0,0 c1.3807,0,2.5,1.1193,2.5,2.5v8C16,39.9821,14.8807,41.1014,13.5,41.1014z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M58.5,41.1014L58.5,41.1014c1.3807,0,2.5-1.1193,2.5-2.5v-8c0-1.3807-1.1193-2.5-2.5-2.5l0,0 c-1.3807,0-2.5,1.1193-2.5,2.5v8C56,39.9821,57.1193,41.1014,58.5,41.1014z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M47.4505,56.1123h-22.901c-4.7022,0-8.5495-3.8473-8.5495-8.5495v-22.901 c0-4.7022,3.8473-8.5495,8.5495-8.5495h22.901c4.7022,0,8.5495,3.8473,8.5495,8.5495v22.901 C56,52.2649,52.1527,56.1123,47.4505,56.1123z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      d: "M35.4977,56.1115h13.2865c3.9687,0,7.2158-3.8473,7.2158-8.5495V24.661 c0-4.7022-3.2471-8.5495-7.2158-8.5495h-2.3526"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "44.8346",
      cy: "29.0027",
      rx: "2.8338",
      ry: "2.8338",
      fill: "#FFFFFF"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "27.3342",
      cy: "29.0022",
      rx: "2.8338",
      ry: "2.8338",
      fill: "#FFFFFF"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      d: "M44.5,47.5005h-17c-2.2,0-4-1.8-4-4l0,0c0-2.2,1.8-4,4-4h17c2.2,0,4,1.8,4,4l0,0 C48.5,45.7005,46.7,47.5005,44.5,47.5005z"
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
      strokeMiterlimit: "2",
      strokeWidth: "2",
      d: "M36.5,21.4541"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "2",
      strokeWidth: "2",
      d: "M34,16.0109V13.5c0-1.3807,1.1193-2.5,2.5-2.5l0,0c1.3807,0,2.5,1.1193,2.5,2.5V16"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "2",
      strokeWidth: "2",
      d: "M47.4505,56h-22.901C19.8473,56,16,52.1527,16,47.4505v-22.901C16,19.8473,19.8473,16,24.5495,16h22.901 C52.1527,16,56,19.8473,56,24.5495v22.901C56,52.1527,52.1527,56,47.4505,56z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "44.8346",
      cy: "29.0022",
      rx: "2.8338",
      ry: "2.8338",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "2",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "27.3342",
      cy: "29.0017",
      rx: "2.8338",
      ry: "2.8338",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "2",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "2",
      strokeWidth: "2",
      d: "M44.5,47.5h-17c-2.2,0-4-1.8-4-4l0,0 c0-2.2,1.8-4,4-4h17c2.2,0,4,1.8,4,4l0,0C48.5,45.7,46.7,47.5,44.5,47.5z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "2",
      strokeWidth: "2",
      d: "M13.5,41L13.5,41c-1.3807,0-2.5-1.1193-2.5-2.5v-8c0-1.3807,1.1193-2.5,2.5-2.5l0,0c1.3807,0,2.5,1.1193,2.5,2.5v8 C16,39.8807,14.8807,41,13.5,41z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "2",
      strokeWidth: "2",
      d: "M58.5,41L58.5,41c1.3807,0,2.5-1.1193,2.5-2.5v-8c0-1.3807-1.1193-2.5-2.5-2.5l0,0c-1.3807,0-2.5,1.1193-2.5,2.5v8 C56,39.8807,57.1193,41,58.5,41z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      d: "M36.5,37.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      d: "M36.5,57.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "28",
      x2: "28",
      y1: "40",
      y2: "47",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "2",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "33",
      x2: "33",
      y1: "40",
      y2: "47",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "2",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "38",
      x2: "38",
      y1: "40",
      y2: "47",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "2",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "43",
      x2: "43",
      y1: "40",
      y2: "47",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "2",
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
      strokeMiterlimit: "2",
      strokeWidth: "2",
      d: "M36.5,21.4541"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "2",
      strokeWidth: "2",
      d: "M34,16.0109V13.5c0-1.3807,1.1193-2.5,2.5-2.5l0,0c1.3807,0,2.5,1.1193,2.5,2.5V16"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "2",
      strokeWidth: "2",
      d: "M47.4505,56h-22.901C19.8473,56,16,52.1527,16,47.4505v-22.901C16,19.8473,19.8473,16,24.5495,16h22.901 C52.1527,16,56,19.8473,56,24.5495v22.901C56,52.1527,52.1527,56,47.4505,56z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "44.8346",
      cy: "29.0022",
      rx: "2.8338",
      ry: "2.8338",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "2",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "27.3342",
      cy: "29.0017",
      rx: "2.8338",
      ry: "2.8338",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "2",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "2",
      strokeWidth: "2",
      d: "M44.5,47.5h-17c-2.2,0-4-1.8-4-4l0,0 c0-2.2,1.8-4,4-4h17c2.2,0,4,1.8,4,4l0,0C48.5,45.7,46.7,47.5,44.5,47.5z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "2",
      strokeWidth: "2",
      d: "M13.5,41L13.5,41c-1.3807,0-2.5-1.1193-2.5-2.5v-8c0-1.3807,1.1193-2.5,2.5-2.5l0,0c1.3807,0,2.5,1.1193,2.5,2.5v8 C16,39.8807,14.8807,41,13.5,41z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "2",
      strokeWidth: "2",
      d: "M58.5,41L58.5,41c1.3807,0,2.5-1.1193,2.5-2.5v-8c0-1.3807-1.1193-2.5-2.5-2.5l0,0c-1.3807,0-2.5,1.1193-2.5,2.5v8 C56,39.8807,57.1193,41,58.5,41z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      d: "M36.5,37.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      d: "M36.5,57.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "28",
      x2: "28",
      y1: "40",
      y2: "47",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "2",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "33",
      x2: "33",
      y1: "40",
      y2: "47",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "2",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "38",
      x2: "38",
      y1: "40",
      y2: "47",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "2",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "43",
      x2: "43",
      y1: "40",
      y2: "47",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "2",
      strokeWidth: "2"
    })));
  }
};

export default Robot;