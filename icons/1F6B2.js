import React from 'react';

const Bicycle = ({
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
      id: "line"
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M31,45a.9448.9448,0,0,0-1,1,9.2,9.2,0,1,1-9.2-9.2h0l.2-2h-.2A11.2,11.2,0,1,0,32,46,.9448.9448,0,0,0,31,45Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M52.8,34.8a12.2713,12.2713,0,0,0-3.9.7l.9,1.8a10.4735,10.4735,0,0,1,3-.5,9.2,9.2,0,1,1-9.1,9.7l-2-.1A11.1545,11.1545,0,1,0,52.8,34.8Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M48,38.2l-.9-1.8a11.0932,11.0932,0,0,0-5.3,7.9l2,.1A9.3751,9.3751,0,0,1,48,38.2Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23",
      x2: "27",
      y1: "22",
      y2: "22",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "42",
      x2: "48",
      y1: "25.7",
      y2: "25.7",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
      x1: "21.1",
      x2: "22.8",
      y1: "46",
      y2: "24.6",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36",
      x2: "23",
      y1: "45",
      y2: "30",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "45",
      x2: "53",
      y1: "30",
      y2: "46",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23",
      x2: "44",
      y1: "30",
      y2: "30",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "46",
      x2: "36",
      y1: "28.4",
      y2: "45",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36",
      x2: "53",
      y1: "45",
      y2: "46",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }))), /*#__PURE__*/React.createElement("g", {
      id: "color"
    }), /*#__PURE__*/React.createElement("g", {
      id: "color-foreground"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "21.1",
      x2: "22.8",
      y1: "46",
      y2: "24.6",
      fill: "none",
      stroke: "#ea5a47",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2.1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36",
      x2: "23",
      y1: "45",
      y2: "30",
      fill: "none",
      stroke: "#ea5a47",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2.1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "45",
      x2: "53",
      y1: "30",
      y2: "46",
      fill: "none",
      stroke: "#ea5a47",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2.1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23",
      x2: "44",
      y1: "30",
      y2: "30",
      fill: "none",
      stroke: "#ea5a47",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2.1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "46",
      x2: "36",
      y1: "28.4",
      y2: "45",
      fill: "none",
      stroke: "#ea5a47",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2.1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36",
      x2: "53",
      y1: "45",
      y2: "46",
      fill: "none",
      stroke: "#ea5a47",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2.1"
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
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M31,45a.9448.9448,0,0,0-1,1,9.2,9.2,0,1,1-9.2-9.2h0l.2-2h-.2A11.2,11.2,0,1,0,32,46,.9448.9448,0,0,0,31,45Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M52.8,34.8a12.2713,12.2713,0,0,0-3.9.7l.9,1.8a10.4735,10.4735,0,0,1,3-.5,9.2,9.2,0,1,1-9.1,9.7l-2-.1A11.1545,11.1545,0,1,0,52.8,34.8Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M48,38.2l-.9-1.8a11.0932,11.0932,0,0,0-5.3,7.9l2,.1A9.3751,9.3751,0,0,1,48,38.2Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23",
      x2: "27",
      y1: "22",
      y2: "22",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "42",
      x2: "48",
      y1: "25.7",
      y2: "25.7",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
      x1: "21.1",
      x2: "22.8",
      y1: "46",
      y2: "24.6",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36",
      x2: "23",
      y1: "45",
      y2: "30",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "45",
      x2: "53",
      y1: "30",
      y2: "46",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23",
      x2: "44",
      y1: "30",
      y2: "30",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "46",
      x2: "36",
      y1: "28.4",
      y2: "45",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36",
      x2: "53",
      y1: "45",
      y2: "46",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }))));
  }
};

export default Bicycle;