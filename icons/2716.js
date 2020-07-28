import React from 'react';

const Multiply = ({
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
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "#D0CFCE",
      stroke: "none",
      points: "29.3996,36.1621 26.5556,33.3218 18.4196,25.1858 24.6946,18.9108 32.8354,27.0515 35.5337,29.7463 35.6796,29.892 38.5238,27.0515 46.6646,18.9108 52.9396,25.1858 44.8036,33.3218 41.9587,36.1629 42.0587,36.2628 44.1027,38.304 52.9396,47.141 46.6646,53.416 37.826,44.5774 35.6779,42.4321 35.6187,42.4946 33.5332,44.5774 24.6946,53.416 18.4196,47.141 27.2565,38.304 29.3692,36.1941"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "29.3996,36.1621 26.5556,33.3218 18.4196,25.1858 24.6946,18.9108 32.8354,27.0515 35.5337,29.7463 35.6796,29.892 38.5238,27.0515 46.6646,18.9108 52.9396,25.1858 44.8036,33.3218 41.9587,36.1629 42.0587,36.2628 44.1027,38.304 52.9396,47.141 46.6646,53.416 37.826,44.5774 35.6779,42.4321 35.6187,42.4946 33.5332,44.5774 24.6946,53.416 18.4196,47.141 27.2565,38.304 29.3692,36.1941"
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
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "29.3996,36.1621 26.5556,33.3218 18.4196,25.1858 24.6946,18.9108 32.8354,27.0515 35.5337,29.7463 35.6796,29.892 38.5238,27.0515 46.6646,18.9108 52.9396,25.1858 44.8036,33.3218 41.9587,36.1629 42.0587,36.2628 44.1027,38.304 52.9396,47.141 46.6646,53.416 37.826,44.5774 35.6779,42.4321 35.6187,42.4946 33.5332,44.5774 24.6946,53.416 18.4196,47.141 27.2565,38.304 29.3692,36.1941"
    })));
  }
};

export default Multiply;