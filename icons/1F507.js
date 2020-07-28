import React from 'react';

const MutedSpeaker = ({
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
      fill: "#d0cfce",
      stroke: "#d0cfce",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.7701,47.4133l16.436,13.128l-0.001-49.166l-16.435,13.346"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "33.7149",
      x2: "33.7149",
      y1: "24.8011",
      y2: "46.0511",
      fill: "#d0cfce",
      stroke: "#d0cfce",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      stroke: "#9b9b9a",
      strokeMiterlimit: "10",
      strokeWidth: "1.9381",
      d: "M32.7926,24.7213H20.8553 c-1.554,0.005-2.8125,1.3452-2.8172,3v16.692c0.0047,1.6548,1.2632,2.995,2.8172,3h11.9373"
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
      strokeWidth: "2",
      d: "M50.2195,45.4881 l-0.0007-34.1129l-16.435,13.346h-4.1277"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M20.2294,24.8434 c-1.2445,0.3664-2.1535,1.5155-2.1576,2.8778v16.692c0.005,1.6548,1.3452,2.995,3,3h12.712l16.436,13.128l-0.0001-5.659"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "33.7838",
      x2: "33.7838",
      y1: "25.3332",
      y2: "29",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "33.7838",
      x2: "33.7838",
      y1: "39",
      y2: "47.051",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M30.1632,28"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M30.1632,28"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11.6048",
      x2: "60.1048",
      y1: "11.7825",
      y2: "60.2825",
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M50.2195,45.4881 l-0.0007-34.1129l-16.435,13.346h-4.1277"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M20.2294,24.8434 c-1.2445,0.3664-2.1535,1.5155-2.1576,2.8778v16.692c0.005,1.6548,1.3452,2.995,3,3h12.712l16.436,13.128l-0.0001-5.659"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "33.7838",
      x2: "33.7838",
      y1: "25.3332",
      y2: "29",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "33.7838",
      x2: "33.7838",
      y1: "39",
      y2: "47.051",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M30.1632,28"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M30.1632,28"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11.6048",
      x2: "60.1048",
      y1: "11.7825",
      y2: "60.2825",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default MutedSpeaker;