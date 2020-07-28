import React from 'react';

const Lizard = ({
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
      fill: "#B1CC33",
      stroke: "none",
      d: "M39.9167,47.3583c0,0,7.8819-2.3583,13.9826-0.8583S68,46,68,46s-7.6667,0.6667-15.3333-3.6667 S39,40.8333,32.5,40.4167c-6.5-0.4167-14.1667-4.5833-17.8333-7C11,31,8.5833,31.25,8.5833,31.25S8,32,6,33s-5,2,1,4 s8.8333,5.8333,8.8333,5.8333S21.8333,48.8583,39.9167,47.3583z"
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
      d: "M39.9167,46.5c0,0,7.8819-1.5,13.9826,0S68,46,68,46s-7.6667,0.6667-15.3333-3.6667S39,40.8333,32.5,40.4167 c-6.5-0.4167-14.1667-4.5833-17.8333-7C11,31,8.5833,31.25,8.5833,31.25S8,32,6,33s-5,2,1,4s8.8333,4.8333,8.8333,4.8333"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M21.387,45.0264c0,0,5.7159,1.8069,10.613,1.3902"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "19",
      x2: "16",
      y1: "43",
      y2: "50",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      x2: "15",
      y1: "48",
      y2: "48",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "17",
      x2: "18",
      y1: "48",
      y2: "49",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.5466",
      x2: "36.0791",
      y1: "46.5061",
      y2: "53.3712",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.4177",
      x2: "34.4902",
      y1: "51.7302",
      y2: "52.104",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.3451",
      x2: "37.6034",
      y1: "51.3563",
      y2: "51.803",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39.9167,46.5c0,0,7.8819-1.5,13.9826,0S68,46,68,46s-7.6667,0.6667-15.3333-3.6667S39,40.8333,32.5,40.4167 c-6.5-0.4167-14.1667-4.5833-17.8333-7C11,31,8.5833,31.25,8.5833,31.25S8,32,6,33s-5,2,1,4s8.8333,4.8333,8.8333,4.8333"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M21.387,45.0264c0,0,5.7159,1.8069,10.613,1.3902"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "19",
      x2: "16",
      y1: "43",
      y2: "50",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      x2: "15",
      y1: "48",
      y2: "48",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "17",
      x2: "18",
      y1: "48",
      y2: "49",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.5466",
      x2: "36.0791",
      y1: "46.5061",
      y2: "53.3712",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.4177",
      x2: "34.4902",
      y1: "51.7302",
      y2: "52.104",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.3451",
      x2: "37.6034",
      y1: "51.3563",
      y2: "51.803",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default Lizard;