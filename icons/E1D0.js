import React from 'react';

const Ibeacon = ({
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
      cy: "32",
      r: "5",
      fill: "#3F3F3F",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#D0CFCE",
      stroke: "none",
      points: "34,62 38,62 36,37"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#9B9B9A",
      stroke: "none",
      points: "36,37 38,62 35.9802,62 36,37"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "32",
      r: "5",
      fill: "none",
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
      points: "35,38 33,63 39,63 37,38"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.2646,50.9847C50.2388,48.3541,56,40.8554,56,32c0-11.0457-8.9543-20-20-20s-20,8.9543-20,20 c0,8.8554,5.7612,16.3541,13.7354,18.9847"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.5884,45.9128C47.1024,43.6956,51,38.3073,51,32c0-8.2843-6.7157-15-15-15s-15,6.7157-15,15 c0,6.3073,3.8976,11.6956,9.4116,13.9128"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.8953,40.7148C43.9401,39.0007,46,35.743,46,32c0-5.5229-4.4772-10-10-10s-10,4.4771-10,10c0,3.743,2.0599,7.0007,5.1047,8.7148"
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "32",
      r: "5",
      fill: "none",
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
      points: "35,38 33,63 39,63 37,38"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.2646,50.9847C50.2388,48.3541,56,40.8554,56,32c0-11.0457-8.9543-20-20-20s-20,8.9543-20,20 c0,8.8554,5.7612,16.3541,13.7354,18.9847"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.5884,45.9128C47.1024,43.6956,51,38.3073,51,32c0-8.2843-6.7157-15-15-15s-15,6.7157-15,15 c0,6.3073,3.8976,11.6956,9.4116,13.9128"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.8953,40.7148C43.9401,39.0007,46,35.743,46,32c0-5.5229-4.4772-10-10-10s-10,4.4771-10,10c0,3.743,2.0599,7.0007,5.1047,8.7148"
    })));
  }
};

export default Ibeacon;