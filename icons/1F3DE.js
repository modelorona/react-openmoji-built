import React from 'react';

const NationalPark = ({
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
      x1: "45",
      x2: "45",
      y1: "56.4349",
      y2: "52",
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "58",
      x2: "58",
      y1: "53.4349",
      y2: "49",
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#9B9B9A",
      stroke: "#9b9b9a",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "0.9",
      points: "37.9219,35.1094 40.3905,41.6746 45.75,47.2247 10.25,47.125 14.0417,42.25 15.6667,34.0781 20.4306,21.1476 23.1528,23.8698 25.875,25.9115 28.5972,31.3559 32,31.3559 37.4444,35.4392"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      stroke: "#92D3F5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.9",
      d: "M37,52c-2.6985-2.7727-4.6708-3.179-6-3c-3.0049,0.4046-4.3383,4.0176-8,4c-0.3861-0.0019-1.3036-0.0068-2.3333-0.4544 C18.0565,51.411,17.6107,48.5751,14,49c-4.0531,0.477-4.909,4.5912-8,4h29.6875"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B1CC33",
      stroke: "#B1CC33",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.9",
      d: "M66.28,39.6464 c0-1.586-1.6295-2.8743-3.6396-2.8743c-0.1679,0.0014-0.3356,0.012-0.5025,0.0318C61.2867,35.1493,59.4384,34,57.2891,34 c-2.9556,0-5.3514,2.1685-5.3514,4.8432c0.0005,0.1768,0.0116,0.3535,0.0332,0.5288c-1.3211,0.4311-2.2509,1.4576-2.2509,2.6564 c0,1.5861,1.6295,2.8743,3.6396,2.8743c0.764,0.0066,1.5164-0.1926,2.1825-0.578c0.8599,0.7071,2.2359,1.1677,3.7918,1.1677 c2.6069,0,4.7201-1.2869,4.7201-2.8743c-0.0004-0.1049-0.0101-0.2096-0.029-0.3128C65.348,41.8736,66.28,40.8465,66.28,39.6464z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.72,41.0284"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B1CC33",
      stroke: "none",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.9",
      d: "M52.898,42.9002 c0-1.586-1.6295-2.8743-3.6396-2.8743c-0.1679,0.0014-0.3356,0.012-0.5025,0.0318c-0.8512-1.6546-2.6995-2.8039-4.8488-2.8039 c-2.9556,0-5.3514,2.1685-5.3514,4.8432c0.0005,0.1768,0.0116,0.3535,0.0332,0.5288c-1.3211,0.4311-2.2509,1.4576-2.2509,2.6564 c0,1.5861,1.6295,2.8743,3.6396,2.8743c0.764,0.0066,1.5164-0.1926,2.1825-0.578c0.8599,0.7071,2.2359,1.1677,3.7918,1.1677 c2.6069,0,4.7201-1.2869,4.7201-2.8743c-0.0004-0.1049-0.0101-0.2096-0.029-0.3128C51.966,45.1274,52.898,44.1003,52.898,42.9002z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "45",
      x2: "45",
      y1: "56.4349",
      y2: "52",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "58",
      x2: "58",
      y1: "53.4349",
      y2: "49",
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37.4595,35.1892"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "28.6757,31.1351 25.973,25.7297 23.2703,23.7027 20.5676,21 15.8378,33.8378 14.4865,41.9459 11.7838,46"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "24.6216,25.0541 25.2973,31.1351 32.0541,31.1351 37.4595,35.1892"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "32.0541,31.1351 34.0811,35.1892 34.7568,39.2432 32.0541,43.2999 28,46"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.72,41.0284"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.5421,44.3247 c0.8599,0.7071,2.2359,1.1677,3.7918,1.1677c2.6069,0,4.7201-1.287,4.7201-2.8743c-0.0004-0.1049-0.0101-0.2096-0.029-0.3128 c1.323-0.4317,2.255-1.4588,2.255-2.6589c0-1.586-1.6295-2.8743-3.6396-2.8743c-0.1679,0.0014-0.3356,0.012-0.5025,0.0318 C61.2867,35.1493,59.4384,34,57.2891,34c-2.5086,0-4.6139,1.5621-5.1934,3.6701"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.9",
      d: "M52.898,42.9002 c0-1.586-1.6295-2.8743-3.6396-2.8743c-0.1679,0.0014-0.3356,0.012-0.5025,0.0318c-0.8512-1.6546-2.6995-2.8039-4.8488-2.8039 c-2.9556,0-5.3514,2.1685-5.3514,4.8432c0.0005,0.1768,0.0116,0.3535,0.0332,0.5288c-1.3211,0.4311-2.2509,1.4576-2.2509,2.6564 c0,1.5861,1.6295,2.8743,3.6396,2.8743c0.764,0.0066,1.5164-0.1926,2.1825-0.578c0.8599,0.7071,2.2359,1.1677,3.7918,1.1677 c2.6069,0,4.7201-1.2869,4.7201-2.8743c-0.0004-0.1049-0.0101-0.2096-0.029-0.3128C51.966,45.1274,52.898,44.1003,52.898,42.9002z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M6,53c3.091,0.5912,3.9469-3.523,8-4c3.6107-0.4249,4.0565,2.411,6.6667,3.5456C21.6964,52.9932,22.6139,52.9981,23,53 c3.6617,0.0176,4.9951-3.5954,8-4c1.3292-0.179,3.3015,0.2273,6,3"
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
      x1: "45",
      x2: "45",
      y1: "56.4349",
      y2: "52",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "58",
      x2: "58",
      y1: "53.4349",
      y2: "49",
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37.4595,35.1892"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "28.6757,31.1351 25.973,25.7297 23.2703,23.7027 20.5676,21 15.8378,33.8378 14.4865,41.9459 11.7838,46"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "24.6216,25.0541 25.2973,31.1351 32.0541,31.1351 37.4595,35.1892"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "32.0541,31.1351 34.0811,35.1892 34.7568,39.2432 32.0541,43.2999 28,46"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.72,41.0284"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.5421,44.3247 c0.8599,0.7071,2.2359,1.1677,3.7918,1.1677c2.6069,0,4.7201-1.287,4.7201-2.8743c-0.0004-0.1049-0.0101-0.2096-0.029-0.3128 c1.323-0.4317,2.255-1.4588,2.255-2.6589c0-1.586-1.6295-2.8743-3.6396-2.8743c-0.1679,0.0014-0.3356,0.012-0.5025,0.0318 C61.2867,35.1493,59.4384,34,57.2891,34c-2.5086,0-4.6139,1.5621-5.1934,3.6701"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.9",
      d: "M52.898,42.9002 c0-1.586-1.6295-2.8743-3.6396-2.8743c-0.1679,0.0014-0.3356,0.012-0.5025,0.0318c-0.8512-1.6546-2.6995-2.8039-4.8488-2.8039 c-2.9556,0-5.3514,2.1685-5.3514,4.8432c0.0005,0.1768,0.0116,0.3535,0.0332,0.5288c-1.3211,0.4311-2.2509,1.4576-2.2509,2.6564 c0,1.5861,1.6295,2.8743,3.6396,2.8743c0.764,0.0066,1.5164-0.1926,2.1825-0.578c0.8599,0.7071,2.2359,1.1677,3.7918,1.1677 c2.6069,0,4.7201-1.2869,4.7201-2.8743c-0.0004-0.1049-0.0101-0.2096-0.029-0.3128C51.966,45.1274,52.898,44.1003,52.898,42.9002z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M6,53c3.091,0.5912,3.9469-3.523,8-4c3.6107-0.4249,4.0565,2.411,6.6667,3.5456C21.6964,52.9932,22.6139,52.9981,23,53 c3.6617,0.0176,4.9951-3.5954,8-4c1.3292-0.179,3.3015,0.2273,6,3"
    })));
  }
};

export default NationalPark;