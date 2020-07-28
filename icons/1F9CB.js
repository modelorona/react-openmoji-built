import React from 'react';

const BubbleTea = ({
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
      fill: "#f4aa41",
      d: "M42.9778,61.958H27.1451A4.0845,4.0845,0,0,1,23.21,58.3763L19.0916,31.1494A1,1,0,0,1,20.08,30H50.0642a.9994.9994,0,0,1,.9883,1.15L46.8773,58.6067A3.9444,3.9444,0,0,1,42.9778,61.958Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#b399c8",
      d: "M39.0727,32.0166,37.6941,47.1833a1,1,0,0,1-.9756.7851.5574.5574,0,0,1-.1564,0l-4.546-.0926a1.11,1.11,0,0,1-.7631-.4643.998.998,0,0,1-.1338-.7588L32.1,32.0166ZM33.822,25.3945l.2588-1.1523c1.336-5.9443,3.0879-8.4473,8.1514-11.6426l7.4844-4.77a.9983.9983,0,0,1,1.3721.293l2.6142,3.9687a.9987.9987,0,0,1-.293,1.39l-8.0156,5.1709A10.5358,10.5358,0,0,0,40.8,25.2373l-.043.195Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92d3f5",
      d: "M52.9021,32.0166H17.25a1,1,0,0,1-1-1V28.9033a3.513,3.513,0,0,1,3.5088-3.5088H50.3933a3.513,3.513,0,0,1,3.5088,3.5088v2.1133A.9994.9994,0,0,1,52.9021,32.0166Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M49.55,34.1934,45.9024,58.3491A3.0671,3.0671,0,0,1,42.87,60.9583h-15.62A3.0672,3.0672,0,0,1,24.2164,58.35L20.5626,34.1934"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "28.8063",
      cy: "55.7315",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "39.1173",
      cy: "56.5657",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "27.8773",
      cy: "47.2169",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "42.2668",
      cy: "43.979",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "25.8773",
      cy: "41.0017",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "34.4036",
      cy: "52.0518",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "42.2668",
      cy: "50.4521",
      r: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M52.9022,28.9037a2.5163,2.5163,0,0,0-2.5089-2.5089H19.7587A2.5162,2.5162,0,0,0,17.25,28.9037v2.1127H52.9022Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.6406,26.3948l.76-3.3468c1.2233-4.62,2.9271-6.8011,7.3659-9.6029l7.4875-4.7737,2.614,3.9693-8.0154,5.1712a11.5951,11.5951,0,0,0-4.3971,5.2362l-.7969,3.3467"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "38.3711",
      x2: "42.0205",
      y1: "16.9675",
      y2: "20.3926",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "41.1451",
      x2: "43.7301",
      y1: "14.5306",
      y2: "18.6355",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.3922",
      x2: "40.8584",
      y1: "20.109",
      y2: "22.193",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32.9397",
      x2: "32.0967",
      y1: "34.1934",
      y2: "46.8749",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "37.8713",
      x2: "36.7104",
      y1: "34.1934",
      y2: "46.9802",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
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
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M49.55,34.1934,45.9024,58.3491A3.0671,3.0671,0,0,1,42.87,60.9583h-15.62A3.0672,3.0672,0,0,1,24.2164,58.35L20.5626,34.1934"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "28.8063",
      cy: "55.7315",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "39.1173",
      cy: "56.5657",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "27.8773",
      cy: "47.2169",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "42.2668",
      cy: "43.979",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "25.8773",
      cy: "41.0017",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "34.4036",
      cy: "52.0518",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "42.2668",
      cy: "50.4521",
      r: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M52.9022,28.9037a2.5163,2.5163,0,0,0-2.5089-2.5089H19.7587A2.5162,2.5162,0,0,0,17.25,28.9037v2.1127H52.9022Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.6406,26.3948l.76-3.3468c1.2233-4.62,2.9271-6.8011,7.3659-9.6029l7.4875-4.7737,2.614,3.9693-8.0154,5.1712a11.5951,11.5951,0,0,0-4.3971,5.2362l-.7969,3.3467"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "38.3711",
      x2: "42.0205",
      y1: "16.9675",
      y2: "20.3926",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "41.1451",
      x2: "43.7301",
      y1: "14.5306",
      y2: "18.6355",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.3922",
      x2: "40.8584",
      y1: "20.109",
      y2: "22.193",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32.9397",
      x2: "32.0967",
      y1: "34.1934",
      y2: "46.8749",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "37.8713",
      x2: "36.7104",
      y1: "34.1934",
      y2: "46.9802",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default BubbleTea;