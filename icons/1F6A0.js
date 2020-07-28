import React from 'react';

const MountainCableway = ({
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
      fill: "#3F3F3F",
      d: "M40.6875,27.0313c0-0.3452-0.3498-0.625-0.7812-0.625h-7.8125c-0.4315,0-0.7813,0.2798-0.7813,0.625v0.9375 h9.375V27.0313z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B1CC33",
      d: "M58.6563,58.8281H13.3438c-1.2891,0-2.3438-1.0547-2.3438-2.3437V29.9219 c0-1.2891,1.0547-2.3438,2.3438-2.3438h45.3125c1.289,0,2.3437,1.0547,2.3437,2.3438v26.5625 C61,57.7734,59.9453,58.8281,58.6563,58.8281z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M20.375,33.2c0-1.1412-1.0547-2.075-2.3437-2.075H11v8.6458h9.375V33.2z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      d: "M11,39.7708v8.6459h7.0313c1.289,0,2.3437-0.9338,2.3437-2.075v-6.5709H11z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      d: "M51.625,39.7708v6.5709c0,1.1412,1.0547,2.075,2.3438,2.075H61v-8.6459H51.625z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M61,31.125h-7.0312c-1.2891,0-2.3438,0.9338-2.3438,2.075v6.5708H61V31.125z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "11",
      y: "51.75",
      width: "50",
      height: "3.8723",
      fill: "#5C9E31"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      d: "M24.2813,38.9062v5.5581c0,1.2278,1.0492,2.2232,2.3437,2.2232h4.6875 c1.2945,0,2.3438-0.9954,2.3438-2.2232v-5.5581H24.2813z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M33.6563,33.3482c0-1.2278-1.0493-2.2232-2.3438-2.2232H26.625c-1.2945,0-2.3437,0.9954-2.3437,2.2232 v5.558h9.375V33.3482z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M33.6563,33.3482c0-1.2278-1.0493-2.2232-2.3438-2.2232H26.625c-1.2945,0-2.3437,0.9954-2.3437,2.2232 v5.558h9.375V33.3482z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M47.7188,33.3482c0-1.2278-1.0493-2.2232-2.3438-2.2232h-4.6875c-1.2945,0-2.3437,0.9954-2.3437,2.2232 v5.558h9.375V33.3482z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      d: "M38.3438,38.9062v5.5581c0,1.2278,1.0492,2.2232,2.3437,2.2232h4.6875 c1.2945,0,2.3438-0.9954,2.3438-2.2232v-5.5581H38.3438z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "33.9509",
      cy: "11.9557",
      r: "2",
      fill: "#9B9B9A"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "38.7188",
      cy: "13.625",
      r: "2",
      fill: "#9B9B9A"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "36",
      x2: "36",
      y1: "26.4063",
      y2: "12.875",
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
      d: "M51.62,33.1998c0-1.14,1.06-2.07,2.35-2.07H61v-1.21c0-1.29-1.05-2.34-2.34-2.34H13.34c-1.29,0-2.34,1.05-2.34,2.34v1.21h7.03 c1.29,0,2.35,0.93,2.35,2.07v13.14c0,1.14-1.06,2.08-2.35,2.08H11v3.33h50v-3.33h-7.03c-1.29,0-2.35-0.94-2.35-2.08V33.1998z M33.66,44.4598c0,1.23-1.05,2.23-2.35,2.23h-4.69c-1.29,0-2.34-1-2.34-2.23v-11.11c0-1.23,1.05-2.22,2.34-2.22h4.69 c1.3,0,2.35,0.99,2.35,2.22V44.4598z M47.72,44.4598c0,1.23-1.05,2.23-2.34,2.23h-4.69c-1.3,0-2.35-1-2.35-2.23v-11.11 c0-1.23,1.05-2.22,2.35-2.22h4.69c1.29,0,2.34,0.99,2.34,2.22V44.4598z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.69,27.0298v0.55h-9.38v-0.55c0-0.34,0.35-0.62,0.78-0.62H39.91C40.34,26.4098,40.69,26.6898,40.69,27.0298z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18.03,48.4197H11v-17.29h7.03c1.29,0,2.35,0.93,2.35,2.07v13.14C20.38,47.4797,19.32,48.4197,18.03,48.4197z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.28,44.4598v-11.11c0-1.23,1.05-2.22,2.34-2.22h4.69c1.3,0,2.35,0.99,2.35,2.22v11.11c0,1.23-1.05,2.23-2.35,2.23h-4.69 C25.33,46.6898,24.28,45.6898,24.28,44.4598z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.34,44.4598v-11.11c0-1.23,1.05-2.22,2.35-2.22h4.69c1.29,0,2.34,0.99,2.34,2.22v11.11c0,1.23-1.05,2.23-2.34,2.23h-4.69 C39.39,46.6898,38.34,45.6898,38.34,44.4598z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M61,31.1298v17.29h-7.03c-1.29,0-2.35-0.94-2.35-2.08v-13.14c0-1.14,1.06-2.07,2.35-2.07H61z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M11,51.7498h50v4.73c0,1.29-1.05,2.35-2.34,2.35H13.34c-1.29,0-2.34-1.06-2.34-2.35V51.7498z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.38,33.1998v6.57H11v-8.64h7.03C19.32,31.1298,20.38,32.0598,20.38,33.1998z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.38,39.7698v6.57c0,1.14-1.06,2.08-2.35,2.08H11v-8.65H20.38z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M61,39.7698v8.65h-7.03c-1.29,0-2.35-0.94-2.35-2.08v-6.57H61z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M61,31.1298v8.64h-9.38v-6.57c0-1.14,1.06-2.07,2.35-2.07H61z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "11",
      y: "51.7498",
      width: "50",
      height: "3.87",
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
      d: "M33.66,38.9098v5.55c0,1.23-1.05,2.23-2.35,2.23h-4.69c-1.29,0-2.34-1-2.34-2.23v-5.55H33.66z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.66,33.3498v5.56H24.28v-5.56c0-1.23,1.05-2.22,2.34-2.22h4.69C32.61,31.1298,33.66,32.1198,33.66,33.3498z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.66,33.3498v5.56H24.28v-5.56c0-1.23,1.05-2.22,2.34-2.22h4.69C32.61,31.1298,33.66,32.1198,33.66,33.3498z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.72,33.3498v5.56H38.34v-5.56c0-1.23,1.05-2.22,2.35-2.22h4.69C46.67,31.1298,47.72,32.1198,47.72,33.3498z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.72,38.9098v5.55c0,1.23-1.05,2.23-2.34,2.23h-4.69c-1.3,0-2.35-1-2.35-2.23v-5.55H47.72z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.72,13.6298c0,0.04,0,0.08-0.0099,0.12c-0.06,1.05-0.93,1.88-1.9901,1.88c-1.11,0-2-0.9-2-2c0-0.32,0.07-0.62,0.21-0.88 c0.31-0.66,1-1.12,1.79-1.12C39.82,11.6298,40.72,12.5198,40.72,13.6298z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.93",
      x2: "35.88",
      y1: "12.7498",
      y2: "12.4698",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "68",
      x2: "40.71",
      y1: "20.9998",
      y2: "13.7498",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32.02",
      x2: "4",
      y1: "11.4398",
      y2: "3.9998",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.95,11.9598c0,0.18-0.02,0.35-0.07,0.51 c-0.22,0.86-1,1.49-1.93,1.49c-1.1,0-2-0.9-2-2c0-0.18,0.02-0.36,0.07-0.52c0.23-0.86,1.01-1.48,1.93-1.48 C35.06,9.9598,35.95,10.8498,35.95,11.9598z"
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
    }, /*#__PURE__*/React.createElement("line", {
      x1: "36",
      x2: "36",
      y1: "26.4063",
      y2: "12.875",
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
      d: "M51.62,33.1998c0-1.14,1.06-2.07,2.35-2.07H61v-1.21c0-1.29-1.05-2.34-2.34-2.34H13.34c-1.29,0-2.34,1.05-2.34,2.34v1.21h7.03 c1.29,0,2.35,0.93,2.35,2.07v13.14c0,1.14-1.06,2.08-2.35,2.08H11v3.33h50v-3.33h-7.03c-1.29,0-2.35-0.94-2.35-2.08V33.1998z M33.66,44.4598c0,1.23-1.05,2.23-2.35,2.23h-4.69c-1.29,0-2.34-1-2.34-2.23v-11.11c0-1.23,1.05-2.22,2.34-2.22h4.69 c1.3,0,2.35,0.99,2.35,2.22V44.4598z M47.72,44.4598c0,1.23-1.05,2.23-2.34,2.23h-4.69c-1.3,0-2.35-1-2.35-2.23v-11.11 c0-1.23,1.05-2.22,2.35-2.22h4.69c1.29,0,2.34,0.99,2.34,2.22V44.4598z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.69,27.0298v0.55h-9.38v-0.55c0-0.34,0.35-0.62,0.78-0.62H39.91C40.34,26.4098,40.69,26.6898,40.69,27.0298z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18.03,48.4197H11v-17.29h7.03c1.29,0,2.35,0.93,2.35,2.07v13.14C20.38,47.4797,19.32,48.4197,18.03,48.4197z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.28,44.4598v-11.11c0-1.23,1.05-2.22,2.34-2.22h4.69c1.3,0,2.35,0.99,2.35,2.22v11.11c0,1.23-1.05,2.23-2.35,2.23h-4.69 C25.33,46.6898,24.28,45.6898,24.28,44.4598z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.34,44.4598v-11.11c0-1.23,1.05-2.22,2.35-2.22h4.69c1.29,0,2.34,0.99,2.34,2.22v11.11c0,1.23-1.05,2.23-2.34,2.23h-4.69 C39.39,46.6898,38.34,45.6898,38.34,44.4598z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M61,31.1298v17.29h-7.03c-1.29,0-2.35-0.94-2.35-2.08v-13.14c0-1.14,1.06-2.07,2.35-2.07H61z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M11,51.7498h50v4.73c0,1.29-1.05,2.35-2.34,2.35H13.34c-1.29,0-2.34-1.06-2.34-2.35V51.7498z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.38,33.1998v6.57H11v-8.64h7.03C19.32,31.1298,20.38,32.0598,20.38,33.1998z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.38,39.7698v6.57c0,1.14-1.06,2.08-2.35,2.08H11v-8.65H20.38z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M61,39.7698v8.65h-7.03c-1.29,0-2.35-0.94-2.35-2.08v-6.57H61z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M61,31.1298v8.64h-9.38v-6.57c0-1.14,1.06-2.07,2.35-2.07H61z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "11",
      y: "51.7498",
      width: "50",
      height: "3.87",
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
      d: "M33.66,38.9098v5.55c0,1.23-1.05,2.23-2.35,2.23h-4.69c-1.29,0-2.34-1-2.34-2.23v-5.55H33.66z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.66,33.3498v5.56H24.28v-5.56c0-1.23,1.05-2.22,2.34-2.22h4.69C32.61,31.1298,33.66,32.1198,33.66,33.3498z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.66,33.3498v5.56H24.28v-5.56c0-1.23,1.05-2.22,2.34-2.22h4.69C32.61,31.1298,33.66,32.1198,33.66,33.3498z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.72,33.3498v5.56H38.34v-5.56c0-1.23,1.05-2.22,2.35-2.22h4.69C46.67,31.1298,47.72,32.1198,47.72,33.3498z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.72,38.9098v5.55c0,1.23-1.05,2.23-2.34,2.23h-4.69c-1.3,0-2.35-1-2.35-2.23v-5.55H47.72z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.72,13.6298c0,0.04,0,0.08-0.0099,0.12c-0.06,1.05-0.93,1.88-1.9901,1.88c-1.11,0-2-0.9-2-2c0-0.32,0.07-0.62,0.21-0.88 c0.31-0.66,1-1.12,1.79-1.12C39.82,11.6298,40.72,12.5198,40.72,13.6298z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.93",
      x2: "35.88",
      y1: "12.7498",
      y2: "12.4698",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "68",
      x2: "40.71",
      y1: "20.9998",
      y2: "13.7498",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32.02",
      x2: "4",
      y1: "11.4398",
      y2: "3.9998",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.95,11.9598c0,0.18-0.02,0.35-0.07,0.51 c-0.22,0.86-1,1.49-1.93,1.49c-1.1,0-2-0.9-2-2c0-0.18,0.02-0.36,0.07-0.52c0.23-0.86,1.01-1.48,1.93-1.48 C35.06,9.9598,35.95,10.8498,35.95,11.9598z"
    })));
  }
};

export default MountainCableway;