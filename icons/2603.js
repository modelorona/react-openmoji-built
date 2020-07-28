import React from 'react';

const Snowman = ({
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
      id: "circle13",
      cx: "36",
      cy: "28.11",
      r: "10.75",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      id: "circle15",
      cx: "36",
      cy: "51.44",
      r: "13.86",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      id: "path17",
      fill: "#d0cfce",
      d: "m36 17.35c7.776 0 7.776 21.51 0 21.51 5.939 0 10.75-4.815 10.75-10.75 0-5.939-4.815-10.75-10.75-10.75z"
    }), /*#__PURE__*/React.createElement("path", {
      id: "path19",
      fill: "#d0cfce",
      d: "m36 37.58c8.008 0 8.008 27.72 0 27.72 7.653 0 13.86-6.204 13.86-13.86 0-7.653-6.204-13.86-13.86-13.86z"
    }), /*#__PURE__*/React.createElement("rect", {
      id: "rect21",
      x: "29.47",
      y: "7.719",
      width: "13.06",
      height: "10.64",
      fill: "#3f3f3f"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      id: "line24",
      x1: "42.59",
      x2: "64.11",
      y1: "40.04",
      y2: "32.92",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.757"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line26",
      x1: "57.96",
      x2: "60.7",
      y1: "34.95",
      y2: "27.67",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.757"
    }), /*#__PURE__*/React.createElement("circle", {
      id: "circle28",
      cx: "36",
      cy: "47.93",
      r: "1.757"
    }), /*#__PURE__*/React.createElement("circle", {
      id: "circle30",
      cx: "36",
      cy: "54.08",
      r: "1.757"
    }), /*#__PURE__*/React.createElement("circle", {
      id: "circle32",
      cx: "36",
      cy: "60.23",
      r: "1.757"
    }), /*#__PURE__*/React.createElement("circle", {
      id: "circle34",
      cx: "32.37",
      cy: "25.39",
      r: "1.537"
    }), /*#__PURE__*/React.createElement("circle", {
      id: "circle36",
      cx: "39.63",
      cy: "25.39",
      r: "1.537"
    }), /*#__PURE__*/React.createElement("path", {
      id: "path38",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.581",
      d: "m40.7 31.87c-1.245 0.924-2.807 1.488-4.477 1.488-1.692 0-3.223-0.5413-4.476-1.488"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line40",
      x1: "26.96",
      x2: "45.04",
      y1: "18.22",
      y2: "18.22",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.757"
    }), /*#__PURE__*/React.createElement("rect", {
      id: "rect42",
      x: "29.44",
      y: "7.537",
      width: "13.12",
      height: "10.69",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.757"
    }), /*#__PURE__*/React.createElement("path", {
      id: "path44",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.757",
      d: "m43.42 21.38c1.667 1.801 2.685 4.211 2.685 6.858 0 5.579-4.522 10.1-10.1 10.1s-10.1-4.522-10.1-10.1c0-2.648 1.019-5.059 2.687-6.86"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line46",
      x1: "29.41",
      x2: "7.894",
      y1: "40.04",
      y2: "32.92",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.757"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line48",
      x1: "14.04",
      x2: "11.3",
      y1: "34.96",
      y2: "27.67",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.757"
    }), /*#__PURE__*/React.createElement("path", {
      id: "path50",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.757",
      d: "m45.82 42.67c2.086 2.33 3.354 5.407 3.354 8.781 0 7.276-5.899 13.17-13.17 13.17s-13.17-5.899-13.17-13.17c0-3.373 1.268-6.45 3.353-8.781"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line26-49",
      x1: "9.2128",
      x2: "14.6061",
      y1: "42.3463",
      y2: "47.7396",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line28",
      x1: "15.4297",
      x2: "8.3061",
      y1: "43.5887",
      y2: "46.3428",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line30",
      x1: "10.8673",
      x2: "12.8685",
      y1: "48.6511",
      y2: "41.2805",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line26-4",
      x1: "16.4505",
      x2: "21.8438",
      y1: "16.8072",
      y2: "22.2005",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line28-3",
      x1: "22.6674",
      x2: "15.5438",
      y1: "18.0496",
      y2: "20.8037",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line30-1",
      x1: "18.105",
      x2: "20.1062",
      y1: "23.112",
      y2: "15.7414",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line26-0",
      x1: "51.3185",
      x2: "56.7118",
      y1: "8.7468",
      y2: "14.1401",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line28-31",
      x1: "57.5354",
      x2: "50.4118",
      y1: "9.9892",
      y2: "12.7433",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line30-5",
      x1: "52.973",
      x2: "54.9742",
      y1: "15.0516",
      y2: "7.681",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line26-3",
      x1: "58.6543",
      x2: "64.0476",
      y1: "42.0751",
      y2: "47.4684",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line28-5",
      x1: "64.8712",
      x2: "57.7476",
      y1: "43.3175",
      y2: "46.0716",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line30-53",
      x1: "60.3088",
      x2: "62.31",
      y1: "48.3799",
      y2: "41.0093",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
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
    }, /*#__PURE__*/React.createElement("line", {
      id: "line24",
      x1: "42.59",
      x2: "64.11",
      y1: "40.04",
      y2: "32.92",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.757"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line26",
      x1: "57.96",
      x2: "60.7",
      y1: "34.95",
      y2: "27.67",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.757"
    }), /*#__PURE__*/React.createElement("circle", {
      id: "circle28",
      cx: "36",
      cy: "47.93",
      r: "1.757"
    }), /*#__PURE__*/React.createElement("circle", {
      id: "circle30",
      cx: "36",
      cy: "54.08",
      r: "1.757"
    }), /*#__PURE__*/React.createElement("circle", {
      id: "circle32",
      cx: "36",
      cy: "60.23",
      r: "1.757"
    }), /*#__PURE__*/React.createElement("circle", {
      id: "circle34",
      cx: "32.37",
      cy: "25.39",
      r: "1.537"
    }), /*#__PURE__*/React.createElement("circle", {
      id: "circle36",
      cx: "39.63",
      cy: "25.39",
      r: "1.537"
    }), /*#__PURE__*/React.createElement("path", {
      id: "path38",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.581",
      d: "m40.7 31.87c-1.245 0.924-2.807 1.488-4.477 1.488-1.692 0-3.223-0.5413-4.476-1.488"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line40",
      x1: "26.96",
      x2: "45.04",
      y1: "18.22",
      y2: "18.22",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.757"
    }), /*#__PURE__*/React.createElement("rect", {
      id: "rect42",
      x: "29.44",
      y: "7.537",
      width: "13.12",
      height: "10.69",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.757"
    }), /*#__PURE__*/React.createElement("path", {
      id: "path44",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.757",
      d: "m43.42 21.38c1.667 1.801 2.685 4.211 2.685 6.858 0 5.579-4.522 10.1-10.1 10.1s-10.1-4.522-10.1-10.1c0-2.648 1.019-5.059 2.687-6.86"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line46",
      x1: "29.41",
      x2: "7.894",
      y1: "40.04",
      y2: "32.92",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.757"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line48",
      x1: "14.04",
      x2: "11.3",
      y1: "34.96",
      y2: "27.67",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.757"
    }), /*#__PURE__*/React.createElement("path", {
      id: "path50",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.757",
      d: "m45.82 42.67c2.086 2.33 3.354 5.407 3.354 8.781 0 7.276-5.899 13.17-13.17 13.17s-13.17-5.899-13.17-13.17c0-3.373 1.268-6.45 3.353-8.781"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line26-49",
      x1: "9.2128",
      x2: "14.6061",
      y1: "42.3463",
      y2: "47.7396",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line28",
      x1: "15.4297",
      x2: "8.3061",
      y1: "43.5887",
      y2: "46.3428",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line30",
      x1: "10.8673",
      x2: "12.8685",
      y1: "48.6511",
      y2: "41.2805",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line26-4",
      x1: "16.4505",
      x2: "21.8438",
      y1: "16.8072",
      y2: "22.2005",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line28-3",
      x1: "22.6674",
      x2: "15.5438",
      y1: "18.0496",
      y2: "20.8037",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line30-1",
      x1: "18.105",
      x2: "20.1062",
      y1: "23.112",
      y2: "15.7414",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line26-0",
      x1: "51.3185",
      x2: "56.7118",
      y1: "8.7468",
      y2: "14.1401",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line28-31",
      x1: "57.5354",
      x2: "50.4118",
      y1: "9.9892",
      y2: "12.7433",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line30-5",
      x1: "52.973",
      x2: "54.9742",
      y1: "15.0516",
      y2: "7.681",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line26-3",
      x1: "58.6543",
      x2: "64.0476",
      y1: "42.0751",
      y2: "47.4684",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line28-5",
      x1: "64.8712",
      x2: "57.7476",
      y1: "43.3175",
      y2: "46.0716",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      id: "line30-53",
      x1: "60.3088",
      x2: "62.31",
      y1: "48.3799",
      y2: "41.0093",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default Snowman;