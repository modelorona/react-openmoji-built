import React from 'react';

const DragonFace = ({
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
      fill: "#5C9E31",
      stroke: "#5C9E31",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8",
      d: "M51,33c8-4,8-9,8-9l-7,3c4-5,2-11,2-11c-2,4-5,5-5,5c-4-6-10-6-10-6l-3-4l-3,4c-6,0-10,6-10,6c-4-1-5-5-5-5c-1,9,3,11,3,11l-7-2 c2,4,7,7,7,7c-3,2-6,1-6,1c3,5,7,5,7,5h28c7,0,8-5,8-5C53,34,51,33,51,33z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B1CC33",
      stroke: "#B1CC33",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26,38c0,0,0-1,4.0537-0.9286c0,0,5.9468-3.9646,11.8937,0c0,0,4.0527,0.9463,4.0527,2.9286c0,0,4,3,1.8942,5.9916 c0,0,0,3.9646-5.9468,7.9291c0,0-3.9646,1.9823-11.8937,0c0,0-7.2664-6.07-6.0537-10.9207C25,39,26,38,26,38z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      stroke: "#EA5A47",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34,49c0,0,0,10-2,11c0,0,4-1,4-5c0,0,1,4,4,5c0,0-3-7-2-11H34z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      d: "M31,46v4c-3-3-3-7-3-7s8,7,16,0c0,0,1,5-3,7v-4"
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
      d: "M31,46v4c-3-3-3-7-3-7s8,7,16,0c0,0,1,5-3,7v-4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27,23c0,0,7,2,9,8c0,0,2-7,10-8"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "29",
      cy: "30",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "43",
      cy: "30",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "34",
      cy: "39",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "38",
      cy: "39",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34,49c0,0,0,10-2,11c0,0,4-1,4-5c0,0,1,4,4,5c0,0-3-7-2-11"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22,38c0,0-4,0-7-5c0,0,3,1,6-1c0,0-5-3-7-7l7,2c0,0-4-2-3-11c0,0,1,4,5,5c0,0,4-6,10-6l3-4l3,4c0,0,6,0,10,6c0,0,3-1,5-5 c0,0,2,6-2,11l7-3c0,0,0,5-8,9c0,0,2,1,7,0c0,0-1,5-8,5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25,39c0,0-1-3,5-2c0,0,6-5,12,0c0,0,5-1,5,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29,40c0,0-6-1-9,3s-6,4-8,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43,40c0,0,6-1,9,3s6,4,8,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.3149,40.5713C23.3149,40.5713,22,51,30,54"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.1888,40.7828C49.1888,40.7828,49,51,42,54"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31,46v4c-3-3-3-7-3-7s8,7,16,0c0,0,1,5-3,7v-4"
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
      d: "M31,46v4c-3-3-3-7-3-7s8,7,16,0c0,0,1,5-3,7v-4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27,23c0,0,7,2,9,8c0,0,2-7,10-8"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "29",
      cy: "30",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "43",
      cy: "30",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "34",
      cy: "39",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "38",
      cy: "39",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34,49c0,0,0,10-2,11c0,0,4-1,4-5c0,0,1,4,4,5c0,0-3-7-2-11"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22,38c0,0-4,0-7-5c0,0,3,1,6-1c0,0-5-3-7-7l7,2c0,0-4-2-3-11c0,0,1,4,5,5c0,0,4-6,10-6l3-4l3,4c0,0,6,0,10,6c0,0,3-1,5-5 c0,0,2,6-2,11l7-3c0,0,0,5-8,9c0,0,2,1,7,0c0,0-1,5-8,5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25,39c0,0-1-3,5-2c0,0,6-5,12,0c0,0,5-1,5,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29,40c0,0-6-1-9,3s-6,4-8,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43,40c0,0,6-1,9,3s6,4,8,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.3149,40.5713C23.3149,40.5713,22,51,30,54"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.1888,40.7828C49.1888,40.7828,49,51,42,54"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31,46v4c-3-3-3-7-3-7s8,7,16,0c0,0,1,5-3,7v-4"
    })));
  }
};

export default DragonFace;