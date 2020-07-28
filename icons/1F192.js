import React from 'react';

const COOLButton = ({
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
      fill: "#d0cfce",
      stroke: "none",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.0349,60H12.9651 C12.4343,60,12,59.5657,12,59.0349V12.9651C12,12.4343,12.4343,12,12.9651,12h46.0698C59.5657,12,60,12.4343,60,12.9651v46.0698 C60,59.5657,59.5657,60,59.0349,60z"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.0349,60H12.9651 C12.4343,60,12,59.5657,12,59.0349V12.9651C12,12.4343,12.4343,12,12.9651,12h46.0698C59.5657,12,60,12.4343,60,12.9651v46.0698 C60,59.5657,59.5657,60,59.0349,60z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "47.9463,32.0267 47.9463,40.0267 51.3748,40.0267"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.9552,40.0267L31.9552,40.0267c-1.5779,0-2.8571-1.2792-2.8571-2.8571v-2.2857c0-1.5779,1.2792-2.8571,2.8571-2.8571l0,0 c1.5779,0,2.8571,1.2792,2.8571,2.8571v2.2857C34.8123,38.7475,33.5331,40.0267,31.9552,40.0267z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.0847,40.0267L41.0847,40.0267c-1.5779,0-2.8571-1.2792-2.8571-2.8571v-2.2857c0-1.5779,1.2792-2.8571,2.8571-2.8571l0,0 c1.5779,0,2.8571,1.2792,2.8571,2.8571v2.2857C43.9419,38.7475,42.6627,40.0267,41.0847,40.0267z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.3775,39.3077c-0.5044,0.4473-1.168,0.719-1.8952,0.719l0,0c-1.5779,0-2.8571-1.2792-2.8571-2.8571v-2.2857v2.2857v-2.2857 c0-1.5779,1.2792-2.8571,2.8571-2.8571l0,0c0.7272,0,1.3909,0.2717,1.8952,0.7191"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.0349,60H12.9651 C12.4343,60,12,59.5657,12,59.0349V12.9651C12,12.4343,12.4343,12,12.9651,12h46.0698C59.5657,12,60,12.4343,60,12.9651v46.0698 C60,59.5657,59.5657,60,59.0349,60z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "47.9463,32.0267 47.9463,40.0267 51.3748,40.0267"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.9552,40.0267L31.9552,40.0267c-1.5779,0-2.8571-1.2792-2.8571-2.8571v-2.2857c0-1.5779,1.2792-2.8571,2.8571-2.8571l0,0 c1.5779,0,2.8571,1.2792,2.8571,2.8571v2.2857C34.8123,38.7475,33.5331,40.0267,31.9552,40.0267z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.0847,40.0267L41.0847,40.0267c-1.5779,0-2.8571-1.2792-2.8571-2.8571v-2.2857c0-1.5779,1.2792-2.8571,2.8571-2.8571l0,0 c1.5779,0,2.8571,1.2792,2.8571,2.8571v2.2857C43.9419,38.7475,42.6627,40.0267,41.0847,40.0267z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.3775,39.3077c-0.5044,0.4473-1.168,0.719-1.8952,0.719l0,0c-1.5779,0-2.8571-1.2792-2.8571-2.8571v-2.2857v2.2857v-2.2857 c0-1.5779,1.2792-2.8571,2.8571-2.8571l0,0c0.7272,0,1.3909,0.2717,1.8952,0.7191"
    })));
  }
};

export default COOLButton;