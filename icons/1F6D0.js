import React from 'react';

const PlaceOfWorship = ({
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
      id: "color",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "32.02",
      cy: "25.04",
      r: "3",
      fill: "#FCEA2B",
      stroke: "#FCEA2B",
      strokeWidth: "1.8"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      stroke: "#fcea2b",
      strokeWidth: "1.8",
      d: "m47.86 53.59-1.98 3.87c0.63 0.07 1.46 0.39 1.46 1.57 0 1.91-1.82 1.93-1.82 1.93l-13.31-0.02s-5.72 0.61-5.72-4.62c0-5.05 5.31-5.14 5.7-5.14h7.27c0.3395-2.542-2.384-10.6-4.74-7.499-0.3418 0.4495-2.372 2.349-3.272 2.87-2.74 1.584-9.22-3.191-8.526-6.356 0.09518-0.434 4.15 5.601 6.753 4.617 1.253-0.4742 3.043-4.682 3.338-5.609 0.5199-2.37 1.548-5.702 4.538-7.072 5.23-2.41 14.21 14.38 10.31 21.46z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      stroke: "#FCEA2B",
      strokeWidth: "2",
      d: "m32.02 51.18"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      stroke: "#FCEA2B",
      strokeWidth: "2",
      d: "m38.46 51.18-0.1101-0.2599 0.0801 0.0699c0.02 0.12 0.03 0.19 0.03 0.19z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      stroke: "#FCEA2B",
      strokeWidth: "2",
      d: "m38.46 51.18-0.1101-0.2599 0.0801 0.0699 0.02 0.02c0.01 0.06 0.01 0.11 0.01 0.17z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#D22F27",
      strokeWidth: "2",
      d: "m32.02 51.18"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line",
      stroke: "#000",
      strokeMiterlimit: "10"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m45.26 55.79"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "11 25.04 36 10.83 61 24.47"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32.02",
      cy: "25.04",
      r: "3",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m36.54 43.58c2.15 2.33 2.92 7.6 2.92 7.6l-6.848-0.0016s-6.124-0.094-6.124 5.138 5.724 4.624 5.724 4.624l13.31 0.0216s1.824-0.0216 1.824-1.932-2.171-1.563-2.171-1.563h-8.004l-5.206-1.39"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m23.29 39.46s2.67 4.92 6.02 4.92 1.649-9.221 8.239-12.25c5.227-2.407 14.21 14.38 10.31 21.46"
    })));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line",
      stroke: "#000",
      strokeMiterlimit: "10"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m45.26 55.79"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "11 25.04 36 10.83 61 24.47"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "32.02",
      cy: "25.04",
      r: "3",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m36.54 43.58c2.15 2.33 2.92 7.6 2.92 7.6l-6.848-0.0016s-6.124-0.094-6.124 5.138 5.724 4.624 5.724 4.624l13.31 0.0216s1.824-0.0216 1.824-1.932-2.171-1.563-2.171-1.563h-8.004l-5.206-1.39"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m23.29 39.46s2.67 4.92 6.02 4.92 1.649-9.221 8.239-12.25c5.227-2.407 14.21 14.38 10.31 21.46"
    })));
  }
};

export default PlaceOfWorship;