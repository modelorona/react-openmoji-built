import React from 'react';

const GrinningCat = ({
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
      d: "M58.6655,48.8321c-3.5977,9.1169-12.6313,15.1547-23.2072,15.1547c-9.1173,0-19.256-5.8476-22.8537-14.9645 l-0.1262-0.3127c-1.1415-2.8597-1.9573-6.3599-1.9573-9.6324L14.188,5.7059l11.2282,11.0799 c2.9226-1.2477,6.137-1.9388,9.5103-1.9388H35.99c3.3734,0,6.5877,0.6911,9.5103,1.9388L56.7285,5.7059l3.7223,33.8758 c0,3.2725-0.6283,6.3969-1.7707,9.2566"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#E27022",
      d: "M35.4583,63.9868c10.6088,0.3424,20.3541-6.004,23.9517-15.1209l0.1109-0.231 c1.1415-2.8597,1.9579-6.8965,1.9579-10.169l-4.7503-32.76"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      d: "M55.1059,33.6275c0,0-9.2758-9.2767-13.2519,6.6249C52.4561,48.2037,55.1059,33.6275,55.1059,33.6275z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      d: "M16.8941,33.6275c0,0,9.2758-9.2767,13.2519,6.6249C19.5439,48.2037,16.8941,33.6275,16.8941,33.6275z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      d: "M25.6,48.5238c0,0,7.8,4.16,10.4-3.12c2.6,7.28,10.805,3.0701,10.805,3.0701s-2.6936,4.3812-3.4875,5.2337 c-4.0173,4.3139-9.4006,4.0538-13.6716,0.1167C28.7107,52.9622,25.6,48.5238,25.6,48.5238z"
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
      d: "M55.1059,33.6894c0,0-9.2758-9.2767-13.2519,6.6249C52.4561,48.2656,55.1059,33.6894,55.1059,33.6894z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "62",
      x2: "52.64",
      y1: "54.1278",
      y2: "48.9278",
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
      d: "M52.64,46.8478"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "57.84",
      x2: "48.48",
      y1: "59.3278",
      y2: "54.1278",
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
      d: "M46.4,55.1678"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M13.2916,47.9995c-1.1172-2.7655-1.7316-5.787-1.7316-8.9517l3.64-32.76l10.9799,10.7149c2.858-1.2066,6.0013-1.8749,9.3001-1.8749 h1.04c3.2988,0,6.4421,0.6683,9.3001,1.8749L56.8,6.2878l3.64,32.76c0,3.1647-0.6144,6.1862-1.7316,8.9517"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.8941,33.6894c0,0,9.2758-9.2767,13.2519,6.6249C19.5439,48.2656,16.8941,33.6894,16.8941,33.6894z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "10",
      x2: "19.36",
      y1: "54.1278",
      y2: "48.9278",
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
      d: "M19.36,46.8478"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "14.16",
      x2: "23.52",
      y1: "59.3278",
      y2: "54.1278",
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
      d: "M25.6,55.1678"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "23.52",
      cy: "36.4478",
      r: "2.08"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "48.48",
      cy: "36.4478",
      r: "2.08"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "31.6375",
      x2: "39.9575",
      y1: "45.4657",
      y2: "45.4657",
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
      d: "M25.3975,48.5857c0,0,7.8,4.16,10.4-3.12c2.6,7.28,10.805,3.0701,10.805,3.0701s-2.6936,4.3812-3.4875,5.2337 c-4.0173,4.3139-9.4006,4.0538-13.6716,0.1167C28.5082,53.0241,25.3975,48.5857,25.3975,48.5857z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.722,60.2254"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.279,60.2254"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.7218,60.2252"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.2792,60.2252"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M64,55.2678"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.851,59.3894C26.5154,61.6782,30.8436,63,35.4811,63h1.038c4.6375,0,8.9677-1.3218,12.6301-3.6106"
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
      d: "M55.1059,33.6894c0,0-9.2758-9.2767-13.2519,6.6249C52.4561,48.2656,55.1059,33.6894,55.1059,33.6894z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "62",
      x2: "52.64",
      y1: "54.1278",
      y2: "48.9278",
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
      d: "M52.64,46.8478"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "57.84",
      x2: "48.48",
      y1: "59.3278",
      y2: "54.1278",
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
      d: "M46.4,55.1678"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M13.2916,47.9995c-1.1172-2.7655-1.7316-5.787-1.7316-8.9517l3.64-32.76l10.9799,10.7149c2.858-1.2066,6.0013-1.8749,9.3001-1.8749 h1.04c3.2988,0,6.4421,0.6683,9.3001,1.8749L56.8,6.2878l3.64,32.76c0,3.1647-0.6144,6.1862-1.7316,8.9517"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.8941,33.6894c0,0,9.2758-9.2767,13.2519,6.6249C19.5439,48.2656,16.8941,33.6894,16.8941,33.6894z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "10",
      x2: "19.36",
      y1: "54.1278",
      y2: "48.9278",
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
      d: "M19.36,46.8478"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "14.16",
      x2: "23.52",
      y1: "59.3278",
      y2: "54.1278",
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
      d: "M25.6,55.1678"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "23.52",
      cy: "36.4478",
      r: "2.08"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "48.48",
      cy: "36.4478",
      r: "2.08"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "31.6375",
      x2: "39.9575",
      y1: "45.4657",
      y2: "45.4657",
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
      d: "M25.3975,48.5857c0,0,7.8,4.16,10.4-3.12c2.6,7.28,10.805,3.0701,10.805,3.0701s-2.6936,4.3812-3.4875,5.2337 c-4.0173,4.3139-9.4006,4.0538-13.6716,0.1167C28.5082,53.0241,25.3975,48.5857,25.3975,48.5857z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.722,60.2254"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.279,60.2254"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.7218,60.2252"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.2792,60.2252"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M64,55.2678"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.851,59.3894C26.5154,61.6782,30.8436,63,35.4811,63h1.038c4.6375,0,8.9677-1.3218,12.6301-3.6106"
    })));
  }
};

export default GrinningCat;