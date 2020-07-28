import React from 'react';

const Camera = ({
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
      fill: "#3F3F3F",
      stroke: "none",
      d: "M33.8525,28.0066c-5.2851,0-9.5842,4.2991-9.5842,9.5842s4.2991,9.5842,9.5842,9.5842 s9.5842-4.2991,9.5842-9.5842S39.1376,28.0066,33.8525,28.0066z M33.8525,42.5907c-2.7572,0-5-2.2428-5-5c0-2.7572,2.2428-5,5-5 s5,2.2428,5,5C38.8525,40.3479,36.6097,42.5907,33.8525,42.5907z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "33.8525",
      cy: "37.5908",
      r: "4.9999",
      fill: "#D0CFCE",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      d: "M57.9309,22.9178H15.2697c-1.1816,0-3.1441,1.9245-3.1441,3.0622l0.4567,7.2175h8.0465l4.1493,0.1888 c-0.0121,0.0215,3.277-5.7956,9.0743-5.7956c4.1504,0,8.7433,5.0107,8.7387,5.0002l3.3923,0.2991l14.3036,0.2302L60.0744,25.98 C60.0744,24.8423,59.1125,22.9178,57.9309,22.9178z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#F1B31C",
      stroke: "none",
      d: "M28.8182,19.1835c-0.0174,0.2605-1.3503-2.1627-1.3503-2.1627h-9.0351c0,0-1.2818,2.5039-1.3056,2.4387 v3.3291l11.691-0.1182V19.1835z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      stroke: "none",
      d: "M56.9727,52.518c0.1326-0.0026,3.1017-1.7904,3.1017-1.9245l0.2126-17.4733l-10.7776-0.2263l-2.383-0.6966 h-3.6908c0.0046,0.0105,0.0097,0.024,0.0144,0.0346c0.0001,0.0001,0.0001,0.0002,0.0001,0.0003 c0.2194,0.3912-0.6648,0.7965-0.4939,1.2153c0.0112,0.0275,0.2962,7.996,0.1552,8.1433c-0.4261,0.4452-2.2637,3.2105-3.0595,3.8446 c-2.3873,1.9024-4.5862,2.0301-4.6733,2.0385c-0.3453,0.0332-1.9984,0.113-2.1133,0.0988 c-0.1099-0.0138-2.3397-0.3828-4.2028-1.3936c-1.7796-0.9656-3.1984-2.5751-3.2099-2.5883c-0.5522-0.6344-0.9877-1.9761-1.0001-2 c-0.119-0.2288-1.0291-2.1258-0.8403-4.7821c0.0819-1.1522,1.348-4.4997,1.348-4.4997l-4.7313-0.1117 c0.1805,0-8.9089,0.3934-8.9089,0.3934l0.1028,16.6105c0,0,0.5008,1.4067,1.2237,2.1654c0.8471,0.8893,1.9366,1.1514,1.9444,1.1514 C14.9909,52.518,56.9584,52.5182,56.9727,52.518z"
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
      d: "M15.2697,22.9178c-1.7365,0-3.1441,1.371-3.1441,3.0622v23.2213c0,1.6912,1.4076,3.0623,3.1441,3.0623h41.6606 c1.7365,0,3.1441-1.3711,3.1441-3.0623V25.98c0-1.6912-1.4076-3.0622-3.1441-3.0622H15.2697z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "47.1521",
      x2: "59.6177",
      y1: "33.1975",
      y2: "33.1975",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12.5823",
      x2: "20.6288",
      y1: "33.1975",
      y2: "33.1975",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "33.8524",
      cy: "37.5907",
      r: "10",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "33.8524",
      cy: "37.5907",
      r: "5",
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
      d: "M27.831,19.1198v-1.0782c0-0.5638-0.4692-1.0208-1.048-1.0208h-7.6766c-0.5787,0-1.048,0.457-1.048,1.0208v1.0782"
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
      d: "M15.2697,22.9178c-1.7365,0-3.1441,1.371-3.1441,3.0622v23.2213c0,1.6912,1.4076,3.0623,3.1441,3.0623h41.6606 c1.7365,0,3.1441-1.3711,3.1441-3.0623V25.98c0-1.6912-1.4076-3.0622-3.1441-3.0622H15.2697z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "47.1521",
      x2: "59.6177",
      y1: "33.1975",
      y2: "33.1975",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12.5823",
      x2: "20.6288",
      y1: "33.1975",
      y2: "33.1975",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "33.8524",
      cy: "37.5907",
      r: "10",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "33.8524",
      cy: "37.5907",
      r: "5",
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
      d: "M27.831,19.1198v-1.0782c0-0.5638-0.4692-1.0208-1.048-1.0208h-7.6766c-0.5787,0-1.048,0.457-1.048,1.0208v1.0782"
    })));
  }
};

export default Camera;