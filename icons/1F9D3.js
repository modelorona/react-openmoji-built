import React from 'react';

const OlderPerson = ({
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
      fill: "#92D3F5",
      d: "M55,60.998V57c0-4.9941-5.0059-9-10-9c-6,5-12,5-18,0c-4.9922,0-10,4.0059-10,9v3.998H55z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M25,39c-2,0-4-10-4-13c0-4,5-14,15-14s15,8,15,14c0,5-3,14-5,14"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M25,31.5C25,39.7861,29,46,35.9365,46C43,46,47,39.7861,47,31.5c0-6.2144-3-11.3931-4-12.4287 C41,17,40,17,40,17c-2,1.0356-9,0-11,2.0713C28,20.1069,25,25.2856,25,31.5z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M27.0957,41 c-4-2-5.4473-8.0303-6-13c-1-9,6-16,15-16c10,0,16,7,15,16.1538c-0.7432,6.8062-3,11.8462-6,12.8462"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M25.0957,31.5c0,8.2861,4,14.5,10.9365,14.5 c7.0635,0,11.0635-6.2139,11.0635-14.5c0-6.2144-1.2158-8.1025-2-9.3213c-2-3.1074-4-5.1787-4-5.1787c-2,1.0356-10,0-12,2.0713 C28.0957,20.1069,25.0957,25.2856,25.0957,31.5z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M17,60v-3 c0-4.9941,5.0078-9,10-9c6,5,12,5,18,0c4.9941,0,10,4.0059,10,9v3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M38.127,38.4375 c-1.2481,0.75-2.5821,0.75-4,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M31.127,36.4375 c0,1-1,2-1,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M41.127,36.4375 c0,1,1,2,1,2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M42,29.4375c0,1.1045-0.8955,2-2,2s-2-0.8955-2-2s0.8955-2,2-2S42,28.333,42,29.4375"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34,29.4375c0,1.1045-0.8955,2-2,2s-2-0.8955-2-2s0.8955-2,2-2S34,28.333,34,29.4375"
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
      d: "M27.0957,41 c-4-2-5.4473-8.0303-6-13c-1-9,6-16,15-16c10,0,16,7,15,16.1538c-0.7432,6.8062-3,11.8462-6,12.8462"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M25.0957,31.5c0,8.2861,4,14.5,10.9365,14.5 c7.0635,0,11.0635-6.2139,11.0635-14.5c0-6.2144-1.2158-8.1025-2-9.3213c-2-3.1074-4-5.1787-4-5.1787c-2,1.0356-10,0-12,2.0713 C28.0957,20.1069,25.0957,25.2856,25.0957,31.5z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M17,60v-3 c0-4.9941,5.0078-9,10-9c6,5,12,5,18,0c4.9941,0,10,4.0059,10,9v3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M38.127,38.4375 c-1.2481,0.75-2.5821,0.75-4,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M31.127,36.4375 c0,1-1,2-1,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M41.127,36.4375 c0,1,1,2,1,2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M42,29.4375c0,1.1045-0.8955,2-2,2s-2-0.8955-2-2s0.8955-2,2-2S42,28.333,42,29.4375"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34,29.4375c0,1.1045-0.8955,2-2,2s-2-0.8955-2-2s0.8955-2,2-2S34,28.333,34,29.4375"
    })));
  }
};

export default OlderPerson;