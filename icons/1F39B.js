import React from 'react';

const ControlKnobs = ({
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
      fill: "#D0CFCE",
      stroke: "none",
      d: "M13.8627,12.1552c-1.1508,0-2.0876,0.9362-2.0876,2.0876v43.5128c0,1.1508,0.9368,2.0876,2.0876,2.0876 h43.5139c1.1508,0,2.0876-0.9368,2.0876-2.0876V14.2428c0-1.1514-0.9368-2.0876-2.0876-2.0876H13.8627z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      stroke: "none",
      d: "M18.3877,47.8604c0-0.5528,1.4504,2.0709,1.4504,2.0709s2.3432,2.9292,4.5493,2.9292s5-2.794,5-5 c0-2.2061-0.7639-4.5707-2.97-4.5707c-0.5527,0-2.5849-1.4257-2.0346-1.4285c-0.0067,0-0.0132-0.0009-0.0198-0.0009 c-1.5741,0-3.002,0.6109-4.0723,1.6024l-1.2249,1.5816c-0.4475,0.84-0.703,1.7979-0.703,2.8161"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      stroke: "none",
      d: "M50.8994,43.6182c0.3906,0.3906-1.0234,0.5113-1.414,0.1206c-1.5118-1.5117-4.1456-1.7685-5.6573-0.2568 c-0.7558,0.7559-2.3559,2.969-2.3559,4.0374c0,1.0683,0.8929,3.1207,1.6487,3.8766c1.5586,1.5585,4.7518,1.8046,6.3124,0.2461 c0.3906-0.3907,1.8563,0.0683,1.4677,0.459c0.8179-0.8186,1.3997-1.8728,1.6368-3.0517l0.0579-1.9982 c-0.2074-1.5344-0.9886-2.8865-2.128-3.8247C50.6166,43.3495,50.761,43.4797,50.8994,43.6182z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      stroke: "none",
      d: "M30.302,24.7566c-0.1589-1.1738-0.6542-2.2388-1.3899-3.095c0.2868,0.4086-0.9581,0.4745-1.3262,0.0629 c-0.7139-0.7949-1.6947-1.0792-2.7611-1.1373c-1.0722-0.0499-2.9824,0.2682-3.7783,0.981 c-0.7949,0.7139-1.6015,2.4796-1.6591,3.5465c-0.0586,1.0674-0.1538,2.4763,0.5601,3.2713 c0.7138,0.7954,3.157,2.3541,4.2244,2.4117c1.0576,0.0508,4.6217-1.235,4.2928-0.8597c0.891-0.8364,1.5295-1.9377,1.7797-3.1826 L30.302,24.7566z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      stroke: "none",
      d: "M51.7237,22.3636l-1.3348-1.4893c-0.9584-0.7633-2.1552-1.235-3.4612-1.2935 c0.5337,0.0405-1.3506,1.1086-1.3506,1.1086s-3.8299,2.4771-3.9168,4.6807c-0.086,2.2031,2.6346,5.145,4.8387,5.2329 c2.2002,0.0898,4.958-1.7837,5.0449-3.9873c0.0215-0.5522,1.1056-1.3812,1.1023-0.8443c0.0024-0.0684,0.0104-0.1352,0.0104-0.2042 C52.6566,24.3878,52.3115,23.2913,51.7237,22.3636z"
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
      d: "M56.4636,59.8432h-41.688c-1.6569,0-3-1.3431-3-3v-41.688c0-1.6569,1.3431-3,3-3h41.688c1.6569,0,3,1.3431,3,3v41.688 C59.4636,58.5001,58.1205,59.8432,56.4636,59.8432z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51.6525,25.7643c-0.1089,2.7593-2.434,4.9079-5.1932,4.799c-2.7594-0.1089-4.9079-2.434-4.799-5.1932 c0.1089-2.7593,2.4339-4.9079,5.1932-4.799"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.7268,29.2886c-2.0552,1.8442-5.2165,1.6732-7.0608-0.382c-1.8442-2.0552-1.6732-5.2165,0.382-7.0608 c2.0552-1.8442,5.2165-1.6732,7.0608,0.382"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.1919,51.396c-1.9526,1.9527-5.1184,1.9526-7.071,0c-1.9527-1.9526-1.9527-5.1184,0-7.071c1.9526-1.9526,5.1184-1.9527,7.071,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.3874,42.8605c2.7614,0,5,2.2386,5,5c0,2.7615-2.2386,5-5,5c-2.7614,0-5-2.2385-5-5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "24.3874",
      x2: "18.7823",
      y1: "47.8605",
      y2: "43.5674",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "53.492",
      x2: "46.6564",
      y1: "48.0799",
      y2: "47.8605",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "31.3463",
      x2: "24.1665",
      y1: "25.7985",
      y2: "25.5152",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "51.6564",
      x2: "46.6564",
      y1: "21.0804",
      y2: "25.5672",
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
      d: "M56.4636,59.8432h-41.688c-1.6569,0-3-1.3431-3-3v-41.688c0-1.6569,1.3431-3,3-3h41.688c1.6569,0,3,1.3431,3,3v41.688 C59.4636,58.5001,58.1205,59.8432,56.4636,59.8432z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51.6525,25.7643c-0.1089,2.7593-2.434,4.9079-5.1932,4.799c-2.7594-0.1089-4.9079-2.434-4.799-5.1932 c0.1089-2.7593,2.4339-4.9079,5.1932-4.799"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.7268,29.2886c-2.0552,1.8442-5.2165,1.6732-7.0608-0.382c-1.8442-2.0552-1.6732-5.2165,0.382-7.0608 c2.0552-1.8442,5.2165-1.6732,7.0608,0.382"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.1919,51.396c-1.9526,1.9527-5.1184,1.9526-7.071,0c-1.9527-1.9526-1.9527-5.1184,0-7.071c1.9526-1.9526,5.1184-1.9527,7.071,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.3874,42.8605c2.7614,0,5,2.2386,5,5c0,2.7615-2.2386,5-5,5c-2.7614,0-5-2.2385-5-5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "24.3874",
      x2: "18.7823",
      y1: "47.8605",
      y2: "43.5674",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "53.492",
      x2: "46.6564",
      y1: "48.0799",
      y2: "47.8605",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "31.3463",
      x2: "24.1665",
      y1: "25.7985",
      y2: "25.5152",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "51.6564",
      x2: "46.6564",
      y1: "21.0804",
      y2: "25.5672",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default ControlKnobs;