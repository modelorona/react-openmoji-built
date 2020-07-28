import React from 'react';

const Sailboat = ({
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
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "#D0CFCE",
      points: "39,5.762 39,37 57.6865,37"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#A57939",
      d: "M54,50c3-3,5-8,5-8H16c0,0-1,5,3,8H54z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#D0CFCE",
      points: "35.2622,13 35.2622,37 23.7378,37"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      points: "69,48.2353 68,68 4,68 4,48.2353"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      d: "M68,47v21H4V47h1c3,0,9,3,15,3s10-3,16-3s11,3,16,3s7-3,15-3H68z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0358",
      points: "39,5.762 39,37 57.6865,37"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M54.1187,49.81C57.1187,46.81,59,42,59,42H16c0,0-1.2082,4.8375,2.7918,7.8375"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "35.2622,13 35.2622,37 23.7378,37"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "39",
      x2: "39",
      y1: "6",
      y2: "42",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0358"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M5,47c3,0,9,3,15,3s10-3,16-3s11,3,16,3s7-3,15-3"
    })));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0358",
      points: "39,5.762 39,37 57.6865,37"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M54.1187,49.81C57.1187,46.81,59,42,59,42H16c0,0-1.2082,4.8375,2.7918,7.8375"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "35.2622,13 35.2622,37 23.7378,37"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "39",
      x2: "39",
      y1: "6",
      y2: "42",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0358"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M5,47c3,0,9,3,15,3s10-3,16-3s11,3,16,3s7-3,15-3"
    })));
  }
};

export default Sailboat;