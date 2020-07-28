import React from 'react';

const SlotMachine = ({
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
    }, /*#__PURE__*/React.createElement("line", {
      x1: "13.2293",
      x2: "55.872",
      y1: "22.5217",
      y2: "22.5217",
      fill: "none",
      stroke: "#9b9b9a",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2.305"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "13.2293",
      x2: "55.872",
      y1: "49.7177",
      y2: "49.7177",
      fill: "none",
      stroke: "#9b9b9a",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2.305"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "63.4837",
      cy: "30.7347",
      r: "2.5931",
      fill: "#ea5a47"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d22f27",
      d: "M64.5116,28.1838a2.59,2.59,0,0,1-3.5788,3.5787,2.5916,2.5916,0,1,0,3.5788-3.5787Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "13.2293",
      x2: "55.872",
      y1: "19.8649",
      y2: "19.8649",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2.305"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12.0768",
      x2: "12.0768",
      y1: "52.1351",
      y2: "19.8649",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "55.9507",
      x2: "13.1507",
      y1: "52.1351",
      y2: "52.1351",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "4.0074"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "13.1507",
      x2: "55.9507",
      y1: "19.8649",
      y2: "19.8649",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "4.0074"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "27.0594",
      x2: "27.0594",
      y1: "19.8649",
      y2: "52.1351",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "42.042",
      x2: "42.042",
      y1: "19.8649",
      y2: "52.1351",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "57.0245",
      x2: "63.157",
      y1: "47.4199",
      y2: "47.4199",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "63.157",
      x2: "63.157",
      y1: "47.4199",
      y2: "34.0016",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "63.157",
      cy: "30.7347",
      r: "2.5931",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "1.2966"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "17.3 35.69 17.3 33.698 21.836 33.698 19.033 41.766"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "32.282 31.227 32.282 29.235 36.819 29.235 34.016 37.303"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "47.265 35.69 47.265 33.698 51.802 33.698 48.998 41.766"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "57.0245",
      x2: "57.0245",
      y1: "19.8649",
      y2: "52.1351",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })), /*#__PURE__*/React.createElement("g", {
      id: "color-foreground"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#d22f27",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "17.3 35.69 17.3 33.698 21.836 33.698 19.033 41.766"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#d22f27",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "32.282 31.227 32.282 29.235 36.819 29.235 34.016 37.303"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#d22f27",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "47.265 35.69 47.265 33.698 51.802 33.698 48.998 41.766"
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
      x1: "13.2293",
      x2: "55.872",
      y1: "19.8649",
      y2: "19.8649",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2.305"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12.0768",
      x2: "12.0768",
      y1: "52.1351",
      y2: "19.8649",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "55.9507",
      x2: "13.1507",
      y1: "52.1351",
      y2: "52.1351",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "4.0074"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "13.1507",
      x2: "55.9507",
      y1: "19.8649",
      y2: "19.8649",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "4.0074"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "27.0594",
      x2: "27.0594",
      y1: "19.8649",
      y2: "52.1351",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "42.042",
      x2: "42.042",
      y1: "19.8649",
      y2: "52.1351",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "57.0245",
      x2: "63.157",
      y1: "47.4199",
      y2: "47.4199",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "63.157",
      x2: "63.157",
      y1: "47.4199",
      y2: "34.0016",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "63.157",
      cy: "30.7347",
      r: "2.5931",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "1.2966"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "17.3 35.69 17.3 33.698 21.836 33.698 19.033 41.766"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "32.282 31.227 32.282 29.235 36.819 29.235 34.016 37.303"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "47.265 35.69 47.265 33.698 51.802 33.698 48.998 41.766"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "57.0245",
      x2: "57.0245",
      y1: "19.8649",
      y2: "52.1351",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default SlotMachine;