import React from 'react';

const Parachute = ({
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
      fill: "#b1cc33",
      d: "M60.709,28.9912A24.6027,24.6027,0,0,0,36.1416,8.417c-13.7193,0-24.841,10.88-24.841,24.3005,0,0,3.0573-1.8827,5.1108-.2893a.7149.7149,0,0,0,.7445.0778,11.63,11.63,0,0,1,10.1763.0629.7128.7128,0,0,0,.5473.06c1.5773-.4857,9.6051-2.708,16.679-.0346a.75.75,0,0,0,.6163-.0411,11.6416,11.6416,0,0,1,10.1442-.05.7254.7254,0,0,0,.7574-.0829c2.0348-1.5919,4.906.1853,4.906.1853"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      d: "M55.72,32.5682C51.2562,7.0727,36.1416,8.417,36.1416,8.417s7.76.7192,8.73,24.2229A10.0731,10.0731,0,0,1,55.72,32.5682Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      d: "M56.3414,31.952c1.6572-.05,3.4387-.54,5.5345.6879,0-20.2924-21.8072-23.19-21.8072-23.19s4.8854,1.1285,9.3779,6.7089Z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "32.0805",
      y: "58.353",
      rx: "1.4199",
      width: "6.5859",
      height: "6.5859"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M60.9824,32.6058,38.6664,59.7729"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M60.709,28.9912A24.6027,24.6027,0,0,0,36.1416,8.417c-13.7193,0-24.841,10.88-24.841,24.3005,0,0,3.0573-1.8827,5.1108-.2893a.7149.7149,0,0,0,.7445.0778,11.63,11.63,0,0,1,10.1763.0629.7128.7128,0,0,0,.5473.06c1.5773-.4857,9.6051-2.708,16.679-.0346a.75.75,0,0,0,.6163-.0411,11.6416,11.6416,0,0,1,10.1442-.05.7254.7254,0,0,0,.7574-.0829c2.0348-1.5919,4.906.1853,4.906.1853"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M16.7606,32.57C21.2242,7.0746,36.1416,8.417,36.1416,8.417s-7.5643.7338-8.5346,24.2376l6.78,25.0408"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.8716,32.64,37.2465,58.353"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M55.72,32.5682C51.2562,7.0727,36.1416,8.417,36.1416,8.417s7.76.7192,8.73,24.2229"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16.7606",
      x2: "33.5004",
      y1: "32.6598",
      y2: "58.353",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "55.7199",
      x2: "37.2465",
      y1: "32.6898",
      y2: "58.353",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11.3006",
      x2: "32.0805",
      y1: "32.7175",
      y2: "59.7729",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "32.0805",
      y: "58.353",
      rx: "1.4199",
      width: "6.5859",
      height: "6.5859",
      fill: "none",
      stroke: "#000",
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
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M60.9824,32.6058,38.6664,59.7729"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M60.709,28.9912A24.6027,24.6027,0,0,0,36.1416,8.417c-13.7193,0-24.841,10.88-24.841,24.3005,0,0,3.0573-1.8827,5.1108-.2893a.7149.7149,0,0,0,.7445.0778,11.63,11.63,0,0,1,10.1763.0629.7128.7128,0,0,0,.5473.06c1.5773-.4857,9.6051-2.708,16.679-.0346a.75.75,0,0,0,.6163-.0411,11.6416,11.6416,0,0,1,10.1442-.05.7254.7254,0,0,0,.7574-.0829c2.0348-1.5919,4.906.1853,4.906.1853"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M16.7606,32.57C21.2242,7.0746,36.1416,8.417,36.1416,8.417s-7.5643.7338-8.5346,24.2376l6.78,25.0408"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.8716,32.64,37.2465,58.353"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M55.72,32.5682C51.2562,7.0727,36.1416,8.417,36.1416,8.417s7.76.7192,8.73,24.2229"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16.7606",
      x2: "33.5004",
      y1: "32.6598",
      y2: "58.353",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "55.7199",
      x2: "37.2465",
      y1: "32.6898",
      y2: "58.353",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11.3006",
      x2: "32.0805",
      y1: "32.7175",
      y2: "59.7729",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "32.0805",
      y: "58.353",
      rx: "1.4199",
      width: "6.5859",
      height: "6.5859",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default Parachute;