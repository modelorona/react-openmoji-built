import React from 'react';

const Egg = ({
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
      fill: "#FFFFFF",
      stroke: "none",
      d: "M56.2373,30.0635C56,29.5479,52.4746,21.375,49.7412,16.9951C46,11,42.1475,8,36,8 c-6.1475,0-10,3-13.7402,8.9951C19.5254,21.376,16,29.5479,15.7627,30.0635C14.001,33.3164,13,37.041,13,41 c0,12.7021,10.2969,23,23,23s23-10.2979,23-23C59,37.041,57.999,33.3164,56.2373,30.0635z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M56.2373,30.0635C56,29.5479,49.9746,17.4131,49.7412,16.9951C47.667,13.833,46.25,11.9995,43.0938,9.793 c1.7861,6.0273,3.9199,13.249,4.0605,13.748c1.7578,5.4795,2.7617,11.7276,2.7617,18.3584c0,7.0791-1.1367,13.7051-3.1142,19.4072 C54.0586,57.4385,59,49.7969,59,41C59,37.041,57.999,33.3164,56.2373,30.0635z"
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
      d: "M56.2373,30.0635C56,29.5479,52.4746,21.375,49.7412,16.9951C46,11,42.1475,8,36,8c-6.1475,0-10,3-13.7402,8.9951 C19.5254,21.376,16,29.5479,15.7627,30.0635C14.001,33.3164,13,37.041,13,41c0,12.7021,10.2969,23,23,23s23-10.2979,23-23 C59,37.041,57.999,33.3164,56.2373,30.0635z"
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
      d: "M56.2373,30.0635C56,29.5479,52.4746,21.375,49.7412,16.9951C46,11,42.1475,8,36,8c-6.1475,0-10,3-13.7402,8.9951 C19.5254,21.376,16,29.5479,15.7627,30.0635C14.001,33.3164,13,37.041,13,41c0,12.7021,10.2969,23,23,23s23-10.2979,23-23 C59,37.041,57.999,33.3164,56.2373,30.0635z"
    })));
  }
};

export default Egg;