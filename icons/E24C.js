import React from 'react';

const Simple = ({
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
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: "36",
      cy: "36",
      rx: "25",
      ry: "25",
      transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -14.9117 36)",
      fill: "#FCEA2B",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#F1B31C",
      stroke: "none",
      d: "M37.4047,57.8288c-1.1317,1.1317-2.3078,2.1903-3.5108,3.2004c7.0546,0.5441,14.3056-1.8734,19.7134-7.2812 c9.8019-9.8019,9.8334-25.6625,0.0703-35.4256c-0.1668-0.1668-0.3489-0.3079-0.5192-0.469 C53.6602,32.2447,48.4137,46.8198,37.4047,57.8288z"
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
      cy: "36",
      r: "25",
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "25",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default Simple;