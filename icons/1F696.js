import React from 'react';

const OncomingTaxi = ({
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
      fill: "#f4aa41",
      points: "22.647 27.358 27.455 24.854 44.988 24.812 50.21 28.861 52.822 38.045 54.853 39.798 54.397 52.154 17.384 52.531 17.384 39.051 18.414 38.511 22.647 27.358"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#92d3f5",
      points: "23.192 37.462 48.756 37.443 45.846 28.155 26.314 28.155 23.192 37.462"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "19.9781",
      y: "41.3302",
      width: "5",
      height: "3.51",
      fill: "#fcea2b"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "45.9781",
      y: "41.3302",
      width: "5",
      height: "3.51",
      fill: "#fcea2b"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#fcea2b",
      points: "32.518 20.533 27.217 20.533 27.217 24.839 44.887 24.839 44.887 20.533 32.518 20.533"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "17.6414",
      y: "47.8436",
      rx: "2.1181",
      ry: "2.1181",
      width: "37.242",
      height: "4.2363",
      fill: "#3f3f3f"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "24.095 37.443 48.756 37.443 45.878 28.852"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32",
      x2: "41",
      y1: "42.1606",
      y2: "42.1606",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32",
      x2: "41",
      y1: "44.7931",
      y2: "44.7931",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "21 44.793 25 44.793 25 42.161"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "47 44.793 51 44.793 51 42.161"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "18",
      y: "52.49",
      rx: "1.755",
      ry: "1.755",
      width: "6",
      height: "3.51"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "48",
      y: "52.49",
      rx: "1.755",
      ry: "1.755",
      width: "6",
      height: "3.51"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "52.4782",
      y: "35.5017",
      rx: "1.6368",
      ry: "1.6368",
      width: "4.9651",
      height: "3.2736"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14.5041",
      y: "35.6858",
      rx: "1.6368",
      ry: "1.6368",
      width: "4.9651",
      height: "3.2736"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26.3876,24.3126h0c0-2.3685,1.18-4.3064,2.6216-4.3064H42.9908c1.4419,0,2.6216,1.9379,2.6216,4.3064h0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M19.598,38.3373l2.0507-6.9637c1.1278-3.83,4.8183-6.9636,8.201-6.9636H36"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M52.4019,38.3371l-2.0506-6.9635c-1.1279-3.83-4.8183-6.9636-8.201-6.9636H36"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.2624,52.49H19.9134a2.9458,2.9458,0,0,1-2.9267-2.9474V42.5053c0-1.5965.89-4.0754,2.4927-4.0754"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M35.6851,52.49h16.349a2.9458,2.9458,0,0,0,2.9267-2.9474V42.5053c0-1.5965-.89-4.0754-2.4927-4.0754"
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
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "24.095 37.443 48.756 37.443 45.878 28.852"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32",
      x2: "41",
      y1: "42.1606",
      y2: "42.1606",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32",
      x2: "41",
      y1: "44.7931",
      y2: "44.7931",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "21 44.793 25 44.793 25 42.161"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "47 44.793 51 44.793 51 42.161"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "18",
      y: "52.49",
      rx: "1.755",
      ry: "1.755",
      width: "6",
      height: "3.51"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "48",
      y: "52.49",
      rx: "1.755",
      ry: "1.755",
      width: "6",
      height: "3.51"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "52.4782",
      y: "35.5017",
      rx: "1.6368",
      ry: "1.6368",
      width: "4.9651",
      height: "3.2736"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14.5041",
      y: "35.6858",
      rx: "1.6368",
      ry: "1.6368",
      width: "4.9651",
      height: "3.2736"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26.3876,24.3126h0c0-2.3685,1.18-4.3064,2.6216-4.3064H42.9908c1.4419,0,2.6216,1.9379,2.6216,4.3064h0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M19.598,38.3373l2.0507-6.9637c1.1278-3.83,4.8183-6.9636,8.201-6.9636H36"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M52.4019,38.3371l-2.0506-6.9635c-1.1279-3.83-4.8183-6.9636-8.201-6.9636H36"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.2624,52.49H19.9134a2.9458,2.9458,0,0,1-2.9267-2.9474V42.5053c0-1.5965.89-4.0754,2.4927-4.0754"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M35.6851,52.49h16.349a2.9458,2.9458,0,0,0,2.9267-2.9474V42.5053c0-1.5965-.89-4.0754-2.4927-4.0754"
    })));
  }
};

export default OncomingTaxi;