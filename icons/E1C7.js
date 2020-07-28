import React from 'react';

const Led = ({
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
      fill: "#92d3f5",
      stroke: "none",
      d: "M31.3882,26.7177c0,0,9.2367-1.8188,8.4221-9.1964c-1.3538-12.261-1.4678-10.4237-1.4678-10.4237 l-5.5293,1.0104C32.8133,8.1081,35.9998,21.7018,31.3882,26.7177z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92d3f5",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34.5417,7.0359c-8.1462,0-14.75,7.496-14.75,16.7427v16.388h29.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "26.8333",
      y: "44.5",
      width: "4",
      height: "22.095",
      fill: "#d0cfce",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "41.3333",
      y: "44.5",
      width: "4",
      height: "16.4792",
      fill: "#d0cfce",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61b2e4",
      stroke: "none",
      d: "M34.5417,7.5625c0,0,15.3232,0.5495,15.9047,13.875c0.9664,22.1458,0.0665,18.9191,0.0665,18.9191 l-9.3254-0.19C41.1875,40.1667,42.6247,15.125,34.5417,7.5625z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "43.3333",
      y: "40.7917",
      width: "11.8333",
      height: "3.0833",
      fill: "#61b2e4",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "16.3353",
      y: "40.7917",
      width: "26.998",
      height: "3.0833",
      fill: "#92d3f5",
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
      d: "M34.5417,7.0359c-8.1462,0-14.75,7.496-14.75,16.7427v16.388h29.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "26.8333",
      y: "44.5",
      width: "4",
      height: "22.095",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "41.3333",
      y: "44.5",
      width: "4",
      height: "16.4792",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25.8125,19.0625"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.2497,7.0359c8.1462,0,14.75,7.496,14.75,16.7427v7.388"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "16,44.5 45.5309,44.5 45.9063,44.5 56,44.5 56,40.1667 45.9063,40.1667 45.4999,40.1667 16,40.1667"
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
      d: "M34.5417,7.0359c-8.1462,0-14.75,7.496-14.75,16.7427v16.388h29.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "26.8333",
      y: "44.5",
      width: "4",
      height: "22.095",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "41.3333",
      y: "44.5",
      width: "4",
      height: "16.4792",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25.8125,19.0625"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.2497,7.0359c8.1462,0,14.75,7.496,14.75,16.7427v7.388"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "16,44.5 45.5309,44.5 45.9063,44.5 56,44.5 56,40.1667 45.9063,40.1667 45.4999,40.1667 16,40.1667"
    })));
  }
};

export default Led;