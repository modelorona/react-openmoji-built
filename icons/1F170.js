import React from 'react';

const AButton = ({
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
      id: "line-supplement"
    }, /*#__PURE__*/React.createElement("g", {
      id: "A_Button"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M59.0349,60.1374h-46.07A.9679.9679,0,0,1,12,59.1723v-46.07a.9679.9679,0,0,1,.9651-.9651h46.07A.9679.9679,0,0,1,60,13.1025v46.07A.9679.9679,0,0,1,59.0349,60.1374Z"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "45.429 46.313 36 24.313 26.571 46.313"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "29.7143",
      x2: "42.2857",
      y1: "41.0457",
      y2: "41.0457",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })))), /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("g", {
      id: "color-2"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#d22f27",
      d: "M59.0349,60h-46.07A.9679.9679,0,0,1,12,59.0349v-46.07A.9679.9679,0,0,1,12.9651,12h46.07A.9679.9679,0,0,1,60,12.9651v46.07A.9679.9679,0,0,1,59.0349,60Z"
    }))), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }), /*#__PURE__*/React.createElement("g", {
      id: "color-foreground"
    }, /*#__PURE__*/React.createElement("g", {
      id: "A_Button-2"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fff",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M59.0349,60h-46.07A.9679.9679,0,0,1,12,59.0349v-46.07A.9679.9679,0,0,1,12.9651,12h46.07A.9679.9679,0,0,1,60,12.9651v46.07A.9679.9679,0,0,1,59.0349,60Z"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "45.429 46.176 36 24.176 26.571 46.176"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "29.7143",
      x2: "42.2857",
      y1: "40.9084",
      y2: "40.9084",
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })))));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line-supplement"
    }, /*#__PURE__*/React.createElement("g", {
      id: "A_Button"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M59.0349,60.1374h-46.07A.9679.9679,0,0,1,12,59.1723v-46.07a.9679.9679,0,0,1,.9651-.9651h46.07A.9679.9679,0,0,1,60,13.1025v46.07A.9679.9679,0,0,1,59.0349,60.1374Z"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "45.429 46.313 36 24.313 26.571 46.313"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "29.7143",
      x2: "42.2857",
      y1: "41.0457",
      y2: "41.0457",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })))), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }));
  }
};

export default AButton;