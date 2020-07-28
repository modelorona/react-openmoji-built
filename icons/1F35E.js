import React from 'react';

const Bread = ({
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
      fill: "#f1b31c",
      stroke: "none",
      d: "M33,17h29c2.7617,0,5,2.2393,5,5c0,1.6357-0.7969,3.0752-2.0117,3.9873 c-0.1074,0.0625-0.207,0.1348-0.2988,0.2168C64.2695,26.5703,64,27.1025,64,27.7031V53c0,1.1045-0.8955,2-2,2H33 c1.1045,0,2-0.8955,2-2V27.7031c0-0.6006,0.2695-1.1328,0.6895-1.499c0.0918-0.082,0.1914-0.1543,0.2988-0.2168 C37.2031,25.0752,38,23.6357,38,22C38,19.2393,35.7617,17,33,17z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      stroke: "none",
      d: "M33,17c2.7617,0,5,2.2393,5,5c0,1.6357-0.7969,3.0752-2.0117,3.9873 c-0.1074,0.0625-0.207,0.1348-0.2988,0.2168C35.2695,26.5703,35,27.1025,35,27.7031V53c0,1.1045-0.8955,2-2,2H10 c-1.1045,0-2-0.8955-2-2V27.7031c0-0.6006-0.2695-1.1328-0.6895-1.499c-0.0917-0.082-0.1914-0.1543-0.2988-0.2168 C5.7969,25.0752,5,23.6357,5,22c0-2.7607,2.2383-5,5-5H33z"
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
      d: "M33,17"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33,17c2.7617,0,5,2.2393,5,5c0,1.6357-0.7969,3.0752-2.0117,3.9873c-0.1074,0.0625-0.207,0.1348-0.2988,0.2168 C35.2695,26.5703,35,27.1025,35,27.7031V53c0,1.1045-0.8955,2-2,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M10,17h52c2.7617,0,5,2.2393,5,5c0,1.6357-0.7969,3.0752-2.0117,3.9873c-0.1074,0.0625-0.207,0.1348-0.2988,0.2168 C64.2695,26.5703,64,27.1025,64,27.7031V53c0,1.1045-0.8955,2-2,2H10c-1.1045,0-2-0.8955-2-2V27.7031 c0-0.6006-0.2695-1.1328-0.6895-1.499c-0.0917-0.082-0.1914-0.1543-0.2988-0.2168C5.7969,25.0752,5,23.6357,5,22 C5,19.2393,7.2383,17,10,17z"
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
      d: "M33,17"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33,17c2.7617,0,5,2.2393,5,5c0,1.6357-0.7969,3.0752-2.0117,3.9873c-0.1074,0.0625-0.207,0.1348-0.2988,0.2168 C35.2695,26.5703,35,27.1025,35,27.7031V53c0,1.1045-0.8955,2-2,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M10,17h52c2.7617,0,5,2.2393,5,5c0,1.6357-0.7969,3.0752-2.0117,3.9873c-0.1074,0.0625-0.207,0.1348-0.2988,0.2168 C64.2695,26.5703,64,27.1025,64,27.7031V53c0,1.1045-0.8955,2-2,2H10c-1.1045,0-2-0.8955-2-2V27.7031 c0-0.6006-0.2695-1.1328-0.6895-1.499c-0.0917-0.082-0.1914-0.1543-0.2988-0.2168C5.7969,25.0752,5,23.6357,5,22 C5,19.2393,7.2383,17,10,17z"
    })));
  }
};

export default Bread;