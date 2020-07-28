import React from 'react';

const Speedboat = ({
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      d: "M25.7191,37.219c0,0-18.6574,0.1092-18.8835,3.2051c-0.226,3.0959,12.1477,8.6395,12.1477,8.6395 s0.7809,0.7927,11.6472,1.303c10.8662,0.5103,28.1411,1.0924,28.1411,1.0924l4.6809-4.3851 c0.088-0.0825,0.1418-0.2035,0.1476-0.3325l0.0661-1.4563c0.0099-0.2177-0.1173-0.4093-0.3023-0.4554l-1.9028-0.4743l-5.017-3.2687 c-0.0459-0.0299-0.0968-0.0487-0.1496-0.0553L25.7191,37.219z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      d: "M45.7345,39.7147c0,0-6.8479-5.3894-15.0213-6.2024c-0.0867-0.0086-0.1747,0.0159-0.2494,0.0692 l-5.1414,3.6651L45.7345,39.7147z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#EA5A47",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8603",
      d: "M13.8717,41.0478c0,0,24.9872,2.43,42.3914,5.4447"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      d: "M68,47v22H4V47h1c3,0,9,3,15,3s10-3,16-3s11,3,16,3s7-3,15-3H68z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      points: "68,39.0208 68,55.0208 4,55.0208 4,39.0208"
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
      strokeWidth: "1.8603",
      d: "M63.4525,47.0739c0.088-0.0825,0.1418-0.2035,0.1476-0.3325l0.0661-1.4563c0.0099-0.2177-0.1173-0.4093-0.3023-0.4554 l-1.9028-0.4743l-5.017-3.2687c-0.0459-0.0299-0.0968-0.0487-0.1496-0.0553L25.7191,37.219c0,0-18.6574,0.1092-18.8835,3.2051 c-0.226,3.0959,12.1477,8.6395,12.1477,8.6395s0.3095,0.3142,3.25,0.6743"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8603",
      d: "M45.7345,39.7147c0,0-6.8479-5.3894-15.0213-6.2024c-0.0867-0.0086-0.1747,0.0159-0.2494,0.0692l-5.1414,3.6651L45.7345,39.7147z"
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8603",
      d: "M63.4525,47.0739c0.088-0.0825,0.1418-0.2035,0.1476-0.3325l0.0661-1.4563c0.0099-0.2177-0.1173-0.4093-0.3023-0.4554 l-1.9028-0.4743l-5.017-3.2687c-0.0459-0.0299-0.0968-0.0487-0.1496-0.0553L25.7191,37.219c0,0-18.6574,0.1092-18.8835,3.2051 c-0.226,3.0959,12.1477,8.6395,12.1477,8.6395s0.3095,0.3142,3.25,0.6743"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8603",
      d: "M45.7345,39.7147c0,0-6.8479-5.3894-15.0213-6.2024c-0.0867-0.0086-0.1747,0.0159-0.2494,0.0692l-5.1414,3.6651L45.7345,39.7147z"
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

export default Speedboat;