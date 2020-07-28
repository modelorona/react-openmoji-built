import React from 'react';

const CutOfMeat = ({
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
      d: "M26,27h-7c-7.7334,0-14,6.2666-14,14s6.2666,14,14,14h29c10.4951,0,19-8.5049,19-19s-8.5049-19-19-19 c-5.6934,0-10.79,2.5137-14.2695,6.4805C31.8965,25.6514,29.0645,27,26,27z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ea5a47",
      stroke: "none",
      d: "M29,31c2.5,0,4.5029-1.4141,6.8164-3.7266C39.2695,23.8213,42.9746,21,48,21c8.2842,0,15,6.7158,15,15 s-6.7158,15-15,15H19c-5.5234,0-10-4.4775-10-10s4.4766-10,10-10l0.0313-0.9756l10.0312-0.0312L29,31z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "48",
      cy: "36",
      r: "5",
      fill: "#FFFFFF",
      stroke: "none"
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
      d: "M29,31c2.5,0,4.5029-1.4141,6.8164-3.7266C39.2695,23.8213,42.9746,21,48,21c8.2842,0,15,6.7158,15,15s-6.7158,15-15,15H19 c-5.5234,0-10-4.4775-10-10s4.4766-10,10-10"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26,27h-7c-7.7334,0-14,6.2666-14,14s6.2666,14,14,14h29c10.4951,0,19-8.5049,19-19s-8.5049-19-19-19 c-5.6934,0-10.79,2.5137-14.2695,6.4805C31.8965,25.6514,29.0645,27,26,27z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "48",
      cy: "36",
      r: "5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29,31c2.5,0,4.5029-1.4141,6.8164-3.7266C39.2695,23.8213,42.9746,21,48,21c8.2842,0,15,6.7158,15,15s-6.7158,15-15,15H19 c-5.5234,0-10-4.4775-10-10s4.4766-10,10-10"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26,27h-7c-7.7334,0-14,6.2666-14,14s6.2666,14,14,14h29c10.4951,0,19-8.5049,19-19s-8.5049-19-19-19 c-5.6934,0-10.79,2.5137-14.2695,6.4805C31.8965,25.6514,29.0645,27,26,27z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "48",
      cy: "36",
      r: "5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default CutOfMeat;