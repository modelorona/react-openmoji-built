import React from 'react';

const Goblin = ({
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
      fill: "#EA5A47",
      stroke: "#EA5A47",
      strokeMiterlimit: "10",
      points: "15.3127,11 56.3127,11 56.3127,45 55.3127,50 52.3127,54 49.3127,58 46.3127,60 42.3127,62 36.3127,62 29.3127,61 24.3127,59 21.3127,56 18.3127,52 16.3127,49 15.3127,43"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "#FFFFFF",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M23.2977,23.8647l0.4543-0.5574 c1.2341-1.514,3.4619-1.7409,4.9759-0.5068l4.5938,3.7446c1.514,1.2341,1.7409,3.4619,0.5068,4.9759l-0.4543,0.5574 c-1.2341,1.514-3.4619,1.7409-4.9759,0.5068l-4.5938-3.7446C22.2904,27.6065,22.0635,25.3787,23.2977,23.8647z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "#FFFFFF",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M39.7519,32.0784l-0.4543-0.5574 c-1.2341-1.514-1.0072-3.7418,0.5068-4.9759l4.5938-3.7446c1.514-1.2341,3.7418-1.0072,4.9759,0.5068l0.4543,0.5574 c1.2341,1.514,1.0072,3.7418-0.5068,4.9759l-4.5938,3.7446C43.2139,33.8193,40.9861,33.5924,39.7519,32.0784z"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
      fill: "#D22F27",
      points: "36.3127,41 46.3127,35 55.3127,35 57.8717,35 60.3127,35 63.3127,35 64.3127,36 65.3127,37 65.3127,38 65.3127,40 63.3127,41 59.3127,41 54.3127,41 51.3127,41 48.3127,41"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D22F27",
      d: "M38.8666,35h8.8922c1.4105,0,2.5539,1.1434,2.5539,2.5539v0.8922c0,1.4105-1.1434,2.5539-2.5539,2.5539 h-8.8922c-1.4105,0-2.5539-1.1434-2.5539-2.5539v-0.8922C36.3127,36.1434,37.4561,35,38.8666,35z"
    }))), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "15.4997,42 15.4997,11 56.4997,11 56.4997,32.201"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M56.4178,43.8508 C55.3951,55.1267,45.4251,63.4387,34.1491,62.416C23.5881,61.4581,15.5006,52.6043,15.5002,42"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.8127,50.5414 c-5.0061-2.0554-10.6204-2.0554-15.6265,0"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M33.63,28.9252c0,1.6569-1.3431,3-3,3c-1.6569,0-3-1.3431-3-3s1.3431-3,3-3l0,0 C32.2865,25.9259,33.6293,27.2686,33.63,28.9252"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M45.63,28.9252c0,1.6569-1.3431,3-3,3s-3-1.3431-3-3s1.3431-3,3-3l0,0C44.2866,25.9258,45.6294,27.2686,45.63,28.9252"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "25.3127",
      x2: "32.3127",
      y1: "17",
      y2: "23",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "47.3127",
      x2: "40.3127",
      y1: "17",
      y2: "23",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "55.3715",
      x2: "39.2539",
      y1: "35",
      y2: "35",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "60.3127",
      x2: "55.4303",
      y1: "35",
      y2: "35",
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
      d: "M56.5002,41h4.8125 c0,0,4,0,4-3c0.0345-1.6224-1.2527-2.9655-2.8751-3c-0.0416-0.0009-0.0833-0.0009-0.1249,0h-2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.3127",
      x2: "56.5002",
      y1: "41",
      y2: "41",
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
      d: "M36.3127,45c0,0,4-3,8,0 c0.7638,0.6155,1.6585,1.0478,2.6154,1.2638"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M35.9281,45c0,0-4-3-8,0 c-0.7638,0.6155-1.6585,1.0478-2.6154,1.2638"
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
      strokeWidth: "2",
      points: "15.4997,42 15.4997,11 56.4997,11 56.4997,32.201"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M56.4178,43.8508 C55.3951,55.1267,45.4251,63.4387,34.1491,62.416C23.5881,61.4581,15.5006,52.6043,15.5002,42"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.8127,50.5414 c-5.0061-2.0554-10.6204-2.0554-15.6265,0"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M33.63,28.9252c0,1.6569-1.3431,3-3,3c-1.6569,0-3-1.3431-3-3s1.3431-3,3-3l0,0 C32.2865,25.9259,33.6293,27.2686,33.63,28.9252"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M45.63,28.9252c0,1.6569-1.3431,3-3,3s-3-1.3431-3-3s1.3431-3,3-3l0,0C44.2866,25.9258,45.6294,27.2686,45.63,28.9252"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "25.3127",
      x2: "32.3127",
      y1: "17",
      y2: "23",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "47.3127",
      x2: "40.3127",
      y1: "17",
      y2: "23",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "55.3715",
      x2: "39.2539",
      y1: "35",
      y2: "35",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "60.3127",
      x2: "55.4303",
      y1: "35",
      y2: "35",
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
      d: "M56.5002,41h4.8125 c0,0,4,0,4-3c0.0345-1.6224-1.2527-2.9655-2.8751-3c-0.0416-0.0009-0.0833-0.0009-0.1249,0h-2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.3127",
      x2: "56.5002",
      y1: "41",
      y2: "41",
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
      d: "M36.3127,45c0,0,4-3,8,0 c0.7638,0.6155,1.6585,1.0478,2.6154,1.2638"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M35.9281,45c0,0-4-3-8,0 c-0.7638,0.6155-1.6585,1.0478-2.6154,1.2638"
    })));
  }
};

export default Goblin;