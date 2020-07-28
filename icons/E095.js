import React from 'react';

const MobileInfo = ({
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "14.1816",
      y: "7.9787",
      rx: "3.68",
      ry: "3.68",
      width: "34.0431",
      height: "55.9423",
      fill: "#9b9b9a"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3f3f3f",
      d: "M44.3929,54.9961H18.0135a.9747.9747,0,0,1-.9727-.9727V15.117a.9748.9748,0,0,1,.9727-.9727H44.3929a.9748.9748,0,0,1,.9727.9727V54.0234A.919.919,0,0,1,44.3929,54.9961Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M46.2852,7.6752a13.0323,13.0323,0,0,0-9.2634,22.2024l-2.6729,8.5816,7.1733-5.6237a13.0317,13.0317,0,1,0,4.763-25.16Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M45.3656,37.4681V54.0234a.919.919,0,0,1-.9727.9727H18.0135a.9747.9747,0,0,1-.9727-.9727V15.117a.9748.9748,0,0,1,.9727-.9727H31.572"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "31.2032",
      cy: "59.2523",
      r: "1.9453",
      fill: "#000000"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "33.3345",
      x2: "26.3399",
      y1: "11.2263",
      y2: "11.2263",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M48.2248,36.861v23.38a3.6908,3.6908,0,0,1-3.68,3.68H17.8616a3.6908,3.6908,0,0,1-3.68-3.68V11.6587a3.6908,3.6908,0,0,1,3.68-3.68H36.9708"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2.5",
      points: "46.892 26.339 46.892 20.594 43.989 20.594"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "49.6516",
      x2: "43.9228",
      y1: "26.3389",
      y2: "26.3389",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "46.5887",
      cy: "15.602",
      r: "1.9093"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M46.2851,7.6752A13.0261,13.0261,0,0,0,37.2562,30.1l-2.6037,8.36,7.0766-5.5479a13.03,13.03,0,1,0,4.556-25.2361Z"
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
      d: "M45.3656,37.4681V54.0234a.919.919,0,0,1-.9727.9727H18.0135a.9747.9747,0,0,1-.9727-.9727V15.117a.9748.9748,0,0,1,.9727-.9727H31.572"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "31.2032",
      cy: "59.2523",
      r: "1.9453",
      fill: "#000000"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "33.3345",
      x2: "26.3399",
      y1: "11.2263",
      y2: "11.2263",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M48.2248,36.861v23.38a3.6908,3.6908,0,0,1-3.68,3.68H17.8616a3.6908,3.6908,0,0,1-3.68-3.68V11.6587a3.6908,3.6908,0,0,1,3.68-3.68H36.9708"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2.5",
      points: "46.892 26.339 46.892 20.594 43.989 20.594"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "49.6516",
      x2: "43.9228",
      y1: "26.3389",
      y2: "26.3389",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2.5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "46.5887",
      cy: "15.602",
      r: "1.9093"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M46.2851,7.6752A13.0261,13.0261,0,0,0,37.2562,30.1l-2.6037,8.36,7.0766-5.5479a13.03,13.03,0,1,0,4.556-25.2361Z"
    })));
  }
};

export default MobileInfo;