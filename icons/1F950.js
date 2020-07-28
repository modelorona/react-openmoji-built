import React from 'react';

const Croissant = ({
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
      stroke: "none",
      d: "M59.1074,36.1123l-8.0185,4.7686C51.5059,43.2207,53.541,45,56,45c2.7617,0,5-2.2393,5-5 C61,38.4199,60.252,37.0283,59.1074,36.1123z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      stroke: "none",
      d: "M42,17c1.1045,0,2,0.8955,2,2l-3,15c0,1.1045-0.8955,2-2,2h-6c-1.1045,0-2-0.8955-2-2l-3-15 c0-1.1045,0.8955-2,2-2H42z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      stroke: "none",
      d: "M53.4961,23.5762l-9.2051-3.9063c-0.1308-0.0556-0.2656-0.0947-0.4004-0.122L41,34 c0,0.8818-0.5742,1.6221-1.3672,1.8877c0.2012,0.2539,0.459,0.4668,0.7774,0.6025l3.6816,1.5625 c1.0176,0.4317,2.1914-0.0429,2.623-1.0595l7.8418-10.794C54.9883,25.1826,54.5137,24.0078,53.4961,23.5762z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      stroke: "none",
      d: "M60.4121,32.4785l-5.7558-5.5566c-0.125-0.1211-0.2637-0.2158-0.4092-0.2969l-7.5323,10.3682 c-0.1826,0.4316-0.5039,0.7578-0.8867,0.9668c-0.1308,0.6464,0.0567,1.3437,0.5664,1.8349l1.4395,1.3897 c0.7949,0.7675,2.0605,0.7451,2.8281-0.0498l9.7988-5.8282C61.2285,34.5117,61.2061,33.2461,60.4121,32.4785z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      stroke: "none",
      d: "M12.8926,36.1123l8.0185,4.7686C20.4941,43.2207,18.459,45,16,45c-2.7617,0-5-2.2393-5-5 C11,38.4199,11.748,37.0283,12.8926,36.1123z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      stroke: "none",
      d: "M18.5039,23.5762l9.2051-3.9063c0.1308-0.0556,0.2656-0.0947,0.4004-0.122L31,34 c0,0.8818,0.5742,1.6221,1.3672,1.8877c-0.2012,0.2539-0.459,0.4668-0.7774,0.6025l-3.6816,1.5625 c-1.0176,0.4317-2.1914-0.0429-2.623-1.0595l-7.8418-10.794C17.0117,25.1826,17.4863,24.0078,18.5039,23.5762z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      stroke: "none",
      d: "M11.5879,32.4785l5.7559-5.5566c0.125-0.1211,0.2636-0.2158,0.4091-0.2969l7.5323,10.3682 c0.1826,0.4316,0.5039,0.7578,0.8867,0.9668c0.1308,0.6464-0.0567,1.3437-0.5664,1.8349l-1.4395,1.3897 c-0.7949,0.7675-2.0605,0.7451-2.8281-0.0498l-9.7988-5.8282C10.7715,34.5117,10.7939,33.2461,11.5879,32.4785z"
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
      d: "M59.1074,36.1123l-8.0185,4.7686C51.5059,43.2207,53.541,45,56,45c2.7617,0,5-2.2393,5-5 C61,38.4199,60.252,37.0283,59.1074,36.1123z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42,17c1.1045,0,2,0.8955,2,2l-3,15c0,1.1045-0.8955,2-2,2h-6c-1.1045,0-2-0.8955-2-2l-3-15c0-1.1045,0.8955-2,2-2H42z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53.4961,23.5762l-9.2051-3.9063c-0.1308-0.0556-0.2656-0.0947-0.4004-0.122L41,34c0,0.8818-0.5742,1.6221-1.3672,1.8877 c0.2012,0.2539,0.459,0.4668,0.7774,0.6025l3.6816,1.5625c1.0176,0.4317,2.1914-0.0429,2.623-1.0595l7.8418-10.794 C54.9883,25.1826,54.5137,24.0078,53.4961,23.5762z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.4121,32.4785l-5.7558-5.5566c-0.125-0.1211-0.2637-0.2158-0.4092-0.2969l-7.5323,10.3682 c-0.1826,0.4316-0.5039,0.7578-0.8867,0.9668c-0.1308,0.6464,0.0567,1.3437,0.5664,1.8349l1.4395,1.3897 c0.7949,0.7675,2.0605,0.7451,2.8281-0.0498l9.7988-5.8282C61.2285,34.5117,61.2061,33.2461,60.4121,32.4785z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M12.8926,36.1123l8.0185,4.7686C20.4941,43.2207,18.459,45,16,45c-2.7617,0-5-2.2393-5-5 C11,38.4199,11.748,37.0283,12.8926,36.1123z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18.5039,23.5762l9.2051-3.9063c0.1308-0.0556,0.2656-0.0947,0.4004-0.122L31,34c0,0.8818,0.5742,1.6221,1.3672,1.8877 c-0.2012,0.2539-0.459,0.4668-0.7774,0.6025l-3.6816,1.5625c-1.0176,0.4317-2.1914-0.0429-2.623-1.0595l-7.8418-10.794 C17.0117,25.1826,17.4863,24.0078,18.5039,23.5762z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M11.5879,32.4785l5.7559-5.5566c0.125-0.1211,0.2636-0.2158,0.4091-0.2969l7.5323,10.3682 c0.1826,0.4316,0.5039,0.7578,0.8867,0.9668c0.1308,0.6464-0.0567,1.3437-0.5664,1.8349l-1.4395,1.3897 c-0.7949,0.7675-2.0605,0.7451-2.8281-0.0498l-9.7988-5.8282C10.7715,34.5117,10.7939,33.2461,11.5879,32.4785z"
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
      d: "M59.1074,36.1123l-8.0185,4.7686C51.5059,43.2207,53.541,45,56,45c2.7617,0,5-2.2393,5-5 C61,38.4199,60.252,37.0283,59.1074,36.1123z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42,17c1.1045,0,2,0.8955,2,2l-3,15c0,1.1045-0.8955,2-2,2h-6c-1.1045,0-2-0.8955-2-2l-3-15c0-1.1045,0.8955-2,2-2H42z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53.4961,23.5762l-9.2051-3.9063c-0.1308-0.0556-0.2656-0.0947-0.4004-0.122L41,34c0,0.8818-0.5742,1.6221-1.3672,1.8877 c0.2012,0.2539,0.459,0.4668,0.7774,0.6025l3.6816,1.5625c1.0176,0.4317,2.1914-0.0429,2.623-1.0595l7.8418-10.794 C54.9883,25.1826,54.5137,24.0078,53.4961,23.5762z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.4121,32.4785l-5.7558-5.5566c-0.125-0.1211-0.2637-0.2158-0.4092-0.2969l-7.5323,10.3682 c-0.1826,0.4316-0.5039,0.7578-0.8867,0.9668c-0.1308,0.6464,0.0567,1.3437,0.5664,1.8349l1.4395,1.3897 c0.7949,0.7675,2.0605,0.7451,2.8281-0.0498l9.7988-5.8282C61.2285,34.5117,61.2061,33.2461,60.4121,32.4785z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M12.8926,36.1123l8.0185,4.7686C20.4941,43.2207,18.459,45,16,45c-2.7617,0-5-2.2393-5-5 C11,38.4199,11.748,37.0283,12.8926,36.1123z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18.5039,23.5762l9.2051-3.9063c0.1308-0.0556,0.2656-0.0947,0.4004-0.122L31,34c0,0.8818,0.5742,1.6221,1.3672,1.8877 c-0.2012,0.2539-0.459,0.4668-0.7774,0.6025l-3.6816,1.5625c-1.0176,0.4317-2.1914-0.0429-2.623-1.0595l-7.8418-10.794 C17.0117,25.1826,17.4863,24.0078,18.5039,23.5762z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M11.5879,32.4785l5.7559-5.5566c0.125-0.1211,0.2636-0.2158,0.4091-0.2969l7.5323,10.3682 c0.1826,0.4316,0.5039,0.7578,0.8867,0.9668c0.1308,0.6464-0.0567,1.3437-0.5664,1.8349l-1.4395,1.3897 c-0.7949,0.7675-2.0605,0.7451-2.8281-0.0498l-9.7988-5.8282C10.7715,34.5117,10.7939,33.2461,11.5879,32.4785z"
    })));
  }
};

export default Croissant;