import React from 'react';

const Coconut = ({
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
      fill: "#A57939",
      stroke: "#A57939",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52.7379,53.1335c-1.8989,1.899-4.0249,3.4471-6.2955,4.6442c-0.7534,0.3922-1.5274,0.7534-2.3118,1.0734 C41.0035,60.1101,37.67,60.75,34.3468,60.75c-6.6567,0-13.3134-2.5388-18.3911-7.6165 c-10.1553-10.1553-4.4894-20.9609,5.666-31.1162C31.777,11.8516,42.5826,6.196,52.7379,16.3513 c1.1972,1.1972,2.2499,2.4769,3.1684,3.8289C62.7591,30.2943,61.7064,44.1753,52.7379,53.1335z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "#D0CFCE",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M21.56,45.5c-2.7683,0.2917-4.5408,1.4543-6.0183,0.4583C8,40.875,31.625,12.2917,42.75,14.4583 C38.0321,15.9531,17.8324,28.3262,21.56,45.5z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "#FFFFFF",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.99,36.01c-4.03,4.03-8.34,7.03-12.04,8.63c-0.83,0.36-1.63,0.65-2.39,0.86C13.8003,29.5559,41.1619,12.7341,44.8,15.51 C48.4259,18.2767,44.08,27.92,35.99,36.01z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.6667,15.875c-1.771-1.771-5.1098-2.033-9.0417-0.4167"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M14.3712,40.6667c-0.6125,2.4641-0.3948,4.4784,0.8066,5.6797"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      stroke: "none",
      d: "M52.7379,53.1335C47.6602,58.2112,41.0035,60.75,34.3468,60.75 c-2.6447-0.0032,31.9394-14.8568,13.0069-48.3282C64.9749,22.9772,61.7064,44.1753,52.7379,53.1335z"
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
      d: "M45.6667,15.875c-1.771-1.771-5.1098-2.033-9.0417-0.4167"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M14.3712,40.6667c-0.6125,2.4641-0.3948,4.4784,0.8066,5.6797"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.6662,15.8579c1.1431,1.1431,1.4082,2.0153,0.8338,4.3921c-0.4408,1.824,0.875,7.5-2.7014,7.1824 c-1.7704-0.1572-2.4126,5.7146-3.6736,7.3176c-1.261,1.603-2.0464-0.3286-3.625,1.25c-1.2405,1.2405-3.6268,2.9832-5.25,4.125 c-0.5293,0.3723,0.0439,0.7503-0.125,1.375c-0.3324,1.2299-5.9607,3.9444-7.7968,4.7164C22.0241,46.7646,20.2273,45.8219,19.125,46 c-1.953,0.3156-2.9552,1.3383-3.9472,0.3464"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52.7379,53.1335c-1.8989,1.899-4.0249,3.4471-6.2955,4.6442c-0.7534,0.3922-1.5274,0.7534-2.3118,1.0734 C41.0035,60.1101,37.67,60.75,34.3468,60.75c-6.6567,0-13.3134-2.5388-18.3911-7.6165 c-10.1553-10.1553-4.4894-20.9609,5.666-31.1162C31.777,11.8516,42.5826,6.196,52.7379,16.3513 c1.1972,1.1972,2.2186,2.6717,3.1371,4.0237C62.7278,30.4891,61.7064,44.1753,52.7379,53.1335z"
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
      d: "M45.6667,15.875c-1.771-1.771-5.1098-2.033-9.0417-0.4167"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M14.3712,40.6667c-0.6125,2.4641-0.3948,4.4784,0.8066,5.6797"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.6662,15.8579c1.1431,1.1431,1.4082,2.0153,0.8338,4.3921c-0.4408,1.824,0.875,7.5-2.7014,7.1824 c-1.7704-0.1572-2.4126,5.7146-3.6736,7.3176c-1.261,1.603-2.0464-0.3286-3.625,1.25c-1.2405,1.2405-3.6268,2.9832-5.25,4.125 c-0.5293,0.3723,0.0439,0.7503-0.125,1.375c-0.3324,1.2299-5.9607,3.9444-7.7968,4.7164C22.0241,46.7646,20.2273,45.8219,19.125,46 c-1.953,0.3156-2.9552,1.3383-3.9472,0.3464"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52.7379,53.1335c-1.8989,1.899-4.0249,3.4471-6.2955,4.6442c-0.7534,0.3922-1.5274,0.7534-2.3118,1.0734 C41.0035,60.1101,37.67,60.75,34.3468,60.75c-6.6567,0-13.3134-2.5388-18.3911-7.6165 c-10.1553-10.1553-4.4894-20.9609,5.666-31.1162C31.777,11.8516,42.5826,6.196,52.7379,16.3513 c1.1972,1.1972,2.2186,2.6717,3.1371,4.0237C62.7278,30.4891,61.7064,44.1753,52.7379,53.1335z"
    })));
  }
};

export default Coconut;