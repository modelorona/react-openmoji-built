import React from 'react';

const Kite = ({
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
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "#ffa7c0",
      points: "15.036 4.719 5.696 26.061 32.289 45.27 36.889 12.789 15.036 4.719"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#e67a94",
      points: "32.289 45.27 36.889 12.789 15.036 4.719"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "32.289 45.27 36.889 12.789 15.036 4.719 5.696 26.061 32.289 45.27"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "15.3978",
      x2: "31.7804",
      y1: "5.5225",
      y2: "44.1129",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6.4419",
      x2: "36.3676",
      y1: "25.7642",
      y2: "13.3134",
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
      d: "M31.78,44.523s4.0231,9.2382,16.9864,6.5561C57.6253,49.2464,60.8478,55.6239,62,59.8466a16.0263,16.0263,0,0,1,.4933,4.83"
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
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "32.289 45.27 36.889 12.789 15.036 4.719 5.696 26.061 32.289 45.27"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "15.3978",
      x2: "31.7804",
      y1: "5.5225",
      y2: "44.1129",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6.4419",
      x2: "36.3676",
      y1: "25.7642",
      y2: "13.3134",
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
      d: "M31.78,44.523s4.0231,9.2382,16.9864,6.5561C57.6253,49.2464,60.8478,55.6239,62,59.8466a16.0263,16.0263,0,0,1,.4933,4.83"
    })));
  }
};

export default Kite;