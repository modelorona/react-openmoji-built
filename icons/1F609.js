import React from 'react';

const WinkingFace = ({
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "23",
      fill: "#FCEA2B"
    }), /*#__PURE__*/React.createElement("polygon", {
      id: "SVGID",
      fill: "#EA5A47",
      points: "38.254,51.023 41.277,49.677 42.446,48.234 42.764,46.624 39.065,46.669 29.097,46.669 30.411,49.677 33.57,51.023"
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
      strokeWidth: "2",
      d: "M20.6481,30.0276 c0.4053-1.5015,1.3531-2.7994,2.66-3.6424c1.2184-0.9802,2.7586-1.4705,4.3194-1.3752"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M51.0038,31.0873 c-2.2619-2.236-5.7272-2.7128-8.5089-1.1708"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M42.7832,45.7687 c0,2.9371-2.308,5.2718-6.9345,5.2718s-6.9637-2.3419-6.9637-5.2718"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M28.94,45.7687 c0,0,7.0471,2.52,13.75,0.0543"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M47.0027,35.8605 c-0.8605-0.5508-1.8492-0.8688-2.8695-0.9229c-1.1043,0.0204-2.1903,0.2852-3.18,0.7754"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "28.0794",
      cy: "35.3089",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "23",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
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
      strokeWidth: "2",
      d: "M20.6481,30.0276 c0.4053-1.5015,1.3531-2.7994,2.66-3.6424c1.2184-0.9802,2.7586-1.4705,4.3194-1.3752"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M51.0038,31.0873 c-2.2619-2.236-5.7272-2.7128-8.5089-1.1708"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M42.7832,45.7687 c0,2.9371-2.308,5.2718-6.9345,5.2718s-6.9637-2.3419-6.9637-5.2718"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M28.94,45.7687 c0,0,7.0471,2.52,13.75,0.0543"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M47.0027,35.8605 c-0.8605-0.5508-1.8492-0.8688-2.8695-0.9229c-1.1043,0.0204-2.1903,0.2852-3.18,0.7754"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "28.0794",
      cy: "35.3089",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "23",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default WinkingFace;