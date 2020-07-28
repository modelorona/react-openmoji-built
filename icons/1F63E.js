import React from 'react';

const PoutingCat = ({
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
      fill: "#F4AA41",
      d: "M58.6655,48.9736c-3.5976,9.1169-12.6313,15.0129-23.2072,15.0129c-9.1173,0-19.256-5.7059-22.8536-14.8228 l-0.1262-0.3127c-1.1415-2.8597-0.9573-6.3599-0.9573-9.6324l3.6669-32.3712l10.2281,10.0799 c2.9226-1.2477,6.137-1.9388,9.5103-1.9388H35.99c3.3733,0,6.5877,0.6911,9.5103,1.9388L56.7285,5.8474l3.7223,33.8758 c0,3.2725-0.6283,6.3969-1.7707,9.2566"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#E27022",
      d: "M35.4583,63.9865C46.0671,64.329,55.8124,58.1243,59.41,49.0074l0.1109-0.231 c1.1415-2.8597,0.9579-6.8965,0.9579-10.169l-3.7503-32.76"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      d: "M55.1059,33.769c0,0-13.9059,5.8784-13.2519,6.6249C55.1598,52.4971,56.2038,35.4549,55.1059,33.769z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      d: "M16.8941,33.769c0,0,12.8659,6.9184,13.2519,6.6249C17.3013,53.1318,15.5971,36.5345,16.8941,33.769z"
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
      d: "M64,55.3002"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.16",
      x2: "36",
      y1: "52.08",
      y2: "46.88",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "31.84",
      x2: "36",
      y1: "52.08",
      y2: "46.88",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "31.84",
      x2: "40.16",
      y1: "46.88",
      y2: "46.88",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.1059,33.7217c0,0-13.9059,5.8784-13.2519,6.6249C55.1598,52.4498,56.2038,35.4076,55.1059,33.7217z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "62",
      x2: "52.64",
      y1: "54.16",
      y2: "48.96",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52.64,46.88"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M62,52.08"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "57.84",
      x2: "48.48",
      y1: "59.36",
      y2: "54.16",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.4,55.2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.76,60.4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M13.2916,48.0317c-1.1172-2.7655-1.7316-5.787-1.7316-8.9517L15.2,6.32l10.9799,10.7149c2.858-1.2066,6.0013-1.8749,9.3001-1.8749 h1.04c3.2988,0,6.4411,0.6683,9.3011,1.8749L56.8,6.3201l3.64,32.76c0,3.1647-0.6144,6.1862-1.7316,8.9517"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.8253,59.3824C26.4968,61.6757,30.8335,63,35.48,63h1.04c4.6465,0,8.9842-1.3243,12.6547-3.6176"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.8941,33.7217c0,0,12.8659,6.9184,13.2519,6.6249C17.3013,53.0845,15.5971,36.4872,16.8941,33.7217z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "10",
      x2: "19.36",
      y1: "54.16",
      y2: "48.96",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19.36,46.88"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M10,52.08"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "14.16",
      x2: "23.52",
      y1: "59.36",
      y2: "54.16",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25.6,55.2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.24,60.4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "23.52",
      cy: "38.5601",
      r: "2.08"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "48.48",
      cy: "38.5601",
      r: "2.08"
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
      d: "M64,55.3002"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.16",
      x2: "36",
      y1: "52.08",
      y2: "46.88",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "31.84",
      x2: "36",
      y1: "52.08",
      y2: "46.88",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "31.84",
      x2: "40.16",
      y1: "46.88",
      y2: "46.88",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.1059,33.7217c0,0-13.9059,5.8784-13.2519,6.6249C55.1598,52.4498,56.2038,35.4076,55.1059,33.7217z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "62",
      x2: "52.64",
      y1: "54.16",
      y2: "48.96",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52.64,46.88"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M62,52.08"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "57.84",
      x2: "48.48",
      y1: "59.36",
      y2: "54.16",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.4,55.2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.76,60.4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M13.2916,48.0317c-1.1172-2.7655-1.7316-5.787-1.7316-8.9517L15.2,6.32l10.9799,10.7149c2.858-1.2066,6.0013-1.8749,9.3001-1.8749 h1.04c3.2988,0,6.4411,0.6683,9.3011,1.8749L56.8,6.3201l3.64,32.76c0,3.1647-0.6144,6.1862-1.7316,8.9517"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.8253,59.3824C26.4968,61.6757,30.8335,63,35.48,63h1.04c4.6465,0,8.9842-1.3243,12.6547-3.6176"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.8941,33.7217c0,0,12.8659,6.9184,13.2519,6.6249C17.3013,53.0845,15.5971,36.4872,16.8941,33.7217z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "10",
      x2: "19.36",
      y1: "54.16",
      y2: "48.96",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19.36,46.88"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M10,52.08"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "14.16",
      x2: "23.52",
      y1: "59.36",
      y2: "54.16",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25.6,55.2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.24,60.4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "23.52",
      cy: "38.5601",
      r: "2.08"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "48.48",
      cy: "38.5601",
      r: "2.08"
    })));
  }
};

export default PoutingCat;