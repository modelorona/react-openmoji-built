import React from 'react';

const Shelter = ({
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
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "#92d3f5",
      points: "11.462 25.611 35.795 9.177 60.063 25.541 60.063 62.014 54.196 62.014 54.196 32.787 35.788 20.368 17.329 32.857 17.329 62.014 11.462 62.014 11.462 25.611"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M44.6937,51.12l2.8236.1976A45.9812,45.9812,0,0,1,46.42,46.4285c-.1-1.1475.05-4.64.05-4.64a2.8911,2.8911,0,0,0-2.911-2.4944H38.4278c-1.3969,0-1.62-.0212-3.4587-.0212h-7.48a2.4236,2.4236,0,0,0-2.405,2.4756s-.05,3.4659-.1486,4.6046c-.099,1.2379-.7426,5.0008-.7426,5.0008l2.7486.3095-.6064,9.2323c-.0037.6123.6984,1.47,1.0944,1.47.5817,0,1.3436-.48,1.3913-.99l1.2378-11.2094c.05-.5447.8233-.8206,1.3628-.8206a1.3351,1.3351,0,0,1,1.095,1.5025L32.03,56.38l2.0557.9474.3168,5.8958c.001.5394.2026.6726.7756.6726h1.0869c.4447,0,.7-.0973.7313-.8605l.4963-5.7079,2.0557-.9474-.5027-5.44c-.051-.663.4235-1.5671,1.1514-1.5671.6683,0,1.2927.1793,1.3963.9147l1.1645,10.3907c.0976.6856.5812,1.6825,1.3922,1.6825a1.2565,1.2565,0,0,0,1.1848-1.1674S44.993,54.1133,44.6937,51.12Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "31.2056",
      cy: "33.8729",
      r: "2.7168",
      fill: "#fcea2b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40.7019",
      cy: "33.8729",
      r: "2.7168",
      fill: "#fcea2b"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "60.0633",
      x2: "60.0633",
      y1: "61.4636",
      y2: "20.1288",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.7945",
      x2: "63.8",
      y1: "9.2474",
      y2: "28.0984",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11.4616",
      x2: "11.4616",
      y1: "61.4636",
      y2: "20.1288",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "17.329 61.464 17.329 32.857 35.737 20.438 35.788 20.438 54.196 32.857 54.196 61.464"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.7304",
      x2: "7.7249",
      y1: "9.2474",
      y2: "28.0984",
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
      d: "M30.0582,50.1659,28.82,61.3753c-.0477.51-.81.99-1.3913.99a1.2679,1.2679,0,0,1-1.12-1.0926l1.2612-18.86"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M23.8757,51.3542s.6437-3.7629.7427-5.0008c.099-1.1387.1485-4.6046.1485-4.6046a2.4237,2.4237,0,0,1,2.4051-2.4756h7.2243"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.07,42.2877a5.9857,5.9857,0,0,0-.8914,3.224c0,1.5625,1.34,3.4821,1.34,4.5112.2993,2.9933.8156,11.17.8156,11.17A1.2565,1.2565,0,0,1,44.15,62.36a1.3687,1.3687,0,0,1-1.3345-1.1674L41.5682,50.07"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.6367,41.4589a2.3275,2.3275,0,0,1,2.5942-2.1645h4.6445a2.8911,2.8911,0,0,1,2.911,2.4944s-.15,3.4923-.05,4.64a46.0007,46.0007,0,0,0,1.0976,4.8891"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.2682,62.9868l.24-6.293"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.9646,56.6938l.2388,6.3645"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M37.0315,49.5446h.3109a1.5021,1.5021,0,0,1,1.6685,1.6311l.4845,5.2043"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.366,49.5446H34.13a1.5021,1.5021,0,0,0-1.6685,1.6311L31.9771,56.38"
    })), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.0081,47.1064a1.671,1.671,0,0,1-.3906-1.1731,2.0253,2.0253,0,1,1,3.6765,1.1731"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "31.2056",
      cy: "33.8729",
      r: "2.7168",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40.7019",
      cy: "33.8729",
      r: "2.7168",
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
    }, /*#__PURE__*/React.createElement("line", {
      x1: "60.0633",
      x2: "60.0633",
      y1: "61.4636",
      y2: "20.1288",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.7945",
      x2: "63.8",
      y1: "9.2474",
      y2: "28.0984",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11.4616",
      x2: "11.4616",
      y1: "61.4636",
      y2: "20.1288",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "17.329 61.464 17.329 32.857 35.737 20.438 35.788 20.438 54.196 32.857 54.196 61.464"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.7304",
      x2: "7.7249",
      y1: "9.2474",
      y2: "28.0984",
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
      d: "M30.0582,50.1659,28.82,61.3753c-.0477.51-.81.99-1.3913.99a1.2679,1.2679,0,0,1-1.12-1.0926l1.2612-18.86"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M23.8757,51.3542s.6437-3.7629.7427-5.0008c.099-1.1387.1485-4.6046.1485-4.6046a2.4237,2.4237,0,0,1,2.4051-2.4756h7.2243"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.07,42.2877a5.9857,5.9857,0,0,0-.8914,3.224c0,1.5625,1.34,3.4821,1.34,4.5112.2993,2.9933.8156,11.17.8156,11.17A1.2565,1.2565,0,0,1,44.15,62.36a1.3687,1.3687,0,0,1-1.3345-1.1674L41.5682,50.07"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.6367,41.4589a2.3275,2.3275,0,0,1,2.5942-2.1645h4.6445a2.8911,2.8911,0,0,1,2.911,2.4944s-.15,3.4923-.05,4.64a46.0007,46.0007,0,0,0,1.0976,4.8891"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.2682,62.9868l.24-6.293"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.9646,56.6938l.2388,6.3645"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M37.0315,49.5446h.3109a1.5021,1.5021,0,0,1,1.6685,1.6311l.4845,5.2043"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.366,49.5446H34.13a1.5021,1.5021,0,0,0-1.6685,1.6311L31.9771,56.38"
    })), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.0081,47.1064a1.671,1.671,0,0,1-.3906-1.1731,2.0253,2.0253,0,1,1,3.6765,1.1731"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "31.2056",
      cy: "33.8729",
      r: "2.7168",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40.7019",
      cy: "33.8729",
      r: "2.7168",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default Shelter;