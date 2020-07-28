import React from 'react';

const Man = ({
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
      fill: "#92D3F5",
      d: "M17,61v-4c0-5,5-9,10-9c6,5,12,5,18,0c5,0,10,4,10,9v4"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#F1B31C",
      d: "M26,38c-3,0-4-7-4-14c0-6,5-12,14-12s14,6,14,12c0,7-1,14-4,14"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M24.9,31c-0.1,8,4.1,14,11,14C43,45,47,39,47,31c0-5-3-10-3-10c-8,0-10,3-16,1C28,22,25,26,24.9,31z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M41.9,30c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S41.9,28.9,41.9,30"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M33.9,30c0,1.1-0.9,2-2,2c-1.1,0-2-0.9-2-2s0.9-2,2-2C33,28,33.9,28.9,33.9,30"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32.9,38.2 c2.1,0.8,4.1,0.8,6,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26,38c-3,0-4-7-4-14 c0-6,5-12,14-12s14,6,14,12c0,7-1,14-4,14"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M17,60v-3c0-5,5-9,10-9 c6,5,12,5,18,0c5,0,10,4,10,9v3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M41.9,30c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S41.9,28.9,41.9,30"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M33.9,30c0,1.1-0.9,2-2,2c-1.1,0-2-0.9-2-2s0.9-2,2-2C33,28,33.9,28.9,33.9,30"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M24.9,31c-0.1,8,4.9,14,11,14c6,0,11.1-6,11.1-14 c0-5-3-11-3-11c-8,0-10,3-16,1C28,21,25,26,24.9,31z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32.9,38.2 c2.1,0.8,4.1,0.8,6,0"
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
      d: "M41.9,30c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S41.9,28.9,41.9,30"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M33.9,30c0,1.1-0.9,2-2,2c-1.1,0-2-0.9-2-2s0.9-2,2-2C33,28,33.9,28.9,33.9,30"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32.9,38.2 c2.1,0.8,4.1,0.8,6,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26,38c-3,0-4-7-4-14 c0-6,5-12,14-12s14,6,14,12c0,7-1,14-4,14"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M17,60v-3c0-5,5-9,10-9 c6,5,12,5,18,0c5,0,10,4,10,9v3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M41.9,30c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S41.9,28.9,41.9,30"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M33.9,30c0,1.1-0.9,2-2,2c-1.1,0-2-0.9-2-2s0.9-2,2-2C33,28,33.9,28.9,33.9,30"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M24.9,31c-0.1,8,4.9,14,11,14c6,0,11.1-6,11.1-14 c0-5-3-11-3-11c-8,0-10,3-16,1C28,21,25,26,24.9,31z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32.9,38.2 c2.1,0.8,4.1,0.8,6,0"
    })));
  }
};

export default Man;