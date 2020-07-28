import React from 'react';

const CreditCard = ({
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
      fill: "#92D3F5",
      stroke: "none",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.9589,52.7943H12.0411 c-0.5523,0-1-0.4477-1-1v-29.547c0-0.5523,0.4477-1,1-1h47.9178c0.5523,0,1,0.4477,1,1v29.547 C60.9589,52.3466,60.5112,52.7943,59.9589,52.7943z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      stroke: "none",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60,31H12c-0.5523,0-1-0.4477-1-1v-2.8 c0-0.5523,0.4477-1,1-1h48c0.5523,0,1,0.4477,1,1V30C61,30.5523,60.5523,31,60,31z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.9984,47.8h-1.9471c-1.6645,0-3.0264-1.3619-3.0264-3.0264v-1.9471c0-1.6645,1.3619-3.0265,3.0264-3.0265h1.9471 c1.6645,0,3.0264,1.3619,3.0264,3.0265v1.9471C24.0249,46.4381,22.663,47.8,20.9984,47.8z"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.9589,52.7943H12.0411 c-0.5523,0-1-0.4477-1-1v-29.547c0-0.5523,0.4477-1,1-1h47.9178c0.5523,0,1,0.4477,1,1v29.547 C60.9589,52.3466,60.5112,52.7943,59.9589,52.7943z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60,31H12c-0.5523,0-1-0.4477-1-1v-2.8 c0-0.5523,0.4477-1,1-1h48c0.5523,0,1,0.4477,1,1V30C61,30.5523,60.5523,31,60,31z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.9984,47.8h-1.9471c-1.6645,0-3.0264-1.3619-3.0264-3.0264v-1.9471c0-1.6645,1.3619-3.0265,3.0264-3.0265h1.9471 c1.6645,0,3.0264,1.3619,3.0264,3.0265v1.9471C24.0249,46.4381,22.663,47.8,20.9984,47.8z"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.9589,52.7943H12.0411 c-0.5523,0-1-0.4477-1-1v-29.547c0-0.5523,0.4477-1,1-1h47.9178c0.5523,0,1,0.4477,1,1v29.547 C60.9589,52.3466,60.5112,52.7943,59.9589,52.7943z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60,31H12c-0.5523,0-1-0.4477-1-1v-2.8 c0-0.5523,0.4477-1,1-1h48c0.5523,0,1,0.4477,1,1V30C61,30.5523,60.5523,31,60,31z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.9984,47.8h-1.9471c-1.6645,0-3.0264-1.3619-3.0264-3.0264v-1.9471c0-1.6645,1.3619-3.0265,3.0264-3.0265h1.9471 c1.6645,0,3.0264,1.3619,3.0264,3.0265v1.9471C24.0249,46.4381,22.663,47.8,20.9984,47.8z"
    })));
  }
};

export default CreditCard;