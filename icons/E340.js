import React from 'react';

const GardenerMan = ({
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
      d: "M54.8639,62.72s2-14.0205-10-14.0205c-3.1918,2.1279-5.9264,3.5984-9,3.5921h.125c-3.0736.0063-5.8081-1.4642-9-3.5921-12,0-10,14.0205-10,14.0205"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "44.5251",
      y: "48.7399",
      width: "4.2883",
      height: "14.0273",
      fill: "#61b2e4"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "22.056",
      y: "49.3346",
      width: "4.2883",
      height: "13.4326",
      fill: "#61b2e4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ffa7c0",
      stroke: "#ffa7c0",
      strokeMiterlimit: "10",
      d: "M54.4068,44.3468l.1036,2.8821a1.6813,1.6813,0,0,0,2.3552,2.36l.0007.0007a1.9414,1.9414,0,0,0,3.88-.1334h.0013a1.6815,1.6815,0,0,0,2.3588-2.3576h0a1.9415,1.9415,0,0,0,.1347-3.8807,1.6813,1.6813,0,0,0-2.3541-2.3608h-.0045a1.94,1.94,0,0,0-3.879.1155l-.0148.0134c-1.5109-1.1179-3.7719.6526-2.6182,2.3645v.0014a1.9414,1.9414,0,0,0,.1359,3.88"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      d: "M50.0709,48.1752c1.6957,2.0755,1.1915,5.2936,1.1915,5.2936s-3.2537-.1474-4.95-2.2229-1.1915-5.2935-1.1915-5.2935S48.3752,46.1015,50.0709,48.1752Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "58.7771",
      cy: "44.8096",
      r: "1.8896",
      fill: "#d22f27"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M41.6355,21.5508a5.7133,5.7133,0,0,1-5.6542,3.4931s1.0645-4.7593-.2835-4.7593c0,0-5.1794,6.2122-11.0663,8.7219-.0145.0745-.0322.1473-.0458.2222-.0624.3441-.11.6948-.1518,1.0479-.02.1668-.0459.3309-.061.5-.047.5239-.0762,1.0546-.0762,1.5942,0,.4494.0211.8925.0538,1.3311.01.1393.0273.2761.0409.4142.6894,7.0025,5.4556,12.428,11.2439,12.428,5.9927,0,10.8871-5.8153,11.2983-13.1756Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#a57939",
      d: "M24.2038,34.1752s-4.6525-6.8512,2.5534-13.8906c0,0,9.4524-8.71,18.2133,0,7.2059,7.0394,2.5534,13.8906,2.5534,13.8906l-5.66-12.6244A5.7133,5.7133,0,0,1,36.21,25.0439s1.0646-4.7593-.2834-4.7593c0,0-5.1834,6.2171-11.0729,8.7249Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M41.864,31.01a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M33.864,31.01a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M35.8639,41.012a7.6538,7.6538,0,0,1-3.4473-.8579,1,1,0,0,1,.8945-1.7891,5.3774,5.3774,0,0,0,5.1055,0,1,1,0,1,1,.8945,1.7891A7.6537,7.6537,0,0,1,35.8639,41.012Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M16.987,62.063s-2-13,10-13c3.15,2.1,5.86,3.56,8.88,3.59h.12c3.02-.03,5.73-1.49,8.88-3.59.19,0,.38,0,.56.01"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M51.5,51.4733c5.5814,4.09,3.3668,10.59,3.3668,10.59"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.056",
      x2: "22.056",
      y1: "50.6272",
      y2: "62.0497",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "49.5467",
      x2: "49.5467",
      y1: "53.1692",
      y2: "62.0781",
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
      points: "27.195 49.319 27.195 62.05 44.643 62.035 44.643 49.298"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      d: "M24.627,29.013c5.89-2.51,11.07-8.73,11.07-8.73"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.8462,29.0081a17.6084,17.6084,0,0,0-.3209,3.3623c0,7.8276,5.0764,14.1732,11.3386,14.1732,5.97,0,10.8621-5.7671,11.3058-13.0874"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line-2"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M50.0709,47.6729c1.6957,2.0754,1.1915,5.2935,1.1915,5.2935s-3.2537-.1474-4.95-2.2228S45.1211,45.45,45.1211,45.45,48.3752,45.5992,50.0709,47.6729Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M54.073,52.1745c-1.46,1.5071-2.3594,5.579-1.5748,10.0344"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M56.8031,40.02a2.1239,2.1239,0,0,1,4.2452-.1474"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M63.4808,46.6978a2.1238,2.1238,0,1,0,.1473-4.2451"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M63.6282,42.4527a1.84,1.84,0,0,0-2.58-2.58"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M60.9,49.2771a1.84,1.84,0,0,0,2.58-2.58"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M60.8991,49.2758a2.1239,2.1239,0,0,1-4.2452.1473"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M54.0767,46.8406a1.84,1.84,0,0,0,2.58,2.58"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M56.8031,40.02c-1.6529-1.2447-4.1445.7-2.8788,2.5776"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M54.073,46.8443a2.1239,2.1239,0,1,1-.1473-4.2452"
    })), /*#__PURE__*/React.createElement("circle", {
      cx: "58.7771",
      cy: "44.8096",
      r: "1.8896",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M24.2038,34.1752s-4.6525-6.8512,2.5534-13.8906c0,0,9.4524-8.71,18.2133,0,7.2059,7.0394,2.5534,13.8906,2.5534,13.8906l-5.66-12.6244A5.7133,5.7133,0,0,1,36.21,25.0439s1.0646-4.7593-.2834-4.7593c0,0-5.1834,6.2171-11.0729,8.7249Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "58.7771",
      cy: "44.8096",
      r: "1.8896",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "1.5"
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
      d: "M41.864,31.01a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M33.864,31.01a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M35.8639,41.012a7.6538,7.6538,0,0,1-3.4473-.8579,1,1,0,0,1,.8945-1.7891,5.3774,5.3774,0,0,0,5.1055,0,1,1,0,1,1,.8945,1.7891A7.6537,7.6537,0,0,1,35.8639,41.012Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M16.987,62.063s-2-13,10-13c3.15,2.1,5.86,3.56,8.88,3.59h.12c3.02-.03,5.73-1.49,8.88-3.59.19,0,.38,0,.56.01"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M51.5,51.4733c5.5814,4.09,3.3668,10.59,3.3668,10.59"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.056",
      x2: "22.056",
      y1: "50.6272",
      y2: "62.0497",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "49.5467",
      x2: "49.5467",
      y1: "53.1692",
      y2: "62.0781",
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
      points: "27.195 49.319 27.195 62.05 44.643 62.035 44.643 49.298"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      d: "M24.627,29.013c5.89-2.51,11.07-8.73,11.07-8.73"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.8462,29.0081a17.6084,17.6084,0,0,0-.3209,3.3623c0,7.8276,5.0764,14.1732,11.3386,14.1732,5.97,0,10.8621-5.7671,11.3058-13.0874"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line-2"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M50.0709,47.6729c1.6957,2.0754,1.1915,5.2935,1.1915,5.2935s-3.2537-.1474-4.95-2.2228S45.1211,45.45,45.1211,45.45,48.3752,45.5992,50.0709,47.6729Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M54.073,52.1745c-1.46,1.5071-2.3594,5.579-1.5748,10.0344"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M56.8031,40.02a2.1239,2.1239,0,0,1,4.2452-.1474"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M63.4808,46.6978a2.1238,2.1238,0,1,0,.1473-4.2451"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M63.6282,42.4527a1.84,1.84,0,0,0-2.58-2.58"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M60.9,49.2771a1.84,1.84,0,0,0,2.58-2.58"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M60.8991,49.2758a2.1239,2.1239,0,0,1-4.2452.1473"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M54.0767,46.8406a1.84,1.84,0,0,0,2.58,2.58"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M56.8031,40.02c-1.6529-1.2447-4.1445.7-2.8788,2.5776"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M54.073,46.8443a2.1239,2.1239,0,1,1-.1473-4.2452"
    })), /*#__PURE__*/React.createElement("circle", {
      cx: "58.7771",
      cy: "44.8096",
      r: "1.8896",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M24.2038,34.1752s-4.6525-6.8512,2.5534-13.8906c0,0,9.4524-8.71,18.2133,0,7.2059,7.0394,2.5534,13.8906,2.5534,13.8906l-5.66-12.6244A5.7133,5.7133,0,0,1,36.21,25.0439s1.0646-4.7593-.2834-4.7593c0,0-5.1834,6.2171-11.0729,8.7249Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "58.7771",
      cy: "44.8096",
      r: "1.8896",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "1.5"
    })));
  }
};

export default GardenerMan;