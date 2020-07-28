import React from 'react';

const HackerCat = ({
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
      d: "M17.1347,58.8989s-2-13.5,10-13.5c3.1918,2.1279,5.9264,3.5984,9,3.5922H36.01c3.0736.0062,5.4081-2.1643,8.6-4.2922,15.5705,0,10.8,14.2,10.8,14.2"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#61b2e4",
      points: "49.297 58.861 49.297 45.986 44.806 45.202 44.806 52.447 26.929 52.447 26.931 45.202 22.265 45.986 22.265 58.861 49.297 58.861"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#d0cfce",
      points: "67.087 43.423 60.137 59.772 35.147 59.772 42.097 43.423 67.087 43.423"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#9b9b9a",
      points: "67.303 43.423 60.353 59.772 60.133 59.772 51.363 59.772 58.313 43.423 67.083 43.423 67.303 43.423"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      d: "M49.1631,33.7883C47.05,39.073,41.7439,42.4907,35.532,42.4907c-5.3551,0-11.31-3.3075-13.4233-8.5922l-.0742-.1813c-.67-1.6576-.5622-3.6865-.5622-5.5835L23.6261,9.37l6.0076,5.8429a14.3545,14.3545,0,0,1,5.586-1.1239h.6246a14.3545,14.3545,0,0,1,5.586,1.1239L48.0254,8.79l2.1863,19.6364a14.2672,14.2672,0,0,1-1.04,5.3657"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#e27022",
      d: "M35.532,42.4907c6.2312.1985,11.9553-3.3981,14.0684-8.6828l.0651-.1339c.67-1.6576.5626-3.9976.5626-5.8946L48.0254,8.79"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#b399c8",
      points: "22.652 17.7 22.165 22.428 49.297 20.787 49.014 18.333 22.652 17.7"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#b399c8",
      d: "M50.8972,19.6a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M47.0723,24.9748s-8.1678,3.4075-7.7837,3.84C47.104,35.8307,47.7172,25.9521,47.0723,24.9748Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M24.6281,24.9748s7.5569,4.01,7.7837,3.84C24.8673,36.1987,23.8663,26.5779,24.6281,24.9748Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M53.7216,51.7376a3.42,3.42,0,0,1-2.8489,2c-1.1035,0-1.62-.8955-1.1511-2a3.4212,3.4212,0,0,1,2.849-2c1.1035,0,1.6194.8965,1.151,2"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.8723,48.3986a6.8472,6.8472,0,0,1-1.0665.0811h.125c-3.0736.0063-5.8081-1.4642-9-3.5921-12,0-10,13-10,13"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "35.467 52.133 26.929 52.133 26.931 44.888"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.2649",
      x2: "22.2649",
      y1: "45.7569",
      y2: "57.8666",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "35.147 59.772 60.137 59.772 67.087 43.423 42.097 43.423 35.147 59.772"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "24.1767",
      x2: "35.1467",
      y1: "59.7725",
      y2: "59.7725",
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
      d: "M34.0178,18.9722"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "38.2936",
      x2: "35.8502",
      y1: "35.589",
      y2: "32.5747",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "33.4068",
      x2: "35.8502",
      y1: "35.589",
      y2: "32.5747",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "33.4068",
      x2: "38.2936",
      y1: "32.5747",
      y2: "32.5747",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.8"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M45.6239,32.5747"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M51.1216,35.589"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M41.9588,37.3975"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M47.4565,40.4117"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M49.7667,23.869l.4387,4.1844a13.664,13.664,0,0,1-1.0171,5.189"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M22.5121,33.2423a13.6635,13.6635,0,0,1-1.0171-5.1889l2.138-18.99,6.4492,6.2109a14.175,14.175,0,0,1,5.4626-1.0868h.6108a14.1825,14.1825,0,0,1,5.4632,1.0868l6.4485-6.2109.6655,6.399"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.8",
      d: "M28.1119,39.7219a14.1207,14.1207,0,0,0,7.4329,2.0969h.6108a14.1191,14.1191,0,0,0,7.4329-2.0969"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26.0765,32.5747"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M20.5788,35.589"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M29.7416,37.3975"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M24.2439,40.4117"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "28.5199",
      cy: "27.752",
      rx: "1.2217",
      ry: "1.2057"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "43.1805",
      cy: "27.752",
      rx: "1.2217",
      ry: "1.2057"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "M47.0723,24.9474s-8.1678,3.4075-7.7837,3.84C47.104,35.8033,47.7172,25.9247,47.0723,24.9474Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "50.9216",
      x2: "45.4239",
      y1: "37.1947",
      y2: "34.1804",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "48.6782",
      x2: "43.1805",
      y1: "39.8089",
      y2: "36.7947",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "M24.6281,24.9474s7.5569,4.01,7.7837,3.84C24.8673,36.1712,23.8663,26.5505,24.6281,24.9474Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "20.7788",
      x2: "26.2765",
      y1: "37.1947",
      y2: "34.1804",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23.0222",
      x2: "28.5199",
      y1: "39.8089",
      y2: "36.7947",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      points: "46.998 18.284 22.652 17.7 22.165 22.428 47.005 20.926"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "M50.4972,19.6a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2"
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
      d: "M36.8723,48.3986a6.8472,6.8472,0,0,1-1.0665.0811h.125c-3.0736.0063-5.8081-1.4642-9-3.5921-12,0-10,13-10,13"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "35.467 52.133 26.929 52.133 26.931 44.888"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.2649",
      x2: "22.2649",
      y1: "45.7569",
      y2: "57.8666",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "35.147 59.772 60.137 59.772 67.087 43.423 42.097 43.423 35.147 59.772"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "24.1767",
      x2: "35.1467",
      y1: "59.7725",
      y2: "59.7725",
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
      d: "M34.0178,18.9722"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "38.2936",
      x2: "35.8502",
      y1: "35.589",
      y2: "32.5747",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "33.4068",
      x2: "35.8502",
      y1: "35.589",
      y2: "32.5747",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "33.4068",
      x2: "38.2936",
      y1: "32.5747",
      y2: "32.5747",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.8"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M45.6239,32.5747"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M51.1216,35.589"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M41.9588,37.3975"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M47.4565,40.4117"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M49.7667,23.869l.4387,4.1844a13.664,13.664,0,0,1-1.0171,5.189"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M22.5121,33.2423a13.6635,13.6635,0,0,1-1.0171-5.1889l2.138-18.99,6.4492,6.2109a14.175,14.175,0,0,1,5.4626-1.0868h.6108a14.1825,14.1825,0,0,1,5.4632,1.0868l6.4485-6.2109.6655,6.399"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.8",
      d: "M28.1119,39.7219a14.1207,14.1207,0,0,0,7.4329,2.0969h.6108a14.1191,14.1191,0,0,0,7.4329-2.0969"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26.0765,32.5747"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M20.5788,35.589"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M29.7416,37.3975"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M24.2439,40.4117"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "28.5199",
      cy: "27.752",
      rx: "1.2217",
      ry: "1.2057"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "43.1805",
      cy: "27.752",
      rx: "1.2217",
      ry: "1.2057"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "M47.0723,24.9474s-8.1678,3.4075-7.7837,3.84C47.104,35.8033,47.7172,25.9247,47.0723,24.9474Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "50.9216",
      x2: "45.4239",
      y1: "37.1947",
      y2: "34.1804",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "48.6782",
      x2: "43.1805",
      y1: "39.8089",
      y2: "36.7947",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "M24.6281,24.9474s7.5569,4.01,7.7837,3.84C24.8673,36.1712,23.8663,26.5505,24.6281,24.9474Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "20.7788",
      x2: "26.2765",
      y1: "37.1947",
      y2: "34.1804",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23.0222",
      x2: "28.5199",
      y1: "39.8089",
      y2: "36.7947",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      points: "46.998 18.284 22.652 17.7 22.165 22.428 47.005 20.926"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "M50.4972,19.6a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2"
    })));
  }
};

export default HackerCat;