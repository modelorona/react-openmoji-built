import React from 'react';

const Scales = ({
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
      fill: "#92d3f5",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M43.2748,23.3423h5.948a4.0713,4.0713,0,0,1,4.0713,4.0714V52.0186A4.0713,4.0713,0,0,1,49.2228,56.09H22.2546a4.0714,4.0714,0,0,1-4.0714-4.0714V27.4137a4.0714,4.0714,0,0,1,4.0714-4.0714H28.63"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36.062",
      cy: "23.2787",
      r: "7.2787",
      fill: "#fff"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.2748,23.3423h4.948a4.0713,4.0713,0,0,1,4.0713,4.0714V52.0186A4.0713,4.0713,0,0,1,49.2228,56.09H22.2546a4.0714,4.0714,0,0,1-4.0714-4.0714V27.4137a4.0714,4.0714,0,0,1,4.0714-4.0714H28.63"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36.062",
      cy: "23.2787",
      r: "7.2787",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M38.39,18.9441a.6217.6217,0,0,0-.8339.2782l-1.89,3.7816a1.1456,1.1456,0,0,0-1.0146.8128,1.182,1.182,0,0,0,2.2691.659,1.1232,1.1232,0,0,0-.14-.9217l1.8872-3.776A.6217.6217,0,0,0,38.39,18.9441Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M46.1273,24.0481a8.14,8.14,0,0,1,.1092,1.3315c0,5.019-4.5886,9.0876-10.2489,9.0876S25.7387,30.3986,25.7387,25.38a8.1373,8.1373,0,0,1,.1417-1.5145"
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
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.2748,23.3423h4.948a4.0713,4.0713,0,0,1,4.0713,4.0714V52.0186A4.0713,4.0713,0,0,1,49.2228,56.09H22.2546a4.0714,4.0714,0,0,1-4.0714-4.0714V27.4137a4.0714,4.0714,0,0,1,4.0714-4.0714H28.63"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36.062",
      cy: "23.2787",
      r: "7.2787",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M38.39,18.9441a.6217.6217,0,0,0-.8339.2782l-1.89,3.7816a1.1456,1.1456,0,0,0-1.0146.8128,1.182,1.182,0,0,0,2.2691.659,1.1232,1.1232,0,0,0-.14-.9217l1.8872-3.776A.6217.6217,0,0,0,38.39,18.9441Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M46.1273,24.0481a8.14,8.14,0,0,1,.1092,1.3315c0,5.019-4.5886,9.0876-10.2489,9.0876S25.7387,30.3986,25.7387,25.38a8.1373,8.1373,0,0,1,.1417-1.5145"
    })));
  }
};

export default Scales;