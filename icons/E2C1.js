import React from 'react';

const FloatingIce = ({
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
      x: "4",
      y: "4",
      width: "64",
      height: "64",
      fill: "#92d3f5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61b2e4",
      d: "M9.5508,36.7741l-.5426.8373a6.0547,6.0547,0,0,0-.2276,6.2048l4.3152,7.8676a6.0545,6.0545,0,0,0,1.68,1.9353L20.37,57.8069a6.0555,6.0555,0,0,0,3.4784,1.2059l16.9841.4217a6.0541,6.0541,0,0,0,1.8789-.25l11.4443-3.4089a6.055,6.055,0,0,0,3.5273-2.7967l5.3387-9.3336a6.055,6.055,0,0,0-1.6049-7.8367h0"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#fff",
      points: "19.705 25.833 9.551 32.48 13.726 40.833 21.917 46.965 41.627 46.965 54.854 42.387 61.417 30.808 48.417 22.833 30.167 28.583 19.705 25.833"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#fff",
      points: "9.551 32.48 9.551 39.48 13.726 47.833 21.917 53.965 41.627 53.965 54.854 49.387 61.417 37.808 61.417 30.808"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#fff",
      points: "32.917 53.965 34.042 50.958 32.542 49.583 33.604 46.965"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M30.1667,28.5833l4.1874,5.3125-3.1874,3.6875,1.0937,3.25-1.7813,2.125a32.0259,32.0259,0,0,0,1.125,4.0065"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "19.705 25.833 9.551 32.48 13.726 40.833 21.917 46.965 41.627 46.965 54.854 42.387 61.417 30.808 48.417 22.833 30.167 28.583 19.705 25.833"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "9.551 32.48 9.551 39.48 13.726 47.833 21.917 53.965 41.627 53.965 54.854 49.387 61.417 37.808 61.417 30.808"
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
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "19.705 25.833 9.551 32.48 13.726 40.833 21.917 46.965 41.627 46.965 54.854 42.387 61.417 30.808 48.417 22.833 30.167 28.583 19.705 25.833"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "9.551 32.48 9.551 39.48 13.726 47.833 21.917 53.965 41.627 53.965 54.854 49.387 61.417 37.808 61.417 30.808"
    })));
  }
};

export default FloatingIce;