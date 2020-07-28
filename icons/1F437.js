import React from 'react';

const PigFace = ({
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
      fill: "#FFA7C0",
      stroke: "none",
      d: "M26.8377,20.5855c0,0-0.75-5.125-10.375-7.125s-8.625-2.375-8.625-2.375l-1.875,1.875l2.125,9.25 l0.875,6.375l2.625,7l3.75,3.375h5.5l-1.25,8.75l1.25,8.375l2.75,4.25l2,2.25c0,0,13.5,7.25,20.875-1s5.875-15.5,5.875-15.5 l-1.125-7.375l2.875-0.125l4.125-1l3.5-7l1.375-4.875l-0.125-4.25l2.375-6.375l0.125-3.125l-3.125-1l-4.375,1.5l-7.5,2 l-4.875,3.125l-1.125,3.5C44.4627,21.0855,32.9627,19.3355,26.8377,20.5855z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#E67A94",
      stroke: "none",
      points: "35.9627,42.2105 27.9627,45.9605 26.4627,51.0855 27.4627,54.8355 29.7127,55.8355 35.7127,53.9605 40.0877,55.3355 44.3377,54.7105 45.2127,50.5855 43.7127,45.5855"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#E67A94",
      stroke: "none",
      d: "M64.4627,14.0855l-3.375,2.5l-6.875,1.625l-4.875,4.25l-1,4.375c0,0,0.25,8.75,2.5,10.375s5,1.5,5,1.5 l3.125-1.75l3.25-7.375l1-6.25l2.125-8.25L64.4627,14.0855z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#E67A94",
      stroke: "none",
      d: "M7.296,14.0855l3.375,2.5l6.875,1.625l4.875,4.25l1,4.375c0,0-0.25,8.75-2.5,10.375s-5,1.5-5,1.5 l-3.125-1.75l-3.25-7.375l-1-6.25l-2.125-8.25L7.296,14.0855z"
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
      d: "M40.5348,55.6239l-3.9761-1.494c-0.363-0.1364-0.7632-0.1364-1.1261,0l-3.9761,1.494c-2.2002,0.8267-4.5486-0.7996-4.5486-3.1499 v-2.463c0-2.11,1.0916-4.0698,2.8856-5.1806l2.3807-1.4741c2.3414-1.4497,5.3015-1.4497,7.6429,0l2.3807,1.4741 c1.794,1.1108,2.8856,3.0706,2.8856,5.1806v2.463C45.0833,54.8244,42.735,56.4507,40.5348,55.6239z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "32.1846",
      cy: "49.7087",
      rx: "2.6115",
      ry: "1.6068",
      transform: "matrix(0.3327 -0.943 0.943 0.3327 -25.3997 63.5235)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "39.8065",
      cy: "49.7087",
      rx: "1.6068",
      ry: "2.6115",
      transform: "matrix(0.943 -0.3327 0.3327 0.943 -14.2694 16.0738)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "26.0833",
      cy: "36.0855",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "46.0417",
      cy: "36.0855",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25.8333,61.4188c-10.0833-6.5-5.1667-23.1667-5.1667-23.1667c-7.7762,2.9161-9.0215-3.7404-10.9204-8.2062 c-0.7452-1.7525-1.0738-3.6364-1.1634-5.5386C8.4229,21.11,6.9701,16.4312,6.089,13.868c-0.47-1.3674,0.6215-2.7649,2.0621-2.6417 c1.1647,0.0996,2.4527,0.5098,3.5792,0.9664c1.8985,0.7695,3.8733,1.3555,5.9082,1.591c8.4189,0.9743,9.2693,7.3018,9.2693,7.3018 s10.5705-1.75,17.7588,0.25c0,0,0.8287-6.9109,9.2476-7.8852c2.0349-0.2355,4.0098-0.8215,5.9082-1.591 c1.1266-0.4566,2.4145-0.8668,3.5792-0.9664c1.4406-0.1231,2.5321,1.2744,2.0621,2.6417 c-0.8811,2.5633-2.3339,7.242-2.4939,10.6394c-0.0896,1.9022-0.4182,3.7862-1.1634,5.5386 c-1.8989,4.4657-3.1442,11.1222-10.9204,8.2062c0,0,4.9167,16.6667-5.1667,23.1667"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30.8333,59.3355c0,0,4.6667,4,10.6667,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.0625,26.023c0,0-1.375-6.4375-7.1875-8c-5.8125-1.5625-5.5-2.1875-5.5-2.1875"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.8268,26.023c0,0,1.375-6.4375,7.1875-8s5.5-2.1875,5.5-2.1875"
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
      d: "M40.5348,55.6239l-3.9761-1.494c-0.363-0.1364-0.7632-0.1364-1.1261,0l-3.9761,1.494c-2.2002,0.8267-4.5486-0.7996-4.5486-3.1499 v-2.463c0-2.11,1.0916-4.0698,2.8856-5.1806l2.3807-1.4741c2.3414-1.4497,5.3015-1.4497,7.6429,0l2.3807,1.4741 c1.794,1.1108,2.8856,3.0706,2.8856,5.1806v2.463C45.0833,54.8244,42.735,56.4507,40.5348,55.6239z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "32.1846",
      cy: "49.7087",
      rx: "2.6115",
      ry: "1.6068",
      transform: "matrix(0.3327 -0.943 0.943 0.3327 -25.3997 63.5235)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "39.8065",
      cy: "49.7087",
      rx: "1.6068",
      ry: "2.6115",
      transform: "matrix(0.943 -0.3327 0.3327 0.943 -14.2694 16.0738)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "26.0833",
      cy: "36.0855",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "46.0417",
      cy: "36.0855",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25.8333,61.4188c-10.0833-6.5-5.1667-23.1667-5.1667-23.1667c-7.7762,2.9161-9.0215-3.7404-10.9204-8.2062 c-0.7452-1.7525-1.0738-3.6364-1.1634-5.5386C8.4229,21.11,6.9701,16.4312,6.089,13.868c-0.47-1.3674,0.6215-2.7649,2.0621-2.6417 c1.1647,0.0996,2.4527,0.5098,3.5792,0.9664c1.8985,0.7695,3.8733,1.3555,5.9082,1.591c8.4189,0.9743,9.2693,7.3018,9.2693,7.3018 s10.5705-1.75,17.7588,0.25c0,0,0.8287-6.9109,9.2476-7.8852c2.0349-0.2355,4.0098-0.8215,5.9082-1.591 c1.1266-0.4566,2.4145-0.8668,3.5792-0.9664c1.4406-0.1231,2.5321,1.2744,2.0621,2.6417 c-0.8811,2.5633-2.3339,7.242-2.4939,10.6394c-0.0896,1.9022-0.4182,3.7862-1.1634,5.5386 c-1.8989,4.4657-3.1442,11.1222-10.9204,8.2062c0,0,4.9167,16.6667-5.1667,23.1667"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30.8333,59.3355c0,0,4.6667,4,10.6667,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.0625,26.023c0,0-1.375-6.4375-7.1875-8c-5.8125-1.5625-5.5-2.1875-5.5-2.1875"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.8268,26.023c0,0,1.375-6.4375,7.1875-8s5.5-2.1875,5.5-2.1875"
    })));
  }
};

export default PigFace;