import React from 'react';

const CowFace = ({
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
      fill: "#FFFFFF",
      stroke: "none",
      d: "M15,10v3l6,4l-1,8l2,8l-1,8l2,8l3,2l1,7c0,0,0,4,3,5s7,2,7,2l6-2c0,0,4-4,4-6s0-5,0-5l3-7l1-13l1-6l-2-9 l4-1l3-4V9l-9,2l-5-2l-8-2l-6,2l-4,2L15,10z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#A57939",
      stroke: "none",
      d: "M67,16.4511l-5.5804,0.379l-7.3319,2.5057l-2.8846,1.2896c0,0-10.3654,1.4604-10.1987,7.2938 c0,0-0.4646,3.6003,1.951,6.1473c1.8803,1.9826,2.9889,4.6478,2.5192,7.3395c-0.3101,1.7768-1.2515,3.5306-3.4702,4.594l0,0l0,0 l3.5899,1.2603l1.5524,4.4368c0,0,2.1911-0.6947,3.5244-4.1114c0,0,0.9791-5.9167,0.9167-6.1042 c-0.0625-0.1875-0.375-6.0625-0.375-6.0625l-0.3125-2.0625l1.5043-1.1515l6.1201-1.5565l4.7972-3.3019l2.923-4.998L67,16.4511z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#A57939",
      stroke: "none",
      d: "M5.0488,16.4511l5.5804,0.379l7.3319,2.5057l2.8846,1.2896c0,0,10.3654,1.4604,10.1987,7.2938 c0,0,0.4645,3.6003-1.951,6.1473c-1.8803,1.9826-2.9889,4.6478-2.5192,7.3395c0.3101,1.7768,1.2515,3.5306,3.4702,4.594l0,0l0,0 l-3.5899,1.2603l-1.5524,4.4368c0,0-2.1911-0.6947-3.5244-4.1114c0,0-0.9792-5.9167-0.9167-6.1042s0.375-6.0625,0.375-6.0625 l0.3125-2.0625l-1.5043-1.1515l-6.1201-1.5565L8.727,27.3467l-2.923-4.998L5.0488,16.4511z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#F4AA41",
      stroke: "none",
      points: "27.921,45.3358 25.5643,52.4191 26.1616,57.6691 28.0487,57.8419 36.4227,57.1785 45.4213,58.1709 47.0116,56.6179 47.2811,50.9368 44.9172,46.3213 34.7544,46"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#000000",
      stroke: "none",
      d: "M26.1616,31.0595c0,0-3.0474-0.219-3.8284-1c-0.781-0.781-0.781-2.0474,0-2.8284c0.781-0.781,2.0474-0.781,2.8284,0 C25.9427,28.0121,26.1616,31.0595,26.1616,31.0595z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19.6191,26.2353l2.0377-9.248c0,0-7.6806-0.627-6.505-7.4454c0,0,9.9534,3.2917,12.7748,0.4702c0,0,6.2375-6.6642,16.1956-0.0429 C47.4448,12.1785,56.897,9.499,56.897,9.499c1.1756,6.8184-6.505,7.4454-6.505,7.4454l2.0377,9.248"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28.4825,46H44.209c0.272,0,0.5324,0.1138,0.7082,0.3213c0.8467,0.9992,3.1442,4.3471,2.0943,10.2966 c-0.1836,1.0404-1.1647,1.7418-2.2037,1.5503c-3.4759-0.6406-11.324-1.7893-16.7592-0.3263 c-1.1058,0.2976-2.2065-0.454-2.3432-1.5909c-0.302-2.5115-0.3157-6.6284,2.0103-9.8682C27.8908,46.139,28.1824,46,28.4825,46z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.8671,50.277c0,0-0.6865,2.855,3.1538,2.926"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.1276,61.4663c0,0,6.3482,7.9157,13.7936,0.3135"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M17.5177,20.1544c-3.0642-1.9576-7.3791-4.5873-12.4353-3.3426c0,0-1.4891,14.0288,15.3611,15.5179l1.2133,0.881 c0,0-2.2906,8.9177,1.2618,16.1018"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000000",
      stroke: "none",
      d: "M45.8871,31.0139c0,0,3.0474-0.219,3.8284-1c0.7811-0.781,0.7811-2.0474,0-2.8284c-0.781-0.781-2.0474-0.781-2.8284,0 C46.1061,27.9665,45.8871,31.0139,45.8871,31.0139z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.1817,50.2341c0,0,0.6865,2.855-3.1538,2.926"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M54.7743,19.9585c3.0474-1.888,7.2683-4.4017,12.1921-3.1896c0,0,1.4891,14.0288-15.3611,15.5179l-1.2133,0.881 c0,0,2.5382,7.9772-1.0141,15.1613"
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
      fill: "#000000",
      stroke: "none",
      d: "M26.1616,31.0595c0,0-3.0474-0.219-3.8284-1c-0.781-0.781-0.781-2.0474,0-2.8284c0.781-0.781,2.0474-0.781,2.8284,0 C25.9427,28.0121,26.1616,31.0595,26.1616,31.0595z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19.6191,26.2353l2.0377-9.248c0,0-7.6806-0.627-6.505-7.4454c0,0,9.9534,3.2917,12.7748,0.4702c0,0,6.2375-6.6642,16.1956-0.0429 C47.4448,12.1785,56.897,9.499,56.897,9.499c1.1756,6.8184-6.505,7.4454-6.505,7.4454l2.0377,9.248"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28.4825,46H44.209c0.272,0,0.5324,0.1138,0.7082,0.3213c0.8467,0.9992,3.1442,4.3471,2.0943,10.2966 c-0.1836,1.0404-1.1647,1.7418-2.2037,1.5503c-3.4759-0.6406-11.324-1.7893-16.7592-0.3263 c-1.1058,0.2976-2.2065-0.454-2.3432-1.5909c-0.302-2.5115-0.3157-6.6284,2.0103-9.8682C27.8908,46.139,28.1824,46,28.4825,46z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.8671,50.277c0,0-0.6865,2.855,3.1538,2.926"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.1276,61.4663c0,0,6.3482,7.9157,13.7936,0.3135"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M17.5177,20.1544c-3.0642-1.9576-7.3791-4.5873-12.4353-3.3426c0,0-1.4891,14.0288,15.3611,15.5179l1.2133,0.881 c0,0-2.2906,8.9177,1.2618,16.1018"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000000",
      stroke: "none",
      d: "M45.8871,31.0139c0,0,3.0474-0.219,3.8284-1c0.7811-0.781,0.7811-2.0474,0-2.8284c-0.781-0.781-2.0474-0.781-2.8284,0 C46.1061,27.9665,45.8871,31.0139,45.8871,31.0139z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.1817,50.2341c0,0,0.6865,2.855-3.1538,2.926"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M54.7743,19.9585c3.0474-1.888,7.2683-4.4017,12.1921-3.1896c0,0,1.4891,14.0288-15.3611,15.5179l-1.2133,0.881 c0,0,2.5382,7.9772-1.0141,15.1613"
    })));
  }
};

export default CowFace;