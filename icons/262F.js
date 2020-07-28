import React from 'react';

const YinYang = ({
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
      cx: "36",
      cy: "36.8833",
      r: "25",
      fill: "#FFFFFF",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M10.8833,36.8833c0,13.6133,10.8253,24.6897,24.3381,25.0915c-6.5806-0.4018-11.7797-5.8647-11.7797-12.5332 c0-6.9322,5.6137-12.5583,12.5583-12.5583c6.9322,0,12.5583-5.6261,12.5583-12.5583c0-6.6685-5.2117-12.1313-11.7923-12.5332 c-0.2511-0.0126-0.5022-0.0251-0.766-0.0251s-0.5275,0-0.7786,0.0251C21.7086,12.1937,10.8833,23.2701,10.8833,36.8833z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "37.3437",
      cy: "48.9394",
      r: "4.0187",
      fill: "#3F3F3F",
      stroke: "none",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "37.3437",
      cy: "23.8227",
      r: "4.0187",
      fill: "#FFFFFF",
      stroke: "none",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#000000",
      stroke: "#000000",
      strokeMiterlimit: "10",
      d: "M45.2635,60.483"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000000",
      stroke: "#000000",
      strokeMiterlimit: "10",
      d: "M45.2635,60.483"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.4417,49.4417c0,6.6685,5.1992,12.1314,11.7797,12.5332C35.4851,61.9874,35.7362,62,36,62s0.5149-0.0126,0.766-0.0251 c13.5128-0.3893,24.3506-11.4657,24.3506-25.0915c0-13.6258-10.8379-24.7022-24.3506-25.0915 c6.5806,0.4019,11.7923,5.8647,11.7923,12.5332c0,6.9322-5.6261,12.5583-12.5583,12.5583 C29.0554,36.8833,23.4417,42.5094,23.4417,49.4417z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M10.8833,36.8833c0,13.6133,10.8253,24.6897,24.3381,25.0915c-6.5806-0.4018-11.7797-5.8647-11.7797-12.5332 c0-6.9322,5.6137-12.5583,12.5583-12.5583c6.9322,0,12.5583-5.6261,12.5583-12.5583c0-6.6685-5.2117-12.1313-11.7923-12.5332 c-0.2511-0.0126-0.5022-0.0251-0.766-0.0251s-0.5275,0-0.7786,0.0251C21.7086,12.1937,10.8833,23.2701,10.8833,36.8833z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "37.3437",
      cy: "48.9394",
      r: "4.0187",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "37.3437",
      cy: "23.8227",
      r: "4.0187",
      fill: "none",
      stroke: "#000000",
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
      fill: "#000000",
      stroke: "#000000",
      strokeMiterlimit: "10",
      d: "M45.2635,60.483"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000000",
      stroke: "#000000",
      strokeMiterlimit: "10",
      d: "M45.2635,60.483"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.4417,49.4417c0,6.6685,5.1992,12.1314,11.7797,12.5332C35.4851,61.9874,35.7362,62,36,62s0.5149-0.0126,0.766-0.0251 c13.5128-0.3893,24.3506-11.4657,24.3506-25.0915c0-13.6258-10.8379-24.7022-24.3506-25.0915 c6.5806,0.4019,11.7923,5.8647,11.7923,12.5332c0,6.9322-5.6261,12.5583-12.5583,12.5583 C29.0554,36.8833,23.4417,42.5094,23.4417,49.4417z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M10.8833,36.8833c0,13.6133,10.8253,24.6897,24.3381,25.0915c-6.5806-0.4018-11.7797-5.8647-11.7797-12.5332 c0-6.9322,5.6137-12.5583,12.5583-12.5583c6.9322,0,12.5583-5.6261,12.5583-12.5583c0-6.6685-5.2117-12.1313-11.7923-12.5332 c-0.2511-0.0126-0.5022-0.0251-0.766-0.0251s-0.5275,0-0.7786,0.0251C21.7086,12.1937,10.8833,23.2701,10.8833,36.8833z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "37.3437",
      cy: "48.9394",
      r: "4.0187",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "37.3437",
      cy: "23.8227",
      r: "4.0187",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default YinYang;