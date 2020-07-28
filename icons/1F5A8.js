import React from 'react';

const Printer = ({
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
      fill: "#9B9B9A",
      stroke: "none",
      points: "56.5,57.0387 68.5,57.0387 68.5,15.9286 4.5,15.9286 4.5,57.0387 16.4998,57.0387"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#9B9B9A",
      stroke: "none",
      points: "16.4998,56 4.5,56 4.5,15.9286 68.5,15.9286 68.5,56 56.5,56"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5.3926",
      y: "15.9286",
      width: "7.1411",
      height: "40.0714",
      fill: "#D0CFCE",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "60.1359",
      y: "15.9286",
      width: "7.9178",
      height: "40.0714",
      fill: "#D0CFCE",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#D0CFCE",
      stroke: "none",
      points: "15.5006,15.4123 15.5006,4.9923 57.4994,4.9923 57.4994,15.9286"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#D0CFCE",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "16.5,12.5029 16.5,4.9923 56.5,4.9923 56.5,12.8751"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#3F3F3F",
      stroke: "none",
      points: "52.5398,44.4334 52.5398,68 20.4602,68 20.4602,44.4334"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#3F3F3F",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "51.5857,50.5871 51.5857,68 21.4143,68 21.4143,50.5871"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "61.1454",
      x2: "61.1454",
      y1: "20.3352",
      y2: "52.2851",
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "46.7833,44.4525 46.7833,63.7559 26.2167,63.7559 26.2167,44.4525"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11.5",
      x2: "11.5",
      y1: "20.3352",
      y2: "52.2851",
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "16.5,12.5029 16.5,4.9923 56.5,4.9923 56.5,12.8751"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "51.5857,50.5871 51.5857,68 21.4143,68 21.4143,50.5871"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "61.1454",
      x2: "61.1454",
      y1: "20.3352",
      y2: "52.2851",
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
      points: "46.7833,44.4525 46.7833,63.7559 26.2167,63.7559 26.2167,44.4525"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "29.5276",
      x2: "43.4724",
      y1: "48.3784",
      y2: "48.3784",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "29.5276",
      x2: "43.4724",
      y1: "53.2052",
      y2: "53.2052",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "29.5276",
      x2: "43.4724",
      y1: "58.5044",
      y2: "58.5044",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11.5",
      x2: "11.5",
      y1: "20.3352",
      y2: "52.2851",
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
      d: "M16.5,52.2851v-3.1353c0-2.6048,2.1116-4.7164,4.7164-4.7164h30.5672c2.6048,0,4.7164,2.1116,4.7164,4.7164v3.1353"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "56.5,56 68.5,56 68.5,15.9286 4.5,15.9286 4.5,56 16.4998,56"
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
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "16.5,12.5029 16.5,4.9923 56.5,4.9923 56.5,12.8751"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "51.5857,50.5871 51.5857,68 21.4143,68 21.4143,50.5871"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "61.1454",
      x2: "61.1454",
      y1: "20.3352",
      y2: "52.2851",
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
      points: "46.7833,44.4525 46.7833,63.7559 26.2167,63.7559 26.2167,44.4525"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "29.5276",
      x2: "43.4724",
      y1: "48.3784",
      y2: "48.3784",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "29.5276",
      x2: "43.4724",
      y1: "53.2052",
      y2: "53.2052",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "29.5276",
      x2: "43.4724",
      y1: "58.5044",
      y2: "58.5044",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11.5",
      x2: "11.5",
      y1: "20.3352",
      y2: "52.2851",
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
      d: "M16.5,52.2851v-3.1353c0-2.6048,2.1116-4.7164,4.7164-4.7164h30.5672c2.6048,0,4.7164,2.1116,4.7164,4.7164v3.1353"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "56.5,56 68.5,56 68.5,15.9286 4.5,15.9286 4.5,56 16.4998,56"
    })));
  }
};

export default Printer;