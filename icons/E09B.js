import React from 'react';

const Tsunami = ({
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
      d: "M32.4126,59.974c-12.6091,0-24.0871-10.8222-24.0871-24.1683,0-12.4881,8.2436-19.4179,16.2984-19.4179A12.5859,12.5859,0,0,1,37.1385,28.7046c0,5.2919-1.9082,8.092-3.73,8.092-1.1714,0-1.9323-.8847-1.9323-2.6288a2.9316,2.9316,0,0,0-2.9637-2.7755c-1.8624,0-3.3462,1.6622-3.3462,4.3419,0,3.6251,3.33,6.5652,7.5,6.5652,9.91,0,11.7853-3.7786,19.9164-3.7786,4.6814,0,7.9983,3.742,7.9983,7.1491C60.5808,54.18,49.1827,59.974,32.4126,59.974Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3f3f3f",
      d: "M61.8618,26.931,52.193,19.6675,42.6008,26.92v7.7138l.0043.9239a28.5957,28.5957,0,0,1,7.33-2.1127V27.7412h4.6122v5.4666c4.2271.2362,6.5978,2.1492,7.3148,4.024Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3f3f3f",
      d: "M36.21,52.8907c5.9145-2.6986,9.9539-5.732,17.4353-5.732a17.5234,17.5234,0,0,1,9.14,2.7116V59.974H32.2509C32.6772,56.2663,36.21,52.8907,36.21,52.8907Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "46.3397",
      x2: "46.3397",
      y1: "23.8968",
      y2: "20.1387",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "42.6007",
      x2: "42.6007",
      y1: "34.9219",
      y2: "26.9204",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "61.8618",
      x2: "61.8618",
      y1: "26.9311",
      y2: "36.571",
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
      points: "41.116 28.015 52.193 19.668 63.347 28.015"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "50.232 27.741 54.547 27.741 54.547 33.343"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M15.8861,32.33c1.0278-5.61,4.9283-9.1318,9.1039-9.1318,3.7754,0,6.9221,2.1467,7.7409,5.6384"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M62.7857,49.87a17.5234,17.5234,0,0,0-9.14-2.7116c-11.4643,0-14.0145,6.8353-24.103,6.8353"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M31.476,34.1678a2.9316,2.9316,0,0,0-2.9637-2.7755c-1.8624,0-3.3462,1.6622-3.3462,4.3419,0,3.6251,3.33,6.5652,7.5,6.5652,9.91,0,11.7853-3.7786,19.9164-3.7786a8.1548,8.1548,0,0,1,6.7549,3.4652"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M8.5042,32.7092c1.2426-10.4278,8.438-16.3214,16.12-16.3214A12.5859,12.5859,0,0,1,37.1385,28.7046a16.452,16.452,0,0,1-.7092,4.938"
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
      x1: "46.3397",
      x2: "46.3397",
      y1: "23.8968",
      y2: "20.1387",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "42.6007",
      x2: "42.6007",
      y1: "34.9219",
      y2: "26.9204",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "61.8618",
      x2: "61.8618",
      y1: "26.9311",
      y2: "36.571",
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
      points: "41.116 28.015 52.193 19.668 63.347 28.015"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "50.232 27.741 54.547 27.741 54.547 33.343"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M15.8861,32.33c1.0278-5.61,4.9283-9.1318,9.1039-9.1318,3.7754,0,6.9221,2.1467,7.7409,5.6384"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M62.7857,49.87a17.5234,17.5234,0,0,0-9.14-2.7116c-11.4643,0-14.0145,6.8353-24.103,6.8353"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M31.476,34.1678a2.9316,2.9316,0,0,0-2.9637-2.7755c-1.8624,0-3.3462,1.6622-3.3462,4.3419,0,3.6251,3.33,6.5652,7.5,6.5652,9.91,0,11.7853-3.7786,19.9164-3.7786a8.1548,8.1548,0,0,1,6.7549,3.4652"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M8.5042,32.7092c1.2426-10.4278,8.438-16.3214,16.12-16.3214A12.5859,12.5859,0,0,1,37.1385,28.7046a16.452,16.452,0,0,1-.7092,4.938"
    })));
  }
};

export default Tsunami;