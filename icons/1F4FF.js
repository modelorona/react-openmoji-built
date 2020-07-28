import React from 'react';

const PrayerBeads = ({
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
      id: "line-supplement"
    }, /*#__PURE__*/React.createElement("circle", {
      id: "xx_1_",
      cx: "40.4665",
      cy: "54",
      r: "1.95"
    })), /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "#F1B31C",
      points: "37.3037,56.9264 38.6067,53.2677 42.4051,53.5098 42.7217,57.9283"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#F1B31C",
      points: "41.5621,55.2169 42.4051,65.9918 35.281,64.8074 39.0648,54.9973"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40.4665",
      cy: "54",
      r: "2",
      fill: "#FCEA2B"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#F1B31C",
      points: "41.7833,58.045 42.4051,65.9918 35.281,64.8074 38.124,57.4366"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "41.7833,58.045 42.4051,65.9918 35.281,64.8074 38.124,57.4366"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      "stroke-dasharray": "0,6.7346,0,0,0,0",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "4",
      d: "M47.6095,12.8474c1.1383,11.1934-2.5564,14.3792,7.9682,15.4424c10.5246,1.0632,0.6967,20.0417-13.9754,20.0417 S25.2386,38.0801,29.4125,33.9062c4.1738-4.1738-3.1185-6.2607-4.3102-4.1738s-17.9028,0.1524-9.9347-10.6242 S46.4711,1.654,47.6095,12.8474z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "color-foreground"
    }, /*#__PURE__*/React.createElement("path", {
      id: "xx",
      fill: "none",
      stroke: "#D22F27",
      "stroke-dasharray": "0,6.7346,0,0,0,0",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "4",
      d: "M47.6095,12.8474c1.1383,11.1934-2.5564,14.3792,7.9682,15.4424c10.5246,1.0632,0.6967,20.0417-13.9754,20.0417 S25.2386,38.0801,29.4125,33.9062c4.1738-4.1738-3.1185-6.2607-4.3102-4.1738s-17.9028,0.1524-9.9347-10.6242 S46.4711,1.654,47.6095,12.8474z"
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
      id: "line-supplement"
    }, /*#__PURE__*/React.createElement("circle", {
      id: "xx_1_",
      cx: "40.4665",
      cy: "54",
      r: "1.95"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "41.7833,58.045 42.4051,65.9918 35.281,64.8074 38.124,57.4366"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      "stroke-dasharray": "0,6.7346,0,0,0,0",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "4",
      d: "M47.6095,12.8474c1.1383,11.1934-2.5564,14.3792,7.9682,15.4424c10.5246,1.0632,0.6967,20.0417-13.9754,20.0417 S25.2386,38.0801,29.4125,33.9062c4.1738-4.1738-3.1185-6.2607-4.3102-4.1738s-17.9028,0.1524-9.9347-10.6242 S46.4711,1.654,47.6095,12.8474z"
    })));
  }
};

export default PrayerBeads;