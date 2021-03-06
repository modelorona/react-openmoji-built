import React from 'react';

const Station = ({
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
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "#d0cfce",
      stroke: "none",
      points: "53.7749,42.5833 53.7749,18.7917 60.7813,18.7917 60.7813,42.5833"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#d0cfce",
      stroke: "none",
      points: "34.4375,62.5189 3.7813,62.5189 3.7813,50.9289 34.8125,50.9289"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3f3f3f",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.0781,22.5h-18c-0.5522,0-1,0.4477-1,1v10c0,0.5522,0.4478,1,1,1h18c0.5523,0,1-0.4478,1-1v-10 C36.0781,22.9477,35.6304,22.5,35.0781,22.5z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.7449,25.5H20.4114c-0.5523,0-1,0.4477-1,1v4c0,0.5522,0.4477,1,1,1h11.3335c0.5522,0,1-0.4478,1-1v-4 C32.7449,25.9477,32.2971,25.5,31.7449,25.5z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3.7813",
      y: "9.1667",
      width: "64.4687",
      height: "9.625",
      fill: "#d0cfce",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#d0cfce",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0766",
      points: "14.8125,51.9114 10.7813,51.9114 10.7813,18.7917 15.5874,18.7917 15.5874,51.9114 14.8125,51.9114"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.2813,38.7689c0,0-13.6875-1-23.75,5.625s-16.25,11.625-16.25,11.625s-1.7671,1.7819-1.875,3.875 c-0.1563,3.0312,6.875,3.9375,6.875,3.9375L35.7,64.9198c0.3458,0.0244,0.6923,0.0366,1.0389,0.0366h32.4798 c0,0-0.1874-26.1875,0-26.1875H55.2813z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3f3f3f",
      stroke: "none",
      d: "M30.4063,50.1439l3.0313,3.0312h32.7187v-6.9687c0-0.5523-0.4478-1-1-1h-17c0,0-8.5625-0.25-18.125,4.125"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#ea5a47",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M17.7813,59.5189c0,0,12.375-2.125,47.375-1"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "54.875,34.9167 54.875,18.7917 59.6812,18.7917 59.6812,34.9167"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "57.934",
      cy: "66.0208",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "7.4375,61.5364 3.7813,61.5364 3.7813,51.9114 14.8125,51.9114"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.0781,22.5h-18c-0.5522,0-1,0.4477-1,1v10c0,0.5522,0.4478,1,1,1h18c0.5523,0,1-0.4478,1-1v-10 C36.0781,22.9477,35.6304,22.5,35.0781,22.5z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.7449,25.5H20.4114c-0.5523,0-1,0.4477-1,1v4c0,0.5522,0.4477,1,1,1h11.3335c0.5522,0,1-0.4478,1-1v-4 C32.7449,25.9477,32.2971,25.5,31.7449,25.5z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3.7813",
      y: "9.1667",
      width: "64.4687",
      height: "9.625",
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
      strokeWidth: "2.0766",
      points: "14.8125,51.9114 10.7813,51.9114 10.7813,18.7917 15.5874,18.7917 15.5874,51.9114 14.8125,51.9114"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "44.8716",
      cy: "66.0208",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6.0938",
      x2: "68",
      y1: "68.0189",
      y2: "68.0189",
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
      d: "M55.2813,38.7689c0,0-13.6875-1-23.75,5.625s-16.25,11.625-16.25,11.625s-1.7671,1.7819-1.875,3.875 c-0.1563,3.0312,6.875,3.9375,6.875,3.9375L35.7,64.9198c0.3458,0.0244,0.6923,0.0366,1.0389,0.0366h32.4798 c0,0-0.1874-26.1875,0-26.1875H55.2813z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "30.4063,50.1439 33.4376,53.1751 65.1563,53.1751"
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
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "54.875,34.9167 54.875,18.7917 59.6812,18.7917 59.6812,34.9167"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "57.934",
      cy: "66.0208",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "7.4375,61.5364 3.7813,61.5364 3.7813,51.9114 14.8125,51.9114"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.0781,22.5h-18c-0.5522,0-1,0.4477-1,1v10c0,0.5522,0.4478,1,1,1h18c0.5523,0,1-0.4478,1-1v-10 C36.0781,22.9477,35.6304,22.5,35.0781,22.5z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.7449,25.5H20.4114c-0.5523,0-1,0.4477-1,1v4c0,0.5522,0.4477,1,1,1h11.3335c0.5522,0,1-0.4478,1-1v-4 C32.7449,25.9477,32.2971,25.5,31.7449,25.5z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3.7813",
      y: "9.1667",
      width: "64.4687",
      height: "9.625",
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
      strokeWidth: "2.0766",
      points: "14.8125,51.9114 10.7813,51.9114 10.7813,18.7917 15.5874,18.7917 15.5874,51.9114 14.8125,51.9114"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "44.8716",
      cy: "66.0208",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6.0938",
      x2: "68",
      y1: "68.0189",
      y2: "68.0189",
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
      d: "M55.2813,38.7689c0,0-13.6875-1-23.75,5.625s-16.25,11.625-16.25,11.625s-1.7671,1.7819-1.875,3.875 c-0.1563,3.0312,6.875,3.9375,6.875,3.9375L35.7,64.9198c0.3458,0.0244,0.6923,0.0366,1.0389,0.0366h32.4798 c0,0-0.1874-26.1875,0-26.1875H55.2813z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "30.4063,50.1439 33.4376,53.1751 65.1563,53.1751"
    })));
  }
};

export default Station;