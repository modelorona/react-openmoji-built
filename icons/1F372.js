import React from 'react';

const PotOfFood = ({
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
      d: "M7,36c0,16.0166,12.9834,29,29,29s29-12.9834,29-29H7z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M49,36c0,16.0156-4,29-13,29c16.0166,0,29-12.9844,29-29H49z"
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
      d: "M7,36c0,16.0166,12.9834,29,29,29s29-12.9834,29-29H7z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "7",
      x2: "14",
      y1: "25.1406",
      y2: "32.1406",
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
      d: "M29.043,7.8457c0.1015,1.125,0.5605,2.2236,1.4209,3.084c1.9521,1.9512,1.9521,5.1172,0,7.0703 c-1.9522,1.9531-1.9522,5.1191,0,7.0703c1.9521,1.9512,1.9521,5.1172,0,7.0703c1.9521-1.9531,1.9521-5.1191,0-7.0703 c-1.9522-1.9512-1.9522-5.1172,0-7.0703c1.9521-1.9531,1.9521-5.1191,0-7.0703C29.6035,10.0693,29.1445,8.9707,29.043,7.8457"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34.5703,7.0361C34.4697,8.4336,34.9316,9.8623,36,10.9297c1.9521,1.9512,1.9521,5.1172,0,7.0703 c-1.9521,1.9531-1.9521,5.1191,0,7.0703c1.9521,1.9512,1.9521,5.1172,0,7.0703c1.9521-1.9531,1.9521-5.1191,0-7.0703 c-1.9521-1.9512-1.9521-5.1172,0-7.0703c1.9521-1.9531,1.9521-5.1191,0-7.0703C34.9316,9.8623,34.4697,8.4336,34.5703,7.0361"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.0107,7.2832c-0.0302,1.3164,0.4483,2.6426,1.4532,3.6465c1.9521,1.9512,1.9521,5.1172,0,7.0703 c-1.9522,1.9531-1.9522,5.1191,0,7.0703c1.9521,1.9512,1.9521,5.1172,0,7.0703c1.9521-1.9531,1.9521-5.1191,0-7.0703 c-1.9522-1.9512-1.9522-5.1172,0-7.0703c1.9521-1.9531,1.9521-5.1191,0-7.0703C40.459,9.9258,39.9805,8.5996,40.0107,7.2832"
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
      d: "M7,36c0,16.0166,12.9834,29,29,29s29-12.9834,29-29H7z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "7",
      x2: "14",
      y1: "25.1406",
      y2: "32.1406",
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
      d: "M29.043,7.8457c0.1015,1.125,0.5605,2.2236,1.4209,3.084c1.9521,1.9512,1.9521,5.1172,0,7.0703 c-1.9522,1.9531-1.9522,5.1191,0,7.0703c1.9521,1.9512,1.9521,5.1172,0,7.0703c1.9521-1.9531,1.9521-5.1191,0-7.0703 c-1.9522-1.9512-1.9522-5.1172,0-7.0703c1.9521-1.9531,1.9521-5.1191,0-7.0703C29.6035,10.0693,29.1445,8.9707,29.043,7.8457"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34.5703,7.0361C34.4697,8.4336,34.9316,9.8623,36,10.9297c1.9521,1.9512,1.9521,5.1172,0,7.0703 c-1.9521,1.9531-1.9521,5.1191,0,7.0703c1.9521,1.9512,1.9521,5.1172,0,7.0703c1.9521-1.9531,1.9521-5.1191,0-7.0703 c-1.9521-1.9512-1.9521-5.1172,0-7.0703c1.9521-1.9531,1.9521-5.1191,0-7.0703C34.9316,9.8623,34.4697,8.4336,34.5703,7.0361"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.0107,7.2832c-0.0302,1.3164,0.4483,2.6426,1.4532,3.6465c1.9521,1.9512,1.9521,5.1172,0,7.0703 c-1.9522,1.9531-1.9522,5.1191,0,7.0703c1.9521,1.9512,1.9521,5.1172,0,7.0703c1.9521-1.9531,1.9521-5.1191,0-7.0703 c-1.9522-1.9512-1.9522-5.1172,0-7.0703c1.9521-1.9531,1.9521-5.1191,0-7.0703C40.459,9.9258,39.9805,8.5996,40.0107,7.2832"
    })));
  }
};

export default PotOfFood;