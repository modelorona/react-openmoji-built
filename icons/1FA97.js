import React from 'react';

const Accordion = ({
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
      id: "line-supplement"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "56.8815",
      cy: "44.306",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "60.7016",
      cy: "38.7196",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "59.7716",
      cy: "42.9274",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "57.8728",
      cy: "40.0561",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "61.6612",
      cy: "34.3952",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "58.8552",
      cy: "35.607",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "59.8269",
      cy: "31.3216",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "19.9122",
      cy: "45.5619",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18.0621",
      cy: "41.6095",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "16.0818",
      cy: "37.5061",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "14.1943",
      cy: "33.538",
      r: "1"
    })), /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#781e32",
      d: "M19.7985,54.9706a1.0011,1.0011,0,0,1-.9053-.5733L6.8219,28.8163A.9993.9993,0,0,1,7.3,27.4852l5.7744-2.7246a.9987.9987,0,0,1,1.3311.4775L26.4762,50.8192a.9991.9991,0,0,1-.4775,1.331l-5.7744,2.7247A.99.99,0,0,1,19.7985,54.9706Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#781e32",
      d: "M60.4611,53.3613a.9924.9924,0,0,1-.4006-.0055l-7.4116-1.6283a1.0005,1.0005,0,0,1-.7626-1.1913l6.0691-27.6269a1.001,1.001,0,0,1,1.1913-.7626l7.4116,1.6283a1.0005,1.0005,0,0,1,.7626,1.1913L61.2518,52.5932a1.0008,1.0008,0,0,1-.7907.7681Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M15.9245,53.0282a3.6458,3.6458,0,0,1-3.2871-2.084L5.7653,36.3827a3.6325,3.6325,0,0,1,1.7354-4.835l2.1015-.9922a.9993.9993,0,0,1,1.3311.4776l9.1181,19.3232a.9994.9994,0,0,1-.4775,1.3311l-2.1016.9912A3.6174,3.6174,0,0,1,15.9245,53.0282Z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#d0cfce",
      points: "28.962 46.828 17.965 22.982 20.891 21.255 28.962 46.828"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#d0cfce",
      points: "34.792 44.759 27.705 17.933 31.046 17.885 34.792 44.759"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#d0cfce",
      points: "41.294 45.068 38.336 16.946 41.209 17.791 41.294 45.068"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#d0cfce",
      points: "48.025 46.637 49.192 19.545 51.119 21.979 48.025 46.637"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "56.8815",
      cy: "44.306",
      r: "1",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "60.7016",
      cy: "38.7196",
      r: "1",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "59.7716",
      cy: "42.9274",
      r: "1",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "57.8728",
      cy: "40.0561",
      r: "1",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "61.6612",
      cy: "34.3952",
      r: "1",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "58.8552",
      cy: "35.607",
      r: "1",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "59.8269",
      cy: "31.3216",
      r: "1",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "19.9122",
      cy: "45.5619",
      r: "1",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18.0621",
      cy: "41.6095",
      r: "1",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "16.0818",
      cy: "37.5061",
      r: "1",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "14.1943",
      cy: "33.538",
      r: "1",
      fill: "#fff"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "43.915 21.386 48.418 20.173 46.997 46.783 43.115 44.371"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "53.664 25.174 58.553 24.705 53.059 49.467 50.177 46.223"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "33.866 19.708 38.112 17.924 40.325 45.383 36.373 43.696"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "23.952 21.272 27.834 18.935 33.98 45.922 29.973 44.889"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "14.73 27.043 18.464 23.839 28.35 47.44 23.837 47.44"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "9.331 31.789 7.727 28.39 13.5 25.665 25.572 51.246 19.798 53.97 18.449 51.112"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M19.1469,50.7828l-3.6775,1.7354a.89.89,0,0,1-1.1841-.4249L5.9263,34.38a.8894.8894,0,0,1,.4249-1.1841L10.0286,31.46"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "55.8095",
      y: "23.6085",
      width: "7.5882",
      height: "28.2857",
      transform: "translate(9.4888 -11.9101) rotate(12.3906)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "9.886",
      x2: "7.1123",
      y1: "35.6425",
      y2: "36.9359",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11.4609",
      x2: "8.6872",
      y1: "38.7342",
      y2: "40.0276",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "13.0537",
      x2: "10.28",
      y1: "41.861",
      y2: "43.1544",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "14.5573",
      x2: "11.7836",
      y1: "45.0317",
      y2: "46.3251",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16.1167",
      x2: "13.3431",
      y1: "48.1973",
      y2: "49.4908",
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
      id: "line-supplement"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "56.8815",
      cy: "44.306",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "60.7016",
      cy: "38.7196",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "59.7716",
      cy: "42.9274",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "57.8728",
      cy: "40.0561",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "61.6612",
      cy: "34.3952",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "58.8552",
      cy: "35.607",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "59.8269",
      cy: "31.3216",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "19.9122",
      cy: "45.5619",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18.0621",
      cy: "41.6095",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "16.0818",
      cy: "37.5061",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "14.1943",
      cy: "33.538",
      r: "1"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "43.915 21.386 48.418 20.173 46.997 46.783 43.115 44.371"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "53.664 25.174 58.553 24.705 53.059 49.467 50.177 46.223"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "33.866 19.708 38.112 17.924 40.325 45.383 36.373 43.696"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "23.952 21.272 27.834 18.935 33.98 45.922 29.973 44.889"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "14.73 27.043 18.464 23.839 28.35 47.44 23.837 47.44"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "9.331 31.789 7.727 28.39 13.5 25.665 25.572 51.246 19.798 53.97 18.449 51.112"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M19.1469,50.7828l-3.6775,1.7354a.89.89,0,0,1-1.1841-.4249L5.9263,34.38a.8894.8894,0,0,1,.4249-1.1841L10.0286,31.46"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "55.8095",
      y: "23.6085",
      width: "7.5882",
      height: "28.2857",
      transform: "translate(9.4888 -11.9101) rotate(12.3906)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "9.886",
      x2: "7.1123",
      y1: "35.6425",
      y2: "36.9359",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11.4609",
      x2: "8.6872",
      y1: "38.7342",
      y2: "40.0276",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "13.0537",
      x2: "10.28",
      y1: "41.861",
      y2: "43.1544",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "14.5573",
      x2: "11.7836",
      y1: "45.0317",
      y2: "46.3251",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16.1167",
      x2: "13.3431",
      y1: "48.1973",
      y2: "49.4908",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default Accordion;