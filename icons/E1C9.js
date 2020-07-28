import React from 'react';

const RaspberryPi = ({
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
      fill: "#EA5A47",
      stroke: "none",
      d: "M19.9502,25.5384c0,0-2.5794,1.5485-3.1555,4.0953s0.0005,5.3368,0.0005,5.3368 s-4.0466,1.6684-4.0466,6.9178s3.4132,6.7328,3.4132,6.7328s0.0403,6.1949,3.859,9.5361c3.8187,3.3412,7.8262,3.3565,7.8262,3.3565 s2.0841,4.4087,8.2153,4.4087s8.2153-4.4087,8.2153-4.4087s4.1496-0.606,7.8262-3.3565c3.6766-2.7504,3.5755-9.5361,3.5755-9.5361 s3.6966-1.4834,3.6966-6.7328s-4.0466-6.9178-4.0466-6.9178s0.5766-2.7901,0.0005-5.3368s-3.1555-4.0953-3.1555-4.0953"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      stroke: "none",
      d: "M55.4477,33.4279c0-10.7186-8.6891-13.7384-19.4077-13.7384s-19.4077,3.0198-19.4077,13.7384 S25.3214,52.8356,36.04,52.8356S55.4477,44.1465,55.4477,33.4279z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D22F27",
      stroke: "none",
      d: "M36.6573,65.9076c0,0,5.2476-3.6702,4.9048-12.1107c2.2569-2.3481,2.9566-5.5031,0.9072-9.3371 c3.463-4.9359,3.103-10.2761-1.0411-14.3243c1.7074-2.4634,0.8148-4.5971-1.1157-6.2005c0,0,5.5557,2.7244,9.8102-1.1714 c0,0,8.9433,6.4302,5.2066,12.207c0,0,9.8734,6.6729,0.35,13.6506c0,0,1.391,10.6345-11.1605,12.8505 C44.5187,61.4715,41.2148,65.2103,36.6573,65.9076z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B1CC33",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.7803,11.2616C51.51,31.1894,38.4049,24.395,36.6244,20.8907C34.844,17.3864,36.5642,3.4328,55.7803,11.2616z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B1CC33",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.344,11.2616c4.2703,19.9278,17.3754,13.1334,19.1558,9.6291C37.2803,17.3864,35.5602,3.4328,16.344,11.2616z"
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
      d: "M55.7803,11.2616C51.51,31.1894,38.4049,24.395,36.6244,20.8907C34.844,17.3864,36.5642,3.4328,55.7803,11.2616z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.5723,15.2944c-3.1311,1.2014-7.1389,3.1342-8.9149,5.6542"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.344,11.2616c4.2703,19.9278,17.3754,13.1334,19.1558,9.6291C37.2803,17.3864,35.5602,3.4328,16.344,11.2616z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.5521,15.2944c3.1311,1.2014,7.1389,3.1342,8.9149,5.6542"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19.9502,25.5384c0,0-2.5794,1.5485-3.1555,4.0953s0.0005,5.3368,0.0005,5.3368s-4.0466,1.6684-4.0466,6.9178 s3.4132,6.7328,3.4132,6.7328s0.0403,6.1949,3.859,9.5361c3.8187,3.3412,7.8262,3.3565,7.8262,3.3565s2.0841,4.4087,8.2153,4.4087 s8.2153-4.4087,8.2153-4.4087s4.1496-0.606,7.8262-3.3565c3.6766-2.7504,3.5755-9.5361,3.5755-9.5361s3.6966-1.4834,3.6966-6.7328 s-4.0466-6.9178-4.0466-6.9178s0.5766-2.7901,0.0005-5.3368s-3.1555-4.0953-3.1555-4.0953"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.243,29.4751c0,0-2.6163,2.7671-5.8436,2.7671"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30.3319,29.4751c0,0,2.6163,2.7671,5.8436,2.7671"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.7197,35.0673"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.0623,39.5238c0,2.8921-2.4819,5.2365-5.5436,5.2365"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.7628,39.5238c0,2.8921,2.4819,5.2365,5.5436,5.2365"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.8827,39.5238c0,2.8921-2.4819,5.2365-5.5436,5.2365"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.5831,39.5238c0,2.8921,2.4819,5.2365,5.5436,5.2365"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.9049,53.8616c-1.0434,1.389-3.1599,2.3393-5.6011,2.3393"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30.3414,53.6923c0.9945,1.4804,3.1823,2.5085,5.7214,2.5085"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30.2894,54.05c0,1.2407-0.7684,2.3588-1.9976,3.1439"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.9647,54.05c0,1.3528,0.9134,2.5597,2.3417,3.3483"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.4111,42.6717c0,2.3661-1.6613,4.3657-3.9422,5.0147"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25.0119,29.4392c0,3.0961-2.4819,5.6059-5.5436,5.6059"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52.1291,35.0451"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M57.6727,29.4392"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.3732,29.4392c0,3.0961,2.4819,5.6059,5.5436,5.6059"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.2512,42.6717c0,2.26,1.5157,4.1856,3.6392,4.9194"
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
      d: "M55.7803,11.2616C51.51,31.1894,38.4049,24.395,36.6244,20.8907C34.844,17.3864,36.5642,3.4328,55.7803,11.2616z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.5723,15.2944c-3.1311,1.2014-7.1389,3.1342-8.9149,5.6542"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.344,11.2616c4.2703,19.9278,17.3754,13.1334,19.1558,9.6291C37.2803,17.3864,35.5602,3.4328,16.344,11.2616z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.5521,15.2944c3.1311,1.2014,7.1389,3.1342,8.9149,5.6542"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19.9502,25.5384c0,0-2.5794,1.5485-3.1555,4.0953s0.0005,5.3368,0.0005,5.3368s-4.0466,1.6684-4.0466,6.9178 s3.4132,6.7328,3.4132,6.7328s0.0403,6.1949,3.859,9.5361c3.8187,3.3412,7.8262,3.3565,7.8262,3.3565s2.0841,4.4087,8.2153,4.4087 s8.2153-4.4087,8.2153-4.4087s4.1496-0.606,7.8262-3.3565c3.6766-2.7504,3.5755-9.5361,3.5755-9.5361s3.6966-1.4834,3.6966-6.7328 s-4.0466-6.9178-4.0466-6.9178s0.5766-2.7901,0.0005-5.3368s-3.1555-4.0953-3.1555-4.0953"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.243,29.4751c0,0-2.6163,2.7671-5.8436,2.7671"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30.3319,29.4751c0,0,2.6163,2.7671,5.8436,2.7671"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.7197,35.0673"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.0623,39.5238c0,2.8921-2.4819,5.2365-5.5436,5.2365"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.7628,39.5238c0,2.8921,2.4819,5.2365,5.5436,5.2365"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.8827,39.5238c0,2.8921-2.4819,5.2365-5.5436,5.2365"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.5831,39.5238c0,2.8921,2.4819,5.2365,5.5436,5.2365"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.9049,53.8616c-1.0434,1.389-3.1599,2.3393-5.6011,2.3393"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30.3414,53.6923c0.9945,1.4804,3.1823,2.5085,5.7214,2.5085"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30.2894,54.05c0,1.2407-0.7684,2.3588-1.9976,3.1439"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.9647,54.05c0,1.3528,0.9134,2.5597,2.3417,3.3483"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.4111,42.6717c0,2.3661-1.6613,4.3657-3.9422,5.0147"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25.0119,29.4392c0,3.0961-2.4819,5.6059-5.5436,5.6059"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52.1291,35.0451"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M57.6727,29.4392"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.3732,29.4392c0,3.0961,2.4819,5.6059,5.5436,5.6059"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.2512,42.6717c0,2.26,1.5157,4.1856,3.6392,4.9194"
    })));
  }
};

export default RaspberryPi;