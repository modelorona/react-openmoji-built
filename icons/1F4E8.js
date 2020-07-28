import React from 'react';

const IncomingEnvelope = ({
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "27.5987",
      y: "23.8185",
      rx: "1.5627",
      width: "37.5107",
      height: "23.4538",
      fill: "#d0cfce"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      d: "M65.1522,24.5967V44.5922a4.1748,4.1748,0,0,1-.3759,1.729L56.282,38.5034l-.7517.0751-3.082-2.8565Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "5.7967",
      x2: "22.1067",
      y1: "41.904",
      y2: "41.904",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "9.2917",
      x2: "22.1067",
      y1: "34.914",
      y2: "34.914",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.512,38.5785l-8.4192,7.7427a3.9028,3.9028,0,0,1-.451-1.729v-19.92"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M57.5383,39.399,64.83,46.11a3.5861,3.5861,0,0,0,.3226-1.4841V24.5967"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M55.4551,37.7517l9.2461,8.4943a1.6075,1.6075,0,0,1-1.3531.9772H29.3707a1.78,1.78,0,0,1-1.3531-.902l9.0957-8.344"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M65.1522,24.5967l-12.0274,11.05-3.3827,3.1572c-.15.15-.3759.3006-.5262.451a4.6338,4.6338,0,0,1-5.7882,0c-.15-.15-.3758-.3007-.5262-.451L39.5188,35.722l-11.877-11.05c0-.0752.0751-.0752.0751-.15A1.5333,1.5333,0,0,1,28.92,23.77H63.8743a1.6558,1.6558,0,0,1,1.2027.6766C65.077,24.5215,65.1522,24.5215,65.1522,24.5967Z"
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
      x1: "5.7967",
      x2: "22.1067",
      y1: "41.904",
      y2: "41.904",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "9.2917",
      x2: "22.1067",
      y1: "34.914",
      y2: "34.914",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.512,38.5785l-8.4192,7.7427a3.9028,3.9028,0,0,1-.451-1.729v-19.92"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M57.5383,39.399,64.83,46.11a3.5861,3.5861,0,0,0,.3226-1.4841V24.5967"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M55.4551,37.7517l9.2461,8.4943a1.6075,1.6075,0,0,1-1.3531.9772H29.3707a1.78,1.78,0,0,1-1.3531-.902l9.0957-8.344"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M65.1522,24.5967l-12.0274,11.05-3.3827,3.1572c-.15.15-.3759.3006-.5262.451a4.6338,4.6338,0,0,1-5.7882,0c-.15-.15-.3758-.3007-.5262-.451L39.5188,35.722l-11.877-11.05c0-.0752.0751-.0752.0751-.15A1.5333,1.5333,0,0,1,28.92,23.77H63.8743a1.6558,1.6558,0,0,1,1.2027.6766C65.077,24.5215,65.1522,24.5215,65.1522,24.5967Z"
    })));
  }
};

export default IncomingEnvelope;