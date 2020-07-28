import React from 'react';

const ShushingFace = ({
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "35.8",
      r: "23",
      fill: "none",
      stroke: "#FCEA2B",
      strokeMiterlimit: "10",
      strokeWidth: "1.8"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M46.8,56.3c11.3-6,15.7-20.2,9.7-31.5s-20-15.5-31.3-9.5s-15.5,20-9.5,31.3c2.3,4.2,5.8,7.7,10.1,9.8 c0,1.6,0.7,3.2,1.8,4.4c1.4,1.6,8.5,3.3,12.2-0.2C40.9,59.6,47.1,56.4,46.8,56.3z"
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
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M51.5,52.8c9.4-8.6,10.1-23.1,1.5-32.5s-23.1-10.1-32.5-1.5S10.4,41.9,19,51.3c0.9,0.9,1.8,1.8,2.8,2.6"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M21.4,23.6c0.7-1.4,1.9-2.4,3.3-2.9c1.3-0.7,2.9-0.8,4.3-0.4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M50.7,23.6c-1.5-2.7-4.6-4-7.6-3.3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34,41.5c-1.4-0.2-2.8-0.7-4-1.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M42.1,40c-1.3,0.7-2.7,1.2-4.2,1.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M37.8,38.6c0-1-0.9-1.9-1.9-1.9S34,37.6,34,38.6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "34",
      x2: "34",
      y1: "47.4",
      y2: "38.6",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "37.8",
      x2: "37.8",
      y1: "38.6",
      y2: "47.5",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37.2,47.4c1.7,0,3,1.3,3,3l0,0c0,0.6,0,1.8,0,1.8c0.3,0,3,0,4.1,0c1.3-0.1,2.5,0.7,2.8,2s-0.3,2.6-1.4,3.2 c-0.5,0.3-1.1,0.6-1.6,0.9c-2,1.1-4.1,2.2-6.2,3.3c-1.9,1-4,1.4-6.1,1c-3.6-0.6-6-4-5.4-7.7c0.2-1.5,0.5-3,1-4.4 c0.6-1.8,2.3-3.1,4.2-3.1H37.2z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30,27.8c0,1.7-1.3,3-3,3s-3-1.3-3-3s1.3-3,3-3l0,0c1.6,0,3,1.3,3,2.9C30,27.7,30,27.8,30,27.8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M48,27.8c0,1.7-1.3,3-3,3s-3-1.3-3-3s1.3-3,3-3l0,0c1.6,0,3,1.3,3,2.9C48,27.7,48,27.8,48,27.8"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36.2,51.8c-1.3,0-2,0.7-2.5,1.5c-0.6,0.9,0,2.2,1,2.2H39c0.7,0,1.2-0.6,1.2-1.4v-1.8v-0.1"
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
      d: "M51.5,52.8c9.4-8.6,10.1-23.1,1.5-32.5s-23.1-10.1-32.5-1.5S10.4,41.9,19,51.3c0.9,0.9,1.8,1.8,2.8,2.6"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M21.4,23.6c0.7-1.4,1.9-2.4,3.3-2.9c1.3-0.7,2.9-0.8,4.3-0.4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M50.7,23.6c-1.5-2.7-4.6-4-7.6-3.3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34,41.5c-1.4-0.2-2.8-0.7-4-1.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M42.1,40c-1.3,0.7-2.7,1.2-4.2,1.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M37.8,38.6c0-1-0.9-1.9-1.9-1.9S34,37.6,34,38.6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "34",
      x2: "34",
      y1: "47.4",
      y2: "38.6",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "37.8",
      x2: "37.8",
      y1: "38.6",
      y2: "47.5",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37.2,47.4c1.7,0,3,1.3,3,3l0,0c0,0.6,0,1.8,0,1.8c0.3,0,3,0,4.1,0c1.3-0.1,2.5,0.7,2.8,2s-0.3,2.6-1.4,3.2 c-0.5,0.3-1.1,0.6-1.6,0.9c-2,1.1-4.1,2.2-6.2,3.3c-1.9,1-4,1.4-6.1,1c-3.6-0.6-6-4-5.4-7.7c0.2-1.5,0.5-3,1-4.4 c0.6-1.8,2.3-3.1,4.2-3.1H37.2z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30,27.8c0,1.7-1.3,3-3,3s-3-1.3-3-3s1.3-3,3-3l0,0c1.6,0,3,1.3,3,2.9C30,27.7,30,27.8,30,27.8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M48,27.8c0,1.7-1.3,3-3,3s-3-1.3-3-3s1.3-3,3-3l0,0c1.6,0,3,1.3,3,2.9C48,27.7,48,27.8,48,27.8"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36.2,51.8c-1.3,0-2,0.7-2.5,1.5c-0.6,0.9,0,2.2,1,2.2H39c0.7,0,1.2-0.6,1.2-1.4v-1.8v-0.1"
    })));
  }
};

export default ShushingFace;