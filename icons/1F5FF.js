import React from 'react';

const Moai = ({
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
      fill: "#D0CFCE",
      stroke: "none",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47,59.423V11.6683 c0-0.4795-0.3887-0.8683-0.8683-0.8683H33.4409c-0.2145,0-0.4214,0.0794-0.5808,0.2229l-6.1083,5.4975 c-0.3341,0.3007-0.3835,0.8067-0.1138,1.1663l1.2855,1.714c0.1973,0.2631,0.2291,0.6151,0.082,0.9093l-8.1617,16.3234 c-0.2887,0.5773,0.1311,1.2566,0.7766,1.2566h4.1364c0.6455,0,1.0653,0.6793,0.7766,1.2566l-2.7531,5.5062 c-0.0603,0.1206-0.0917,0.2535-0.0917,0.3883v5.8729c0,0.4795,0.3887,0.8683,0.8683,0.8683h8.6827 c0.4795,0,0.8683,0.3887,0.8683,0.8683v6.5988c0,0.4795,0.3887,0.8683,0.8683,0.8683h12.1558C46.6113,60.1176,47,59.9025,47,59.423 z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#d0cfce",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "41.1377,31.6384 41.1377,44.8361 42.75,44.8361"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#000000",
      stroke: "#000000",
      strokeMiterlimit: "10",
      d: "M45.2635,60.483"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47,59.423V11.6683 c0-0.4795-0.3887-0.8683-0.8683-0.8683H33.4409c-0.2145,0-0.4214,0.0794-0.5808,0.2229l-6.1083,5.4975 c-0.3341,0.3007-0.3835,0.8067-0.1138,1.1663l1.2855,1.714c0.1973,0.2631,0.2291,0.6151,0.082,0.9093l-8.1617,16.3234 c-0.2887,0.5773,0.1311,1.2566,0.7766,1.2566h4.1364c0.6455,0,1.0653,0.6793,0.7766,1.2566l-2.7531,5.5062 c-0.0603,0.1206-0.0917,0.2535-0.0917,0.3883v5.8729c0,0.4795,0.3887,0.8683,0.8683,0.8683h8.6827 c0.4795,0,0.8683,0.3887,0.8683,0.8683v6.5988c0,0.4795,0.3887,0.8683,0.8683,0.8683h12.1558C46.6113,60.1176,47,59.9025,47,59.423 z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.6885",
      x2: "28.2454",
      y1: "44.8361",
      y2: "44.8361",
      fill: "#000000",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "41.1377,31.6384 41.1377,44.8361 42.75,44.8361"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "29.3465,26.5 36.9872,19.9862 34.9038,19.9862 32.7812,19.9862"
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
      fill: "#000000",
      stroke: "#000000",
      strokeMiterlimit: "10",
      d: "M45.2635,60.483"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47,59.423V11.6683 c0-0.4795-0.3887-0.8683-0.8683-0.8683H33.4409c-0.2145,0-0.4214,0.0794-0.5808,0.2229l-6.1083,5.4975 c-0.3341,0.3007-0.3835,0.8067-0.1138,1.1663l1.2855,1.714c0.1973,0.2631,0.2291,0.6151,0.082,0.9093l-8.1617,16.3234 c-0.2887,0.5773,0.1311,1.2566,0.7766,1.2566h4.1364c0.6455,0,1.0653,0.6793,0.7766,1.2566l-2.7531,5.5062 c-0.0603,0.1206-0.0917,0.2535-0.0917,0.3883v5.8729c0,0.4795,0.3887,0.8683,0.8683,0.8683h8.6827 c0.4795,0,0.8683,0.3887,0.8683,0.8683v6.5988c0,0.4795,0.3887,0.8683,0.8683,0.8683h12.1558C46.6113,60.1176,47,59.9025,47,59.423 z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.6885",
      x2: "28.2454",
      y1: "44.8361",
      y2: "44.8361",
      fill: "#000000",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "41.1377,31.6384 41.1377,44.8361 42.75,44.8361"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "29.3465,26.5 36.9872,19.9862 34.9038,19.9862 32.7812,19.9862"
    })));
  }
};

export default Moai;