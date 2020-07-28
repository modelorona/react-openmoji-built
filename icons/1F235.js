import React from 'react';

const JapaneseNoVacancyButton = ({
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
      fill: "#ea5a47",
      d: "M59.0349,60h-46.07A.9679.9679,0,0,1,12,59.0349v-46.07A.9679.9679,0,0,1,12.9651,12h46.07A.9679.9679,0,0,1,60,12.9651v46.07A.9679.9679,0,0,1,59.0349,60Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line",
      fill: "none",
      stroke: "#000",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("path", {
      strokeMiterlimit: "10",
      d: "M59.0349,60h-46.07A.9679.9679,0,0,1,12,59.0349v-46.07A.9679.9679,0,0,1,12.9651,12h46.07A.9679.9679,0,0,1,60,12.9651v46.07A.9679.9679,0,0,1,59.0349,60Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "20.95",
      x2: "23.95",
      y1: "21.5",
      y2: "24.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "19.95",
      x2: "22.95",
      y1: "29.5",
      y2: "32.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "27.05",
      x2: "50.05",
      y1: "24",
      y2: "24",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "34.05",
      x2: "34.05",
      y1: "21",
      y2: "29",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "44.05",
      x2: "44.05",
      y1: "21",
      y2: "29",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "26.05",
      x2: "52.05",
      y1: "30",
      y2: "30",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("polyline", {
      transform: "translate(-.4469 .5)",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "39.5 30.5 39.5 44.5 44.5 44.5 44.5 39.5"
    }), /*#__PURE__*/React.createElement("polyline", {
      transform: "translate(-.4469 .5)",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "34.5 39.5 34.5 44.5 34.5 46.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "39.05",
      x2: "35.05",
      y1: "45",
      y2: "45",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "m24.05 40s-1 7-4 9"
    }), /*#__PURE__*/React.createElement("polyline", {
      transform: "translate(-.4469 .5)",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "28.5 50.5 28.5 34.5 49.5 34.5 49.5 49.5 44.5 49.5"
    })), /*#__PURE__*/React.createElement("g", {
      id: "color-foreground",
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "20.95",
      x2: "23.95",
      y1: "21.5",
      y2: "24.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "19.95",
      x2: "22.95",
      y1: "29.5",
      y2: "32.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "27.05",
      x2: "50.05",
      y1: "24",
      y2: "24"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "34.05",
      x2: "34.05",
      y1: "21",
      y2: "29"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "44.05",
      x2: "44.05",
      y1: "21",
      y2: "29"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "26.05",
      x2: "52.05",
      y1: "30",
      y2: "30"
    }), /*#__PURE__*/React.createElement("polyline", {
      transform: "translate(-.4469 .5)",
      points: "39.5 30.5 39.5 44.5 44.5 44.5 44.5 39.5"
    }), /*#__PURE__*/React.createElement("polyline", {
      transform: "translate(-.4469 .5)",
      points: "34.5 39.5 34.5 44.5 34.5 46.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "39.05",
      x2: "35.05",
      y1: "45",
      y2: "45"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m24.05 40s-1 7-4 9"
    }), /*#__PURE__*/React.createElement("polyline", {
      transform: "translate(-.4469 .5)",
      points: "28.5 50.5 28.5 34.5 49.5 34.5 49.5 49.5 44.5 49.5"
    })));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line",
      fill: "none",
      stroke: "#000",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("path", {
      strokeMiterlimit: "10",
      d: "M59.0349,60h-46.07A.9679.9679,0,0,1,12,59.0349v-46.07A.9679.9679,0,0,1,12.9651,12h46.07A.9679.9679,0,0,1,60,12.9651v46.07A.9679.9679,0,0,1,59.0349,60Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "20.95",
      x2: "23.95",
      y1: "21.5",
      y2: "24.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "19.95",
      x2: "22.95",
      y1: "29.5",
      y2: "32.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "27.05",
      x2: "50.05",
      y1: "24",
      y2: "24",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "34.05",
      x2: "34.05",
      y1: "21",
      y2: "29",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "44.05",
      x2: "44.05",
      y1: "21",
      y2: "29",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "26.05",
      x2: "52.05",
      y1: "30",
      y2: "30",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("polyline", {
      transform: "translate(-.4469 .5)",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "39.5 30.5 39.5 44.5 44.5 44.5 44.5 39.5"
    }), /*#__PURE__*/React.createElement("polyline", {
      transform: "translate(-.4469 .5)",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "34.5 39.5 34.5 44.5 34.5 46.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "39.05",
      x2: "35.05",
      y1: "45",
      y2: "45",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "m24.05 40s-1 7-4 9"
    }), /*#__PURE__*/React.createElement("polyline", {
      transform: "translate(-.4469 .5)",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "28.5 50.5 28.5 34.5 49.5 34.5 49.5 49.5 44.5 49.5"
    })));
  }
};

export default JapaneseNoVacancyButton;